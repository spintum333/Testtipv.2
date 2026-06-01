const assert = require('node:assert/strict');
const calculateTips = require('../calculator.js');

function baseInput(overrides = {}) {
  return {
    staff: { m: 4, mid: 2, n: 3, pt: 0, sp: 0, ...overrides.staff },
    cash: { '1500': 1000, '1630': 1400, '1800': 1900, '0000': 3200, ...overrides.cash },
    hasCash: { '1500': true, '1630': true, '1800': true, '0000': true, ...overrides.hasCash },
    special: { start: '11:00', end: '00:00', ...overrides.special }
  };
}

function test(name, fn) {
  try {
    fn();
    console.log(`ok - ${name}`);
  } catch (error) {
    console.error(`not ok - ${name}`);
    throw error;
  }
}

test('calculates the known full-day baseline', () => {
  const result = calculateTips(baseInput());
  assert.deepEqual(result.payouts.m, { per: 223, total: 892 });
  assert.deepEqual(result.payouts.mid, { per: 465, total: 930 });
  assert.deepEqual(result.payouts.n, { per: 1066, total: 3198 });
  assert.deepEqual(result.payouts.pt, { per: 0, total: 0 });
  assert.equal(result.leftover, 2);
  assert.equal(result.totalEarned, 5022);
  assert.deepEqual(result.alerts, []);
});

test('flags a 16:30 cash drop without producing negative earnings', () => {
  const result = calculateTips(baseInput({
    cash: { '1500': 1000, '1630': 800 }
  }));
  assert.ok(result.alerts.includes('alert-1630-low'));
  assert.ok(result.totalEarned >= 0);
});

test('includes special shift in the final payout', () => {
  const result = calculateTips(baseInput({
    staff: { sp: 1 },
    special: { start: '18:00', end: '00:00' }
  }));
  assert.equal(result.payouts.sp.per, 557);
  assert.equal(result.payouts.sp.total, 557);
  assert.equal(result.payouts.n.per, 880);
  assert.equal(result.leftover, 3);
});

test('supports partial cash entry without paying unreached shifts', () => {
  const result = calculateTips(baseInput({
    hasCash: { '1800': false, '0000': false },
    cash: { '1800': 0, '0000': 0 }
  }));
  assert.equal(result.payouts.m.per, 223);
  assert.equal(result.payouts.mid.per, 0);
  assert.equal(result.payouts.n.per, 0);
  assert.equal(result.leftover, 508);
});

test('handles all staff counts at zero without NaN payouts', () => {
  const result = calculateTips(baseInput({
    staff: { m: 0, mid: 0, n: 0, pt: 0, sp: 0 }
  }));
  for (const payout of Object.values(result.payouts)) {
    assert.equal(payout.per, 0);
    assert.equal(payout.total, 0);
  }
  assert.equal(result.totalEarned, 3200);
  assert.equal(result.leftover, 3200);
  assert.deepEqual(result.alerts, []);
});

test('handles part-time staff in the closing interval', () => {
  const result = calculateTips(baseInput({
    staff: { pt: 2 }
  }));
  assert.equal(result.payouts.pt.per, 446);
  assert.equal(result.payouts.pt.total, 892);
  assert.equal(result.payouts.n.per, 768);
  assert.equal(result.leftover, 4);
});

test('supports an overnight special shift that starts before closing', () => {
  const result = calculateTips(baseInput({
    staff: { sp: 1 },
    special: { start: '23:00', end: '02:00' }
  }));
  assert.equal(result.payouts.sp.per, 117);
  assert.equal(result.payouts.sp.total, 117);
  assert.equal(result.totalEarned, 5022);
});

test('ignores a special shift that starts at closing time', () => {
  const result = calculateTips(baseInput({
    staff: { sp: 2 },
    special: { start: '00:00', end: '06:00' }
  }));
  assert.equal(result.payouts.sp.per, 0);
  assert.equal(result.payouts.sp.total, 0);
  assert.equal(result.totalEarned, 5022);
});

test('treats negative cash and negative staff as zero', () => {
  const result = calculateTips(baseInput({
    staff: { m: -4, mid: -2, n: -3, pt: -1, sp: -1 },
    cash: { '1500': -100, '1630': -1, '1800': -5, '0000': -9 }
  }));
  for (const payout of Object.values(result.payouts)) {
    assert.equal(payout.per, 0);
    assert.equal(payout.total, 0);
  }
  assert.equal(result.totalEarned, 0);
  assert.equal(result.leftover, 0);
});

test('flags closing cash that cannot cover computed final payouts', () => {
  const result = calculateTips(baseInput({
    cash: { '1800': 5000, '0000': 1000 }
  }));
  assert.ok(result.alerts.includes('alert-0000-low'));
  assert.equal(result.payouts.n.per, 333);
  assert.equal(result.payouts.pt.per, 0);
  assert.equal(result.payouts.sp.per, 0);
  assert.equal(result.totalEarned, 4062);
});
