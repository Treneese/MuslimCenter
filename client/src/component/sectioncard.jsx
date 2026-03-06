import { Link } from "react-router-dom";

export default function SectionCards({ items = [] }) {
  const isMobile = window?.matchMedia?.("(max-width: 900px)")?.matches;

  return (
    <div style={{ ...grid, gridTemplateColumns: isMobile ? "1fr" : "repeat(3, minmax(0, 1fr))" }}>
      {items.map((item) => (
        <Link key={item.to} to={item.to} style={card}>
          {/* image header (optional) */}
          {item.image ? (
            <div style={mediaWrap}>
              <img src={item.image} alt={item.title} style={mediaImg} />
              <div style={mediaOverlay} />
            </div>
          ) : (
            <div style={mediaFallback}>
              <div style={badgeRow}>
                {item.meta && <span style={badge}>{item.meta}</span>}
              </div>
              <div style={fallbackIcon}>MC</div>
            </div>
          )}

          <div style={body}>
            {item.meta && item.image && (
              <div style={badgeRow}>
                <span style={badge}>{item.meta}</span>
              </div>
            )}

            <h3 style={title}>{item.title}</h3>

            {item.subtitle && <p style={subtitle}>{item.subtitle}</p>}

            <div style={footer}>
              <span style={cta}>View</span>
              <span style={arrow}>→</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

/* styles */
const grid = {
  display: "grid",
  gap: 14,
};

const card = {
  textDecoration: "none",
  color: "inherit",
  background: "#fff",
  border: "1px solid rgba(0,0,0,0.08)",
  borderRadius: 18,
  overflow: "hidden",
  boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
  transition: "transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease",
};

const mediaWrap = {
  position: "relative",
  height: 150,
  background: "#f3f3f3",
};

const mediaImg = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
};

const mediaOverlay = {
  position: "absolute",
  inset: 0,
  background: "linear-gradient(to top, rgba(0,0,0,0.35), rgba(0,0,0,0))",
};

const mediaFallback = {
  height: 150,
  background: "#f1f6f3",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
};

const fallbackIcon = {
  width: 54,
  height: 54,
  borderRadius: 14,
  background: "#ffffff",
  border: "1px solid rgba(30,107,58,0.22)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 900,
  color: "#1e6b3a",
  letterSpacing: 0.5,
};

const body = {
  padding: 16,
};

const badgeRow = {
  display: "flex",
  gap: 8,
  position: "absolute",
  top: 10,
  left: 10,
};

const badge = {
  fontSize: 12,
  fontWeight: 800,
  color: "#1e6b3a",
  background: "#e6f3ea",
  border: "1px solid #cfe4d6",
  padding: "6px 10px",
  borderRadius: 999,
};

const title = {
  margin: 0,
  fontSize: 18,
  letterSpacing: -0.2,
};

const subtitle = {
  margin: "10px 0 0",
  color: "rgba(0,0,0,0.68)",
  lineHeight: 1.5,
};

const footer = {
  marginTop: 14,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "#1e6b3a",
  fontWeight: 900,
};

const cta = { fontSize: 14 };
const arrow = { fontSize: 18 };