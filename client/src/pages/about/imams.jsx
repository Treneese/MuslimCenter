import PersonCard from "../../component/personcard";
import { useNavigate } from "react-router-dom";
import "../../styles/pages.css";

import Momodou from "../../assets/imam/momodouceesay.webp";
import Mikail from "../../assets/imam/mika'ilstewartsaadiq.webp";

export default function ImamsPage() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <header className="pageHeroCard">
        <div className="pageBadge">Leadership</div>

        <h1 className="pageTitle">Meet the Imams</h1>

        <p className="pageSubtitle pageIntro">
          Our Imams serve the community through prayer leadership, education,
          counseling, and guidance. If you need support or would like to connect,
          please reach out.
        </p>

        <div className="pageActionRow">
          <button
            className="secondaryBtn"
            type="button"
            onClick={() => navigate("/contact")}
          >
            Contact
          </button>
          <button
            className="ghostBtn"
            type="button"
            onClick={() => navigate("/about/leadership")}
          >
            Back to Leadership
          </button>
        </div>
      </header>

      <section>
        <PersonCard
          name="Imam Shaykh Momodou Ceesay"
          title="Resident Imam / Chairman of Ashura Board of Directors"
          image={Momodou}
          description={
            <>
              Imam Shaykh Momodou Ceesay was born into a devout Muslim family in
              The Gambia, West Africa, and began his educational journey by
              memorizing the Qur’an at the age of 13. He continued his Islamic
              studies in Senegal under Shaykh Abdul Aziz Ibn Malick Sy, and later
              pursued further study in Tunisia and Egypt. He graduated from
              Al-Azhar University with a degree in Arabic Literature and Islamic
              Studies.
              <br /><br />
              After returning to The Gambia, Imam Ceesay served as a teacher and
              founded Jamiyyathul Shabab Al Islamia. In 1989, he moved to the
              United States, where he dedicated himself to community service,
              interfaith work, and education.
            </>
          }
        />

        <PersonCard
          name="Al Hajj Imam Mika’il Stewart Saadiq"
          title="Assistant Imam"
          reverse
          image={Mikail}
          description={
            <>
              Imam Mika’il Stewart Saadiq has taught and served in administration
              at the historic Al-Ikhlas Training Academy in Detroit since 1999.
              He is a former Detroit Police Chaplain and currently serves as the
              Assistant Imam at The Muslim Center in Detroit.
            </>
          }
        />
      </section>
    </div>
  );
}