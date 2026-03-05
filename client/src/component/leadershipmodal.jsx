export default function LeadershipModal({ open, onClose, person }) {
  if (!open || !person) return null;

  return (
    <div style={overlay} onClick={onClose}>
      <div style={modal} onClick={(e) => e.stopPropagation()}>
        <div style={topRow}>
          <div>
            <h2 style={modalName}>{person.name}</h2>
            {person.role && <div style={modalRole}>{person.role}</div>}
          </div>
          <button style={closeBtn} onClick={onClose}>
            ✕
          </button>
        </div>

        <div style={modalBody}>
          <img src={person.image} alt={person.name} style={modalImg} />
          <div style={modalText}>{person.bio}</div>
        </div>
      </div>
    </div>
  );
}

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.55)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 18,
  zIndex: 9999,
};

const modal = {
  width: "min(980px, 100%)",
  background: "#fff",
  borderRadius: 18,
  border: "1px solid rgba(0,0,0,0.08)",
  boxShadow: "0 18px 60px rgba(0,0,0,0.25)",
  overflow: "hidden",
};

const topRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: 16,
  borderBottom: "1px solid rgba(0,0,0,0.08)",
};

const closeBtn = {
  border: "1px solid rgba(0,0,0,0.12)",
  background: "#fff",
  borderRadius: 12,
  padding: "8px 10px",
  cursor: "pointer",
  fontWeight: 900,
};

const modalName = { margin: 0, fontSize: 24, letterSpacing: -0.3 };
const modalRole = { marginTop: 6, fontWeight: 800, color: "#1e6b3a" };

const modalBody = {
  display: "grid",
  gridTemplateColumns: "320px 1fr",
  gap: 16,
  padding: 16,
};

const modalImg = {
  width: "100%",
  height: 320,
  objectFit: "cover",
  borderRadius: 14,
  background: "#f2f2f2",
};

const modalText = { lineHeight: 1.7, color: "#2b2b2b" };

const mq = window?.matchMedia?.("(max-width: 900px)")?.matches;
if (mq) modalBody.gridTemplateColumns = "1fr";