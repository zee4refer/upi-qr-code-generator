const assert = require('assert');
const { upiLink, isValidUpiId } = require('./upi');
assert.ok(isValidUpiId('shop@okbank'));
assert.ok(!isValidUpiId('shop-at-bank'));
assert.strictEqual(upiLink({ pa: 'shop@okbank', pn: 'Demo Kirana Store', am: 1011 }),
  'upi://pay?pa=shop%40okbank&pn=Demo%20Kirana%20Store&am=1011.00&cu=INR');
console.log('upi: all tests passed');
