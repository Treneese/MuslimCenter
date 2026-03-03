export default function About() {
  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ marginTop: 0, color: "#1e6b3a" }}>About</h1>

      <p style={{ maxWidth: 820, lineHeight: 1.6 }}>
        The Muslim Center Mosque and Community Center is the largest African
        American Mosque in Michigan. We are dedicated to serving the Detroit
        Metropolitan community through faith, Islamic principles, and the
        universal belief in assisting others. The Muslim Center provides
        learning opportunities, programs, community soup kitchen, and events
        dedicated to bringing together a diverse multicultural community to
        advance the dissemination of knowledge, strengthen our community, and
        build creative solutions to solve social problems we face.
      </p>

      <div style={{ display: "grid", gap: 14, maxWidth: 900 }}>
        <section style={card}>
          <h2 style={h2}>Our Mission</h2>
          <p style={p}>
            The Muslim Center is a family-oriented mosque and community center
            that offers a comfortable place to worship and learn, provides
            direct services to our local neighbors, and hosts programs and
            activities to build community life.
            <br /><br />
            The Masjid seeks to serve THE WILL OF ALLAH and facilitate the
            objectives of the sacred law, which are:
            <br /><br />
            A. Protection of Faith or Religion
            <br />
            B. Protection of Life
            <br />
            C. Protection of Lineage
            <br />
            D. Protection of Intellect
            <br />
            E. Protection of Property
          </p>
        </section>

        <section style={card}>
          <h2 style={h2}>Our Vision</h2>
          <p style={p}>
            Create an environment that will nurture and develop the spiritual
            life of the membership!
            <br /><br />
            Involve people of all ages in serving the Masjid through established
            programs and the creation of new programs.
            <br /><br />
            Facilitate religious study and fellowship among the membership.
            <br /><br />
            Help to shape values through Islamic Education.
            <br /><br />
            Mobilize resources to resolve existing problems and to meet existing
            and future needs, both within and outside of the Muslim Community.
            <br /><br />
            Engage in organizing dawah/outreach activities to spread the word
            and call to Allah.
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
            <strong>Address:</strong> (1605 Davison St W Detroit, MI 48238)
            <br />
            <strong>Office Hours:</strong> (Add hours)
            <br />
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