// client/src/pages/home/components/TodaysPrayerTimes.jsx
import { useNavigate } from "react-router-dom";

export default function TodaysPrayerTimes({ prayerTimes, loading, error }) {
  const navigate = useNavigate();

  // Adjust these keys to match your API response shape
  const rows = prayerTimes
    ? [
        ["Fajr", prayerTimes.fajr],
        ["Dhuhr", prayerTimes.dhuhr],
        ["Asr", prayerTimes.asr],
        ["Maghrib", prayerTimes.maghrib],
        ["Isha", prayerTimes.isha],
      ]
    : [];

  return (
    <section style={section}>
      <div style={headerRow}>
        <h2 style={h2}>Today&apos;s Prayer Times</h2>
        <button style={linkBtn} onClick={() => navigate("/prayer-times")} type="button">
          Details →
        </button>
      </div>

      {loading ? <p style={muted}>Loading…</p> : null}
      {error ? <p style={{ color: "crimson" }}>{error}</p> : null}

      {!loading && !error && (
        <div style={card}>
          {rows.map(([label, time]) => (
            <div key={label} style={row}>
              <div style={rowLabel}>{label}</div>
              <div style={rowTime}>{time || "—"}</div>
            </div>
          ))}
          {!prayerTimes ? <div style={muted}>No prayer times available.</div> : null}
        </div>
      )}
    </section>
  );
}

const section = {
  padding: 0,          // ✅ no extra padding inside the grid
  maxWidth: "none",    // ✅ let the grid control width
  margin: 0,
};

const headerRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 12,
  flexWrap: "wrap",
  paddingTop: 0,
};

const h2 = {
  margin: 0,
  color: "#123f2a",
  fontSize: 22,
};

const linkBtn = {
  border: "none",
  background: "transparent",
  color: "#123f2a",
  fontWeight: 700,
  cursor: "pointer",
  padding: 8,
};

const card = {
  marginTop: 12,
  border: "1px solid #cfe4d6",
  background: "white",
  borderRadius: 14,
  padding: 12,
  maxWidth: 520,
};

const row = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 12px",
  borderRadius: 12,
  border: "1px solid #e5e7eb",
  marginBottom: 10,
};

const rowLabel = {
  fontWeight: 800,
  color: "#123f2a",
};

const rowTime = {
  fontWeight: 800,
  color: "#374151",
};

const muted = {
  color: "#6b7280",
};