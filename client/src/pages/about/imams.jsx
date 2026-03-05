import PersonCard from "../../component/personcard";
import { useNavigate } from "react-router-dom";

export default function ImamsPage() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <header style={header}>
        <div style={badge}>Leadership</div>

        <h1 className="pageTitle" style={{ marginBottom: 10 }}>
          Meet the Imam’s
        </h1>

        <p className="pageSubtitle" style={{ ...subtitle, maxWidth: 920 }}>
          Our Imam’s serve the community through prayer leadership, education,
          counseling, and guidance. If you need support or would like to connect,
          please reach out.
        </p>

        <div style={actions}>
          <button style={btnSoft} type="button" onClick={() => navigate("/contact")}>
            Contact
          </button>
          <button style={btn} type="button" onClick={() => navigate("/about/leadership")}>
            Back to Leadership
          </button>
        </div>
      </header>

      <section style={list}>
        <PersonCard
          name="Imam Khalil"
          title="Imam"
          image="" // add image url later (or /static/uploads/...)
          description={
            <>
              Imam Khalil serves the Muslim Center by leading prayer, supporting
              community education, and providing guidance rooted in the Qur’an and
              Sunnah. He is committed to building strong families, strengthening
              faith, and creating a welcoming community environment for all ages.
              <br />
              <br />
              <strong>Areas of support:</strong> prayer leadership, khutbahs,
              Islamic guidance, counseling referrals, and community outreach.
            </>
          }
        />

        <div style={{ height: 14 }} />

        <PersonCard
          name="Imam Abdullah El-Amin"
          title="Imam"
          reverse
          image="" // add image url later
          description={
            <>
              Imam Abdullah El-Amin supports the Muslim Center through teaching,
              mentorship, and community programs. His focus is helping people grow
              in faith with clarity, compassion, and consistent practice, while
              strengthening community connection.
              <br />
              <br />
              <strong>Areas of support:</strong> classes and lectures, youth and
              family engagement, spiritual support, and community education.
            </>
          }
        />

        <div style={{ height: 14 }} />

        <PersonCard
          name="Imam (Name Coming Soon)"
          title="Imam"
          image=""
          description={
            <>
              This profile will be updated once we receive the correct name and
              details for this Imam.
              <br />
              <br />
              <strong>Note:</strong> If this slot should be removed, we can remove
              it instantly.
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