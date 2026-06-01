import { useEffect, useState } from "react";
import { parseCap, uploadAdminImage } from "./adminutils";
import "../../styles/pages.css";

function formatTime12(time) {
  if (!time) return "";

  const [hour, minute] = time.split(":");
  const date = new Date();
  date.setHours(Number(hour));
  date.setMinutes(Number(minute));

  return date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
}

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
  <div className="adminPage">
    {status && (
      <p className={`adminStatus ${status.includes("✅") ? "success" : "error"}`}>
        {status}
      </p>
    )}

    {/* ================= CREATE ================= */}
    <section className="adminSectionCard">
      <h2 className="adminSectionTitle">Create Event</h2>

      <form onSubmit={createEvent} className="adminForm">
        <input
          className="adminInput"
          placeholder="Title *"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />

        <div className="adminGrid2">
          <input
  type="date"
  className="adminInput"
  value={newEvent.day}
  onChange={(e) => setNewEvent({ ...newEvent, day: e.target.value })}
/>

<input
  type="time"
  className="adminInput"
  value={newEvent.time}
  onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
/>
        </div>

        <input
          className="adminInput"
          placeholder="Category"
          value={newEvent.category}
          onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
        />

        <input
          className="adminInput"
          placeholder="Location"
          value={newEvent.location}
          onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
        />

        <label className="adminFileLabel">
          Event Image
          <input
            type="file"
            onChange={(e) => setNewEventFile(e.target.files?.[0] || null)}
          />
        </label>

        {newEventFile && (
          <img
            src={URL.createObjectURL(newEventFile)}
            className="adminImagePreview"
          />
        )}

        <div className="adminRow">
          <label>
            <input
              type="checkbox"
              checked={newEvent.is_special}
              onChange={(e) =>
                setNewEvent({ ...newEvent, is_special: e.target.checked })
              }
            />
            Special
          </label>

          <label>
            <input
              type="checkbox"
              checked={newEvent.rsvp_enabled}
              disabled={!newEvent.is_special}
              onChange={(e) =>
                setNewEvent({ ...newEvent, rsvp_enabled: e.target.checked })
              }
            />
            RSVP
          </label>

          <input
            className="adminInput"
            placeholder="Capacity"
            value={newEvent.rsvp_capacity}
            disabled={!newEvent.rsvp_enabled}
            onChange={(e) =>
              setNewEvent({ ...newEvent, rsvp_capacity: e.target.value })
            }
          />
        </div>

        <textarea
          className="adminTextarea"
          placeholder="Description"
          value={newEvent.description}
          onChange={(e) =>
            setNewEvent({ ...newEvent, description: e.target.value })
          }
        />

        <button className="primaryBtn">Create Event</button>
      </form>
    </section>

    {/* ================= EXISTING ================= */}
    <section className="adminSectionCard">
      <h2 className="adminSectionTitle">Existing Events</h2>

      <div className="adminList">
        {events.map((ev) => {
          const editing = editingEventId === ev.id;
          const rsvpOpen = rsvpOpenForEventId === ev.id;

          return (
            <div key={ev.id} className="adminEventCard">
              <div className="adminEventHeader">
                <div>
                  <strong>{ev.title}</strong>
                  <div className="adminMeta">
  {ev.day} • {formatTime12(ev.time)} • {ev.category}
</div>
                </div>

                <div className="adminActions">
                  <button
                    className="ghostBtn"
                    onClick={() =>
                      rsvpOpen
                        ? setRsvpOpenForEventId(null)
                        : loadRsvps(ev.id)
                    }
                  >
                    RSVPs
                  </button>

                  <button
                    className="secondaryBtn"
                    onClick={() => startEdit(ev)}
                  >
                    Edit
                  </button>

                  <button
                    className="dangerBtn"
                    onClick={() => deleteEvent(ev.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>

              {ev.image_url && (
                <img src={ev.image_url} className="adminImagePreview" />
              )}

              {ev.description && (
                <p className="adminDescription">{ev.description}</p>
              )}

              {/* EDIT */}
              {editing && editEvent && (
                <div className="adminEditSection">
                  <input
                    className="adminInput"
                    value={editEvent.title}
                    onChange={(e) =>
                      setEditEvent({ ...editEvent, title: e.target.value })
                    }
                  />

                  <div className="adminGrid2">
                   <input
  type="date"
  className="adminInput"
  value={editEvent.day}
  onChange={(e) =>
    setEditEvent({ ...editEvent, day: e.target.value })
  }
/>

<input
  type="time"
  className="adminInput"
  value={editEvent.time}
  onChange={(e) =>
    setEditEvent({ ...editEvent, time: e.target.value })
  }
/>
                  </div>

                  <textarea
                    className="adminTextarea"
                    value={editEvent.description}
                    onChange={(e) =>
                      setEditEvent({
                        ...editEvent,
                        description: e.target.value,
                      })
                    }
                  />

                  <div className="adminActions">
                    <button
                      className="primaryBtn"
                      onClick={() => saveEdit(ev.id)}
                    >
                      Save
                    </button>

                    <button className="ghostBtn" onClick={cancelEdit}>
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  </div>
);
}