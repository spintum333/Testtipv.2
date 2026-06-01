// ── LANGUAGE PACK ──────────────────────────────────────────────────────────
const L = {
  th: {
    "main-title":"แบ่งทิป 4 รอบ","main-subtitle":"คำนวณตามชั่วโมงทำงานจริง ไร้ทศนิยม",
    "tab-staff":"👥 จำนวนคน","tab-cash":"💰 ยอดเงิน","tab-result":"📊 ผลการแบ่ง",
    "tab-history":"📋 ประวัติ","tab-theory":"❓ วิธีคิด",
    "title-staff-setup":"ตั้งค่าจำนวนคนเข้างาน",
    "shift-morning":"กะเช้า (07:30–16:30)","shift-midday":"กะกลางวัน (09:00–18:00)",
    "shift-night":"กะบ่าย (15:00–00:00)","shift-pt":"พาร์ทไทม์ (18:00–00:00)",
    "hrs-9":"9 ชม./คน","hrs-6":"6 ชม./คน",
    "btn-next-cash":"ถัดไป: กรอกยอดเงิน →",
    "title-cash":"บันทึกยอดในกล่องทิป",
    "label-1500":"1. ยอดในกล่อง เวลา 15:00 น. (บาท)",
    "hint-1500":"นับทั้งหมดในกล่องตอน 15:00 น. ก่อนกะบ่ายเริ่มงาน",
    "label-1630":"2. ยอดในกล่อง เวลา 16:30 น. (บาท)",
    "hint-1630":"นับก่อนจ่ายส่วนแบ่งให้กะเช้ากลับบ้าน",
    "label-1800":"3. ยอดในกล่อง เวลา 18:00 น. (บาท)",
    "hint-1800":"นับก่อนจ่ายส่วนแบ่งให้กะกลางวันกลับบ้าน",
    "label-0000":"4. ยอดในกล่อง เวลา 00:00 น. (บาท)",
    "hint-0000":"นับทั้งหมดก่อนปิดร้านตอนเที่ยงคืน",
    "btn-clear":"ล้างฟอร์ม","btn-see-result":"ดูผลการแบ่ง","btn-save":"บันทึกวันนี้",
    "title-payout":"เงินทิปรายคน","clean-badge":"ไม่มีเศษ",
    "card-m":"🌅 กะเช้า (เลิก 16:30)","card-mid":"☀️ กะกลางวัน (เลิก 18:00)",
    "card-n":"🌃 กะบ่าย (เลิก 00:00)","card-pt":"⏱️ พาร์ทไทม์ (เลิก 00:00)",
    "label-total":"รวมกะ:","label-total-earned":"รวมทิปทั้งวัน:","label-leftover":"เศษเงินในกล่อง:",
    "history-title":"ประวัติรายวัน","btn-clear-hist":"ล้างประวัติ",
    "th-date":"วันที่","th-total":"รวมทิป","th-m":"เช้า/คน","th-mid":"กลางวัน/คน","th-n":"บ่าย/คน","th-pt":"PT/คน","th-sp":"พิเศษ/คน",
    "history-empty":"ยังไม่มีประวัติ",
    "theory-title":"วิธีคิดเบื้องหลัง",
    "theory-desc":"หลักการคิดคือ “เงินทิปที่ลูกค้าใส่กล่องในช่วงเวลาไหน จะถูกนำมาหารเฉลี่ยให้พนักงานที่ทำงานในเวลานั้นจริง ๆ เท่านั้น” คนที่กลับบ้านไปแล้วจะไม่ได้รับส่วนแบ่งเงินทิปใหม่ และคนที่เพิ่งเข้างานก็ไม่มีสิทธิ์รับส่วนแบ่งเงินทิปเก่า เพื่อความยุติธรรมสูงสุดสำหรับทุกคน โดยแบ่งการคำนวณออกเป็น 4 ช่วงเวลาดังนี้:",
    "t-step-1":"ช่วงที่ 1: 07:30–15:00 น.","t-step-2":"ช่วงที่ 2: 15:00–16:30 น.",
    "t-step-3":"ช่วงที่ 3: 16:30–18:00 น.","t-step-4":"ช่วงที่ 4: 18:00–00:00 น.",
    "t-desc-1":"ทิปที่ได้ตั้งแต่เปิดร้านจนถึงบ่ายสาม (15:00 น.) จะหารเฉลี่ยให้เฉพาะกะเช้าและกะกลางวันตามชั่วโมงทำงานจริง",
    "t-desc-2":"ทิปใหม่ช่วง 15:00–16:30 น. จะหารแบ่งเท่ากัน 3 กะ: เช้า, กลางวัน และบ่ายที่เริ่มเข้ากะใหม่",
    "t-desc-3":"ทิปใหม่ช่วง 16:30–18:00 น. จะหารเฉพาะกะกลางวันและกะบ่าย เนื่องจากกะเช้ากลับบ้านแล้ว",
    "t-desc-4":"ทิปสะสมช่วงค่ำ 18:00–00:00 น. จะหารให้เฉพาะกะบ่ายและพาร์ทไทม์เท่านั้น ส่วนกะกลางวันกลับหมดแล้ว",
    "modal-title":"ยืนยันการลบประวัติ",
    "modal-desc":"ต้องการลบประวัติการบันทึกทั้งหมดหรือไม่? ไม่สามารถกู้คืนได้",
    "btn-cancel":"ยกเลิก","btn-confirm-delete":"ยืนยันลบ",
    "alert-title":"⚠️ ยอดเงินผิดปกติ!",
    "alert-1630-low":"ยอด 16:30 น. ต่ำกว่ายอด 15:00 น. — กล่องทิปมียอดลดลงผิดปกติ กรุณาตรวจสอบ",
    "alert-1630-deficit":"ยอดเงิน 16:30 น. ไม่พอกับเงินปันส่วนที่กะเช้าควรได้รับ (ขาดเงินสดในกล่อง)",
    "alert-1800-low":"ยอดเงิน 18:00 น. ไม่พอกับยอดที่ต้องจ่ายให้กะกลางวัน",
    "alert-0000-low":"ยอดเงินปิดร้านไม่พอแบ่งให้กะบ่ายและพาร์ทไทม์",
    "shift-sp":"กะพิเศษ",
    "pax":"ทำงาน: {n} คน",
    "toast-saved":"บันทึกยอดส่วนแบ่งทิปสำเร็จ!","toast-cleared":"ล้างฟอร์มสำเร็จ",
    "toast-hist-cleared":"ล้างประวัติสำเร็จ","toast-save-error":"กรุณากรอกยอดเงินก่อนบันทึก",
    "btn-export-csv":"⬇ Export CSV",
    "toast-exported":"ดาวน์โหลด CSV สำเร็จ!","toast-no-hist":"ยังไม่มีประวัติให้ Export"
  },
  en: {
    "main-title":"4-Stage Tip Splitter","main-subtitle":"Time-weighted, decimal-free",
    "tab-staff":"👥 Staff","tab-cash":"💰 Cash","tab-result":"📊 Results",
    "tab-history":"📋 History","tab-theory":"❓ How it works",
    "title-staff-setup":"Staff Headcount Setup",
    "shift-morning":"Morning (07:30–16:30)","shift-midday":"Midday (09:00–18:00)",
    "shift-night":"Afternoon (15:00–00:00)","shift-pt":"Part-Time (18:00–00:00)",
    "hrs-9":"9 hrs/person","hrs-6":"6 hrs/person",
    "btn-next-cash":"Next: Enter Cash →",
    "title-cash":"Tip Box Cash Entry",
    "label-1500":"1. Box total at 15:00 (Baht)",
    "hint-1500":"Count all cash in box at 15:00 exactly",
    "label-1630":"2. Box total at 16:30 (Baht)",
    "hint-1630":"Count before paying out Morning shift",
    "label-1800":"3. Box total at 18:00 (Baht)",
    "hint-1800":"Count before paying out Midday shift",
    "label-0000":"4. Box total at 00:00 (Baht)",
    "hint-0000":"Count before closing — final box sweep",
    "btn-clear":"Clear","btn-see-result":"See Results","btn-save":"Save Today",
    "title-payout":"Per-Person Payouts","clean-badge":"No decimals",
    "card-m":"🌅 Morning (ends 16:30)","card-mid":"☀️ Midday (ends 18:00)",
    "card-n":"🌃 Afternoon (ends 00:00)","card-pt":"⏱️ Part-Time (ends 00:00)",
    "label-total":"Shift total:","label-total-earned":"Total tips today:","label-leftover":"Change left in box:",
    "history-title":"Daily Tip Log","btn-clear-hist":"Clear History",
    "th-date":"Date","th-total":"Total","th-m":"Morning","th-mid":"Midday","th-n":"Afternoon","th-pt":"PT","th-sp":"Special/person",
    "history-empty":"No records yet",
    "theory-title":"How it works",
    "theory-desc":"The core concept is: “Tips collected in each period are shared ONLY among staff working during that specific time.” Staff who went home early won't share new tips, and late-comers won't share older tips, ensuring maximum fairness. The day is divided into 4 overlapping stages:",
    "t-step-1":"Stage 1: 07:30–15:00","t-step-2":"Stage 2: 15:00–16:30",
    "t-step-3":"Stage 3: 16:30–18:00","t-step-4":"Stage 4: 18:00–00:00",
    "t-desc-1":"Tips earned from opening until 15:00 are split ONLY between Morning and Midday by actual hours worked.",
    "t-desc-2":"New tips added from 15:00 to 16:30 are split among Morning, Midday, and Afternoon who just clocked in.",
    "t-desc-3":"New tips added from 16:30 to 18:00 are split ONLY between Midday and Afternoon (Morning has already gone home).",
    "t-desc-4":"Evening tips from 18:00 until closing (00:00) are split ONLY between Afternoon and Part-Time (all other shifts have gone home).",
    "modal-title":"Confirm Clear History",
    "modal-desc":"Delete all saved tip records? This cannot be undone.",
    "btn-cancel":"Cancel","btn-confirm-delete":"Delete All",
    "alert-title":"⚠️ Cash Discrepancy!",
    "alert-1630-low":"16:30 box total is LOWER than 15:00 — unexpected decrease, please recount",
    "alert-1630-deficit":"16:30 cash insufficient to cover Morning shift payout (box deficit)",
    "alert-1800-low":"18:00 cash too low to cover Midday shift payout",
    "alert-0000-low":"Closing cash cannot cover Afternoon and Part-Time payouts",
    "shift-sp":"Special Shift",
    "pax":"Working: {n} pax",
    "toast-saved":"Saved today's tip record!","toast-cleared":"Form cleared",
    "toast-hist-cleared":"History cleared","toast-save-error":"Please enter cash amounts first",
    "btn-export-csv":"⬇ Export CSV",
    "toast-exported":"CSV downloaded!","toast-no-hist":"No history to export yet"
  }
};

// ── STATE ──────────────────────────────────────────────────────────────────
let lang = 'th';
let locks = { m: false, mid: false, n: false };

// ── SPECIAL SHIFT HELPERS ──────────────────────────────────────────────────
function getSpHours() {
  const startEl = document.getElementById('sp-start');
  const endEl   = document.getElementById('sp-end');
  if (!startEl || !endEl) return 0;
  const [sh, sm] = startEl.value.split(':').map(Number);
  const [eh, em] = endEl.value.split(':').map(Number);
  let start = sh * 60 + sm;
  let end   = (eh === 0 && em === 0) ? 1440 : eh * 60 + em;
  if (end <= start) end += 1440; // overnight
  return Math.max(0, (end - start) / 60);
}
function updateSpHrsLabel() {
  const hrs = getSpHours();
  const el = document.getElementById('sp-hrs');
  if (el) el.textContent = `${hrs % 1 === 0 ? hrs : hrs.toFixed(1)} ชม./คน`;
}

// ── LANG ───────────────────────────────────────────────────────────────────
function setLang(l) {
  lang = l;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (L[l][k] !== undefined) el.textContent = L[l][k];
  });
  document.getElementById('lang-th').classList.toggle('active', l === 'th');
  document.getElementById('lang-en').classList.toggle('active', l === 'en');
  recalc();
  renderHistory();
}

// ── DARK MODE ──────────────────────────────────────────────────────────────
function toggleDark() {
  const isDark = document.documentElement.classList.toggle('dark');
  document.getElementById('dark-icon').className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}
function loadTheme() {
  const t = localStorage.getItem('theme');
  const preferDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (t === 'dark' || (!t && preferDark)) {
    document.documentElement.classList.add('dark');
    document.getElementById('dark-icon').className = 'fa-solid fa-sun';
  }
}

// ── TABS ───────────────────────────────────────────────────────────────────
function showTab(id) {
  document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.getElementById('btn-' + id).classList.add('active');
  window.scrollTo(0, 0);
}

// ── STAFF ──────────────────────────────────────────────────────────────────
function getStaff(id) { return Math.max(0, parseInt(document.getElementById('staff-'+id).value) || 0); }

function changeCount(id, delta) {
  const el = document.getElementById('staff-' + id);
  if (el.disabled) return;
  el.value = Math.max(0, (parseInt(el.value) || 0) + delta);
  onStaffInput();
}

function onStaffInput() {
  updateSpHrsLabel();
  saveStaff();
  recalc();
}

function toggleLock(shift) {
  locks[shift] = !locks[shift];
  const locked = locks[shift];
  const icon = document.getElementById('lock-icon-' + shift);
  const btn = document.getElementById('lock-btn-' + shift);
  icon.className = locked ? 'fa-solid fa-lock' : 'fa-solid fa-lock-open';
  btn.classList.toggle('locked', locked);

  const maps = {
    m:   ['staff-m',   'btn-sub-m',   'btn-add-m',   'input-1500', 'input-1630'],
    mid: ['staff-mid', 'btn-sub-mid', 'btn-add-mid', 'input-1800'],
    n:   ['staff-n',   'btn-sub-n',   'btn-add-n',   'staff-pt', 'btn-sub-pt', 'btn-add-pt', 'input-0000']
  };
  maps[shift].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.disabled = locked;
    if (el.tagName === 'BUTTON') el.style.opacity = locked ? '0.4' : '';
    if (el.tagName === 'INPUT')  el.style.opacity = locked ? '0.5' : '';
  });
}

function saveStaff() {
  localStorage.setItem('tip_staff', JSON.stringify({
    m: getStaff('m'), mid: getStaff('mid'), n: getStaff('n'), pt: getStaff('pt'),
    sp: getStaff('sp'),
    spStart: document.getElementById('sp-start')?.value || '11:00',
    spEnd:   document.getElementById('sp-end')?.value   || '00:00'
  }));
}
function loadStaff() {
  try {
    const s = JSON.parse(localStorage.getItem('tip_staff'));
    if (!s) return;
    if (s.m   !== undefined) document.getElementById('staff-m').value   = s.m;
    if (s.mid !== undefined) document.getElementById('staff-mid').value = s.mid;
    if (s.n   !== undefined) document.getElementById('staff-n').value   = s.n;
    if (s.pt  !== undefined) document.getElementById('staff-pt').value  = s.pt;
    if (s.sp  !== undefined) document.getElementById('staff-sp').value  = s.sp;
    if (s.spStart) document.getElementById('sp-start').value = s.spStart;
    if (s.spEnd)   document.getElementById('sp-end').value   = s.spEnd;
  } catch(e) {}
  updateSpHrsLabel();
}

// ── CASH INPUT HELPERS ─────────────────────────────────────────────────────
function getCash(id) {
  const val = document.getElementById('input-' + id).value;
  return val === '' ? null : Math.max(0, parseFloat(val) || 0);
}
function hasCash(id) { return document.getElementById('input-' + id).value.trim() !== ''; }

// ── CORE CALCULATION ───────────────────────────────────────────────────────
function recalc() {
  const sM = getStaff('m'), sMid = getStaff('mid'), sN = getStaff('n'), sPT = getStaff('pt');
  const sSP = getStaff('sp');

  // Show/hide special shift result card
  const spCard = document.getElementById('res-card-sp');
  if (spCard) spCard.style.display = sSP > 0 ? 'flex' : 'none';

  // Update special shift card label with time range
  const spStartEl = document.getElementById('sp-start');
  const spEndEl   = document.getElementById('sp-end');
  const spLabel   = document.getElementById('sp-card-label');
  if (spLabel && spStartEl && spEndEl) {
    spLabel.textContent = `${spStartEl.value}–${spEndEl.value === '00:00' ? '00:00' : spEndEl.value}`;
  }

  // Update pax labels
  const paxTpl = L[lang]['pax'];
  document.getElementById('cnt-m').textContent   = paxTpl.replace('{n}', sM);
  document.getElementById('cnt-mid').textContent = paxTpl.replace('{n}', sMid);
  document.getElementById('cnt-n').textContent   = paxTpl.replace('{n}', sN);
  document.getElementById('cnt-pt').textContent  = paxTpl.replace('{n}', sPT);
  const cntSP = document.getElementById('cnt-sp');
  if (cntSP) cntSP.textContent = paxTpl.replace('{n}', sSP);

  // Update theory descriptions
  document.getElementById('explain-1').textContent = lang === 'th'
    ? `ทิปที่ได้ตั้งแต่เปิดร้านจนถึงบ่ายสาม (15:00 น.) จะหารเฉลี่ยให้เฉพาะกะเช้า (${sM} คน) และกะกลางวัน (${sMid} คน) ตามชั่วโมงทำงานจริง`
    : `Tips earned from opening until 15:00 are split ONLY between Morning (${sM} pax) & Midday (${sMid} pax) by actual hours worked.`;
  document.getElementById('explain-2').textContent = lang === 'th'
    ? `ทิปใหม่ช่วง 15:00–16:30 น. จะหารแบ่งเท่ากัน 3 กะ: เช้า (${sM} คน), กลางวัน (${sMid} คน) และบ่ายที่เริ่มเข้ากะใหม่ (${sN} คน)`
    : `New tips added from 15:00 to 16:30 are split among Morning (${sM}), Midday (${sMid}), and Afternoon (${sN}) who just clocked in.`;
  document.getElementById('explain-3').textContent = lang === 'th'
    ? `ทิปใหม่ช่วง 16:30–18:00 น. จะหารเฉพาะกะกลางวัน (${sMid} คน) และกะบ่าย (${sN} คน) เนื่องจากกะเช้ากลับบ้านแล้ว`
    : `New tips added from 16:30 to 18:00 are split ONLY between Midday (${sMid}) and Afternoon (${sN}) (Morning has already gone home).`;
  document.getElementById('explain-4').textContent = lang === 'th'
    ? `ทิปสะสมช่วงค่ำ 18:00–00:00 น. จะหารให้เฉพาะกะบ่าย (${sN} คน) และพาร์ทไทม์ (${sPT} คน) เท่านั้น ส่วนกะกลางวันกลับหมดแล้ว`
    : `Evening tips from 18:00 until closing (00:00) are split ONLY between Afternoon (${sN}) and Part-Time (${sPT}) (all other shifts have gone home).`;

  hideAlert();

  const result = calculateTips({
    staff: { m: sM, mid: sMid, n: sN, pt: sPT, sp: sSP },
    cash: {
      '1500': getCash('1500'),
      '1630': getCash('1630'),
      '1800': getCash('1800'),
      '0000': getCash('0000')
    },
    hasCash: {
      '1500': hasCash('1500'),
      '1630': hasCash('1630'),
      '1800': hasCash('1800'),
      '0000': hasCash('0000')
    },
    special: {
      start: spStartEl?.value || '11:00',
      end: spEndEl?.value || '00:00'
    }
  });

  result.alerts.forEach(key => showAlert(L[lang]['alert-title'], L[lang][key]));

  const fmt = n => '฿' + n.toLocaleString('th-TH');
  document.getElementById('res-m').textContent       = fmt(result.payouts.m.per);
  document.getElementById('res-total-m').textContent = fmt(result.payouts.m.total);
  document.getElementById('res-mid').textContent     = fmt(result.payouts.mid.per);
  document.getElementById('res-total-mid').textContent = fmt(result.payouts.mid.total);
  document.getElementById('res-n').textContent       = fmt(result.payouts.n.per);
  document.getElementById('res-total-n').textContent = fmt(result.payouts.n.total);
  document.getElementById('res-pt').textContent      = fmt(result.payouts.pt.per);
  document.getElementById('res-total-pt').textContent= fmt(result.payouts.pt.total);

  const spResEl = document.getElementById('res-sp');
  if (spResEl) spResEl.textContent = fmt(result.payouts.sp.per);
  const spTotEl = document.getElementById('res-total-sp');
  if (spTotEl) spTotEl.textContent = fmt(result.payouts.sp.total);

  document.getElementById('stat-total').textContent    = fmt(result.totalEarned);
  document.getElementById('stat-leftover').textContent = fmt(result.leftover);
}

// ── ALERT HELPERS ──────────────────────────────────────────────────────────
function showAlert(title, desc) {
  const box = document.getElementById('alert-box');
  document.getElementById('alert-title').textContent = title;
  document.getElementById('alert-desc').textContent  = desc;
  box.classList.add('show');
}
function hideAlert() {
  document.getElementById('alert-box').classList.remove('show');
}

// ── CLEAR CASH ─────────────────────────────────────────────────────────────
function clearCash() {
  ['1500','1630','1800','0000'].forEach(id => {
    document.getElementById('input-' + id).value = '';
  });
  // Unlock all locks
  ['m','mid','n'].forEach(shift => {
    if (locks[shift]) toggleLock(shift);
  });
  recalc();
  toast(L[lang]['toast-cleared']);
}

// ── SAVE TODAY ─────────────────────────────────────────────────────────────
function saveToday() {
  const total = parseInt(document.getElementById('stat-total').textContent.replace(/[^\d]/g,'')) || 0;
  if (!total) { toast(L[lang]['toast-save-error']); return; }

  const rec = {
    date: new Date().toLocaleDateString(lang === 'th' ? 'th-TH' : 'en-GB', {day:'2-digit',month:'2-digit',year:'2-digit'}),
    total,
    m:   document.getElementById('res-m').textContent,
    mid: document.getElementById('res-mid').textContent,
    n:   document.getElementById('res-n').textContent,
    pt:  document.getElementById('res-pt').textContent,
    sp:  document.getElementById('res-sp').textContent
  };
  const recs = JSON.parse(localStorage.getItem('tip_history') || '[]');
  recs.unshift(rec);
  localStorage.setItem('tip_history', JSON.stringify(recs));
  renderHistory();
  toast(L[lang]['toast-saved']);
}

// ── HISTORY ────────────────────────────────────────────────────────────────
function renderHistory() {
  const recs = JSON.parse(localStorage.getItem('tip_history') || '[]');
  const tbody = document.getElementById('hist-body');
  if (!recs.length) {
    tbody.innerHTML = `<tr><td colspan="7" class="history-empty">${L[lang]['history-empty']}</td></tr>`;
    return;
  }
  tbody.innerHTML = recs.map(r => {
    const spPayout = r.sp !== undefined ? r.sp : '-';
    return `
    <tr>
      <td style="color:var(--text);font-weight:600">${r.date}</td>
      <td style="color:var(--indigo);font-weight:700">฿${r.total.toLocaleString('th-TH')}</td>
      <td style="color:var(--emerald);font-weight:600">${r.m}</td>
      <td style="color:var(--blue);font-weight:600">${r.mid}</td>
      <td style="color:var(--purple);font-weight:600">${r.n}</td>
      <td style="color:var(--orange);font-weight:600">${r.pt}</td>
      <td style="color:var(--indigo);font-weight:600">${spPayout}</td>
    </tr>`;
  }).join('');
}

function confirmClear() { document.getElementById('modal').classList.add('show'); }
function closeModal()   { document.getElementById('modal').classList.remove('show'); }
function doClearHistory() {
  localStorage.removeItem('tip_history');
  renderHistory(); closeModal();
  toast(L[lang]['toast-hist-cleared']);
}

// ── EXPORT CSV ─────────────────────────────────────────────────────────────
function exportCSV() {
  const recs = JSON.parse(localStorage.getItem('tip_history') || '[]');
  if (!recs.length) { toast(L[lang]['toast-no-hist']); return; }

  const isEn = lang === 'en';
  const headers = isEn
    ? ['Date','Total Tips (฿)','Morning/person (฿)','Midday/person (฿)','Afternoon/person (฿)','Part-Time/person (฿)','Special/person (฿)']
    : ['วันที่','รวมทิป (฿)','กะเช้า/คน (฿)','กะกลางวัน/คน (฿)','กะบ่าย/คน (฿)','พาร์ทไทม์/คน (฿)','กะพิเศษ/คน (฿)'];

  // Strip ฿ and comma from stored values for clean numbers in CSV
  const clean = v => v ? String(v).replace(/[฿,]/g, '') : '';

  const rows = recs.map(r => [
    r.date,
    r.total,
    clean(r.m),
    clean(r.mid),
    clean(r.n),
    clean(r.pt),
    clean(r.sp || '-')
  ]);

  const csvContent = [headers, ...rows]
    .map(row => row.map(cell => `"${cell}"`).join(','))
    .join('\r\n');

  // BOM for Excel to read Thai correctly
  const bom = '\uFEFF';
  const blob = new Blob([bom + csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);

  const today = new Date().toISOString().slice(0, 10);
  const filename = `tip-splitter-${today}.csv`;

  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  toast(L[lang]['toast-exported']);
}

// ── TOAST ──────────────────────────────────────────────────────────────────
let toastTimer;
function toast(msg) {
  const el = document.getElementById('toast');
  document.getElementById('toast-text').textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2800);
}

// ── INIT ───────────────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  loadTheme();
  loadStaff();
  recalc();
  renderHistory();
});
