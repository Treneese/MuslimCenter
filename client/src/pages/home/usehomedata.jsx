// client/src/pages/home/useHomeData.js
import { useEffect, useState } from "react";

export default function useHomeData() {
  const [events, setEvents] = useState([]);
  const [prayerTimes, setPrayerTimes] = useState(null);

  const [loadingEvents, setLoadingEvents] = useState(true);
  const [loadingPrayer, setLoadingPrayer] = useState(true);

  const [eventsError, setEventsError] = useState("");
  const [prayerError, setPrayerError] = useState("");

  useEffect(() => {
    let alive = true;

    async function loadEvents() {
      setLoadingEvents(true);
      setEventsError("");
      try {
        const res = await fetch("/api/events");
        const data = await res.json().catch(() => []);
        if (!res.ok) throw new Error(data?.error || "Failed to load events");

        const list = Array.isArray(data) ? data : [];
        if (alive) setEvents(list.slice(0, 4)); // ✅ A: newest 4
      } catch (e) {
        if (alive) setEventsError(e.message || "Failed to load events");
      } finally {
        if (alive) setLoadingEvents(false);
      }
    }

    async function loadPrayerTimes() {
      setLoadingPrayer(true);
      setPrayerError("");
      try {
        // ✅ Change this endpoint if yours is different
        const res = await fetch("/api/prayer-times");
        const data = await res.json().catch(() => null);
        if (!res.ok) throw new Error(data?.error || "Failed to load prayer times");
        if (alive) setPrayerTimes(data);
      } catch (e) {
        if (alive) setPrayerError(e.message || "Failed to load prayer times");
      } finally {
        if (alive) setLoadingPrayer(false);
      }
    }

    loadEvents();
    loadPrayerTimes();

    return () => {
      alive = false;
    };
  }, []);

  return {
    events,
    prayerTimes,
    loadingEvents,
    loadingPrayer,
    eventsError,
    prayerError,
  };
}