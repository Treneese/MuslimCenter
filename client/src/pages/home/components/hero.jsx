// client/src/pages/home/components/Hero.jsx
import { useNavigate } from "react-router-dom";
import heroImg from "../../../assets/muslim center.webp"; 

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section style={{ ...wrap, backgroundImage: `url(${heroImg})` }}>
      {/* dark overlay */}
      <div style={overlay} />

      {/* content */}
      <div style={content}>
        <h1 style={title}>Detroit Muslim Community Center</h1>
        <p style={subtitle}>
          A welcoming mosque and gathering place for the Muslim community in Detroit.
        </p>

        <div style={ctaRow}>
          <button style={btnGold} onClick={() => navigate("/prayer-times")} type="button">
            Prayer Times
          </button>
          <button style={btnGreen} onClick={() => navigate("/programs")} type="button">
            Programs
          </button>
          <button style={btnTeal} onClick={() => navigate("/events")} type="button">
            Events
          </button>
          <button style={btnDark} onClick={() => navigate("/donate")} type="button">
            Donate
          </button>
        </div>
      </div>
    </section>
  );
}

const wrap = {
  position: "relative",
  height: 300, // ✅ shorter (try 280–320)
  display: "grid",
  alignItems: "center",
  justifyItems: "center",
  padding: "18px 24px", // ✅ tighter
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: 18,
  overflow: "hidden",
};

const overlay = {
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(180deg, rgba(0,0,0,0.62), rgba(0,0,0,0.45))",
};

const content = {
  position: "relative",
  zIndex: 1,
  width: "100%",
  maxWidth: 980,
  textAlign: "center",
  color: "white",
};

const title = {
  margin: 0,
  fontSize: 46,
  lineHeight: 1.05,
  letterSpacing: -1,
  textShadow: "0 10px 30px rgba(0,0,0,0.35)",
};

const subtitle = {
  margin: "12px auto 0",
  maxWidth: 820,
  lineHeight: 1.6,
  fontSize: 16,
  opacity: 0.92,
};

const ctaRow = {
  marginTop: 18,
  display: "flex",
  gap: 12,
  justifyContent: "center",
  flexWrap: "wrap",
};

const btnBase = {
  padding: "10px 14px",   // was 12px 18px
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.2)",
  fontWeight: 800,
  cursor: "pointer",
  color: "white",
};

const btnGold = { ...btnBase, background: "rgba(184, 134, 11, 0.75)" };
const btnGreen = { ...btnBase, background: "rgba(18, 63, 42, 0.75)" };
const btnTeal = { ...btnBase, background: "rgba(22, 101, 98, 0.72)" };
const btnDark = { ...btnBase, background: "rgba(17, 24, 39, 0.75)" };