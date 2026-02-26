import { useEffect, useState } from "react";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError("");

        const res = await fetch("/api/events"); // Vite proxy -> Flask
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);

        const data = await res.json();
        setEvents(data);
      } catch (err) {
        setError(err.message || "Failed to load events");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return (
    <div style={{ padding: "24px" }}>
      <h1 style={{ marginTop: 0 }}>Events</h1>

      {loading && <p>Loading events…</p>}
      {error && <p style={{ color: "crimson" }}>{error}</p>}

      {!loading && !error && (
        <div style={{ display: "grid", gap: 12, maxWidth: 720 }}>
          {events.map((e) => (
            <div
              key={e.id}
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: 12,
                padding: 16,
                background: "white",
              }}
            >
              <div style={{ fontSize: 18, fontWeight: 700 }}>{e.title}</div>
              <div style={{ marginTop: 6, color: "#4b5563" }}>
                {e.date} • {e.time} • {e.location}
              </div>
              <div style={{ marginTop: 10 }}>
                <span
                  style={{
                    display: "inline-block",
                    padding: "4px 10px",
                    borderRadius: 999,
                    background: "#eef2ff",
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  {e.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}