import { useState } from "react";
import "../../styles/pages.css";
import { apiUrl } from "../../../api";

export default function IqamahAdmin({ adminKey }) {
  const [iqamah, setIqamah] = useState({
    fajr: "",
    dhuhr: "",
    asr: "",
    maghrib: "",
    isha: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function loadIqamah() {
    if (!adminKey) {
      setStatus("Enter admin key first.");
      return;
    }

    setStatus("");
    setLoading(true);

    try {
      const res = await fetch(apiUrl("/api/iqamah", {
        headers: { "x-admin-key": adminKey },
      }));

      const json = await res.json().catch(() => ({}));

      if (!res.ok || json.ok === false) {
        setStatus(json.error || "Failed to load iqamah");
        return;
      }

      setIqamah(json.iqamah || json);
      setStatus("✅ Loaded iqamah times");
    } catch {
      setStatus("Failed to load iqamah");
    } finally {
      setLoading(false);
    }
  }

  async function saveIqamah(e) {
    e.preventDefault();

    if (!adminKey) {
      setStatus("Enter admin key first.");
      return;
    }

    setStatus("");
    setLoading(true);

    try {
      const res = await fetch(apiUrl("/api/iqamah", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": adminKey,
        },
        body: JSON.stringify(iqamah),
      }));

      const json = await res.json().catch(() => ({}));

      if (!res.ok || json.ok === false) {
        setStatus(json.error || "Save failed");
        return;
      }

      setStatus("✅ Saved iqamah times");
    } catch {
      setStatus("Save failed");
    } finally {
      setLoading(false);
    }
  }

  const isError =
    status &&
    !status.includes("✅");

  return (
    <div className="adminPage">
      <section className="adminSectionCard">
        <div className="adminButtonRow" style={{ marginBottom: 14 }}>
          <button type="button" className="ghostBtn" onClick={loadIqamah}>
            Load Current Iqamah
          </button>

          {loading ? <span className="adminStatus">Working…</span> : null}
        </div>

        {status ? (
          <p className={`adminStatus${isError ? " error" : ""}`}>{status}</p>
        ) : null}

        <h2 className="adminSectionTitle">Edit Iqamah Times</h2>

        <form onSubmit={saveIqamah} className="adminForm" style={{ maxWidth: 420 }}>
          {["fajr", "dhuhr", "asr", "maghrib", "isha"].map((k) => (
            <label key={k} className="adminFileLabel">
              <span className="adminLabel">{k.toUpperCase()}</span>
              <input
  type="time"
  className="adminInput"
  value={iqamah[k] || ""}
  onChange={(e) =>
    setIqamah({ ...iqamah, [k]: e.target.value })
  }
/>
            </label>
          ))}

          <button type="submit" className="secondaryBtn" style={{ width: 180 }}>
            Save Iqamah
          </button>
        </form>
      </section>
    </div>
  );
}