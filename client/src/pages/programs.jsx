import { useEffect, useState } from "react";

export default function Programs() {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  async function load() {
    setErr("");
    setLoading(true);
    try {
      const res = await fetch("/api/programs");
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
    <div style={{ padding: 24 }}>
      <h1 style={{ marginTop: 0, color: "#1e6b3a" }}>Programs</h1>
      <p style={{ maxWidth: 820, lineHeight: 1.6 }}>
        Explore our ongoing programs for youth, families, and the community.
      </p>

      {loading && <p>Loading…</p>}
      {err && <p style={{ color: "crimson" }}>{err}</p>}

      <div style={grid}>
        {programs.map((p) => (
          <div key={p.id} style={card}>
            {p.image_url ? (
              <img
                src={p.image_url}
                alt={p.title || "Program image"}
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
                <h2 style={{ margin: 0, color: "#1e6b3a", fontSize: 18 }}>{p.title}</h2>
                {p.audience ? <span style={pill}>{p.audience}</span> : null}
              </div>

              <div style={{ marginTop: 8, opacity: 0.85 }}>
                {p.schedule ? <strong>{p.schedule}</strong> : <span>Schedule TBD</span>}
              </div>

              {p.description ? (
                <p style={{ marginTop: 10, lineHeight: 1.6, opacity: 0.95 }}>{p.description}</p>
              ) : null}
            </div>
          </div>
        ))}

        {!loading && !err && programs.length === 0 && (
          <div style={card}>
            <div style={{ padding: 16 }}>
              <p style={{ margin: 0 }}>No programs posted yet.</p>
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