import { useState } from "react";
import ServiceRequestModal from "../home/components/servicerequestmodal";
import { getInvolvedConfig } from "../home/components/getinvolvedconfig";
import "../../styles/pages.css";

export default function Volunteer() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="page">
      <header className="getInvolvedHero">
        <div className="pageBadge">Get Involved</div>

        <h1 className="pageTitle">Volunteer</h1>

        <p className="pageSubtitle pageIntro">
          Serve your community through the Muslim Center. Volunteers help us run
          programs, support events, and strengthen community life.
        </p>

        <div className="getInvolvedFacts">
          <div className="getInvolvedFactCard">
            <div className="getInvolvedFactLabel">Who can volunteer?</div>
            <div className="getInvolvedFactValue">Adults &amp; community members</div>
          </div>
          <div className="getInvolvedFactCard">
            <div className="getInvolvedFactLabel">Commitment</div>
            <div className="getInvolvedFactValue">Flexible opportunities</div>
          </div>
          <div className="getInvolvedFactCard">
            <div className="getInvolvedFactLabel">Next step</div>
            <div className="getInvolvedFactValue">Submit the volunteer form</div>
          </div>
        </div>
      </header>

      <section className="getInvolvedSectionCard">
        <h2 className="getInvolvedSectionTitle">Volunteer Opportunities</h2>
        <ul className="getInvolvedList">
          <li>Event support and set-up</li>
          <li>Office/admin support</li>
          <li>Community outreach and welcome team</li>
          <li>Food service support (as needed)</li>
          <li>Youth support (optional / future)</li>
        </ul>
        <p className="getInvolvedNote">
          *We’ll confirm availability and match you with a role based on your
          interests and the Center’s needs.
        </p>
      </section>

      <section className="getInvolvedSectionCard">
        <h2 className="getInvolvedSectionTitle">How it works</h2>
        <ol className="getInvolvedList">
          <li>Submit the volunteer form.</li>
          <li>We follow up to confirm details and availability.</li>
          <li>You get connected to the right team and schedule.</li>
        </ol>
      </section>

      <section className="getInvolvedCtaWrap">
        <div className="getInvolvedCtaCard">
          <div>
            <h3 className="getInvolvedCtaTitle">Ready to volunteer?</h3>
            <p className="getInvolvedCtaText">
              Fill out the form and we’ll follow up with next steps.
            </p>
          </div>

          <div className="getInvolvedCtaButtons">
            <button
              type="button"
              className="primaryBtn"
              onClick={() => setOpenModal(true)}
            >
              Volunteer Form
            </button>

            <a href="/get-involved" className="getInvolvedBackLink">
              Back to Get Involved
            </a>
          </div>
        </div>
      </section>

      <ServiceRequestModal
        serviceKey="volunteer"
        open={openModal}
        onClose={() => setOpenModal(false)}
        configMap={getInvolvedConfig}
      />
    </div>
  );
}