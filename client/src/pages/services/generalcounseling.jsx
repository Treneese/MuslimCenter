import { useState } from "react";
import ServiceRequestModal from "../home/components/servicerequestmodal";
import { serviceFormConfig } from "../home/components/serviceformconfig";
import "../../styles/pages.css";

export default function GeneralCounseling() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="page">
      <header className="getInvolvedHero">
        <div className="pageBadge">Service</div>

        <h1 className="pageTitle">General Counseling</h1>

        <p className="pageSubtitle pageIntro">
          Private, respectful guidance for individuals and families facing
          everyday challenges. If you’re not sure where to start, reach out and
          we’ll help direct you.
        </p>

        <div className="getInvolvedFacts">
          <div className="getInvolvedFactCard">
            <div className="getInvolvedFactLabel">Format</div>
            <div className="getInvolvedFactValue">Guidance &amp; Referrals</div>
          </div>

          <div className="getInvolvedFactCard">
            <div className="getInvolvedFactLabel">For</div>
            <div className="getInvolvedFactValue">Individuals &amp; Families</div>
          </div>

          <div className="getInvolvedFactCard">
            <div className="getInvolvedFactLabel">Next Step</div>
            <div className="getInvolvedFactValue">Request Support</div>
          </div>
        </div>
      </header>

      <section className="getInvolvedSectionCard">
        <h2 className="getInvolvedSectionTitle">What we can help with</h2>
        <ul className="getInvolvedList">
          <li>Personal guidance and life direction</li>
          <li>Family concerns and conflict support</li>
          <li>Faith-based encouragement and accountability</li>
          <li>Referrals to additional community resources</li>
        </ul>
      </section>

      <section className="getInvolvedSectionCard">
        <h2 className="getInvolvedSectionTitle">How support begins</h2>
        <p className="getInvolvedBodyText">
          If you would like to speak with someone, use the request form below.
          After you submit it, the Muslim Center can follow up with availability
          and next steps.
        </p>
      </section>

      <section className="getInvolvedSectionCard">
        <h2 className="getInvolvedSectionTitle">What to expect</h2>
        <div className="getInvolvedFacts">
          <div className="getInvolvedFactCard">
            <div className="getInvolvedFactValue">Private &amp; Respectful</div>
            <p className="getInvolvedNote">
              Conversations are approached with care, dignity, and respect.
            </p>
          </div>

          <div className="getInvolvedFactCard">
            <div className="getInvolvedFactValue">Faith-Centered</div>
            <p className="getInvolvedNote">
              Guidance can include Islamic perspective, encouragement, and
              practical next steps.
            </p>
          </div>

          <div className="getInvolvedFactCard">
            <div className="getInvolvedFactValue">Helpful Direction</div>
            <p className="getInvolvedNote">
              If additional help is needed, we can guide you toward the right
              support or resources.
            </p>
          </div>
        </div>
      </section>

      <section className="getInvolvedCtaWrap">
        <div className="getInvolvedCtaCard">
          <div>
            <h3 className="getInvolvedCtaTitle">Ready to reach out?</h3>
            <p className="getInvolvedCtaText">
              Send a request and we’ll help you take the next step toward the
              right support.
            </p>
          </div>

          <div className="getInvolvedCtaButtons">
            <button
              type="button"
              className="primaryBtn"
              onClick={() => setOpenModal(true)}
            >
              Request Support
            </button>

            <a href="/services" className="getInvolvedBackLink">
              Back to Services
            </a>
          </div>
        </div>
      </section>

      <ServiceRequestModal
        serviceKey="general-counseling"
        open={openModal}
        onClose={() => setOpenModal(false)}
        configMap={serviceFormConfig}
      />
    </div>
  );
}