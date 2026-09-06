import { useEffect, useState } from "react";
import "../styles/featurecards.css";
import { apiUrl, mediaUrl } from "../api";

export default function Programs() {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  async function load() {
    setErr("");
    setLoading(true);

    try {
      const res = await fetch(apiUrl("/api/programs"));
      const data = await res.json().catch(() => []);
      if (!res.ok) throw new Error(data?.error || "Failed to load programs");
      setPrograms(Array.isArray(data) ? data : []);
    } catch (e) {
      setErr(e.message || "Failed to load programs");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="page featurePage">
      <section className="learnHero">
        <p className="learnEyebrow">Programs</p>
        <h1 className="pageTitle">Programs</h1>
        <p className="pageSubtitle featureIntro">
          Explore our ongoing programs for youth, families, and the wider
          community.
        </p>
      </section>

      {loading && <p className="featureStatus">Loading...</p>}
      {err && <p className="featureError">{err}</p>}

      <div className="featureGrid">
        {programs.map((p) => (
          <article key={p.id} className="featureCard">
            {p.image_url ? (
              <img
                src={mediaUrl(p.image_url)}
                alt={p.title || "Program image"}
                className="featureCardImage"
                onError={(ev) => {
                  ev.currentTarget.style.display = "none";
                }}
              />
            ) : (
              <div className="featureCardPlaceholder">
                Program image coming soon
              </div>
            )}

            <div className="featureCardBody">
              <div className="featureCardTop">
                <h2>{p.title}</h2>
                {p.audience ? (
                  <span className="featureBadge">{p.audience}</span>
                ) : null}
              </div>

              <div className="featureMeta">
                {p.schedule ? <strong>{p.schedule}</strong> : <span>Schedule TBD</span>}
              </div>

              {p.description ? (
                <p className="featureText">{p.description}</p>
              ) : null}
            </div>
          </article>
        ))}

        {!loading && !err && programs.length === 0 && (
          <div className="featureEmptyCard">
            <p>No programs posted yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}