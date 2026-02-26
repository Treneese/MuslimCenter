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
      const data = await res.json();
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

      <div style={{ display: "grid", gap: 14, maxWidth: 980 }}>
        {programs.map((p) => (
          <div key={p.id} style={card}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
              <h2 style={{ margin: 0, color: "#1e6b3a" }}>{p.title}</h2>
              {p.audience && <span style={pill}>{p.audience}</span>}
            </div>

            <div style={{ marginTop: 8, opacity: 0.85 }}>
              {p.schedule ? <strong>{p.schedule}</strong> : <span>Schedule TBD</span>}
            </div>

            {p.description && <p style={{ marginTop: 10, lineHeight: 1.6 }}>{p.description}</p>}
          </div>
        ))}

        {!loading && !err && programs.length === 0 && (
          <div style={card}>
            <p style={{ margin: 0 }}>No programs posted yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}

const card = {
  border: "1px solid #cfe4d6",
  borderRadius: 12,
  padding: 16,
  background: "#fff",
};

const pill = {
  background: "#e6f3eb",
  border: "1px solid #cfe4d6",
  padding: "6px 10px",
  borderRadius: 999,
  color: "#1e6b3a",
  fontWeight: 600,
  fontSize: 12,
};
