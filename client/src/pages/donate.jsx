import { useNavigate } from "react-router-dom";
import "../styles/pages.css";

const FALLBACK_MOHID_URL =
  "https://us.mohid.co/mi/detroit/mcd/masjid/online/donation";

export default function Donate() {
  const navigate = useNavigate();

  const MOHID_DONATE_URL =
    import.meta.env.VITE_MOHID_DONATE_URL || FALLBACK_MOHID_URL;

  if (!MOHID_DONATE_URL) {
    return (
      <div className="page">
        <h1 className="pageTitle">Donate</h1>
        <p className="pageSubtitle">
          MOHID link is missing. Add <code>VITE_MOHID_DONATE_URL</code> to{" "}
          <code>client/.env</code> and restart the dev server.
        </p>
      </div>
    );
  }

  return (
    <div className="page">
      <section className="learnHero">
        <p className="learnEyebrow">Donate</p>
        <h1 className="pageTitle">Support the Masjid</h1>
        <p className="pageSubtitle pageIntro">
          Your donation helps sustain the masjid, support programs, and serve
          the community. May Allah reward you for every contribution.
        </p>
      </section>

      <section className="learnSection">
        <div className="pageCardsGrid">
          <div className="pageCard">
            <h2 className="pageCardTitle">Option 1: Donate Online</h2>
            <p className="pageCardText">
              Use our secure official donation portal for one-time or recurring
              giving.
            </p>
            <button
              onClick={() => {
                window.location.href = MOHID_DONATE_URL;
              }}
              className="secondaryBtn"
              style={{ marginTop: 14 }}
            >
              Donate Now
            </button>
          </div>

          <div className="pageCard">
            <h2 className="pageCardTitle">Option 2: Quick Pay</h2>
            <p className="pageCardText">
              Choose a fast mobile-friendly payment option and complete your
              donation quickly.
            </p>
            <button
              onClick={() => navigate("/quickpay")}
              className="ghostBtn"
              style={{ marginTop: 14 }}
            >
              Quick Pay
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}