// client/src/pages/home/components/Hero.jsx
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section style={wrap}>
      <h1 style={title}>Welcome to the Muslim Center</h1>
      <p style={subtitle}>
        A mosque and community hub for prayer, learning, service, and connection.
        Join us for daily salah, Jumu’ah, programs, and events for the whole family.
      </p>

      <div style={ctaRow}>
        <button style={btnPrimary} onClick={() => navigate("/prayer-times")}>
          Prayer Times
        </button>
        <button style={btn} onClick={() => navigate("/donate")}>
          Donate
        </button>
        <button style={btnSoft} onClick={() => navigate("/events")}>
          View Events
        </button>
      </div>
    </section>
  );
}

const wrap = {
  padding: 24,
  maxWidth: 980,
  margin: "0 auto",
};

const title = {
  margin: 0,
  fontSize: 52,
  lineHeight: 1.05,
  letterSpacing: -1,
  color: "#1e6b3a",
};

const subtitle = {
  marginTop: 10,
  maxWidth: 820,
  lineHeight: 1.6,
  fontSize: 16,
  color: "#1f2937",
};

const ctaRow = {
  display: "flex",
  gap: 12,
  flexWrap: "wrap",
  marginTop: 16,
};

const btnBase = {
  padding: "10px 14px",
  borderRadius: 10,
  border: "1px solid #cfe4d6",
  fontWeight: 700,
  cursor: "pointer",
};

const btnPrimary = {
  ...btnBase,
  background: "#123f2a",
  borderColor: "#123f2a",
  color: "white",
};

const btn = {
  ...btnBase,
  background: "white",
  color: "#123f2a",
};

const btnSoft = {
  ...btnBase,
  background: "#e6f3eb",
  color: "#123f2a",
};