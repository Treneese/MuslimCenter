export default function MapPanel() {
  // Replace with your real address for the center
  const address = "Detroit Muslim Community Center, Detroit, MI";
  const mapsUrl =
    "https://www.google.com/maps?q=" + encodeURIComponent(address) + "&output=embed";

  return (
    <section style={wrap}>
      <div style={card}>
        <div style={left}>
          <h3 style={h3}>Get Involved</h3>
          <p style={p}>
            Visit us, join a program, or volunteer. We’d love to welcome you.
          </p>

          <div style={infoGrid}>
            <div>
              <div style={label}>Address</div>
              <div style={value}>1605 Davison St W, Detroit, MI 48238</div>
            </div>
            <div>
              <div style={label}>Phone</div>
              <div style={value}>(313) 883-3330</div>
            </div>
            <div>
              <div style={label}>Email</div>
              <div style={value}>contact@themuslimcenter.com</div>
            </div>
          </div>
        </div>

        <div style={right}>
          <iframe
            title="map"
            src={mapsUrl}
            style={iframe}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

const wrap = { padding: 0 };

const card = {
  border: "1px solid #cfe4d6",
  background: "#fff",
  borderRadius: 16,
  overflow: "hidden",
  display: "grid",
  gridTemplateColumns: "1.1fr 1fr",
};

const left = { padding: 18 };
const right = { minHeight: 260 };

const h3 = { margin: 0, color: "#123f2a", fontSize: 20 };
const p = { marginTop: 8, marginBottom: 14, color: "#374151", lineHeight: 1.6 };

const infoGrid = {
  display: "grid",
  gap: 10,
};

const label = { fontWeight: 900, color: "#123f2a", fontSize: 12, opacity: 0.9 };
const value = { color: "#374151", fontWeight: 700 };

const iframe = {
  width: "100%",
  height: "100%",
  minHeight: 260,
  border: 0,
  display: "block",
};