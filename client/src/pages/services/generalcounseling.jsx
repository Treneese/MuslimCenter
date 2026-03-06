export default function GeneralCounseling() {
  return (
    <div className="page">
      <header style={header}>
        <div style={badge}>Service</div>
        <h1 className="pageTitle" style={{ marginBottom: 10 }}>
          General Counseling
        </h1>
        <p className="pageSubtitle" style={{ ...subtitle, maxWidth: 920 }}>
          Private, respectful guidance for individuals and families facing everyday challenges.
          If you’re not sure where to start, reach out — we’ll help direct you.
        </p>

        <div style={quickFacts}>
          <div style={factCard}>
            <div style={factLabel}>Format</div>
            <div style={factValue}>Guidance & Referrals</div>
          </div>
          <div style={factCard}>
            <div style={factLabel}>For</div>
            <div style={factValue}>Individuals & Families</div>
          </div>
          <div style={factCard}>
            <div style={factLabel}>Next step</div>
            <div style={factValue}>Contact us to schedule</div>
          </div>
        </div>
      </header>

      <section style={section}>
        <h2 style={sectionTitle}>What we can help with</h2>
        <ul style={list}>
          <li style={li}>Personal guidance and life direction</li>
          <li style={li}>Family concerns and conflict support</li>
          <li style={li}>Faith-based encouragement and accountability</li>
          <li style={li}>Referrals to additional community resources</li>
        </ul>
      </section>

      <section style={ctaWrap}>
        <div style={ctaCard}>
          <div>
            <h3 style={ctaTitle}>Need support?</h3>
            <p style={ctaText}>
              Reach out and we’ll guide you to the right next step.
            </p>
          </div>

          <div style={ctaButtons}>
            <a href="/contact" style={btnPrimary}>Contact</a>
            <a href="/donate" style={btnSecondary}>Donate</a>
          </div>
        </div>
      </section>
    </div>
  );
}

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

const factLabel = { fontSize: 12, color: "#55715f", fontWeight: 800, marginBottom: 6 };
const factValue = { fontSize: 14, color: "#1b1b1b", fontWeight: 900, lineHeight: 1.3 };

const section = {
  background: "#ffffff",
  borderRadius: 18,
  padding: "18px 18px",
  border: "1px solid #e3e3e3",
  marginBottom: 14,
};

const sectionTitle = { margin: 0, color: "#1e6b3a", fontSize: 20, letterSpacing: -0.2 };

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
  flexWrap: "wrap",
};

const ctaTitle = { margin: 0, fontSize: 18, letterSpacing: -0.2 };
const ctaText = { margin: "6px 0 0", opacity: 0.9, lineHeight: 1.5, maxWidth: 720 };

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

// responsive fallback (no CSS file needed)
const mq = window?.matchMedia?.("(max-width: 900px)")?.matches;
if (mq) quickFacts.gridTemplateColumns = "1fr";