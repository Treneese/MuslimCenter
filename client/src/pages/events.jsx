import { useEffect, useState } from "react";
import "../styles/featurecards.css";

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
    <div className="page featurePage">
      <h1 className="pageTitle">Events</h1>
      <p className="pageSubtitle featureIntro">
        Stay connected—join weekly programs, special events, and community gatherings.
      </p>

      {loading && <p className="featureStatus">Loading...</p>}
      {err && <p className="featureError">{err}</p>}

      <div className="featureGrid">
        {events.map((e) => (
          <article key={e.id} className="featureCard">
            {e.image_url ? (
              <img
                src={e.image_url}
                alt={e.title || "Event image"}
                className="featureCardImage"
                onError={(ev) => {
                  ev.currentTarget.style.display = "none";
                }}
              />
            ) : (
              <div className="featureCardPlaceholder">Event image coming soon</div>
            )}

            <div className="featureCardBody">
              <div className="featureCardTop">
                <h2>{e.title}</h2>
                {e.category ? (
                  <span className="featureBadge">{e.category}</span>
                ) : null}
              </div>

              <div className="featureMeta">
                <strong>
                  {(e.day || "").trim() || "TBD"} {" • "} {(e.time || "").trim() || "TBD"}
                </strong>
              </div>

              {e.location ? (
                <div className="featureLocation">📍 {e.location}</div>
              ) : null}

              {e.description ? (
                <p className="featureText">{e.description}</p>
              ) : null}

              {(e.is_special || e.rsvp_enabled) && (
                <div className="featureTags">
                  {e.is_special ? <span className="featureTag">⭐ Special</span> : null}
                  {e.rsvp_enabled ? <span className="featureTag">RSVP Available</span> : null}
                </div>
              )}
            </div>
          </article>
        ))}

        {!loading && !err && events.length === 0 && (
          <div className="featureEmptyCard">
            <p>No events posted yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}