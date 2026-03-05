import { useEffect, useRef, useState } from "react";
import PersonCard from "../../component/personcard";


export default function History() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef(null);

  // open/close helpers
  function openModal() {
    setOpen(true);
  }
  function closeModal() {
    setOpen(false);
  }

  // ESC to close + prevent background scroll
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") closeModal();
    }
    if (open) {
      document.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
      // focus dialog after open
      setTimeout(() => dialogRef.current?.focus?.(), 0);
    } else {
      document.body.style.overflow = "";
    }

   

    
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  // click on overlay to close
  function onOverlayClick(e) {
    if (e.target === e.currentTarget) closeModal();
  }

  return (
    <div className="page">
      <header style={header}>
        <div style={badge}>History</div>

        <h1 className="pageTitle" style={{ marginBottom: 10 }}>
          Our Story & Legacy
        </h1>

        <p className="pageSubtitle" style={{ ...subtitle, maxWidth: 920 }}>
          The Muslim Center Mosque &amp; Community Center was incorporated in January 1985
          as a mosque dedicated to the pure worship of Allah and the inclusion of Muslims of
          all races, cultures, and ethnic groups.
        </p>

        <div style={quickFacts}>
          <div style={factCard}>
            <div style={factLabel}>Founded</div>
            <div style={factValue}>January 1985</div>
          </div>
          <div style={factCard}>
            <div style={factLabel}>Purpose</div>
            <div style={factValue}>Worship • Learning • Community Care</div>
          </div>
          <div style={factCard}>
            <div style={factLabel}>Approach</div>
            <div style={factValue}>Outreach • Cooperation • Service</div>
          </div>
        </div>

        <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
          <button type="button" onClick={openModal} style={btnPrimaryDark}>
            Read Full History
          </button>

          <a href="/about" style={btnGhostDark}>
            Back to About
          </a>
        </div>
      </header>

      <section style={section}>
        <h2 style={sectionTitle}>A Legacy of Leadership</h2>
        <p style={bodyText}>
          At the Muslim Center, we identify with the leadership of Imam W. Deen Mohammed and
          the mission to strengthen worship, knowledge, and service in our community.
        </p>
      </section>

      <section style={section}>
        <h2 style={sectionTitle}>Our Aim</h2>
        <p style={bodyText}>
          Our aim is to “Remake the World” by strengthening character, uplifting families,
          and building a safer, healthier community—especially for our youth.
        </p>
      </section>
       <PersonCard
  name="Imam Khalil"
  image="/../../assets/khalil.webp"
  description="Imam Khalil has served the community through teaching, outreach, and spiritual leadership..."
/>

<PersonCard
  name="Imam Abdullah El-Amin"
  title="Co-Founder of The Muslim Center Mosque & Community Center"
  image="/../../assets/abdullahel-amin.webp"
  description="Imam Abdullah El-Amin played a foundational role in establishing the Muslim Center..."
  reverse
/>

<PersonCard
  name="Imam W. Deen Mohammed"
  title="The Muslim American Spokesman for Human Salvation"
  image="/../../assets/momodouceesay.webp"
  description="Imam W. Deen Mohammed was one of the most influential Muslim leaders in American history..."
/>

      {/* ===== Modal Popup ===== */}
      {open && (
        <div style={overlay} onMouseDown={onOverlayClick} role="presentation">
          <div
            ref={dialogRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label="Full History"
            style={modal}
          >
            <div style={modalHeader}>
              <div>
                <div style={modalBadge}>Full History</div>
                <h2 style={modalTitle}>The Muslim Center Mosque &amp; Community Center</h2>
              </div>

              <button type="button" onClick={closeModal} style={closeBtn} aria-label="Close">
                ✕
              </button>
            </div>

            <div style={modalBody}>
              <p style={modalText}>
                The Muslim Center Mosque was incorporated in January 1985 as a Mosque dedicated
                to the pure worship of Allah and to the inclusion of Muslims of all races,
                cultures, and ethnic groups. We were a Mosque that has an aggressive outreach
                ministry designed to interact and cooperate with members of non-muslim community
                for the betterment of the whole society which we all share.
              </p>

              <p style={modalText}>
                At the Muslim center, we identify with the leadership of Imam W. Deen Mohammed,
                the son of the late leaders, the Honorable Elijah Muhammad. Imam W. D. Mohammed
                is credited with turning an entire nation of Muslims toward the pure teaching of
                the Holy Prophet Muhammad (Peace Be Upon Him) to whom the Holy Qur’an was
                revealed over 1,400 years ago.
              </p>

              <p style={modalText}>
                Our aim as Muslims is to “Remake the World.” We want to remake the world from
                the decadent state it is now in. We want to remove negative images of nudity,
                vulgarity, ignorance, and devilish behavior from our society—particularly from
                our youth.
              </p>

              <p style={modalText}>
                To this end we wish to work with people of good will, putting our common God
                first, above us all, to collectively improve our communities and society.
              </p>
            </div>

            <div style={modalFooter}>
              <button type="button" onClick={closeModal} style={btnPrimaryDark}>
                Close
              </button>
              <a href="/contact" style={btnGhostDark}>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ===== Styles ===== */

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

const factLabel = { fontSize: 12, color: "#55715f", fontWeight: 700, marginBottom: 6 };
const factValue = { fontSize: 14, color: "#1b1b1b", fontWeight: 700, lineHeight: 1.3 };

const section = {
  background: "#ffffff",
  borderRadius: 18,
  padding: "18px 18px",
  border: "1px solid #e3e3e3",
  marginBottom: 14,
};

const sectionTitle = { margin: 0, color: "#1e6b3a", fontSize: 20, letterSpacing: -0.2 };
const bodyText = { marginTop: 10, marginBottom: 0, lineHeight: 1.7, color: "#2b2b2b", maxWidth: 920 };

/* Buttons */
const btnPrimaryDark = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px 14px",
  borderRadius: 12,
  background: "#0f2a1d",
  color: "#ffffff",
  fontWeight: 800,
  textDecoration: "none",
  border: "1px solid rgba(15,42,29,0.6)",
  cursor: "pointer",
};

const btnGhostDark = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px 14px",
  borderRadius: 12,
  background: "transparent",
  color: "#0f2a1d",
  fontWeight: 800,
  textDecoration: "none",
  border: "1px solid rgba(15,42,29,0.25)",
};

/* Modal */
const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.55)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 16,
  zIndex: 9999,
};

const modal = {
  width: "min(920px, 100%)",
  background: "#ffffff",
  borderRadius: 18,
  border: "1px solid rgba(0,0,0,0.12)",
  boxShadow: "0 20px 70px rgba(0,0,0,0.35)",
  overflow: "hidden",
};

const modalHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: 12,
  padding: "16px 16px 10px",
  borderBottom: "1px solid #ececec",
  background: "#f7f7f7",
};

const modalBadge = {
  display: "inline-flex",
  fontSize: 12,
  fontWeight: 800,
  textTransform: "uppercase",
  letterSpacing: 0.3,
  color: "#1e6b3a",
  background: "#e6f3ea",
  border: "1px solid #cfe4d6",
  padding: "6px 10px",
  borderRadius: 999,
  marginBottom: 8,
};

const modalTitle = { margin: 0, fontSize: 20, letterSpacing: -0.2 };

const closeBtn = {
  border: "1px solid rgba(0,0,0,0.12)",
  background: "#ffffff",
  borderRadius: 12,
  width: 40,
  height: 40,
  cursor: "pointer",
  fontSize: 18,
  fontWeight: 900,
  lineHeight: "38px",
};

const modalBody = {
  padding: "14px 16px",
  maxHeight: "65vh",
  overflowY: "auto",
};

const modalText = {
  marginTop: 0,
  marginBottom: 12,
  lineHeight: 1.7,
  color: "#2b2b2b",
};

const modalFooter = {
  padding: "12px 16px 16px",
  borderTop: "1px solid #ececec",
  display: "flex",
  justifyContent: "flex-end",
  gap: 10,
  flexWrap: "wrap",
};

/* quick responsive fallback */
const mq = window?.matchMedia?.("(max-width: 900px)")?.matches;
if (mq) {
  quickFacts.gridTemplateColumns = "1fr";
}