/**
 * Build UPI payment links (upi://pay) for QR codes – works with any UPI app (GPay, PhonePe, Paytm, BHIM …).
 * MIT licence – https://billingbazaar.in/tools/upi-qr-code-generator/
 */
'use strict';

var UPI_ID = /^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z][a-zA-Z0-9]{1,64}$/;

function isValidUpiId(id) { return UPI_ID.test(String(id || '').trim()); }

/**
 * @param {object} o { pa: 'shop@okbank' (UPI ID), pn: payee name, am: amount (optional), tn: note (optional) }
 */
function upiLink(o) {
  if (!isValidUpiId(o.pa)) throw new Error('Invalid UPI ID: ' + o.pa);
  var q = ['pa=' + encodeURIComponent(o.pa.trim()), 'pn=' + encodeURIComponent(o.pn || 'Payee')];
  if (o.am) q.push('am=' + Number(o.am).toFixed(2));
  q.push('cu=INR');
  if (o.tn) q.push('tn=' + encodeURIComponent(o.tn));
  return 'upi://pay?' + q.join('&');
}

module.exports = { upiLink: upiLink, isValidUpiId: isValidUpiId };
