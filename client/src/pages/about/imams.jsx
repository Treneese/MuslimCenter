import PersonCard from "../../component/personcard";
import { useNavigate } from "react-router-dom";
import Momodou from "../../assets/imam/momodouceesay.webp";
import Mikail from "../../assets/imam/mika'ilstewartsaadiq.webp";

export default function ImamsPage() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <header style={header}>
        <div style={badge}>Leadership</div>

        <h1 className="pageTitle" style={{ marginBottom: 10 }}>
          Meet the Imams
        </h1>

        <p className="pageSubtitle" style={{ ...subtitle, maxWidth: 920 }}>
          Our Imams serve the community through prayer leadership, education,
          counseling, and guidance. If you need support or would like to connect,
          please reach out.
        </p>

        <div style={actions}>
          <button
            style={btnSoft}
            type="button"
            onClick={() => navigate("/contact")}
          >
            Contact
          </button>
          <button
            style={btn}
            type="button"
            onClick={() => navigate("/about/leadership")}
          >
            Back to Leadership
          </button>
        </div>
      </header>

      <section style={list}>
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
              <br />
              <br />
              After returning to The Gambia, Imam Ceesay served as a teacher and
              founded Jamiyyathul Shabab Al Islamia. In 1989, he moved to the
              United States, where he dedicated himself to community service,
              interfaith work, and education. He is widely known for translating
              the Qur’an into Mandinka and for promoting understanding among
              people of different faiths.
              <br />
              <br />
              Since becoming the Resident Imam of The Muslim Center in 2013, he
              has helped expand educational programs, increase attendance, and
              diversify community activities. His vision is to help build a
              strong and prosperous community rooted in knowledge, with goals
              that include establishing both a library and a school.
              <br />
              <br />
              Imam Ceesay is happily married to Kaddy Ceesay and is the proud
              father of three children.
            </>
          }
        />

        <div style={{ height: 14 }} />

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
              Assistant Imam at The Muslim Center in Detroit. He also completed a
              two-year term as Co-Chair of the Imams Council of Michigan in early
              2024.
              <br />
              <br />
              From 2016 to 2021, he served as a Detroit City Council liaison,
              where he advocated for civic engagement, social equity, and
              empowerment. He has become known for his political and social
              activism, as well as his passionate commentary on Black and youth
              social issues.
              <br />
              <br />
              In 2013, he became the first Muslim to offer the invocation for a
              Michigan State Senate session. At the end of 2014, he gained
              international attention after organizing 65,000 people to
              participate in a 24-hour social media blackout called The National
              Black Day of Silence, protesting the exploitation of violence
              against Black and marginalized people.
              <br />
              <br />
              In 2021, he authored the first draft of the City of Detroit’s
              Malcolm X Day Resolution, which led to Malcolm X Day being
              recognized every third Friday in May. In 2023, he led the launch
              of the national Assessing the State of the African American Muslim
              Community project, co-sponsored by five of the most notable
              Black Muslim-led organizations in the country.
              <br />
              <br />
              Imam Mika’il holds a Bachelor of Science in Criminal Justice and is
              a Certified Google Project Management Professional. As the founder
              and lead of Stewart Saadiq Consulting, he has contributed to two
              presidential campaigns as well as several local campaigns and
              offices. He currently lives on Detroit’s northwest side, where he
              and his wife are raising their five youngest children.
            </>
          }
        />
      </section>
    </div>
  );
}

/* styles */

const header = {
  background: "#efefef",
  borderRadius: 18,
  padding: "22px 18px",
  border: "1px solid #d9e4dd",
  marginBottom: 18,
};

const badge = {
  display: "inline-flex",
  alignItems: "center",
  fontSize: 12,
  fontWeight: 800,
  letterSpacing: 0.3,
  textTransform: "uppercase",
  color: "#1e6b3a",
  background: "#e6f3ea",
  border: "1px solid #cfe4d6",
  padding: "6px 10px",
  borderRadius: 999,
  marginBottom: 10,
};

const subtitle = {
  lineHeight: 1.6,
  color: "#2b2b2b",
};

const actions = {
  display: "flex",
  gap: 10,
  flexWrap: "wrap",
  marginTop: 14,
};

const btnBase = {
  padding: "10px 14px",
  borderRadius: 12,
  fontWeight: 900,
  cursor: "pointer",
  border: "1px solid rgba(0,0,0,0.12)",
  background: "#fff",
  color: "#123f2a",
};

const btn = { ...btnBase };

const btnSoft = {
  ...btnBase,
  background: "#123f2a",
  borderColor: "#123f2a",
  color: "#fff",
};

const list = {
  display: "grid",
  gap: 0,
};