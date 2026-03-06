export default function Janazah() {
  const PARTNER_FUNERAL_HOME_URL = "https://www.rahmanfuneralhome.com/";

  return (
    <div className="page">
      <header style={header}>
        <div style={badge}>Service</div>

        <h1 className="pageTitle" style={{ marginBottom: 10 }}>
          Janazah Services
        </h1>

        <p className="pageSubtitle" style={{ ...subtitle, maxWidth: 920 }}>
          If you have experienced a loss, we are here to help guide you through the next steps.
          Please contact us as soon as possible so we can support your family with care and clarity.
        </p>

        <div style={quickFacts}>
          <div style={factCard}>
            <div style={factLabel}>Purpose</div>
            <div style={factValue}>Guidance & Support</div>
          </div>
          <div style={factCard}>
            <div style={factLabel}>Includes</div>
            <div style={factValue}>Janazah Prayer</div>
          </div>
          <div style={factCard}>
            <div style={factLabel}>Next Step</div>
            <div style={factValue}>Contact Us</div>
          </div>
        </div>
      </header>

      <section style={grid2}>
        <div style={card}>
          <h2 style={sectionTitle}>What to do first</h2>
          <ol style={olist}>
            <li style={li}>Contact the Muslim Center as soon as possible.</li>
            <li style={li}>We will guide your family on next steps and timing.</li>
            <li style={li}>We can coordinate with a funeral home as needed.</li>
            <li style={li}>We will confirm Janazah prayer details with your family.</li>
          </ol>

          <div style={buttonsRow}>
            <a href="/contact" style={btnPrimary}>Contact the Muslim Center</a>
          </div>
        </div>

        <div style={card}>
          <h2 style={sectionTitle}>What we provide</h2>
          <ul style={list}>
            <li style={li}>Janazah guidance and support for families</li>
            <li style={li}>Coordination for Janazah prayer announcements</li>
            <li style={li}>Religious guidance on the process and expectations</li>
            <li style={li}>Community support as your family navigates loss</li>
          </ul>

          <div style={note}>
            <strong style={{ color: "#0f2a1d" }}>Note:</strong>{" "}
            Specific arrangements can vary — please contact us so we can support you based on your needs.
          </div>
        </div>
      </section>

      <section style={card}>
        <h2 style={sectionTitle}>Janazah prayer overview</h2>
        <p style={bodyText}>
          Janazah is the funeral prayer performed for the deceased. It is a communal obligation and
          a moment of respect, mercy, and unity for the community.
        </p>

        <div style={miniGrid}>
          <div style={miniCard}>
            <div style={miniTitle}>How it works</div>
            <div style={miniText}>
              The congregation stands in rows, follows the Imam, and makes du’a for the deceased.
            </div>
          </div>

          <div style={miniCard}>
            <div style={miniTitle}>What to bring</div>
            <div style={miniText}>
              Modest attire. Arrive early if possible. Follow staff direction for organization and flow.
            </div>
          </div>

          <div style={miniCard}>
            <div style={miniTitle}>For family</div>
            <div style={miniText}>
              We will help coordinate details and communicate what your family should expect.
            </div>
          </div>
        </div>
      </section>

      {/* Partner Funeral Home (inspired by sister masjid, styled like MC) */}
      <section style={partnerWrap}>
        <div style={partnerCard}>
          <div>
            <h3 style={partnerTitle}>Partner Funeral Home</h3>
            <p style={partnerText}>
              For additional funeral services guidance, you may also contact our partner funeral home.
            </p>
            <div style={partnerName}>Rahman Funeral Home</div>
          </div>

          <a
            href={PARTNER_FUNERAL_HOME_URL}
            target="_blank"
            rel="noreferrer"
            style={partnerBtn}
          >
            Visit Funeral Services →
          </a>
        </div>
      </section>

      <section style={ctaWrap}>
        <div style={ctaCard}>
          <div>
            <h3 style={ctaTitle}>We’re here for your family.</h3>
            <p style={ctaText}>
              If you have any questions or need immediate guidance, reach out and we will help you.
            </p>
          </div>

          <div style={ctaButtons}>
            <a href="/contact" style={btnOnDark}>Contact</a>
            <a href="/donate" style={btnOnDarkOutline}>Donate</a>
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

const grid2 = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: 14,
  marginBottom: 14,
};

const card = {
  background: "#ffffff",
  borderRadius: 18,
  padding: "18px 18px",
  border: "1px solid #e3e3e3",
  marginBottom: 14,
  boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
};

const sectionTitle = { margin: 0, color: "#1e6b3a", fontSize: 20, letterSpacing: -0.2 };

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
};

const olist = {
  marginTop: 10,
  marginBottom: 0,
  paddingLeft: 18,
  color: "#2b2b2b",
  lineHeight: 1.7,
};

const li = { marginBottom: 8 };

const buttonsRow = {
  marginTop: 14,
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
  background: "#1e6b3a",
  color: "#fff",
  fontWeight: 900,
  textDecoration: "none",
  border: "1px solid rgba(0,0,0,0.06)",
};

const btnSecondary = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px 14px",
  borderRadius: 12,
  background: "transparent",
  color: "#1e6b3a",
  fontWeight: 900,
  textDecoration: "none",
  border: "1px solid rgba(30,107,58,0.35)",
};

const note = {
  marginTop: 14,
  background: "#f3f7f4",
  border: "1px solid #d9e4dd",
  borderRadius: 14,
  padding: 12,
  color: "rgba(0,0,0,0.75)",
  lineHeight: 1.6,
};

const miniGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: 12,
  marginTop: 14,
};

const miniCard = {
  background: "#ffffff",
  border: "1px solid rgba(0,0,0,0.08)",
  borderRadius: 14,
  padding: 12,
};

const miniTitle = { fontWeight: 900, color: "#0f2a1d", marginBottom: 6 };
const miniText = { color: "rgba(0,0,0,0.72)", lineHeight: 1.6 };

const partnerWrap = { marginTop: 0, marginBottom: 14 };

const partnerCard = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 14,
  flexWrap: "wrap",
  background: "#ffffff",
  border: "1px solid rgba(0,0,0,0.08)",
  borderRadius: 18,
  padding: 18,
  boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
};

const partnerTitle = { margin: 0, fontSize: 18, color: "#1e6b3a", fontWeight: 900 };
const partnerText = { margin: "8px 0 0", color: "rgba(0,0,0,0.72)", lineHeight: 1.6, maxWidth: 740 };
const partnerName = { marginTop: 10, fontWeight: 900, color: "#111" };

const partnerBtn = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px 14px",
  borderRadius: 12,
  background: "#1e6b3a",
  color: "#fff",
  fontWeight: 900,
  textDecoration: "none",
  border: "1px solid rgba(0,0,0,0.06)",
};

const ctaWrap = { marginTop: 4 };

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

const btnOnDark = {
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

const btnOnDarkOutline = {
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
if (mq) {
  quickFacts.gridTemplateColumns = "1fr";
  grid2.gridTemplateColumns = "1fr";
  miniGrid.gridTemplateColumns = "1fr";
}