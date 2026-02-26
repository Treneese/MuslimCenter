import { useEffect, useState } from "react";

export default function Admin() {
  const [adminKey, setAdminKey] = useState("");

  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: "",
    day: "",
    time: "",
    category: "",
    description: "",
  });

  const [status, setStatus] = useState("");

  const [iqamah, setIqamah] = useState({
    fajr: "",
    dhuhr: "",
    asr: "",
    maghrib: "",
    isha: "",
  });
  const [iqamahStatus, setIqamahStatus] = useState("");
  const [iqamahLoading, setIqamahLoading] = useState(false);

  async function loadEvents() {
    const res = await fetch("/api/events");
    const data = await res.json().catch(() => []);
    setEvents(Array.isArray(data) ? data : []);
  }

  useEffect(() => {
    loadEvents();
  }, []);

  async function createEvent(e) {
    e.preventDefault();
    setStatus("");

    const res = await fetch("/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-admin-key": adminKey,
      },
      body: JSON.stringify(newEvent),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      setStatus(err.error || "Create failed");
      return;
    }

    setNewEvent({ title: "", day: "", time: "", category: "", description: "" });
    setStatus("✅ Event created");
    loadEvents();
  }

  async function deleteEvent(id) {
    setStatus("");

    const res = await fetch(`/api/events/${id}`, {
      method: "DELETE",
      headers: { "x-admin-key": adminKey },
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      setStatus(err.error || "Delete failed");
      return;
    }

    setStatus("🗑️ Event deleted");
    loadEvents();
  }

  async function loadIqamah() {
    if (!adminKey) return;

    setIqamahStatus("");
    setIqamahLoading(true);

    try {
      const res = await fetch("/api/admin/iqamah", {
        headers: { "x-admin-key": adminKey },
      });

      const json = await res.json().catch(() => ({}));
      if (!res.ok || json.ok === false) {
        setIqamahStatus(json.error || "Failed to load iqamah");
        return;
      }

      // supports either { iqamah: {...} } or direct object
      setIqamah(json.iqamah || json);
      setIqamahStatus("✅ Loaded iqamah times");
    } catch (e) {
      setIqamahStatus(e.message || "Failed to load iqamah");
    } finally {
      setIqamahLoading(false);
    }
  }

  async function saveIqamah(e) {
    e.preventDefault();
    setIqamahStatus("");
    setIqamahLoading(true);

    try {
      const res = await fetch("/api/admin/iqamah", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": adminKey,
        },
        body: JSON.stringify(iqamah),
      });

      const json = await res.json().catch(() => ({}));
      if (!res.ok || json.ok === false) {
        setIqamahStatus(json.error || "Save failed");
        return;
      }

      setIqamahStatus("✅ Saved iqamah times");
    } catch (e) {
      setIqamahStatus(e.message || "Save failed");
    } finally {
      setIqamahLoading(false);
    }
  }

  useEffect(() => {
    if (adminKey) loadIqamah();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminKey]);

  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ marginTop: 0 }}>Admin</h1>

      <label style={{ display: "block", marginBottom: 8 }}>
        Admin Key:
        <input
          value={adminKey}
          onChange={(e) => setAdminKey(e.target.value)}
          type="password"
          style={{ marginLeft: 10, padding: 8, width: 280 }}
        />
      </label>

      {status && <p>{status}</p>}

      <hr />

      <h2>Create Event</h2>
      <form onSubmit={createEvent} style={{ display: "grid", gap: 10, maxWidth: 520 }}>
        <input
          placeholder="Title *"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <input
          placeholder="Day (Friday)"
          value={newEvent.day}
          onChange={(e) => setNewEvent({ ...newEvent, day: e.target.value })}
        />
        <input
          placeholder="Time (1:30 PM)"
          value={newEvent.time}
          onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
        />
        <input
          placeholder="Category (Weekly / Youth / Program)"
          value={newEvent.category}
          onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={newEvent.description}
          onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
          rows={3}
        />
        <button type="submit" style={{ padding: "10px 14px", width: 160 }}>
          Create
        </button>
      </form>

      <hr />

      <h2>Existing Events</h2>
      <div style={{ display: "grid", gap: 10, maxWidth: 720 }}>
        {events.map((ev) => (
          <div key={ev.id} style={{ border: "1px solid #ddd", borderRadius: 10, padding: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
              <strong>{ev.title}</strong>
              <button onClick={() => deleteEvent(ev.id)} style={{ padding: "6px 10px" }}>
                Delete
              </button>
            </div>

            <div style={{ opacity: 0.8, marginTop: 6 }}>
              {ev.day || "-"} • {ev.time || "-"} • {ev.category || "-"}
            </div>

            {ev.description && <div style={{ marginTop: 8 }}>{ev.description}</div>}
          </div>
        ))}
      </div>

      <hr />

      <h2>Edit Iqamah Times</h2>

      <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
        <button onClick={loadIqamah} style={{ padding: "8px 12px" }}>
          Load Current Iqamah
        </button>
        {iqamahLoading && <span>Working…</span>}
        {iqamahStatus && <span>{iqamahStatus}</span>}
      </div>

      <form onSubmit={saveIqamah} style={{ marginTop: 12, display: "grid", gap: 10, maxWidth: 420 }}>
        <label>
          Fajr
          <input
            value={iqamah.fajr}
            onChange={(e) => setIqamah({ ...iqamah, fajr: e.target.value })}
            placeholder="06:30"
            style={{ width: "100%", padding: 8, marginTop: 6 }}
          />
        </label>

        <label>
          Dhuhr
          <input
            value={iqamah.dhuhr}
            onChange={(e) => setIqamah({ ...iqamah, dhuhr: e.target.value })}
            placeholder="13:30"
            style={{ width: "100%", padding: 8, marginTop: 6 }}
          />
        </label>

        <label>
          Asr
          <input
            value={iqamah.asr}
            onChange={(e) => setIqamah({ ...iqamah, asr: e.target.value })}
            placeholder="16:45"
            style={{ width: "100%", padding: 8, marginTop: 6 }}
          />
        </label>

        <label>
          Maghrib
          <input
            value={iqamah.maghrib}
            onChange={(e) => setIqamah({ ...iqamah, maghrib: e.target.value })}
            placeholder="18:20"
            style={{ width: "100%", padding: 8, marginTop: 6 }}
          />
        </label>

        <label>
          Isha
          <input
            value={iqamah.isha}
            onChange={(e) => setIqamah({ ...iqamah, isha: e.target.value })}
            placeholder="20:00"
            style={{ width: "100%", padding: 8, marginTop: 6 }}
          />
        </label>

        <button type="submit" style={{ padding: "10px 14px", width: 160 }}>
          Save Iqamah
        </button>
      </form>
    </div>
  );
}