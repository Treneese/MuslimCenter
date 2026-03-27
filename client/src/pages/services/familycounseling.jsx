import { useState } from "react";
import ServiceRequestModal from "../home/components/servicerequestmodal";
import { serviceFormConfig } from "../home/components/serviceformconfig";
import "../../styles/pages.css";

export default function FamilyCounseling() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="page">
      <header className="getInvolvedHero">
        <div className="pageBadge">Services</div>

        <h1 className="pageTitle">Family Counseling</h1>

        <p className="pageSubtitle pageIntro">
          Support for families navigating conflict, communication challenges,
          and life transitions. Our goal is to strengthen families through
          compassion, structure, and faith-based guidance.
        </p>

        <div className="getInvolvedFacts">
          <div className="getInvolvedFactCard">
            <div className="getInvolvedFactLabel">Format</div>
            <div className="getInvolvedFactValue">By appointment</div>
          </div>

          <div className="getInvolvedFactCard">
            <div className="getInvolvedFactLabel">Focus</div>
            <div className="getInvolvedFactValue">
              Family unity & communication
            </div>
          </div>

          <div className="getInvolvedFactCard">
            <div className="getInvolvedFactLabel">Next Step</div>
            <div className="getInvolvedFactValue">
              Request a session
            </div>
          </div>
        </div>
      </header>

      <section className="getInvolvedSectionCard">
        <h2 className="getInvolvedSectionTitle">
          What this service supports
        </h2>

        <ul className="getInvolvedList">
          <li>Family conflict and communication breakdown</li>
          <li>Parenting support and home structure</li>
          <li>
            Life transitions (grief, divorce, blended families, change)
          </li>
          <li>
            Guidance rooted in Islamic values and community care
          </li>
        </ul>
      </section>

      <section className="getInvolvedSectionCard">
        <h2 className="getInvolvedSectionTitle">
          How to request an appointment
        </h2>

        <p className="getInvolvedBodyText">
          Contact the Muslim Center and share what kind of support you’re
          looking for. We’ll follow up with availability and next steps.
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
              Contact to Book
            </button>

            <a href="/services" className="getInvolvedBackLink">
              Back to Services
            </a>
          </div>
        </div>
      </section>

      <ServiceRequestModal
        serviceKey="family-counseling"
        open={openModal}
        onClose={() => setOpenModal(false)}
        configMap={serviceFormConfig}
      />
    </div>
  );
}