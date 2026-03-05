import { useState } from "react";

export default function LeadershipGridCard({
  name,
  role,
  image,
  blurb,
  onClick,
}) {
  const [hover, setHover] = useState(false);

  return (
    <button
      type="button"
      style={{ ...card, ...(hover ? cardHover : {}) }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      <div style={imgWrap}>
        <img src={image} alt={name} style={img} />
      </div>

      <div style={body}>
        <div style={nameStyle}>{name}</div>
        {role && <div style={roleStyle}>{role}</div>}
        {blurb && <div style={blurbStyle}>{blurb}</div>}

        <div style={footer}>
          <span style={cta}>View</span>
          <span style={arrow}>→</span>
        </div>
      </div>
    </button>
  );
}

/* styles */

const card = {
  width: "100%",
  textAlign: "left",
  cursor: "pointer",

  background: "#fff",
  border: "1px solid rgba(0,0,0,0.08)",
  borderRadius: 18,
  padding: 0,

  boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
  transition:
    "transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease",
  overflow: "hidden",
};

const cardHover = {
  transform: "translateY(-2px)",
  boxShadow: "0 14px 30px rgba(0,0,0,0.08)",
  borderColor: "rgba(30,107,58,0.25)",
};

const imgWrap = {
  width: "100%",
  height: 220,
  background: "#f2f2f2",
};

const img = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
};

const body = {
  padding: 14,
};

const nameStyle = {
  fontSize: 16,
  fontWeight: 900,
  letterSpacing: -0.2,
  marginBottom: 6,
};

const roleStyle = {
  fontSize: 13,
  fontWeight: 800,
  color: "#1e6b3a",
  marginBottom: 8,
};

const blurbStyle = {
  fontSize: 13,
  color: "rgba(0,0,0,0.68)",
  lineHeight: 1.5,
  minHeight: 40, // keeps cards even when blurbs differ
};

const footer = {
  marginTop: 12,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "#1e6b3a",
  fontWeight: 900,
};

const cta = { fontSize: 13 };
const arrow = { fontSize: 18 };