export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #e5e7eb", marginTop: 40 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "18px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontWeight: 800 }}>Muslim Center</div>
            <div style={{ color: "#6b7280", fontSize: 13 }}>
              Serving the community with prayer, education, and support.
            </div>
          </div>
          <div style={{ color: "#6b7280", fontSize: 13 }}>
            © {new Date().getFullYear()} Muslim Center. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}