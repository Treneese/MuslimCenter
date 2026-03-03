import { Link } from "react-router-dom";

export default function SectionCards({ items = [] }) {
  return (
    <div style={{ display: "grid", gap: 16, maxWidth: 980 }}>
      {items.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          style={{
            textDecoration: "none",
            color: "inherit",
            border: "1px solid #c7d7cc",
            background: "#fff",
            borderRadius: 14,
            padding: 18,
            display: "grid",
            gap: 6,
          }}
        >
          <div style={{ fontSize: 18, fontWeight: 800, color: "#1e6b3a" }}>
            {item.title}
          </div>
          {item.subtitle ? (
            <div style={{ color: "#2c3e2f", opacity: 0.9 }}>
              {item.subtitle}
            </div>
          ) : null}
          <div style={{ marginTop: 6, fontWeight: 700, color: "#1e6b3a" }}>
            View →
          </div>
        </Link>
      ))}
    </div>
  );
}