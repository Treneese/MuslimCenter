export function TabButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 12px",
        borderRadius: 10,
        border: "1px solid #ddd",
        background: active ? "#111" : "#fff",
        color: active ? "#fff" : "#111",
        cursor: "pointer",
      }}
      type="button"
    >
      {children}
    </button>
  );
}

export async function uploadAdminImage({ adminKey, file }) {
  const fd = new FormData();
  fd.append("file", file);

  const res = await fetch("/api/admin/upload", {
    method: "POST",
    headers: { "x-admin-key": adminKey },
    body: fd,
  });

  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(json.error || "Upload failed");
  return json.url; // "/static/uploads/..."
}

export function parseCap(v) {
  if (v === "" || v == null) return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}