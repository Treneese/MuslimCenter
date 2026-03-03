// client/src/pages/home/components/GetInvolved.jsx
import { useNavigate } from "react-router-dom";
import MapPanel from "./map";

export default function GetInvolved() {
  const navigate = useNavigate();

  return (
    <section style={wrap}>
      <div style={grid}>
        <div>
          <h2 style={h2}>Get Involved</h2>
          <p style={p}>
            Become a volunteer. Help support programs, events, and community outreach.
          </p>
          <button style={btn} onClick={() => navigate("/get-involved")}>
            Volunteer →
          </button>
        </div>

        <div style={card}>
          <div style={muted}>Contact</div>
          <MapPanel />
          <div style={line}>📍 1605 Davison St W,
Detroit, MI 48238</div>
          <div style={line}>📞 (313) 883-3330</div>
          <div style={line}>✉️ contact@themuslimcenter.com</div>
        </div>
      </div>
    </section>
  );
}

const wrap = { maxWidth: 980, margin: "0 auto", padding: "0 24px 36px" };
const grid = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, alignItems: "start" };

const h2 = { margin: 0, color: "#123f2a", fontSize: 26 };
const p = { marginTop: 8, color: "#374151", lineHeight: 1.6 };

const btn = {
  marginTop: 10,
  padding: "10px 14px",
  borderRadius: 10,
  border: "1px solid #cfe4d6",
  background: "#e6f3eb",
  color: "#123f2a",
  fontWeight: 800,
  cursor: "pointer",
};

const card = {
  border: "1px solid #cfe4d6",
  borderRadius: 16,
  padding: 16,
  background: "white",
};

const muted = { color: "#6b7280", fontWeight: 700 };
const line = { marginTop: 8, color: "#1f2937", fontWeight: 600 };
const tiny = { marginTop: 10, color: "#6b7280", fontSize: 12 };