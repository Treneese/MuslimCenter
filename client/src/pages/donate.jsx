import { useNavigate } from "react-router-dom";

export default function Donate() {
  const navigate = useNavigate();

  // ✅ Replace with your real MOHID donation link
  const MOHID_URL = "PASTE_YOUR_MOHID_LINK_HERE";

  function openMohid() {
    if (!MOHID_URL || MOHID_URL.includes("PASTE_")) {
      alert("MOHID link is not set yet. Add it in Donate.jsx");
      return;
    }
    window.open(MOHID_URL, "_blank", "noreferrer");
  }

  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ marginTop: 0, color: "#1e6b3a" }}>Donate</h1>

      <p style={{ maxWidth: 900, lineHeight: 1.6 }}>
        Your donation helps sustain the masjid, programs, and services. May Allah reward you.
      </p>

      <div style={{ display: "grid", gap: 14, maxWidth: 760 }}>
        <div style={card}>
          <h2 style={h2}>Option 1: Donate via MOHID</h2>
          <p style={p}>Use the official MOHID donation portal.</p>
          <button onClick={openMohid} style={primaryBtn}>
            Donate on MOHID
          </button>
        </div>

        <div style={card}>
          <h2 style={h2}>Option 2: Quick Pay</h2>
          <p style={p}>
            Use our simple quick form to choose an amount and then select a fast payment method.
          </p>
          <button onClick={() => navigate("/quickpay")} style={secondaryBtn}>
            Quick Pay
          </button>
        </div>
      </div>
    </div>
  );
}

const card = {
  border: "1px solid #cfe4d6",
  borderRadius: 12,
  padding: 16,
  background: "#fff",
};

const h2 = { margin: 0, color: "#1e6b3a" };
const p = { margin: "8px 0 0 0", lineHeight: 1.6 };

const primaryBtn = {
  padding: "12px 14px",
  borderRadius: 10,
  border: "1px solid #1e6b3a",
  background: "#1e6b3a",
  color: "white",
  fontWeight: 900,
  width: 180,
  marginTop: 12,
};

const secondaryBtn = {
  padding: "12px 14px",
  borderRadius: 10,
  border: "1px solid #1e6b3a",
  background: "#ffffff",
  color: "#1e6b3a",
  fontWeight: 900,
  width: 180,
  marginTop: 12,
};