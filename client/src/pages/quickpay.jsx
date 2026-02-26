import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function QuickPay() {
  const navigate = useNavigate();

  // ✅ Replace these with real links (or remove methods you don’t want)
  const PAYPAL_URL = "PASTE_PAYPAL_LINK_HERE";
  const CASHAPP_URL = "PASTE_CASHAPP_LINK_HERE";
  const ZELLE_INSTRUCTIONS = "Zelle to: donations@yourmasjid.org";

  const presetAmounts = useMemo(() => [10, 25, 50, 100, 250, 500], []);
  const [frequency, setFrequency] = useState("one-time"); // one-time | monthly
  const [amount, setAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");

  const finalAmount = (() => {
    const n = customAmount.trim() ? Number(customAmount) : Number(amount);
    if (!Number.isFinite(n) || n <= 0) return 0;
    return Math.round(n * 100) / 100;
  })();

  function pickPreset(n) {
    setAmount(n);
    setCustomAmount("");
  }

  function go(url) {
    if (!finalAmount) return;
    if (!url || url.includes("PASTE_")) {
      alert("This payment method link isn't set yet.");
      return;
    }
    window.open(url, "_blank", "noreferrer");
  }

  return (
    <div style={{ padding: 24 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <button onClick={() => navigate("/donate")} style={backBtn}>
          ← Back
        </button>
        <h1 style={{ margin: 0, color: "#1e6b3a" }}>Quick Pay</h1>
      </div>

      <p style={{ maxWidth: 900, lineHeight: 1.6, marginTop: 12 }}>
        Choose an amount, then use your preferred payment method.
      </p>

      <div style={{ display: "grid", gap: 16, maxWidth: 900 }}>
        <div style={card}>
          <h2 style={h2}>Frequency</h2>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 10 }}>
            <Toggle active={frequency === "one-time"} onClick={() => setFrequency("one-time")} label="One-time" />
            <Toggle active={frequency === "monthly"} onClick={() => setFrequency("monthly")} label="Monthly" />
          </div>
          <p style={{ marginTop: 10, opacity: 0.85 }}>
            {frequency === "monthly"
              ? "Monthly donations are recurring through your payment provider."
              : "One-time donation."}
          </p>
        </div>

        <div style={card}>
          <h2 style={h2}>Amount</h2>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 10 }}>
            {presetAmounts.map((n) => (
              <button
                key={n}
                onClick={() => pickPreset(n)}
                style={{
                  ...amountBtn,
                  ...(customAmount === "" && amount === n ? amountBtnActive : {}),
                }}
              >
                ${n}
              </button>
            ))}
          </div>

          <div style={{ marginTop: 12, display: "grid", gap: 8, maxWidth: 260 }}>
            <label style={label}>Custom Amount</label>
            <input
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              placeholder="Enter amount"
              inputMode="decimal"
              style={input}
            />
            <small style={{ opacity: 0.8 }}>
              Final amount: <strong>${finalAmount || 0}</strong>
            </small>
          </div>
        </div>

        <div style={card}>
          <h2 style={h2}>Pay Now</h2>

          <p style={{ marginTop: 8, opacity: 0.85 }}>
            Pick a method to complete your donation.
          </p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
            <button
              onClick={() => go(PAYPAL_URL)}
              disabled={!finalAmount}
              style={{ ...primaryBtn, opacity: finalAmount ? 1 : 0.5 }}
            >
              PayPal / Card
            </button>

            <button
              onClick={() => go(CASHAPP_URL)}
              disabled={!finalAmount}
              style={{ ...secondaryBtn, opacity: finalAmount ? 1 : 0.5 }}
            >
              Cash App
            </button>
          </div>

          <div style={{ marginTop: 14 }}>
            <strong style={{ color: "#1e6b3a" }}>Zelle</strong>
            <div style={{ marginTop: 6, opacity: 0.9 }}>{ZELLE_INSTRUCTIONS}</div>
          </div>

          <small style={{ display: "block", marginTop: 12, opacity: 0.75 }}>
            Note: some payment portals may ask you to re-enter the amount. If you want the amount to carry over automatically,
            we can integrate Stripe Checkout later.
          </small>
        </div>
      </div>
    </div>
  );
}

function Toggle({ active, onClick, label }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 14px",
        borderRadius: 999,
        border: active ? "1px solid #1e6b3a" : "1px solid #cfe4d6",
        background: active ? "#1e6b3a" : "#e6f3eb",
        color: active ? "white" : "#1e6b3a",
        fontWeight: 800,
      }}
    >
      {label}
    </button>
  );
}

const card = {
  border: "1px solid #cfe4d6",
  borderRadius: 12,
  padding: 16,
  background: "#fff",
};

const h2 = { margin: 0, color: "#1e6b3a" };
const label = { display: "block", fontWeight: 800, marginBottom: 6, color: "#1e6b3a" };

const input = {
  width: "100%",
  padding: 12,
  borderRadius: 10,
  border: "1px solid #cfe4d6",
  outline: "none",
};

const amountBtn = {
  padding: "10px 14px",
  borderRadius: 10,
  border: "1px solid #cfe4d6",
  background: "#e6f3eb",
  color: "#1e6b3a",
  fontWeight: 900,
};

const amountBtnActive = {
  border: "1px solid #1e6b3a",
  background: "#1e6b3a",
  color: "white",
};

const primaryBtn = {
  padding: "12px 14px",
  borderRadius: 10,
  border: "1px solid #1e6b3a",
  background: "#1e6b3a",
  color: "white",
  fontWeight: 900,
  width: 160,
  cursor: "pointer",
};

const secondaryBtn = {
  padding: "12px 14px",
  borderRadius: 10,
  border: "1px solid #1e6b3a",
  background: "#ffffff",
  color: "#1e6b3a",
  fontWeight: 900,
  width: 160,
  cursor: "pointer",
};

const backBtn = {
  padding: "8px 10px",
  borderRadius: 10,
  border: "1px solid #cfe4d6",
  background: "#fff",
  cursor: "pointer",
};