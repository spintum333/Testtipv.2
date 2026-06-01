(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.calculateTips = factory();
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  const CHECKPOINTS = [450, 900, 990, 1080, 1440];

  function parseTime(value, fallback) {
    const source = value || fallback;
    const [hours, minutes] = source.split(':').map(Number);
    if (!Number.isFinite(hours) || !Number.isFinite(minutes)) return 0;
    if (hours === 0 && minutes === 0) return 1440;
    return hours * 60 + minutes;
  }

  function overlap(shiftStart, shiftEnd, from, to) {
    return Math.max(0, Math.min(to, shiftEnd) - Math.max(from, shiftStart)) / 60;
  }

  function createEmptyPayouts() {
    return {
      m: { per: 0, total: 0 },
      mid: { per: 0, total: 0 },
      n: { per: 0, total: 0 },
      pt: { per: 0, total: 0 },
      sp: { per: 0, total: 0 }
    };
  }

  function calculateTips(input = {}) {
    const staff = {
      m: Math.max(0, Number(input.staff?.m) || 0),
      mid: Math.max(0, Number(input.staff?.mid) || 0),
      n: Math.max(0, Number(input.staff?.n) || 0),
      pt: Math.max(0, Number(input.staff?.pt) || 0),
      sp: Math.max(0, Number(input.staff?.sp) || 0)
    };
    const cash = input.cash || {};
    const hasCash = input.hasCash || {};
    const alerts = [];

    const spStart = parseTime(input.special?.start, '11:00');
    let spEnd = parseTime(input.special?.end, '00:00');
    if (spEnd <= spStart) spEnd += 1440;

    function spOverlap(from, to) {
      return Math.max(0, Math.min(to, spEnd) - Math.max(from, spStart)) / 60;
    }

    const boxCash = [
      0,
      Math.max(0, Number(cash['1500']) || 0),
      Math.max(0, Number(cash['1630']) || 0),
      Math.max(0, Number(cash['1800']) || 0),
      Math.max(0, Number(cash['0000']) || 0)
    ];
    const boxHas = [
      true,
      Boolean(hasCash['1500']),
      Boolean(hasCash['1630']),
      Boolean(hasCash['1800']),
      Boolean(hasCash['0000'])
    ];

    const enteredIndices = [];
    for (let i = 0; i < boxHas.length; i++) {
      if (boxHas[i]) enteredIndices.push(i);
    }

    if (boxHas[2] && boxHas[1] && boxCash[2] < boxCash[1]) {
      alerts.push('alert-1630-low');
    }

    const purses = { m: 0, mid: 0, n: 0, pt: 0, sp: 0 };
    const paid = { m: false, mid: false, n: false, pt: false, sp: false };
    const payouts = createEmptyPayouts();
    const boxAfter = [0, 0, 0, 0, 0];

    for (let k = 0; k < enteredIndices.length - 1; k++) {
      const startIdx = enteredIndices[k];
      const endIdx = enteredIndices[k + 1];
      const tStart = CHECKPOINTS[startIdx];
      const tEnd = CHECKPOINTS[endIdx];
      const cashStartAfter = boxAfter[startIdx];
      const cashEndBefore = boxCash[endIdx];
      const earned = Math.max(0, cashEndBefore - cashStartAfter);

      const overlapM = overlap(450, 990, tStart, tEnd);
      const overlapMid = overlap(540, 1080, tStart, tEnd);
      const overlapN = overlap(900, 1440, tStart, tEnd);
      const overlapPT = overlap(1080, 1440, tStart, tEnd);
      const overlapSP = spOverlap(tStart, tEnd);
      const totalHours = staff.m * overlapM + staff.mid * overlapMid + staff.n * overlapN + staff.pt * overlapPT + staff.sp * overlapSP;

      if (earned > 0 && totalHours > 0) {
        const rate = earned / totalHours;
        purses.m += overlapM * rate;
        purses.mid += overlapMid * rate;
        purses.n += overlapN * rate;
        purses.pt += overlapPT * rate;
        purses.sp += overlapSP * rate;
      }

      let currentBoxCash = cashEndBefore;

      if (!paid.m && 990 <= tEnd) {
        const raw = staff.m > 0 ? Math.floor(purses.m) : 0;
        let total = raw * staff.m;
        let per = raw;
        if (total > currentBoxCash) {
          alerts.push('alert-1630-deficit');
          total = currentBoxCash;
          per = staff.m > 0 ? Math.floor(total / staff.m) : 0;
          total = per * staff.m;
        }
        payouts.m.per = per;
        payouts.m.total = total;
        currentBoxCash = Math.max(0, currentBoxCash - total);
        paid.m = true;
      }

      if (!paid.mid && 1080 <= tEnd) {
        const raw = staff.mid > 0 ? Math.floor(purses.mid) : 0;
        let total = raw * staff.mid;
        let per = raw;
        if (total > currentBoxCash) {
          alerts.push('alert-1800-low');
          total = currentBoxCash;
          per = staff.mid > 0 ? Math.floor(total / staff.mid) : 0;
          total = per * staff.mid;
        }
        payouts.mid.per = per;
        payouts.mid.total = total;
        currentBoxCash = Math.max(0, currentBoxCash - total);
        paid.mid = true;
      }

      if (1440 <= tEnd) {
        const needsN = !paid.n;
        const needsPT = !paid.pt;
        const needsSP = !paid.sp;

        if (needsN || needsPT || needsSP) {
          const rawN = needsN && staff.n > 0 ? Math.floor(purses.n) : 0;
          const rawPT = needsPT && staff.pt > 0 ? Math.floor(purses.pt) : 0;
          const rawSP = needsSP && staff.sp > 0 ? Math.floor(purses.sp) : 0;

          let totalN = rawN * staff.n;
          let totalPT = rawPT * staff.pt;
          let totalSP = rawSP * staff.sp;
          let perN = rawN;
          let perPT = rawPT;
          let perSP = rawSP;

          if (totalN + totalPT + totalSP > currentBoxCash) {
            alerts.push('alert-0000-low');
            const totalStaff = (needsN ? staff.n : 0) + (needsPT ? staff.pt : 0) + (needsSP ? staff.sp : 0);
            const perAll = totalStaff > 0 ? Math.floor(currentBoxCash / totalStaff) : 0;
            if (needsN && staff.n > 0) { perN = perAll; totalN = perN * staff.n; }
            if (needsPT && staff.pt > 0) { perPT = perAll; totalPT = perPT * staff.pt; }
            if (needsSP && staff.sp > 0) { perSP = perAll; totalSP = perSP * staff.sp; }
          }

          if (needsN) {
            payouts.n.per = perN;
            payouts.n.total = totalN;
            paid.n = true;
            currentBoxCash = Math.max(0, currentBoxCash - totalN);
          }
          if (needsPT) {
            payouts.pt.per = perPT;
            payouts.pt.total = totalPT;
            paid.pt = true;
            currentBoxCash = Math.max(0, currentBoxCash - totalPT);
          }
          if (needsSP) {
            payouts.sp.per = perSP;
            payouts.sp.total = totalSP;
            paid.sp = true;
            currentBoxCash = Math.max(0, currentBoxCash - totalSP);
          }
        }
      }

      boxAfter[endIdx] = currentBoxCash;
    }

    const lastEnteredIdx = enteredIndices[enteredIndices.length - 1];
    const leftover = boxAfter[lastEnteredIdx];
    const totalEarned = payouts.m.total + payouts.mid.total + payouts.n.total + payouts.pt.total + payouts.sp.total + leftover;

    return { payouts, leftover, totalEarned, alerts };
  }

  return calculateTips;
});
