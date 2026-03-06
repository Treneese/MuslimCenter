export default function Marriage() {
  return (
    <div className="page">
      <header style={header}>
        <div style={badge}>Services</div>
        <h1 className="pageTitle" style={{ marginBottom: 10 }}>
          Marriage Counseling
        </h1>
        <p className="pageSubtitle" style={{ ...subtitle, maxWidth: 920 }}>
          Support and guidance for couples. Sessions are handled with privacy, respect,
          and faith-centered care.
        </p>

        <div style={quickFacts}>
          <div style={factCard}>
            <div style={factLabel}>Format</div>
            <div style={factValue}>By appointment</div>
          </div>
          <div style={factCard}>
            <div style={factLabel}>Focus</div>
            <div style={factValue}>Communication • Healing • Growth</div>
          </div>
          <div style={factCard}>
            <div style={factLabel}>Next Step</div>
            <div style={factValue}>Contact us to request a session</div>
          </div>
        </div>
      </header>

      <section style={section}>
        <h2 style={sectionTitle}>What this service supports</h2>
        <ul style={list}>
          <li style={li}>Pre-marital counseling and preparation</li>
          <li style={li}>Conflict resolution and communication support</li>
          <li style={li}>Rebuilding trust and strengthening partnership</li>
          <li style={li}>Faith-based guidance and healthy boundaries</li>
        </ul>
      </section>

      <section style={section}>
        <h2 style={sectionTitle}>How to request an appointment</h2>
        <p style={bodyText}>
          To request counseling, please contact the Muslim Center. We’ll follow up with
          availability and next steps.
        </p>
      </section>

      <section style={ctaWrap}>
        <div style={ctaCard}>
          <div>
            <h3 style={ctaTitle}>Ready to talk?</h3>
            <p style={ctaText}>
              Send us a message and we’ll help you schedule the right support.
            </p>
          </div>

          <div style={ctaButtons}>
            <a href="/contact" className="btn" style={btnPrimary}>
              Contact to Book
            </a>
            <a href="/services" className="btn" style={btnSecondary}>
              Back to Services
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

const bodyText = {
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.7,
  color: "#2b2b2b",
  maxWidth: 920,
};

const list = {
  marginTop: 10,
  marginBottom: 0,
  paddingLeft: 18,
  color: "#2b2b2b",
  lineHeight: 1.7,
  maxWidth: 920,
};

const li = { marginBottom: 8 };

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