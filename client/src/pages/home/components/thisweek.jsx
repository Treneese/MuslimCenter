import { useNavigate } from "react-router-dom";


function withFallback(url) {
  return url && String(url).trim() ? String(url).trim() : null;
}

export default function ThisWeek({ events = [], loading, error }) {
  const navigate = useNavigate();
  const list = Array.isArray(events) ? events.slice(0, 4) : [];
  

  return (
    <section style={wrap}>
      <div style={titleRow}>
        <h2 style={h2}>This Week</h2>
        <button style={cta} onClick={() => navigate("/events")} type="button">
          View Full Calendar →
        </button>
      </div>

      {loading ? <p style={muted}>Loading…</p> : null}
      {error ? <p style={{ color: "crimson" }}>{error}</p> : null}

      {!loading && !error && (
        <div style={{ ...grid, gridTemplateColumns: isNarrow ? "1fr" : grid.gridTemplateColumns }}>
          {list.map((e) => {
            const imgUrl = withFallback(e.image_url);
            return (
              <div key={e.id} style={card}>
        
                {imgUrl ? (
                    <div style={imgWrap}>
                        <img src={imgUrl} alt={e.title} style={img} />
                        </div>
                ) : null}

                <div style={cardBody}>
                  <div style={cardTitle}>{e.title}</div>

                  <div style={meta}>
                    {(e.day || "").trim() ? `${e.day} • ` : ""}
                    {e.time || "Time TBD"}
                  </div>

                  <button
                    type="button"
                    style={miniLink}
                    onClick={() => navigate("/calendar")}
                  >
                    View Full Calendar →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

const wrap = {
  padding: 0,
};

const titleRow = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 12,
  flexWrap: "wrap",
};

const h2 = {
  margin: 0,
  fontSize: 22,
  color: "#123f2a",
};

const cta = {
  border: "1px solid #cfe4d6",
  background: "#fff",
  color: "#123f2a",
  fontWeight: 800,
  padding: "10px 14px",
  borderRadius: 999,
  cursor: "pointer",
};

const grid = {
  marginTop: 12,
  display: "grid",
  gap: 14,
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
};

const card = {
  border: "1px solid #cfe4d6",
  background: "#fff",
  borderRadius: 16,
  overflow: "hidden",
  display: "grid",
  gridTemplateRows: "150px auto",
};

const imgStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
};

const imgPlaceholder = {
  color: "#6b7280",
  fontWeight: 700,
  fontSize: 12,
};

const cardBody = {
  padding: 14,
  display: "grid",
  gap: 8,
};

const cardTitle = {
  fontWeight: 900,
  color: "#123f2a",
};

const meta = {
  color: "#374151",
  fontWeight: 700,
  fontSize: 13,
};

const miniLink = {
  marginTop: 6,
  border: "none",
  background: "transparent",
  color: "#123f2a",
  fontWeight: 900,
  cursor: "pointer",
  padding: 0,
  textAlign: "left",
};

const muted = {
  color: "#6b7280",
};

const isNarrow = window.innerWidth < 900;

const imgWrap = {
  width: "100%",
  height: 150,
  overflow: "hidden",
  background: "#f3f4f6",
};

const img = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
};