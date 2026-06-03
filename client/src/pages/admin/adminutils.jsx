import "../../styles/pages.css";
import { apiUrl } from "../../../api";

export function TabButton({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={active ? "secondaryBtn" : "ghostBtn"}
    >
      {children}
    </button>
  );
}

export async function uploadAdminImage({ adminKey, file }) {
  const fd = new FormData();
  fd.append("file", file);

  const res = await fetch(apiUrl("/api/admin/upload", {
    method: "POST",
    headers: { "x-admin-key": adminKey },
    body: fd,
  }));

  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(json.error || "Upload failed");
  return json.url;
}

export function parseCap(v) {
  if (v === "" || v == null) return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}