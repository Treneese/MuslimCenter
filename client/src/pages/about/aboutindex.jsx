import SectionCards from "../../component/sectioncard";

export default function AboutIndex() {
  const items = [
    { to: "/about/history", title: "History", subtitle: "Our story and legacy." },
    {
      to: "/about/leadership",
      title: "Leadership",
      subtitle: "Meet our leadership and committees.",
    },
    {
      to: "/about/partners",
      title: "Current Partners",
      subtitle: "Organizations we collaborate with.",
    },
  ];

  return (
    <div className="page">
      <header style={header}>
        <div style={badge}>About Us</div>

        <h1 className="pageTitle" style={{ marginBottom: 10 }}>
          About the Muslim Center
        </h1>

        <p className="pageSubtitle" style={{ ...subtitle, maxWidth: 920 }}>
          The Muslim Center Mosque &amp; Community Center serves Detroit through worship,
          education, outreach, and community support. We welcome people of all backgrounds
          and work to strengthen families, build belonging, and serve our neighbors.
        </p>

        <div style={quickFacts}>
          <div style={factCard}>
            <div style={factLabel}>What we are</div>
            <div style={factValue}>Mosque &amp; Community Hub</div>
          </div>
          <div style={factCard}>
            <div style={factLabel}>What we focus on</div>
            <div style={factValue}>Prayer • Education • Service</div>
          </div>
          <div style={factCard}>
            <div style={factLabel}>Who we serve</div>
            <div style={factValue}>Detroit &amp; Surrounding Areas</div>
          </div>
        </div>
      </header>

      <section style={section}>
        <h2 style={sectionTitle}>Our Mission</h2>
        <p style={bodyText}>
          We provide a welcoming place to worship and learn, offer direct support services,
          and host programs that strengthen community life and uplift our neighbors.
        </p>
      </section>

      <section style={section}>
        <h2 style={sectionTitle}>Our Vision</h2>
        <ul style={list}>
          <li style={li}>
            Nurture and develop the spiritual life of our community.
          </li>
          <li style={li}>
            Involve people of all ages through programs, service, and leadership.
          </li>
          <li style={li}>
            Build religious learning, fellowship, and strong families.
          </li>
          <li style={li}>
            Mobilize resources to meet needs within and beyond the Muslim community.
          </li>
          <li style={li}>
            Support outreach and community engagement grounded in faith and compassion.
          </li>
        </ul>
      </section>

      <section style={section}>
        <h2 style={sectionTitle}>Explore</h2>
        <p style={{ ...bodyText, marginTop: 8, marginBottom: 14 }}>
          Learn more about our history, leadership, and the organizations we work with.
        </p>
        <SectionCards items={items} />
      </section>

      <section style={ctaWrap}>
        <div style={ctaCard}>
          <div>
            <h3 style={ctaTitle}>Want to connect with us?</h3>
            <p style={ctaText}>
              Visit us for prayer, explore programs, or reach out with questions.
            </p>
          </div>

          <div style={ctaButtons}>
            <a href="/contact" className="btn" style={btnPrimary}>
              Contact
            </a>
            <a href="/donate" className="btn" style={btnSecondary}>
              Donate
            </a>
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
  gap: 8,
  fontSize: 12,
  fontWeight: 700,
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
  fontWeight: 700,
  marginBottom: 6,
};

const factValue = {
  fontSize: 14,
  color: "#1b1b1b",
  fontWeight: 700,
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

const li = {
  marginBottom: 8,
};

const ctaWrap = {
  marginTop: 10,
};

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

const ctaTitle = {
  margin: 0,
  fontSize: 18,
  letterSpacing: -0.2,
};

const ctaText = {
  margin: "6px 0 0",
  opacity: 0.9,
  lineHeight: 1.5,
  maxWidth: 720,
};

const ctaButtons = {
  display: "flex",
  gap: 10,
  flexWrap: "wrap",
};

const btnPrimary = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px 14px",
  borderRadius: 12,
  background: "#ffffff",
  color: "#0f2a1d",
  fontWeight: 800,
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
  fontWeight: 800,
  textDecoration: "none",
  border: "1px solid rgba(255,255,255,0.45)",
};

// quick responsive fallback
const mq = window?.matchMedia?.("(max-width: 900px)")?.matches;
if (mq) {
  quickFacts.gridTemplateColumns = "1fr";
  ctaCard.flexDirection = "column";
  ctaCard.alignItems = "stretch";
  ctaButtons.justifyContent = "flex-start";
}