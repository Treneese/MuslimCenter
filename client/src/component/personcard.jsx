export default function PersonCard({
  name,
  title,
  image,
  description,
  meta, // optional small label like "Resident Imam"
  reverse = false,
}) {
  const isMobile = window?.matchMedia?.("(max-width: 900px)")?.matches;

  const layout = isMobile
    ? { flexDirection: "column" }
    : { flexDirection: reverse ? "row-reverse" : "row" };

  return (
    <section style={{ ...card, ...layout }}>
      <div style={imgWrap}>
        <img src={image} alt={name} style={imageStyle} />
      </div>

      <div style={content}>
        {meta && <div style={metaBadge}>{meta}</div>}

        <h2 style={nameStyle}>{name}</h2>
        {title && <p style={titleStyle}>{title}</p>}

        <div style={text}>{description}</div>
      </div>
    </section>
  );
}

/* styles */
const card = {
  display: "flex",
  gap: 22,
  alignItems: "center",
  marginBottom: 18,
  background: "#ffffff",
  border: "1px solid rgba(0,0,0,0.08)",
  borderRadius: 18,
  padding: 18,
  boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
};

const imgWrap = {
  width: 280,
  maxWidth: "100%",
  borderRadius: 16,
  overflow: "hidden",
  border: "1px solid rgba(0,0,0,0.08)",
  background: "#f3f3f3",
};

const imageStyle = {
  width: "100%",
  height: 280,
  objectFit: "cover",
  display: "block",
};

const content = { flex: 1 };

const metaBadge = {
  display: "inline-flex",
  alignItems: "center",
  fontSize: 12,
  fontWeight: 900,
  color: "#1e6b3a",
  background: "#e6f3ea",
  border: "1px solid #cfe4d6",
  padding: "6px 10px",
  borderRadius: 999,
  marginBottom: 10,
};

const nameStyle = {
  margin: 0,
  fontSize: 30,
  letterSpacing: -0.4,
};

const titleStyle = {
  marginTop: 8,
  marginBottom: 0,
  fontWeight: 700,
  color: "#1e6b3a",
};

const text = {
  marginTop: 12,
  lineHeight: 1.75,
  color: "rgba(0,0,0,0.72)",
};