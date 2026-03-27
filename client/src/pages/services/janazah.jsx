import { useState } from "react";
import ServiceRequestModal from "../home/components/servicerequestmodal";
import { serviceFormConfig } from "../home/components/serviceformconfig";
import "../../styles/pages.css";

export default function Janazah() {
  const [openModal, setOpenModal] = useState(false);

  const PARTNER_FUNERAL_HOME_URL = "https://www.rahmanfuneralhome.com/";

  return (
    <div className="page">
      <header className="getInvolvedHero">
        <div className="pageBadge">Service</div>

        <h1 className="pageTitle">Janazah Services</h1>

        <p className="pageSubtitle pageIntro">
          If you have experienced a loss, we are here to help guide you through
          the next steps. Please contact us as soon as possible so we can
          support your family with care and clarity.
        </p>

        <div className="getInvolvedFacts">
          <div className="getInvolvedFactCard">
            <div className="getInvolvedFactLabel">Purpose</div>
            <div className="getInvolvedFactValue">Guidance &amp; Support</div>
          </div>
          <div className="getInvolvedFactCard">
            <div className="getInvolvedFactLabel">Includes</div>
            <div className="getInvolvedFactValue">Janazah Prayer</div>
          </div>
          <div className="getInvolvedFactCard">
            <div className="getInvolvedFactLabel">Next Step</div>
            <div className="getInvolvedFactValue">Contact Us</div>
          </div>
        </div>
      </header>

      <section className="pageCardsGrid two">
        <div className="getInvolvedSectionCard">
          <h2 className="getInvolvedSectionTitle">What to do first</h2>
          <ol className="getInvolvedList">
            <li>Contact the Muslim Center as soon as possible.</li>
            <li>We will guide your family on next steps and timing.</li>
            <li>We can coordinate with a funeral home as needed.</li>
            <li>We will confirm Janazah prayer details with your family.</li>
          </ol>

          <div className="getInvolvedCtaWrap">
            <a
              href="/contact?service=janazah-counseling"
              className="secondaryBtn"
            >
              Contact the Muslim Center
            </a>
          </div>
        </div>

        <div className="getInvolvedSectionCard">
          <h2 className="getInvolvedSectionTitle">What we provide</h2>
          <ul className="getInvolvedList">
            <li>Janazah guidance and support for families</li>
            <li>Coordination for Janazah prayer announcements</li>
            <li>Religious guidance on the process and expectations</li>
            <li>Community support as your family navigates loss</li>
          </ul>

          <p className="getInvolvedNote">
            <strong>Note:</strong> Specific arrangements can vary — please
            contact us so we can support you based on your needs.
          </p>
        </div>
      </section>

      <section className="getInvolvedSectionCard">
        <h2 className="getInvolvedSectionTitle">Janazah prayer overview</h2>
        <p className="getInvolvedBodyText">
          Janazah is the funeral prayer performed for the deceased. It is a
          communal obligation and a moment of respect, mercy, and unity for the
          community.
        </p>

        <div className="getInvolvedFacts">
          <div className="getInvolvedFactCard">
            <div className="getInvolvedFactValue">How it works</div>
            <p className="getInvolvedNote">
              The congregation stands in rows, follows the Imam, and makes du’a
              for the deceased.
            </p>
          </div>

          <div className="getInvolvedFactCard">
            <div className="getInvolvedFactValue">What to bring</div>
            <p className="getInvolvedNote">
              Modest attire. Arrive early if possible. Follow staff direction
              for organization and flow.
            </p>
          </div>

          <div className="getInvolvedFactCard">
            <div className="getInvolvedFactValue">For family</div>
            <p className="getInvolvedNote">
              We will help coordinate details and communicate what your family
              should expect.
            </p>
          </div>
        </div>
      </section>

      <section className="getInvolvedSectionCard">
        <h2 className="getInvolvedSectionTitle">Partner Funeral Home</h2>
        <p className="getInvolvedBodyText">
          For additional funeral services guidance, you may also contact our
          partner funeral home.
        </p>
        <p className="getInvolvedNote">
          <strong>Rahman Funeral Home</strong>
        </p>

        <div className="getInvolvedCtaWrap">
          <a
            href={PARTNER_FUNERAL_HOME_URL}
            target="_blank"
            rel="noreferrer"
            className="secondaryBtn"
          >
            Visit Funeral Services →
          </a>
        </div>
      </section>

      <section className="getInvolvedCtaWrap">
        <div className="getInvolvedCtaCard">
          <div>
            <h3 className="getInvolvedCtaTitle">We’re here for your family.</h3>
            <p className="getInvolvedCtaText">
              If you have any questions or need immediate guidance, reach out
              and we will help you.
            </p>
          </div>

          <div className="getInvolvedCtaButtons">
            <button
              type="button"
              className="primaryBtn"
              onClick={() => setOpenModal(true)}
            >
              Contact
            </button>

            <a href="/donate" className="getInvolvedBackLink">
              Donate
            </a>
          </div>
        </div>
      </section>

      <ServiceRequestModal
        serviceKey="janazah-services"
        open={openModal}
        onClose={() => setOpenModal(false)}
        configMap={serviceFormConfig}
      />
    </div>
  );
}