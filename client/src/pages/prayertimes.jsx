import { useEffect, useState } from "react";
import "../styles/prayertimes.css";

const prayerOrder = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

export default function PrayerTimes() {
  const [data, setData] = useState(null);
  const [err, setErr] = useState("");

  useEffect(() => {
    async function load() {
      try {
        setErr("");
        const res = await fetch("/api/prayer-times");
        const json = await res.json();
        if (!json.ok) throw new Error(json.error || "Failed to load");
        setData(json);
      } catch (e) {
        setErr(e.message);
      }
    }
    load();
  }, []);

  if (err) {
    return (
      <div className="page prayerPage">
        <div className="prayerStatusCard">
          <h1 className="pageTitle">Prayer Times</h1>
          <p className="prayerError">Error: {err}</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="page prayerPage">
        <div className="prayerStatusCard">
          <h1 className="pageTitle">Prayer Times</h1>
          <p className="prayerLoading">Loading prayer times...</p>
        </div>
      </div>
    );
  }

  const t = data.timings;

  const prayers = prayerOrder.map((name) => ({
    name,
    adhan: t[name]?.adhan || "--",
    iqamah: t[name]?.iqamah || "--",
  }));

  return (
    <div className="page prayerPage">
      <section className="prayerHero">
        <div className="prayerHeroText">
          <p className="prayerEyebrow">Daily Worship</p>
          <h1 className="pageTitle">Prayer Times</h1>
          <p className="pageSubtitle prayerSubtitle">
            Stay connected to your daily prayers with updated adhan and iqamah
            times for the Muslim Center community.
          </p>
          <p className="prayerLocation">
            {data.city}, {data.country} ({data.meta?.timezone})
          </p>
        </div>

        <div className="prayerHighlightCard">
          <div className="prayerHighlightLabel">Today’s Schedule</div>
          <div className="prayerHighlightValue">{prayers.length} Daily Prayers</div>
          <div className="prayerHighlightSource">Source: {data.source}</div>
        </div>
      </section>

      <section className="prayerMainCard">
        <div className="prayerTableHeader">
          <span>Prayer</span>
          <span>Adhan</span>
          <span>Iqamah</span>
        </div>

        {prayers.map((prayer) => (
          <div key={prayer.name} className="prayerRow">
            <div className="prayerNameWrap">
              <span className="prayerDot" />
              <span className="prayerName">{prayer.name}</span>
            </div>
            <span className="prayerTime">{prayer.adhan}</span>
            <span className="prayerTime">{prayer.iqamah}</span>
          </div>
        ))}
      </section>
    </div>
  );
}