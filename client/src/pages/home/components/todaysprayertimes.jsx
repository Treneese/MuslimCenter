import { useNavigate } from "react-router-dom";
import "../../../styles/home.css";

export default function TodaysPrayerTimes({ prayerTimes, loading, error }) {
  const navigate = useNavigate();

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
    <section className="todayPrayerSection">
      <div className="homeSectionHeader">
        <h2 className="homeSectionTitle">Today&apos;s Prayer Times</h2>
        <button className="homeLinkBtn" onClick={() => navigate("/prayer-times")} type="button">
          Details →
        </button>
      </div>

      {loading ? <p className="homeMuted">Loading…</p> : null}
      {error ? <p style={{ color: "crimson" }}>{error}</p> : null}

      {!loading && !error && (
        <div className="todayPrayerCard">
          {rows.map(([label, time]) => (
            <div key={label} className="todayPrayerRow">
              <div className="todayPrayerLabel">{label}</div>
              <div className="todayPrayerTime">{time || "—"}</div>
            </div>
          ))}
          {!prayerTimes ? <div className="homeMuted">No prayer times available.</div> : null}
        </div>
      )}
    </section>
  );
}