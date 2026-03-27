import { useState } from "react";
import ServiceRequestModal from "../home/components/servicerequestmodal";
import { getInvolvedConfig } from "../home/components/getinvolvedconfig";
import "../../styles/pages.css";

export default function Partners() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="page">
      <header className="getInvolvedHero">
        <div className="pageBadge">Partnerships</div>

        <h1 className="pageTitle">Become a Partner</h1>

        <p className="pageSubtitle pageIntro">
          The Muslim Center collaborates with organizations serving Detroit and
          surrounding areas. Partnerships help expand our impact through
          programs, resources, and community support.
        </p>

        <div className="getInvolvedFacts">
          <div className="getInvolvedFactCard">
            <div className="getInvolvedFactLabel">Partnership types</div>
            <div className="getInvolvedFactValue">Programs • Events • Services</div>
          </div>
          <div className="getInvolvedFactCard">
            <div className="getInvolvedFactLabel">Who can partner?</div>
            <div className="getInvolvedFactValue">
              Nonprofits • Schools • Local orgs
            </div>
          </div>
          <div className="getInvolvedFactCard">
            <div className="getInvolvedFactLabel">Next step</div>
            <div className="getInvolvedFactValue">Send a partnership request</div>
          </div>
        </div>
      </header>

      <section className="getInvolvedSectionCard">
        <h2 className="getInvolvedSectionTitle">What partnerships can look like</h2>
        <ul className="getInvolvedList">
          <li>Co-hosting community events and workshops</li>
          <li>Providing referrals and support services</li>
          <li>Youth/family programming collaborations (as approved)</li>
          <li>Resource drives and outreach initiatives</li>
          <li>Educational programming or guest speakers</li>
        </ul>
      </section>

      <section className="getInvolvedSectionCard">
        <h2 className="getInvolvedSectionTitle">How to request a partnership</h2>
        <p className="getInvolvedBodyText">
          Please share a brief description of your organization, the type of
          partnership you’re proposing, and the timeline. We’ll follow up with
          next steps.
        </p>
      </section>

      <section className="getInvolvedCtaWrap">
        <div className="getInvolvedCtaCard">
          <div>
            <h3 className="getInvolvedCtaTitle">Let’s work together.</h3>
            <p className="getInvolvedCtaText">
              Reach out and we’ll connect with the right leadership team.
            </p>
          </div>

          <div className="getInvolvedCtaButtons">
            <button
              type="button"
              className="primaryBtn"
              onClick={() => setOpenModal(true)}
            >
              Partnership Request
            </button>

            <a href="/get-involved" className="getInvolvedBackLink">
              Back to Get Involved
            </a>
          </div>
        </div>
      </section>

      <ServiceRequestModal
        serviceKey="partnership"
        open={openModal}
        onClose={() => setOpenModal(false)}
        configMap={getInvolvedConfig}
      />
    </div>
  );
}