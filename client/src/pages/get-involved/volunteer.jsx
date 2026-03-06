export default function Volunteer() {
  return (
    <div className="page">
      <header style={header}>
        <div style={badge}>Get Involved</div>

        <h1 className="pageTitle" style={{ marginBottom: 10 }}>
          Volunteer
        </h1>

        <p className="pageSubtitle" style={{ ...subtitle, maxWidth: 920 }}>
          Serve your community through the Muslim Center. Volunteers help us run programs,
          support events, and strengthen community life.
        </p>

        <div style={quickFacts}>
          <div style={factCard}>
            <div style={factLabel}>Who can volunteer?</div>
            <div style={factValue}>Adults &amp; community members</div>
          </div>
          <div style={factCard}>
            <div style={factLabel}>Commitment</div>
            <div style={factValue}>Flexible opportunities</div>
          </div>
          <div style={factCard}>
            <div style={factLabel}>Next step</div>
            <div style={factValue}>Submit the volunteer form</div>
          </div>
        </div>
      </header>

      <section style={section}>
        <h2 style={sectionTitle}>Volunteer Opportunities</h2>
        <ul style={list}>
          <li style={li}>Event support and set-up</li>
          <li style={li}>Office/admin support</li>
          <li style={li}>Community outreach and welcome team</li>
          <li style={li}>Food service support (as needed)</li>
          <li style={li}>Youth support (optional / future)</li>
        </ul>
        <p style={note}>
          *We’ll confirm availability and match you with a role based on your interests and
          the Center’s needs.
        </p>
      </section>

      <section style={section}>
        <h2 style={sectionTitle}>How it works</h2>
        <ol style={ol}>
          <li style={li}>Submit the volunteer form.</li>
          <li style={li}>We follow up to confirm details and availability.</li>
          <li style={li}>You get connected to the right team and schedule.</li>
        </ol>
      </section>

      <section style={ctaWrap}>
        <div style={ctaCard}>
          <div>
            <h3 style={ctaTitle}>Ready to volunteer?</h3>
            <p style={ctaText}>
              Fill out the form and we’ll follow up with next steps.
            </p>
          </div>

          <div style={ctaButtons}>
            <a href="/contact" className="btn" style={btnPrimary}>
              Volunteer Form
            </a>
            <a href="/get-involved" className="btn" style={btnSecondary}>
              Back to Get Involved
            </a>
          </div>
        </div>
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
  gap: 8,
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

const subtitle = { lineHeight: 1.6, color: "#2b2b2b" };

const quickFacts = {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: 12,
  marginTop: 16,
};

const factCard = {
  background: "#ffffff",
  borderRadius: 14,
  padding: "12px 12px",
  border: "1px solid #e3e3e3",
};

const factLabel = {
  fontSize: 12,
  color: "#55715f",
  fontWeight: 800,
  marginBottom: 6,
};

const factValue = {
  fontSize: 14,
  color: "#1b1b1b",
  fontWeight: 800,
  lineHeight: 1.3,
};

const section = {
  background: "#ffffff",
  borderRadius: 18,
  padding: "18px 18px",
  border: "1px solid #e3e3e3",
  marginBottom: 14,
};

const sectionTitle = {
  margin: 0,
  color: "#1e6b3a",
  fontSize: 20,
  letterSpacing: -0.2,
};

const list = {
  marginTop: 10,
  marginBottom: 0,
  paddingLeft: 18,
  color: "#2b2b2b",
  lineHeight: 1.7,
  maxWidth: 920,
};

const ol = {
  marginTop: 10,
  marginBottom: 0,
  paddingLeft: 18,
  color: "#2b2b2b",
  lineHeight: 1.7,
  maxWidth: 920,
};

const li = { marginBottom: 8 };

const note = {
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.6,
  color: "rgba(0,0,0,0.65)",
  maxWidth: 920,
  fontSize: 13,
};

const ctaWrap = { marginTop: 10 };

const ctaCard = {
  display: "flex",
  justifyContent: "space-between",
  gap: 16,
  alignItems: "center",
  background: "#0f2a1d",
  borderRadius: 18,
  padding: "18px 18px",
  color: "#ffffff",
};

const ctaTitle = { margin: 0, fontSize: 18, letterSpacing: -0.2 };

const ctaText = {
  margin: "6px 0 0",
  opacity: 0.9,
  lineHeight: 1.5,
  maxWidth: 720,
};

const ctaButtons = { display: "flex", gap: 10, flexWrap: "wrap" };

const btnPrimary = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px 14px",
  borderRadius: 12,
  background: "#ffffff",
  color: "#0f2a1d",
  fontWeight: 900,
  textDecoration: "none",
  border: "1px solid rgba(255,255,255,0.35)",
};

const btnSecondary = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px 14px",
  borderRadius: 12,
  background: "transparent",
  color: "#ffffff",
  fontWeight: 900,
  textDecoration: "none",
  border: "1px solid rgba(255,255,255,0.45)",
};

const mq = window?.matchMedia?.("(max-width: 900px)")?.matches;
if (mq) {
  quickFacts.gridTemplateColumns = "1fr";
  ctaCard.flexDirection = "column";
  ctaCard.alignItems = "stretch";
  ctaButtons.justifyContent = "flex-start";
}