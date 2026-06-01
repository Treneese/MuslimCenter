import { useState } from "react";
import ServiceRequestModal from "../home/components/servicerequestmodal";
import { getInvolvedConfig } from "../home/components/getinvolvedconfig";
import "../../styles/pages.css";

export default function Appointment() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="page">
      <header className="getInvolvedHero">
        <div className="pageBadge">Appointments</div>

        <h1 className="pageTitle">Book an Appointment with the Imam</h1>

        <p className="pageSubtitle pageIntro">
          If you would like to meet with the Imam, you may submit an appointment
          request here. This is the best place to request time for guidance,
          questions, or personal support that may require a direct conversation.
        </p>

        <div className="getInvolvedFacts">
          <div className="getInvolvedFactCard">
            <div className="getInvolvedFactLabel">Who is this for?</div>
            <div className="getInvolvedFactValue">
              Community members seeking to meet with the Imam
            </div>
          </div>

          <div className="getInvolvedFactCard">
            <div className="getInvolvedFactLabel">How it works</div>
            <div className="getInvolvedFactValue">
              Submit request • Await follow-up
            </div>
          </div>

          <div className="getInvolvedFactCard">
            <div className="getInvolvedFactLabel">Important note</div>
            <div className="getInvolvedFactValue">
              Requests are reviewed before scheduling is confirmed
            </div>
          </div>
        </div>
      </header>

      <section className="getInvolvedSectionCard">
        <h2 className="getInvolvedSectionTitle">When to use this page</h2>
        <p className="getInvolvedBodyText">
          Use this page if you would like to request an appointment directly with
          the Imam. If you are looking for a specific service such as marriage
          counseling, family counseling, shahada support, janazah services, or
          general counseling, please use the service-specific pages so your
          request can be directed appropriately.
        </p>
      </section>

      <section className="getInvolvedSectionCard">
        <h2 className="getInvolvedSectionTitle">Before you submit</h2>
        <p className="getInvolvedBodyText">
          Please share a brief description of what you would like to discuss and
          include any scheduling preferences. Submitting this form does not
          guarantee an appointment time immediately. A follow-up will be sent
          after the request is reviewed.
        </p>
      </section>

      <section className="getInvolvedCtaWrap">
        <div className="getInvolvedCtaCard">
          <div>
            <h3 className="getInvolvedCtaTitle">Need to speak with the Imam?</h3>
            <p className="getInvolvedCtaText">
              Submit your request and the Imam’s team will follow up with next steps.
            </p>
          </div>

          <div className="getInvolvedCtaButtons">
            <button
              type="button"
              className="primaryBtn"
              onClick={() => setOpenModal(true)}
            >
              Book Appointment
            </button>

            <a href="/services" className="getInvolvedBackLink">
              Back to Services
            </a>
          </div>
        </div>
      </section>

      <ServiceRequestModal
        serviceKey="appointment"
        open={openModal}
        onClose={() => setOpenModal(false)}
        configMap={getInvolvedConfig}
      />
    </div>
  );
}