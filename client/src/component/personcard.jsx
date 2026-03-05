import { useState } from "react";

export default function PersonCard({
  name,
  title,
  image,
  description,
  reverse = false,
}) {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        ...card,
        ...(hover ? cardHover : {}),
        flexDirection: reverse ? "row-reverse" : "row",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={image} alt={name} style={imageStyle} />

      <div style={content}>
        <h2 style={nameStyle}>{name}</h2>

        {title && <p style={titleStyle}>{title}</p>}

        <div style={text}>{description}</div>
      </div>
    </div>
  );
}

/* styles */

const card = {
  display: "flex",
  gap: 28,
  alignItems: "center",
  marginBottom: 32,

  background: "#ffffff",
  border: "1px solid rgba(0,0,0,0.08)",
  borderRadius: 18,
  padding: 20,

  boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
  transition: "transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease",
};

const cardHover = {
  transform: "translateY(-2px)",
  boxShadow: "0 14px 30px rgba(0,0,0,0.08)",
  borderColor: "rgba(30,107,58,0.25)",
};

const imageStyle = {
  width: 260,
  height: 260,
  objectFit: "cover",
  borderRadius: 14,
  background: "#f2f2f2",
};

const content = {
  flex: 1,
};

const nameStyle = {
  margin: 0,
  fontSize: 30,
  letterSpacing: -0.4,
};

const titleStyle = {
  marginTop: 6,
  fontWeight: 700,
  color: "#1e6b3a",
};

const text = {
  marginTop: 12,
  lineHeight: 1.7,
  color: "#2b2b2b",
  maxWidth: 700,
};

/* responsive fallback */

const mq = window?.matchMedia?.("(max-width: 900px)")?.matches;

if (mq) {
  card.flexDirection = "column";
  imageStyle.width = "100%";
  imageStyle.height = 260;
}