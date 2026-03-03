import { useState } from "react";

export default function IqamahAdmin({ adminKey }) {
  const [iqamah, setIqamah] = useState({ fajr: "", dhuhr: "", asr: "", maghrib: "", isha: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function loadIqamah() {
    if (!adminKey) return setStatus("Enter admin key first.");
    setStatus("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/iqamah", { headers: { "x-admin-key": adminKey } });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || json.ok === false) return setStatus(json.error || "Failed to load iqamah");
      setIqamah(json.iqamah || json);
      setStatus("✅ Loaded iqamah times");
    } finally {
      setLoading(false);
    }
  }

  async function saveIqamah(e) {
    e.preventDefault();
    if (!adminKey) return setStatus("Enter admin key first.");
    setStatus("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/iqamah", {
        method: "PUT",
        headers: { "Content-Type": "application/json", "x-admin-key": adminKey },
        body: JSON.stringify(iqamah),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || json.ok === false) return setStatus(json.error || "Save failed");
      setStatus("✅ Saved iqamah times");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <button type="button" onClick={loadIqamah} style={{ padding: "10px 14px" }}>
          Load Current Iqamah
        </button>
        {loading ? <span>Working…</span> : null}
        {status ? <span>{status}</span> : null}
      </div>

      <form onSubmit={saveIqamah} style={{ marginTop: 12, display: "grid", gap: 10, maxWidth: 420 }}>
        {["fajr", "dhuhr", "asr", "maghrib", "isha"].map((k) => (
          <label key={k}>
            {k.toUpperCase()}
            <input
              value={iqamah[k] || ""}
              onChange={(e) => setIqamah({ ...iqamah, [k]: e.target.value })}
              style={{ width: "100%", padding: 8, marginTop: 6 }}
            />
          </label>
        ))}

        <button type="submit" style={{ padding: "10px 14px", width: 180 }}>
          Save Iqamah
        </button>
      </form>
    </div>
  );
}