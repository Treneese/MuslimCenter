import { useState } from "react";
import ServiceRequestModal from "../home/components/servicerequestmodal";
import { getInvolvedConfig } from "../home/components/getinvolvedconfig";
import "../../styles/pages.css";

export default function SpaceRental() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="page">
      <header className="getInvolvedHero">
        <div className="pageBadge">Get Involved</div>

        <h1 className="pageTitle">Space Rental</h1>

        <p className="pageSubtitle pageIntro">
          The Muslim Center may offer rental space for approved community use.
          Submit a request and we’ll follow up with availability, guidelines,
          and pricing.
        </p>

        <div className="getInvolvedFacts">
          <div className="getInvolvedFactCard">
            <div className="getInvolvedFactLabel">Use cases</div>
            <div className="getInvolvedFactValue">
              Meetings • Classes • Community events
            </div>
          </div>
          <div className="getInvolvedFactCard">
            <div className="getInvolvedFactLabel">Approval</div>
            <div className="getInvolvedFactValue">Required</div>
          </div>
          <div className="getInvolvedFactCard">
            <div className="getInvolvedFactLabel">Next step</div>
            <div className="getInvolvedFactValue">Submit a rental request</div>
          </div>
        </div>
      </header>

      <section className="getInvolvedSectionCard">
        <h2 className="getInvolvedSectionTitle">What to include in your request</h2>
        <ul className="getInvolvedList">
          <li>Event name and purpose</li>
          <li>Requested date(s) and time range</li>
          <li>Estimated attendance</li>
          <li>Space needs (chairs, tables, AV, etc.)</li>
          <li>Point of contact information</li>
        </ul>
      </section>

      <section className="getInvolvedSectionCard">
        <h2 className="getInvolvedSectionTitle">Important notes</h2>
        <p className="getInvolvedBodyText">
          Rental approval depends on availability and alignment with the
          Center’s guidelines. Pricing and policies will be shared after your
          request is reviewed.
        </p>
      </section>

      <section className="getInvolvedCtaWrap">
        <div className="getInvolvedCtaCard">
          <div>
            <h3 className="getInvolvedCtaTitle">Request space</h3>
            <p className="getInvolvedCtaText">
              Send the details and we’ll respond with next steps.
            </p>
          </div>

          <div className="getInvolvedCtaButtons">
            <button
              type="button"
              className="primaryBtn"
              onClick={() => setOpenModal(true)}
            >
              Rental Request
            </button>

            <a href="/get-involved" className="getInvolvedBackLink">
              Back to Get Involved
            </a>
          </div>
        </div>
      </section>

      <ServiceRequestModal
        serviceKey="space-rental"
        open={openModal}
        onClose={() => setOpenModal(false)}
        configMap={getInvolvedConfig}
      />
    </div>
  );
}