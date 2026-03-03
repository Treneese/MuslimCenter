import { useEffect, useState } from "react";
import { parseCap, uploadAdminImage } from "./adminutils";

export default function EventsAdmin({ adminKey }) {
  const [status, setStatus] = useState("");
  const [events, setEvents] = useState([]);

  // Create
  const [newEvent, setNewEvent] = useState({
    title: "",
    day: "",
    time: "",
    category: "",
    description: "",
    location: "",
    is_special: false,
    rsvp_enabled: false,
    rsvp_capacity: "",
    image_url: "",
  });
  const [newEventFile, setNewEventFile] = useState(null);

  // Edit
  const [editingEventId, setEditingEventId] = useState(null);
  const [editEvent, setEditEvent] = useState(null);
  const [editEventFile, setEditEventFile] = useState(null);

  // RSVP viewer
  const [rsvpOpenForEventId, setRsvpOpenForEventId] = useState(null);
  const [rsvps, setRsvps] = useState([]);
  const [rsvpStatus, setRsvpStatus] = useState("");

  async function loadEvents() {
    const res = await fetch("/api/events");
    const data = await res.json().catch(() => []);
    setEvents(Array.isArray(data) ? data : []);
  }

  useEffect(() => {
    loadEvents();
  }, []);

  function startEdit(ev) {
    setStatus("");
    setEditingEventId(ev.id);
    setEditEvent({
      title: ev.title || "",
      day: ev.day || "",
      time: ev.time || "",
      category: ev.category || "",
      description: ev.description || "",
      location: ev.location || "",
      is_special: !!ev.is_special,
      rsvp_enabled: !!ev.rsvp_enabled,
      rsvp_capacity: ev.rsvp_capacity ?? "",
      image_url: ev.image_url || "",
    });
    setEditEventFile(null);
  }

  function cancelEdit() {
    setEditingEventId(null);
    setEditEvent(null);
    setEditEventFile(null);
  }

  async function createEvent(e) {
    e.preventDefault();
    setStatus("");

    if (!adminKey) return setStatus("Enter admin key first.");
    if (!newEvent.title.trim()) return setStatus("Title is required.");

    try {
      let image_url = newEvent.image_url;

      if (newEventFile) {
        image_url = await uploadAdminImage({ adminKey, file: newEventFile });
      }

      const payload = {
        ...newEvent,
        title: newEvent.title.trim(),
        image_url: image_url || null,
        rsvp_capacity: parseCap(newEvent.rsvp_capacity),
      };

      const res = await fetch("/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": adminKey,
        },
        body: JSON.stringify(payload),
      });

      const json = await res.json().catch(() => ({}));
      if (!res.ok) return setStatus(json.error || "Create failed");

      setStatus("✅ Event created");
      setNewEvent({
        title: "",
        day: "",
        time: "",
        category: "",
        description: "",
        location: "",
        is_special: false,
        rsvp_enabled: false,
        rsvp_capacity: "",
        image_url: "",
      });
      setNewEventFile(null);
      loadEvents();
    } catch (err) {
      setStatus(err.message || "Create failed");
    }
  }

  async function saveEdit(id) {
    setStatus("");
    if (!adminKey) return setStatus("Enter admin key first.");
    if (!editEvent?.title?.trim()) return setStatus("Title is required.");

    try {
      let image_url = editEvent.image_url;

      if (editEventFile) {
        image_url = await uploadAdminImage({ adminKey, file: editEventFile });
      }

      const payload = {
        ...editEvent,
        title: editEvent.title.trim(),
        image_url: image_url || null,
        rsvp_capacity: parseCap(editEvent.rsvp_capacity),
      };

      const res = await fetch(`/api/events/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": adminKey,
        },
        body: JSON.stringify(payload),
      });

      const json = await res.json().catch(() => ({}));
      if (!res.ok) return setStatus(json.error || "Update failed");

      setStatus("✅ Event updated");
      cancelEdit();
      loadEvents();
    } catch (err) {
      setStatus(err.message || "Update failed");
    }
  }

  async function deleteEvent(id) {
    setStatus("");
    if (!adminKey) return setStatus("Enter admin key first.");

    const res = await fetch(`/api/events/${id}`, {
      method: "DELETE",
      headers: { "x-admin-key": adminKey },
    });

    const json = await res.json().catch(() => ({}));
    if (!res.ok) return setStatus(json.error || "Delete failed");

    setStatus("🗑️ Event deleted");
    if (rsvpOpenForEventId === id) {
      setRsvpOpenForEventId(null);
      setRsvps([]);
    }
    loadEvents();
  }

  async function loadRsvps(eventId) {
    if (!adminKey) return setRsvpStatus("Enter admin key first.");
    setRsvpStatus("");
    setRsvpOpenForEventId(eventId);

    const res = await fetch(`/api/admin/rsvps?event_id=${eventId}`, {
      headers: { "x-admin-key": adminKey },
    });

    const data = await res.json().catch(() => []);
    if (!res.ok) {
      setRsvpStatus((data && data.error) || "Failed to load RSVPs");
      setRsvps([]);
      return;
    }
    setRsvps(Array.isArray(data) ? data : []);
  }

  async function deleteRsvp(rsvpId) {
    if (!adminKey) return;

    const res = await fetch(`/api/admin/rsvps/${rsvpId}`, {
      method: "DELETE",
      headers: { "x-admin-key": adminKey },
    });

    const json = await res.json().catch(() => ({}));
    if (!res.ok) return setRsvpStatus(json.error || "Failed to delete RSVP");

    setRsvpStatus("🗑️ RSVP deleted");
    if (rsvpOpenForEventId) loadRsvps(rsvpOpenForEventId);
    loadEvents();
  }

  return (
    <div>
      {status ? <p style={{ marginTop: 0 }}>{status}</p> : null}

      <h2>Create Event</h2>
      <form onSubmit={createEvent} style={{ display: "grid", gap: 10, maxWidth: 720 }}>
        <input
          placeholder="Title *"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />

        <div style={{ display: "grid", gap: 10, gridTemplateColumns: "1fr 1fr" }}>
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
        </div>

        <input
          placeholder="Category (Weekly / Youth / Program / Special)"
          value={newEvent.category}
          onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
        />

        <input
          placeholder="Location (optional)"
          value={newEvent.location}
          onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
        />

        <label style={{ display: "grid", gap: 6 }}>
          <span>Event Image (upload)</span>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setNewEventFile(e.target.files?.[0] || null)}
          />
        </label>

        {newEventFile ? (
          <img
            src={URL.createObjectURL(newEventFile)}
            alt="preview"
            style={{ width: "100%", maxWidth: 420, borderRadius: 10, border: "1px solid #e5e7eb" }}
          />
        ) : null}

        <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
          <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <input
              type="checkbox"
              checked={newEvent.is_special}
              onChange={(e) => setNewEvent({ ...newEvent, is_special: e.target.checked })}
            />
            Special event
          </label>

          <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <input
              type="checkbox"
              checked={newEvent.rsvp_enabled}
              disabled={!newEvent.is_special}
              onChange={(e) => setNewEvent({ ...newEvent, rsvp_enabled: e.target.checked })}
            />
            RSVP enabled
          </label>

          <input
            placeholder="RSVP capacity (optional)"
            value={newEvent.rsvp_capacity}
            disabled={!newEvent.is_special || !newEvent.rsvp_enabled}
            onChange={(e) => setNewEvent({ ...newEvent, rsvp_capacity: e.target.value })}
            style={{ width: 220 }}
          />
        </div>

        <textarea
          placeholder="Description"
          value={newEvent.description}
          onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
          rows={3}
        />

        <button type="submit" style={{ padding: "10px 14px", width: 180 }}>
          Create Event
        </button>
      </form>

      <h2 style={{ marginTop: 26 }}>Existing Events</h2>
      <div style={{ display: "grid", gap: 10, maxWidth: 920 }}>
        {events.map((ev) => {
          const editing = editingEventId === ev.id;
          const rsvpOpen = rsvpOpenForEventId === ev.id;

          return (
            <div key={ev.id} style={{ border: "1px solid #ddd", borderRadius: 12, padding: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                <div style={{ display: "grid", gap: 6 }}>
                  <strong>{ev.title}</strong>
                  <div style={{ opacity: 0.85 }}>
                    {ev.day || "-"} • {ev.time || "-"} • {ev.category || "-"}
                  </div>

                  {(ev.location || ev.is_special || ev.rsvp_enabled) && (
                    <div style={{ opacity: 0.85, fontSize: 13 }}>
                      {ev.location ? `📍 ${ev.location}` : null}
                      {ev.is_special ? " • ⭐ Special" : ""}
                      {ev.rsvp_enabled ? ` • RSVP: ON (${ev.rsvp_count || 0})` : ""}
                      {ev.rsvp_capacity != null ? ` • Cap: ${ev.rsvp_capacity}` : ""}
                    </div>
                  )}
                </div>

                <div style={{ display: "flex", gap: 8, alignItems: "start" }}>
                  {ev.is_special && ev.rsvp_enabled ? (
                    <button
                      onClick={() => (rsvpOpen ? setRsvpOpenForEventId(null) : loadRsvps(ev.id))}
                      style={{ padding: "6px 10px" }}
                      type="button"
                    >
                      {rsvpOpen ? "Hide RSVPs" : "View RSVPs"}
                    </button>
                  ) : null}

                  <button onClick={() => startEdit(ev)} style={{ padding: "6px 10px" }} type="button">
                    Edit
                  </button>

                  <button onClick={() => deleteEvent(ev.id)} style={{ padding: "6px 10px" }} type="button">
                    Delete
                  </button>
                </div>
              </div>

              {ev.image_url ? (
                <img
                  src={ev.image_url}
                  alt={ev.title}
                  style={{
                    marginTop: 10,
                    width: "100%",
                    maxWidth: 520,
                    borderRadius: 10,
                    border: "1px solid #e5e7eb",
                  }}
                />
              ) : null}

              {ev.description ? <div style={{ marginTop: 10 }}>{ev.description}</div> : null}

              {editing && editEvent ? (
                <div style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid #eee" }}>
                  <strong>Edit Event</strong>

                  <div style={{ display: "grid", gap: 10, marginTop: 10, maxWidth: 720 }}>
                    <input
                      value={editEvent.title}
                      onChange={(e) => setEditEvent({ ...editEvent, title: e.target.value })}
                      placeholder="Title *"
                    />

                    <div style={{ display: "grid", gap: 10, gridTemplateColumns: "1fr 1fr" }}>
                      <input
                        value={editEvent.day}
                        onChange={(e) => setEditEvent({ ...editEvent, day: e.target.value })}
                        placeholder="Day"
                      />
                      <input
                        value={editEvent.time}
                        onChange={(e) => setEditEvent({ ...editEvent, time: e.target.value })}
                        placeholder="Time"
                      />
                    </div>

                    <input
                      value={editEvent.category}
                      onChange={(e) => setEditEvent({ ...editEvent, category: e.target.value })}
                      placeholder="Category"
                    />

                    <input
                      value={editEvent.location}
                      onChange={(e) => setEditEvent({ ...editEvent, location: e.target.value })}
                      placeholder="Location"
                    />

                    <label style={{ display: "grid", gap: 6 }}>
                      <span>Replace Image (upload)</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setEditEventFile(e.target.files?.[0] || null)}
                      />
                    </label>

                    {editEventFile ? (
                      <img
                        src={URL.createObjectURL(editEventFile)}
                        alt="preview"
                        style={{ width: "100%", maxWidth: 420, borderRadius: 10, border: "1px solid #e5e7eb" }}
                      />
                    ) : editEvent.image_url ? (
                      <img
                        src={editEvent.image_url}
                        alt="current"
                        style={{ width: "100%", maxWidth: 420, borderRadius: 10, border: "1px solid #e5e7eb" }}
                      />
                    ) : null}

                    <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
                      <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
                        <input
                          type="checkbox"
                          checked={editEvent.is_special}
                          onChange={(e) => setEditEvent({ ...editEvent, is_special: e.target.checked })}
                        />
                        Special event
                      </label>

                      <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
                        <input
                          type="checkbox"
                          checked={editEvent.rsvp_enabled}
                          disabled={!editEvent.is_special}
                          onChange={(e) => setEditEvent({ ...editEvent, rsvp_enabled: e.target.checked })}
                        />
                        RSVP enabled
                      </label>

                      <input
                        placeholder="RSVP capacity (optional)"
                        value={editEvent.rsvp_capacity}
                        disabled={!editEvent.is_special || !editEvent.rsvp_enabled}
                        onChange={(e) => setEditEvent({ ...editEvent, rsvp_capacity: e.target.value })}
                        style={{ width: 220 }}
                      />
                    </div>

                    <textarea
                      value={editEvent.description}
                      onChange={(e) => setEditEvent({ ...editEvent, description: e.target.value })}
                      rows={3}
                      placeholder="Description"
                    />

                    <div style={{ display: "flex", gap: 10 }}>
                      <button type="button" onClick={() => saveEdit(ev.id)} style={{ padding: "10px 14px" }}>
                        Save
                      </button>
                      <button type="button" onClick={cancelEdit} style={{ padding: "10px 14px" }}>
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              ) : null}

              {rsvpOpen ? (
                <div style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid #eee" }}>
                  <strong>RSVPs</strong>
                  {rsvpStatus ? <div style={{ marginTop: 6 }}>{rsvpStatus}</div> : null}

                  {rsvps.length === 0 ? (
                    <div style={{ marginTop: 8, opacity: 0.75 }}>No RSVPs yet.</div>
                  ) : (
                    <div style={{ display: "grid", gap: 10, marginTop: 10 }}>
                      {rsvps.map((r) => (
                        <div
                          key={r.id}
                          style={{
                            border: "1px solid #e5e7eb",
                            borderRadius: 10,
                            padding: 10,
                            display: "flex",
                            justifyContent: "space-between",
                            gap: 10,
                          }}
                        >
                          <div style={{ display: "grid", gap: 4 }}>
                            <div style={{ fontWeight: 700 }}>
                              {r.name} {r.guests ? `(+${r.guests - 1} guests)` : ""}
                            </div>
                            <div style={{ opacity: 0.85, fontSize: 13 }}>
                              {r.email || "-"} • {r.phone || "-"}
                            </div>
                            {r.note ? <div style={{ marginTop: 4 }}>{r.note}</div> : null}
                          </div>

                          <button onClick={() => deleteRsvp(r.id)} style={{ padding: "6px 10px" }} type="button">
                            Delete
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}