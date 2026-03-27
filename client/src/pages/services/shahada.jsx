import { useState } from "react";
import ServiceRequestModal from "../home/components/servicerequestmodal";
import { serviceFormConfig } from "../home/components/serviceformconfig";
import "../../styles/pages.css";

export default function Shahada() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="page">
      <header className="getInvolvedHero">
        <div className="pageBadge">Services</div>

        <h1 className="pageTitle">New Shahada Support</h1>

        <p className="pageSubtitle pageIntro">
          Support for new Muslims and those exploring Islam. We’re here to help
          you feel welcomed, grounded, and connected to community.
        </p>

        <div className="getInvolvedFacts">
          <div className="getInvolvedFactCard">
            <div className="getInvolvedFactLabel">Support Type</div>
            <div className="getInvolvedFactValue">
              Guidance • Mentorship • Community
            </div>
          </div>
          <div className="getInvolvedFactCard">
            <div className="getInvolvedFactLabel">Who it’s for</div>
            <div className="getInvolvedFactValue">New Muslims &amp; seekers</div>
          </div>
          <div className="getInvolvedFactCard">
            <div className="getInvolvedFactLabel">Next Step</div>
            <div className="getInvolvedFactValue">Contact us to get connected</div>
          </div>
        </div>
      </header>

      <section className="getInvolvedSectionCard">
        <h2 className="getInvolvedSectionTitle">What we can help with</h2>
        <ul className="getInvolvedList">
          <li>Learning the basics (prayer, wudu, Qur’an, daily practices)</li>
          <li>Finding community and supportive friendships</li>
          <li>Answering questions in a respectful, non-judgmental way</li>
          <li>Connecting you to classes and programs</li>
        </ul>
      </section>

      <section className="getInvolvedSectionCard">
        <h2 className="getInvolvedSectionTitle">How to get connected</h2>
        <p className="getInvolvedBodyText">
          If you are interested in support, shahada, or learning more, reach out
          through the form below. We’ll follow up with care and next steps.
        </p>
      </section>

      <section className="getInvolvedCtaWrap">
        <div className="getInvolvedCtaCard">
          <div>
            <h3 className="getInvolvedCtaTitle">Ready to talk?</h3>
            <p className="getInvolvedCtaText">
              Send us a message and we’ll help you take the next step.
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
        serviceKey="new-shahada-support"
        open={openModal}
        onClose={() => setOpenModal(false)}
        configMap={serviceFormConfig}
      />
    </div>
  );
}