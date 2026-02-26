import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section
        style={{
          padding: "64px 0 36px",
          borderBottom: "1px solid #024d10ff",
        }}
      >
        <h1 style={{ fontSize: 52, margin: 0, letterSpacing: -1 }}>
          Welcome to the Muslim Center
        </h1>
        <p style={{ fontSize: 18, color: "#03471cff", maxWidth: 760, marginTop: 14 }}>
          A mosque and community hub for prayer, learning, service, and connection.
          Join us for daily salah, Jumu’ah, programs, and events for the whole family.
        </p>

        <div style={{ display: "flex", gap: 12, marginTop: 22, flexWrap: "wrap" }}>
          <Link
            to="/prayer-times"
            style={{
              padding: "12px 16px",
              borderRadius: 12,
              background: "#0b3d2e",
              color: "white",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Prayer Times
          </Link>

          <Link
            to="/donate"
            style={{
              padding: "12px 16px",
              borderRadius: 12,
              border: "1px solid #0b3d2e",
              color: "#0b3d2e",
              textDecoration: "none",
              fontWeight: 700,
              background: "transparent",
            }}
          >
            Donate
          </Link>

          <Link
            to="/events"
            style={{
              padding: "12px 16px",
              borderRadius: 12,
              background: "rgba(11, 61, 46, 0.10)",
              color: "#0b3d2e",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            View Events
          </Link>
        </div>
      </section>

      {/* GRID */}
      <section style={{ padding: "28px 0" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 18,
            alignItems: "start",
          }}
        >
          {/* THIS WEEK */}
          <div
            style={{
              border: "1px solid #044611ff",
              borderRadius: 16,
              padding: 18,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <h2 style={{ margin: 0, fontSize: 22 }}>This Week at the Center</h2>
              <Link to="/events" style={{ color: "#0b3d2e", fontWeight: 700, textDecoration: "none" }}>
                All events →
              </Link>
            </div>

            <div style={{ display: "grid", gap: 12, marginTop: 14 }}>
              {[
                { title: "Jumu’ah Khutbah", time: "Friday • 1:30 PM", tag: "Weekly" },
                { title: "Weekend School", time: "Saturday • 10:00 AM", tag: "Youth" },
                { title: "Sisters’ Qur’an Circle", time: "Tuesday • 6:00 PM", tag: "Program" },
              ].map((e) => (
                <div
                  key={e.title}
                  style={{
                    border: "1px solid #044814ff",
                    borderRadius: 14,
                    padding: 14,
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 10,
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 800 }}>{e.title}</div>
                    <div style={{ color: "#5b5e64ff", marginTop: 4 }}>{e.time}</div>
                  </div>
                  <div
                    style={{
                      alignSelf: "start",
                      padding: "6px 10px",
                      borderRadius: 999,
                      background: "rgba(11, 61, 46, 0.10)",
                      color: "#0b3d2e",
                      fontWeight: 800,
                      fontSize: 12,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {e.tag}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PRAYER TIMES (mock now) */}
          <div
            style={{
              border: "1px solid #013e0cff",
              borderRadius: 16,
              padding: 18,
              position: "sticky",
              top: 16,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <h2 style={{ margin: 0, fontSize: 22 }}>Today’s Prayer Times</h2>
              <Link to="/prayer-times" style={{ color: "#0b3d2e", fontWeight: 700, textDecoration: "none" }}>
                Details →
              </Link>
            </div>

            <div style={{ marginTop: 14, display: "grid", gap: 10 }}>
              {[
                ["Fajr", "5:48 AM"],
                ["Dhuhr", "1:13 PM"],
                ["Asr", "4:32 PM"],
                ["Maghrib", "6:05 PM"],
                ["Isha", "7:28 PM"],
              ].map(([name, time]) => (
                <div
                  key={name}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px 12px",
                    borderRadius: 12,
                    background: "#f9fafb",
                    border: "1px solid #e5e7eb",
                  }}
                >
                  <div style={{ fontWeight: 800 }}>{name}</div>
                  <div style={{ color: "#374151", fontWeight: 700 }}>{time}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 14, color: "#6b7280", fontSize: 13 }}>
              *Times will be pulled from the API next.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}