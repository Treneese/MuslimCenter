import { useEffect, useState } from "react";

export default function PrayerTimes() {
  const [data, setData] = useState(null);
  const [err, setErr] = useState("");

  useEffect(() => {
    async function load() {
      try {
        setErr("");
        const res = await fetch("/api/prayer-times"); // Vite proxy handles this
        const json = await res.json();
        if (!json.ok) throw new Error(json.error || "Failed to load");
        setData(json);
      } catch (e) {
        setErr(e.message);
      }
    }
    load();
  }, []);

  if (err) return <div style={{ padding: 24 }}>Error: {err}</div>;
  if (!data) return <div style={{ padding: 24 }}>Loading...</div>;

  const t = data.timings;

  return (
    <div style={{ padding: 24 }}>
      <h1>Prayer Times</h1>
      <p>{data.city}, {data.country} ({data.meta?.timezone})</p>

<ul>
  <li>Fajr: Adhan {t.Fajr.adhan} • Iqamah {t.Fajr.iqamah}</li>
  <li>Dhuhr: Adhan {t.Dhuhr.adhan} • Iqamah {t.Dhuhr.iqamah}</li>
  <li>Asr: Adhan {t.Asr.adhan} • Iqamah {t.Asr.iqamah}</li>
  <li>Maghrib: Adhan {t.Maghrib.adhan} • Iqamah {t.Maghrib.iqamah}</li>
  <li>Isha: Adhan {t.Isha.adhan} • Iqamah {t.Isha.iqamah}</li>
</ul>

      <small>Source: {data.source}</small>
    </div>
  );
}
