import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FALLBACK_MOHID_URL =
  "https://us.mohid.co/mi/detroit/mcd/masjid/online/donation";

export default function Donate() {
  const navigate = useNavigate();

  const MOHID_DONATE_URL =
    import.meta.env.VITE_MOHID_DONATE_URL || FALLBACK_MOHID_URL;

  if (!MOHID_DONATE_URL) {
    return (
      <div className="page">
        <h1 className="pageTitle">Donate</h1>
        <p className="pageSubtitle">
          MOHID link is missing. Add <code>VITE_MOHID_DONATE_URL</code> to{" "}
          <code>client/.env</code> and restart the dev server.
        </p>
      </div>
    );
  }


  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ marginTop: 0, color: "#1e6b3a" }}>Donate</h1>

      <p style={{ maxWidth: 900, lineHeight: 1.6 }}>
        Your donation helps sustain the masjid, programs, and services. May Allah
        reward you.
      </p>

      <div style={{ display: "grid", gap: 14, maxWidth: 760 }}>
        <div style={card}>
          <h2 style={h2}>Option 1: Donate Online</h2>
          <p style={p}>
            Use our secure official donation portal for one-time or recurring giving.
          </p>
         <button
          onClick={() => window.location.href = MOHID_DONATE_URL}
          style={primaryBtn}
        >
          Donate Now
        </button>
        </div>

        <div style={card}>
          <h2 style={h2}>Option 2: Quick Pay</h2>
          <p style={p}>
            Choose an amount and complete your donation with a fast mobile method.
          </p>
          <button onClick={() => navigate("/quickpay")} style={secondaryBtn}>
            Quick Pay
          </button>
        </div>
      </div>
    </div>
  );
}

/* ✅ put these back (your originals) */
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