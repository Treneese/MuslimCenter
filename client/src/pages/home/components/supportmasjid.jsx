// client/src/pages/home/components/SupportMasjid.jsx
import { useNavigate } from "react-router-dom";

export default function SupportMasjid() {
  const navigate = useNavigate();

  return (
    <section style={wrap}>
      <h2 style={h2}>Support Your Masjid</h2>
      <p style={p}>Building a stronger community together.</p>

      <div style={card}>
        <div style={row}>
          <div>
            <div style={big}>$0</div>
            <div style={muted}>Raised (hook up later)</div>
          </div>

          <button style={btn} onClick={() => navigate("/donate")}>
            Donate Now →
          </button>
        </div>

        <div style={barOuter}>
          <div style={barInner} />
        </div>

        <div style={mutedSmall}>
          We’ll connect the raised amount + goal during the donations phase.
        </div>
      </div>
    </section>
  );
}

const wrap = { maxWidth: 980, margin: "0 auto", padding: "26px 24px" };
const h2 = { margin: 0, color: "#123f2a", fontSize: 26 };
const p = { marginTop: 8, color: "#374151", lineHeight: 1.6 };

const card = {
  marginTop: 14,
  border: "1px solid #cfe4d6",
  borderRadius: 16,
  padding: 16,
  background: "white",
};

const row = { display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", alignItems: "center" };
const big = { fontSize: 28, fontWeight: 900, color: "#123f2a" };
const muted = { color: "#6b7280", fontWeight: 600 };
const mutedSmall = { marginTop: 10, color: "#6b7280", fontSize: 12 };

const btn = {
  padding: "10px 14px",
  borderRadius: 10,
  border: "1px solid #cfe4d6",
  background: "#123f2a",
  color: "white",
  fontWeight: 800,
  cursor: "pointer",
};

const barOuter = { marginTop: 12, height: 10, background: "#e6f3eb", borderRadius: 999, overflow: "hidden" };
const barInner = { width: "0%", height: "100%", background: "#123f2a" };