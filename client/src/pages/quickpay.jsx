import { useNavigate } from "react-router-dom";
import "../styles/pages.css";

export default function QuickPay() {
  const navigate = useNavigate();

  const PAYPAL_URL =
    import.meta.env.VITE_QUICKPAY_PAYPAL_URL ||
    "https://www.paypal.com/ncp/payment/8S9PKS2USMNBW";

  const CASHAPP_URL =
    import.meta.env.VITE_QUICKPAY_CASHAPP_URL ||
    "https://cash.app/$1605TheMuslimCenter";

  function go(url) {
    if (!url || url.includes("PASTE_")) {
      alert("This payment method link isn't set yet.");
      return;
    }
    window.open(url, "_blank", "noreferrer");
  }

  return (
    <div className="page">
      <section className="learnHero">
        <div className="pageTopRow">
          <button onClick={() => navigate("/donate")} className="backPillBtn">
            ← Back
          </button>
          <p className="learnEyebrow" style={{ margin: 0 }}>
            Quick Pay
          </p>
        </div>

        <h1 className="pageTitle">Quick Pay</h1>
        <p className="pageSubtitle pageIntro">
          Pick a payment method to complete your donation quickly and securely.
        </p>
      </section>

      <section className="learnSection">
        <div className="pageCard" style={{ maxWidth: 760 }}>
          <h2 className="pageCardTitle">Pay Now</h2>
          <p className="pageCardText">
            Choose the payment method that works best for you.
          </p>

          <div className="paymentActions">
            <button
              onClick={() => go(PAYPAL_URL)}
              className="secondaryBtn"
            >
              PayPal / Card
            </button>

            <button
              onClick={() => go(CASHAPP_URL)}
              className="ghostBtn"
            >
              Cash App
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}