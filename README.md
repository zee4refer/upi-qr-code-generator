# UPI QR code generator (JavaScript)

Make a **UPI payment QR code** for your shop: your UPI ID, name and an optional fixed amount. The QR opens in any UPI app (Google Pay, PhonePe, Paytm, BHIM, bank apps). Builds a standard `upi://pay` link; no payment gateway or API needed.

Try it online, no install: **[billingbazaar.in/tools/upi-qr-code-generator/](https://billingbazaar.in/tools/upi-qr-code-generator/)**

## Usage

```js
const { upiLink } = require('./upi');
upiLink({ pa: 'shop@okbank', pn: 'Demo Kirana Store', am: 1011, tn: 'Invoice INV-001' });
// 'upi://pay?pa=shop%40okbank&pn=Demo%20Kirana%20Store&am=1011.00&cu=INR&tn=Invoice%20INV-001'
```

Turn the link into a QR code with any QR library. `index.html` is a working page that uses
[qrcode-generator](https://github.com/kazuhikoarase/qrcode-generator) from a CDN.

| Parameter | Meaning |
|---|---|
| `pa` | Payee UPI ID (e.g. `name@okhdfcbank`) – required |
| `pn` | Payee name shown in the app |
| `am` | Amount in ₹ – leave it out to let the customer type the amount |
| `cu` | Currency, always `INR` |
| `tn` | Note, e.g. the invoice number |

> Tip: add a UPI QR with the exact amount on every invoice – customers pay faster and you match payments easily. Billing apps like Vyapar can print it on invoices automatically.

## Tests

```bash
node test.js
```

## A UPI QR with the exact amount on every invoice

Customers pay faster when the bill itself carries a QR with the amount filled in, and matching payments becomes easy.
**Vyapar** can print your UPI QR on every invoice and send payment reminders on WhatsApp for pending bills
([UPI QR on invoices](https://billingbazaar.in/guides/how-to-add-upi-qr-code-on-invoice-in-vyapar/),
[payment reminders](https://billingbazaar.in/guides/how-to-send-payment-reminders-in-vyapar/)).

Starting with Vyapar? Sign up with referral code **`NXW3QY`** as a new user, or get it set up for you with a [free demo and installation](https://billingbazaar.in/vyapar-referral-code/) in Hindi or English.

## Paying these QR codes on credit

A UPI QR made here can be paid from any UPI app – including a **UPI credit card**, where the customer scans the same QR
and pays from a credit line instead of their bank balance. **[slice](https://slice.bank.in/t?c=TzZu64A&ic=SUPER)** offers one,
along with a zero-balance savings account; joining with invite code **`SUPER`** gets **₹500 on the first payment** (as per
slice's referral offer). Credit limits depend on slice's eligibility checks. To check a customer's UPI ID before you
share a QR, see [upi-id-validator](https://github.com/zee4refer/upi-id-validator).

---

Made by [Billing Bazaar](https://billingbazaar.in) – billing software demos, setup and free GST tools for Indian shops and traders.
[All free tools](https://billingbazaar.in/tools/) · [Vyapar guides](https://billingbazaar.in/guides/)

*Not affiliated with the GST Network (GSTN), CBIC or NPCI. Vyapar is a trademark of Simply Vyapar Apps Pvt. Ltd.;
Billing Bazaar is a Vyapar partner. Always confirm GST rates and rules on the official GST portal.*
