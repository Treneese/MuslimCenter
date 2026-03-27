import { useState } from "react";
import ServiceRequestModal from "../home/components/servicerequestmodal";
import { serviceFormConfig } from "../home/components/serviceformconfig";
import "../../styles/pages.css";

export default function Marriage() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="page">
      <header className="getInvolvedHero">
        <div className="pageBadge">Services</div>

        <h1 className="pageTitle">Marriage Counseling</h1>

        <p className="pageSubtitle pageIntro">
          Support and guidance for couples. Sessions are handled with privacy,
          respect, and faith-centered care.
        </p>

        <div className="getInvolvedFacts">
          <div className="getInvolvedFactCard">
            <div className="getInvolvedFactLabel">Format</div>
            <div className="getInvolvedFactValue">By appointment</div>
          </div>
          <div className="getInvolvedFactCard">
            <div className="getInvolvedFactLabel">Focus</div>
            <div className="getInvolvedFactValue">
              Communication • Healing • Growth
            </div>
          </div>
          <div className="getInvolvedFactCard">
            <div className="getInvolvedFactLabel">Next Step</div>
            <div className="getInvolvedFactValue">
              Contact us to request a session
            </div>
          </div>
        </div>
      </header>

      <section className="getInvolvedSectionCard">
        <h2 className="getInvolvedSectionTitle">What this service supports</h2>
        <ul className="getInvolvedList">
          <li>Pre-marital counseling and preparation</li>
          <li>Conflict resolution and communication support</li>
          <li>Rebuilding trust and strengthening partnership</li>
          <li>Faith-based guidance and healthy boundaries</li>
        </ul>
      </section>

      <section className="getInvolvedSectionCard">
        <h2 className="getInvolvedSectionTitle">How to request an appointment</h2>
        <p className="getInvolvedBodyText">
          To request counseling, please contact the Muslim Center. We’ll follow
          up with availability and next steps.
        </p>
      </section>

      <section className="getInvolvedCtaWrap">
        <div className="getInvolvedCtaCard">
          <div>
            <h3 className="getInvolvedCtaTitle">Ready to talk?</h3>
            <p className="getInvolvedCtaText">
              Send us a message and we’ll help you schedule the right support.
            </p>
          </div>

          <div className="getInvolvedCtaButtons">
            <button
              type="button"
              className="primaryBtn"
              onClick={() => setOpenModal(true)}
            >
              Contact to Book
            </button>

            <a href="/services" className="getInvolvedBackLink">
              Back to Services
            </a>
          </div>
        </div>
      </section>

      <ServiceRequestModal
        serviceKey="marriage-counseling"
        open={openModal}
        onClose={() => setOpenModal(false)}
        configMap={serviceFormConfig}
      />
    </div>
  );
}