export default function About() {
  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ marginTop: 0, color: "#1e6b3a" }}>About</h1>

      <p style={{ maxWidth: 820, lineHeight: 1.6 }}>
        The Muslim Center is a mosque and community hub serving Detroit through prayer, education,
        service, and connection. We welcome Muslims and neighbors of all backgrounds to learn, grow,
        and build community.
      </p>

      <div style={{ display: "grid", gap: 14, maxWidth: 900 }}>
        <section style={card}>
          <h2 style={h2}>Our Mission</h2>
          <p style={p}>
            To cultivate a strong, compassionate community rooted in faith—supporting families,
            youth, and individuals through salah, learning, and service.
          </p>
        </section>

        <section style={card}>
          <h2 style={h2}>What You’ll Find Here</h2>
          <ul style={{ marginTop: 8, lineHeight: 1.7 }}>
            <li>Daily prayers and Jumu’ah</li>
            <li>Qur’an circles and community classes</li>
            <li>Youth and weekend school programs</li>
            <li>Community support and volunteer opportunities</li>
          </ul>
        </section>

        <section style={card}>
          <h2 style={h2}>Visit Us</h2>
          <p style={p}>
            <strong>Address:</strong> (Add address)<br />
            <strong>Office Hours:</strong> (Add hours)<br />
            <strong>Phone:</strong> (Add phone)
          </p>
        </section>
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

const h2 = { margin: 0, color: "#1e6b3a" };
const p = { margin: "8px 0 0 0", lineHeight: 1.6 };