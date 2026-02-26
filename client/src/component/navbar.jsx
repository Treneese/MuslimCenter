import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkStyle = ({ isActive }) => ({
    padding: "10px 12px",
    borderRadius: 10,
    textDecoration: "none",
    color: isActive ? "#0b3d2e" : "#1f2937",
    background: isActive ? "rgba(11, 61, 46, 0.10)" : "transparent",
    fontWeight: 600,
  });

  return (
    <header style={{ borderBottom: "1px solid #e5e7eb", background: "#fff" }}>
      <nav
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "14px 18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 12,
              background: "rgba(11, 61, 46, 0.12)",
              display: "grid",
              placeItems: "center",
              fontWeight: 800,
              color: "#0b3d2e",
            }}
          >
            MC
          </div>
          <div style={{ lineHeight: 1.1 }}>
            <div style={{ fontWeight: 800 }}>Muslim Center</div>
            <div style={{ fontSize: 12, color: "#6b7280" }}>
              Mosque & Community Hub
            </div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
          <NavLink to="/" style={linkStyle} end>Home</NavLink>
          <NavLink to="/about" style={linkStyle}>About</NavLink>
          <NavLink to="/programs" style={linkStyle}>Programs</NavLink>
          <NavLink to="/prayer-times" style={linkStyle}>Prayer Times</NavLink>
          <NavLink to="/events" style={linkStyle}>Events</NavLink>
          <NavLink to="/donate" style={linkStyle}>Donate</NavLink>
          <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
        </div>
      </nav>
    </header>
  );
}