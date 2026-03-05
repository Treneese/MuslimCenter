import { Link } from "react-router-dom";
import { useState } from "react";

export default function SectionCards({ items = [] }) {
  return (
    <div style={grid}>
      {items.map((item) => (
        <SectionCard key={item.to} item={item} />
      ))}
    </div>
  );
}

function SectionCard({ item }) {
  const [hover, setHover] = useState(false);

  return (
    <Link
      to={item.to}
      style={{
        ...card,
        ...(hover ? cardHover : {}),
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div>
        <h3 style={title}>{item.title}</h3>
        {item.subtitle && <p style={subtitle}>{item.subtitle}</p>}
      </div>

      <div style={footer}>
        <span style={cta}>View</span>
        <span style={arrow}>→</span>
      </div>
    </Link>
  );
}

/* styles */

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: 14,
};

const card = {
  textDecoration: "none",
  color: "inherit",
  background: "#ffffff",
  border: "1px solid rgba(0,0,0,0.08)",
  borderRadius: 18,
  padding: 16,
  boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
  transition: "transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  minHeight: 120,
};

const cardHover = {
  transform: "translateY(-2px)",
  boxShadow: "0 14px 30px rgba(0,0,0,0.08)",
  borderColor: "rgba(30,107,58,0.25)",
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
  fontWeight: 800,
};

const cta = { fontSize: 14 };
const arrow = { fontSize: 18 };

/* quick responsive fallback */
const mq = window?.matchMedia?.("(max-width: 900px)")?.matches;
if (mq) {
  grid.gridTemplateColumns = "1fr";
}