import { useEffect, useState } from "react";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    async function load() {
      setErr("");
      setLoading(true);
      try {
        const res = await fetch("/api/events");
        const data = await res.json().catch(() => []);
        if (!res.ok) throw new Error(data?.error || "Failed to load events");
        setEvents(Array.isArray(data) ? data : []);
      } catch (e) {
        setErr(e.message || "Failed to load events");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ marginTop: 0, color: "#1e6b3a" }}>Events</h1>
      <p style={{ maxWidth: 820, lineHeight: 1.6 }}>
        Stay connected—join weekly programs, special events, and community gatherings.
      </p>

      {loading && <p>Loading…</p>}
      {err && <p style={{ color: "crimson" }}>{err}</p>}

      <div style={grid}>
        {events.map((e) => (
          <div key={e.id} style={card}>
            {/* Image */}
            {e.image_url ? (
              <img
                src={e.image_url}
                alt={e.title || "Event image"}
                style={cardImg}
                onError={(ev) => {
                  ev.currentTarget.style.display = "none";
                }}
              />
            ) : (
              <div style={imgPlaceholder} />
            )}

            <div style={{ padding: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                <h2 style={{ margin: 0, color: "#1e6b3a", fontSize: 18 }}>{e.title}</h2>
                {e.category ? <span style={pill}>{e.category}</span> : null}
              </div>

              <div style={{ marginTop: 8, opacity: 0.85 }}>
                <strong>
                  {(e.day || "").trim() || "TBD"}
                  {" • "}
                  {(e.time || "").trim() || "TBD"}
                </strong>
              </div>

              {e.location ? <div style={{ marginTop: 6, opacity: 0.85 }}>📍 {e.location}</div> : null}

              {e.description ? (
                <p style={{ marginTop: 10, lineHeight: 1.6, opacity: 0.95 }}>{e.description}</p>
              ) : null}

              {e.is_special ? (
                <div style={{ marginTop: 10, display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <span style={tag}>⭐ Special</span>
                  {e.rsvp_enabled ? <span style={tag}>RSVP Available</span> : null}
                </div>
              ) : null}
            </div>
          </div>
        ))}

        {!loading && !err && events.length === 0 && (
          <div style={card}>
            <div style={{ padding: 16 }}>
              <p style={{ margin: 0 }}>No events posted yet.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const grid = {
  display: "grid",
  gap: 14,
  maxWidth: 980,
};

const card = {
  border: "1px solid #cfe4d6",
  borderRadius: 14,
  overflow: "hidden",
  background: "#fff",
  boxShadow: "0 1px 0 rgba(0,0,0,0.02)",
};

const cardImg = {
  width: "100%",
  height: 180,
  objectFit: "cover",
  display: "block",
  background: "#f3f4f6",
};

const imgPlaceholder = {
  width: "100%",
  height: 180,
  background: "#f3f4f6",
};

const pill = {
  background: "#e6f3eb",
  border: "1px solid #cfe4d6",
  padding: "6px 10px",
  borderRadius: 999,
  color: "#1e6b3a",
  fontWeight: 700,
  fontSize: 12,
  height: "fit-content",
};

const tag = {
  background: "#f3f4f6",
  border: "1px solid #e5e7eb",
  padding: "6px 10px",
  borderRadius: 999,
  fontSize: 12,
  fontWeight: 600,
};