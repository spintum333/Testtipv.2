(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.calculateTips = factory();
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  const CHECKPOINTS = {
    open: 450,
    '1500': 900,
    '1630': 990,
    '1800': 1080,
    '0000': 1440
  };

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

  function normalizeCash(value) {
    return Math.max(0, Number(value) || 0);
  }

  function alertForPayoutTime(time) {
    if (time <= 990) return 'alert-1630-deficit';
    if (time <= 1080) return 'alert-1800-low';
    return 'alert-0000-low';
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
    const spPayTime = Math.min(spEnd, 1440);

    function spOverlap(from, to) {
      return Math.max(0, Math.min(to, spEnd) - Math.max(from, spStart)) / 60;
    }

    const cashPoints = [
      { key: 'open', time: CHECKPOINTS.open, cash: 0, hasCash: true },
      { key: '1500', time: CHECKPOINTS['1500'], cash: normalizeCash(cash['1500']), hasCash: Boolean(hasCash['1500']) },
      { key: '1630', time: CHECKPOINTS['1630'], cash: normalizeCash(cash['1630']), hasCash: Boolean(hasCash['1630']) },
      { key: '1800', time: CHECKPOINTS['1800'], cash: normalizeCash(cash['1800']), hasCash: Boolean(hasCash['1800']) },
      { key: '0000', time: CHECKPOINTS['0000'], cash: normalizeCash(cash['0000']), hasCash: Boolean(hasCash['0000']) }
    ];

    const spUsesStandardPoint = Object.values(CHECKPOINTS).includes(spPayTime);
    if (staff.sp > 0 && hasCash.spEnd && !spUsesStandardPoint) {
      cashPoints.push({
        key: 'spEnd',
        time: spPayTime,
        cash: normalizeCash(cash.spEnd),
        hasCash: true
      });
    }

    const enteredPoints = cashPoints
      .filter(point => point.hasCash)
      .sort((a, b) => a.time - b.time);

    if (hasCash['1630'] && hasCash['1500'] && normalizeCash(cash['1630']) < normalizeCash(cash['1500'])) {
      alerts.push('alert-1630-low');
    }

    const purses = { m: 0, mid: 0, n: 0, pt: 0, sp: 0 };
    const paid = { m: false, mid: false, n: false, pt: false, sp: false };
    const payouts = createEmptyPayouts();
    const boxAfter = { open: 0 };

    function payDue(currentBoxCash, tEnd) {
      const due = [];
      if (!paid.m && 990 <= tEnd) due.push('m');
      if (!paid.mid && 1080 <= tEnd) due.push('mid');
      if (!paid.n && 1440 <= tEnd) due.push('n');
      if (!paid.pt && 1440 <= tEnd) due.push('pt');
      if (!paid.sp && staff.sp > 0 && spPayTime <= tEnd) due.push('sp');

      if (!due.length) return currentBoxCash;

      const per = {};
      const total = {};
      let payoutTotal = 0;
      due.forEach(shift => {
        per[shift] = staff[shift] > 0 ? Math.floor(purses[shift]) : 0;
        total[shift] = per[shift] * staff[shift];
        payoutTotal += total[shift];
      });

      if (payoutTotal > currentBoxCash) {
        alerts.push(alertForPayoutTime(tEnd));
        const totalStaff = due.reduce((sum, shift) => sum + staff[shift], 0);
        const perAll = totalStaff > 0 ? Math.floor(currentBoxCash / totalStaff) : 0;
        payoutTotal = 0;
        due.forEach(shift => {
          per[shift] = staff[shift] > 0 ? perAll : 0;
          total[shift] = per[shift] * staff[shift];
          payoutTotal += total[shift];
        });
      }

      due.forEach(shift => {
        payouts[shift].per = per[shift];
        payouts[shift].total = total[shift];
        paid[shift] = true;
      });

      return Math.max(0, currentBoxCash - payoutTotal);
    }

    for (let k = 0; k < enteredPoints.length - 1; k++) {
      const startPoint = enteredPoints[k];
      const endPoint = enteredPoints[k + 1];
      const tStart = startPoint.time;
      const tEnd = endPoint.time;
      const cashStartAfter = boxAfter[startPoint.key] || 0;
      const cashEndBefore = endPoint.cash;
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

      boxAfter[endPoint.key] = payDue(cashEndBefore, tEnd);
    }

    const lastEnteredPoint = enteredPoints[enteredPoints.length - 1];
    const leftover = boxAfter[lastEnteredPoint.key] || 0;
    const totalEarned = payouts.m.total + payouts.mid.total + payouts.n.total + payouts.pt.total + payouts.sp.total + leftover;

    return { payouts, leftover, totalEarned, alerts };
  }

  return calculateTips;
});
