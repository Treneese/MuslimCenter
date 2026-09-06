import { useEffect, useState } from "react";
import { parseCap, uploadAdminImage } from "./adminutils";
import "../../styles/pages.css";
import { apiUrl, mediaUrl } from "../../api";

const PRAYER_TIMES = [
  { value: "FAJR", label: "Fajr" },
  { value: "DHUHR", label: "Dhuhr" },
  { value: "ASR", label: "Asr" },
  { value: "MAGHRIB", label: "Maghrib" },
  { value: "ISHA", label: "Isha" },
];

function emptyEventForm() {
  return {
    title: "",

    dates: [""],

    start_time_type: "CLOCK",
    start_time_value: "",

    end_time_type: "CLOCK",
    end_time_value: "",

    all_day: false,
    no_end_time: false,

    category: "",
    description: "",
    location: "",

    is_special: false,
    rsvp_enabled: false,
    rsvp_capacity: "",

    image_url: "",
  };
}

function formatTime12(time) {
  if (!time) return "";

  const [hour, minute] = time.split(":");

  if (hour === undefined || minute === undefined) {
    return time;
  }

  const date = new Date();
  date.setHours(Number(hour));
  date.setMinutes(Number(minute));

  return date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
}

function formatScheduleValue(type, value) {
  if (!value) return "";

  if (type === "PRAYER") {
    const prayer = PRAYER_TIMES.find((item) => item.value === value);
    return prayer?.label || value;
  }

  return formatTime12(value);
}

function formatEventSchedule(event) {
  if (event.all_day) {
    return "All Day";
  }

  const start = formatScheduleValue(
    event.start_time_type,
    event.start_time_value
  );

  if (!start) {
    // Older events
    return formatTime12(event.time);
  }

  if (event.no_end_time) {
    return start;
  }

  const end = formatScheduleValue(
    event.end_time_type,
    event.end_time_value
  );

  if (!end) {
    return start;
  }

  return `${start} – ${end}`;
}

function formatDate(dateString) {
  if (!dateString) return "";

  // Keep the date local instead of allowing UTC to shift it backward.
  const [year, month, day] = dateString.split("-").map(Number);

  if (!year || !month || !day) {
    return dateString;
  }

  return new Date(year, month - 1, day).toLocaleDateString([], {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatEventDates(event) {
  const dates =
    Array.isArray(event.dates) && event.dates.length
      ? event.dates
      : event.day
      ? [event.day]
      : [];

  if (!dates.length) {
    return "No date";
  }

  return dates.map(formatDate).join(", ");
}

function normalizeExistingEvent(event) {
  let dates = [];

  if (Array.isArray(event.dates) && event.dates.length) {
    dates = event.dates;
  } else if (event.day) {
    dates = [event.day];
  }

  if (!dates.length) {
    dates = [""];
  }

  /*
   * Backward compatibility:
   * Existing events may only have `time`.
   */
  const hasNewStart =
    event.start_time_type || event.start_time_value;

  return {
    title: event.title || "",

    dates,

    start_time_type:
      event.start_time_type ||
      (event.time ? "CLOCK" : "CLOCK"),

    start_time_value:
      event.start_time_value ||
      event.time ||
      "",

    end_time_type:
      event.end_time_type || "CLOCK",

    end_time_value:
      event.end_time_value || "",

    all_day: !!event.all_day,
    no_end_time: !!event.no_end_time,

    category: event.category || "",
    description: event.description || "",
    location: event.location || "",

    is_special: !!event.is_special,
    rsvp_enabled: !!event.rsvp_enabled,
    rsvp_capacity: event.rsvp_capacity ?? "",

    image_url: event.image_url || "",

    _legacy_time: !hasNewStart && event.time
      ? event.time
      : "",
  };
}

function EventDateFields({ value, onChange }) {
  const dates =
    Array.isArray(value) && value.length
      ? value
      : [""];

  function updateDate(index, newValue) {
    const updated = [...dates];
    updated[index] = newValue;
    onChange(updated);
  }

  function addDate() {
    onChange([...dates, ""]);
  }

  function removeDate(index) {
    if (dates.length === 1) {
      onChange([""]);
      return;
    }

    onChange(dates.filter((_, i) => i !== index));
  }

  return (
    <div className="adminScheduleBlock">
      <label className="adminFieldLabel">
        Event Date{dates.length > 1 ? "s" : ""}
      </label>

      <div className="adminDateList">
        {dates.map((date, index) => (
          <div
            className="adminDateRow"
            key={`${index}-${date}`}
          >
            <input
              type="date"
              className="adminInput"
              value={date}
              onChange={(e) =>
                updateDate(index, e.target.value)
              }
            />

            {dates.length > 1 && (
              <button
                type="button"
                className="ghostBtn"
                onClick={() => removeDate(index)}
              >
                Remove
              </button>
            )}
          </div>
        ))}
      </div>

      <button
        type="button"
        className="secondaryBtn"
        onClick={addDate}
      >
        + Add Another Date
      </button>
    </div>
  );
}

function EventTimeFields({ event, setEvent }) {
  function updateStartType(type) {
    setEvent({
      ...event,
      start_time_type: type,
      start_time_value: "",
    });
  }

  function updateEndType(type) {
    setEvent({
      ...event,
      end_time_type: type,
      end_time_value: "",
    });
  }

  return (
    <div className="adminScheduleBlock">
      <div className="adminRow">
        <label>
          <input
            type="checkbox"
            checked={event.all_day}
            onChange={(e) =>
              setEvent({
                ...event,
                all_day: e.target.checked,
              })
            }
          />
          All Day
        </label>

        {!event.all_day && (
          <label>
            <input
              type="checkbox"
              checked={event.no_end_time}
              onChange={(e) =>
                setEvent({
                  ...event,
                  no_end_time: e.target.checked,
                })
              }
            />
            No End Time
          </label>
        )}
      </div>

      {!event.all_day && (
        <>
          <div className="adminTimeSection">
            <label className="adminFieldLabel">
              Start Time
            </label>

            <div className="adminGrid2">
              <select
                className="adminInput"
                value={event.start_time_type}
                onChange={(e) =>
                  updateStartType(e.target.value)
                }
              >
                <option value="CLOCK">
                  Custom Time
                </option>
                <option value="PRAYER">
                  Prayer Time
                </option>
              </select>

              {event.start_time_type === "PRAYER" ? (
                <select
                  className="adminInput"
                  value={event.start_time_value}
                  onChange={(e) =>
                    setEvent({
                      ...event,
                      start_time_value: e.target.value,
                    })
                  }
                >
                  <option value="">
                    Select prayer
                  </option>

                  {PRAYER_TIMES.map((prayer) => (
                    <option
                      key={prayer.value}
                      value={prayer.value}
                    >
                      {prayer.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type="time"
                  className="adminInput"
                  value={event.start_time_value}
                  onChange={(e) =>
                    setEvent({
                      ...event,
                      start_time_value: e.target.value,
                    })
                  }
                />
              )}
            </div>
          </div>

          {!event.no_end_time && (
            <div className="adminTimeSection">
              <label className="adminFieldLabel">
                End Time
              </label>

              <div className="adminGrid2">
                <select
                  className="adminInput"
                  value={event.end_time_type}
                  onChange={(e) =>
                    updateEndType(e.target.value)
                  }
                >
                  <option value="CLOCK">
                    Custom Time
                  </option>
                  <option value="PRAYER">
                    Prayer Time
                  </option>
                </select>

                {event.end_time_type === "PRAYER" ? (
                  <select
                    className="adminInput"
                    value={event.end_time_value}
                    onChange={(e) =>
                      setEvent({
                        ...event,
                        end_time_value: e.target.value,
                      })
                    }
                  >
                    <option value="">
                      Select prayer
                    </option>

                    {PRAYER_TIMES.map((prayer) => (
                      <option
                        key={prayer.value}
                        value={prayer.value}
                      >
                        {prayer.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="time"
                    className="adminInput"
                    value={event.end_time_value}
                    onChange={(e) =>
                      setEvent({
                        ...event,
                        end_time_value: e.target.value,
                      })
                    }
                  />
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default function EventsAdmin({ adminKey }) {
  const [status, setStatus] = useState("");
  const [events, setEvents] = useState([]);

  // Create
  const [newEvent, setNewEvent] = useState(
    emptyEventForm()
  );

  const [newEventFile, setNewEventFile] =
    useState(null);

  // Edit
  const [editingEventId, setEditingEventId] =
    useState(null);

  const [editEvent, setEditEvent] =
    useState(null);

  const [editEventFile, setEditEventFile] =
    useState(null);

  // RSVP viewer
  const [
    rsvpOpenForEventId,
    setRsvpOpenForEventId,
  ] = useState(null);

  const [rsvps, setRsvps] = useState([]);
  const [rsvpStatus, setRsvpStatus] =
    useState("");

  async function loadEvents() {
    const res = await fetch(
      apiUrl("/api/events")
    );

    const data = await res
      .json()
      .catch(() => []);

    setEvents(
      Array.isArray(data) ? data : []
    );
  }

  useEffect(() => {
    loadEvents();
  }, []);

  function startEdit(ev) {
    setStatus("");
    setEditingEventId(ev.id);

    setEditEvent(
      normalizeExistingEvent(ev)
    );

    setEditEventFile(null);
  }

  function cancelEdit() {
    setEditingEventId(null);
    setEditEvent(null);
    setEditEventFile(null);
  }

  function validateSchedule(event) {
    const validDates = (
      event.dates || []
    ).filter(Boolean);

    if (!validDates.length) {
      return "At least one event date is required.";
    }

    if (event.all_day) {
      return null;
    }

    if (!event.start_time_value) {
      return "Start time is required.";
    }

    if (
      !event.no_end_time &&
      !event.end_time_value
    ) {
      return "End time is required, or select No End Time.";
    }

    return null;
  }

  function preparePayload(event, image_url) {
    const dates = (event.dates || [])
      .filter(Boolean)
      .filter(
        (date, index, array) =>
          array.indexOf(date) === index
      )
      .sort();

    return {
      title: event.title.trim(),

      dates,

      start_time_type: event.all_day
        ? null
        : event.start_time_type,

      start_time_value: event.all_day
        ? null
        : event.start_time_value || null,

      end_time_type:
        event.all_day ||
        event.no_end_time
          ? null
          : event.end_time_type,

      end_time_value:
        event.all_day ||
        event.no_end_time
          ? null
          : event.end_time_value || null,

      all_day: !!event.all_day,
      no_end_time:
        !event.all_day &&
        !!event.no_end_time,

      category:
        event.category?.trim() || null,

      description:
        event.description?.trim() || null,

      location:
        event.location?.trim() || null,

      image_url:
        image_url || null,

      is_special:
        !!event.is_special,

      rsvp_enabled:
        !!event.is_special &&
        !!event.rsvp_enabled,

      rsvp_capacity:
        event.is_special &&
        event.rsvp_enabled
          ? parseCap(
              event.rsvp_capacity
            )
          : null,
    };
  }

  async function createEvent(e) {
    e.preventDefault();
    setStatus("");

    if (!adminKey) {
      return setStatus(
        "Enter admin key first."
      );
    }

    if (!newEvent.title.trim()) {
      return setStatus(
        "Title is required."
      );
    }

    const scheduleError =
      validateSchedule(newEvent);

    if (scheduleError) {
      return setStatus(scheduleError);
    }

    try {
      let image_url =
        newEvent.image_url;

      if (newEventFile) {
        image_url =
          await uploadAdminImage({
            adminKey,
            file: newEventFile,
          });
      }

      const payload =
        preparePayload(
          newEvent,
          image_url
        );

      const res = await fetch(
        apiUrl("/api/events"),
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
            "x-admin-key":
              adminKey,
          },
          body: JSON.stringify(
            payload
          ),
        }
      );

      const json = await res
        .json()
        .catch(() => ({}));

      if (!res.ok) {
        return setStatus(
          json.error ||
            "Create failed"
        );
      }

      setStatus(
        "✅ Event created"
      );

      setNewEvent(
        emptyEventForm()
      );

      setNewEventFile(null);

      loadEvents();
    } catch (err) {
      setStatus(
        err.message ||
          "Create failed"
      );
    }
  }

  async function saveEdit(id) {
    setStatus("");

    if (!adminKey) {
      return setStatus(
        "Enter admin key first."
      );
    }

    if (
      !editEvent?.title?.trim()
    ) {
      return setStatus(
        "Title is required."
      );
    }

    const scheduleError =
      validateSchedule(editEvent);

    if (scheduleError) {
      return setStatus(scheduleError);
    }

    try {
      let image_url =
        editEvent.image_url;

      if (editEventFile) {
        image_url =
          await uploadAdminImage({
            adminKey,
            file: editEventFile,
          });
      }

      const payload =
        preparePayload(
          editEvent,
          image_url
        );

      const res = await fetch(
        apiUrl(`/api/events/${id}`),
        {
          method: "PUT",
          headers: {
            "Content-Type":
              "application/json",
            "x-admin-key":
              adminKey,
          },
          body: JSON.stringify(
            payload
          ),
        }
      );

      const json = await res
        .json()
        .catch(() => ({}));

      if (!res.ok) {
        return setStatus(
          json.error ||
            "Update failed"
        );
      }

      setStatus(
        "✅ Event updated"
      );

      cancelEdit();
      loadEvents();
    } catch (err) {
      setStatus(
        err.message ||
          "Update failed"
      );
    }
  }

  async function deleteEvent(id) {
    setStatus("");

    if (!adminKey) {
      return setStatus(
        "Enter admin key first."
      );
    }

    const res = await fetch(
      apiUrl(`/api/events/${id}`),
      {
        method: "DELETE",
        headers: {
          "x-admin-key":
            adminKey,
        },
      }
    );

    const json = await res
      .json()
      .catch(() => ({}));

    if (!res.ok) {
      return setStatus(
        json.error ||
          "Delete failed"
      );
    }

    setStatus(
      "🗑️ Event deleted"
    );

    if (
      rsvpOpenForEventId === id
    ) {
      setRsvpOpenForEventId(null);
      setRsvps([]);
    }

    loadEvents();
  }

  async function loadRsvps(eventId) {
    if (!adminKey) {
      return setRsvpStatus(
        "Enter admin key first."
      );
    }

    setRsvpStatus("");
    setRsvpOpenForEventId(
      eventId
    );

    const res = await fetch(
      apiUrl(
        `/api/admin/rsvps?event_id=${eventId}`
      ),
      {
        headers: {
          "x-admin-key":
            adminKey,
        },
      }
    );

    const data = await res
      .json()
      .catch(() => []);

    if (!res.ok) {
      setRsvpStatus(
        (data && data.error) ||
          "Failed to load RSVPs"
      );

      setRsvps([]);
      return;
    }

    setRsvps(
      Array.isArray(data)
        ? data
        : []
    );
  }

  async function deleteRsvp(
    rsvpId
  ) {
    if (!adminKey) return;

    const res = await fetch(
      apiUrl(
        `/api/admin/rsvps/${rsvpId}`
      ),
      {
        method: "DELETE",
        headers: {
          "x-admin-key":
            adminKey,
        },
      }
    );

    const json = await res
      .json()
      .catch(() => ({}));

    if (!res.ok) {
      return setRsvpStatus(
        json.error ||
          "Failed to delete RSVP"
      );
    }

    setRsvpStatus(
      "🗑️ RSVP deleted"
    );

    if (rsvpOpenForEventId) {
      loadRsvps(
        rsvpOpenForEventId
      );
    }

    loadEvents();
  }

  return (
    <div className="adminPage">
      {status && (
        <p
          className={`adminStatus ${
            status.includes("✅")
              ? "success"
              : "error"
          }`}
        >
          {status}
        </p>
      )}

      {/* ================= CREATE ================= */}

      <section className="adminSectionCard">
        <h2 className="adminSectionTitle">
          Create Event
        </h2>

        <form
          onSubmit={createEvent}
          className="adminForm"
        >
          <input
            className="adminInput"
            placeholder="Title *"
            value={newEvent.title}
            onChange={(e) =>
              setNewEvent({
                ...newEvent,
                title:
                  e.target.value,
              })
            }
          />

          <EventDateFields
            value={newEvent.dates}
            onChange={(dates) =>
              setNewEvent({
                ...newEvent,
                dates,
              })
            }
          />

          <EventTimeFields
            event={newEvent}
            setEvent={setNewEvent}
          />

          <div className="adminGrid2">
            <input
              className="adminInput"
              placeholder="Category"
              value={
                newEvent.category
              }
              onChange={(e) =>
                setNewEvent({
                  ...newEvent,
                  category:
                    e.target.value,
                })
              }
            />

            <input
              className="adminInput"
              placeholder="Location"
              value={
                newEvent.location
              }
              onChange={(e) =>
                setNewEvent({
                  ...newEvent,
                  location:
                    e.target.value,
                })
              }
            />
          </div>

          <label className="adminFileLabel">
            Event Image

            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setNewEventFile(
                  e.target.files?.[0] ||
                    null
                )
              }
            />
          </label>

          {newEventFile && (
            <img
              src={URL.createObjectURL(
                newEventFile
              )}
              alt="New event preview"
              className="adminImagePreview"
            />
          )}

          <div className="adminRow">
            <label>
              <input
                type="checkbox"
                checked={
                  newEvent.is_special
                }
                onChange={(e) => {
                  const checked =
                    e.target.checked;

                  setNewEvent({
                    ...newEvent,
                    is_special:
                      checked,

                    rsvp_enabled:
                      checked
                        ? newEvent.rsvp_enabled
                        : false,

                    rsvp_capacity:
                      checked
                        ? newEvent.rsvp_capacity
                        : "",
                  });
                }}
              />
              Special
            </label>

            <label>
              <input
                type="checkbox"
                checked={
                  newEvent.rsvp_enabled
                }
                disabled={
                  !newEvent.is_special
                }
                onChange={(e) =>
                  setNewEvent({
                    ...newEvent,
                    rsvp_enabled:
                      e.target.checked,

                    rsvp_capacity:
                      e.target.checked
                        ? newEvent.rsvp_capacity
                        : "",
                  })
                }
              />
              RSVP
            </label>

            <input
              className="adminInput"
              placeholder="Capacity"
              type="number"
              min="1"
              value={
                newEvent.rsvp_capacity
              }
              disabled={
                !newEvent.rsvp_enabled
              }
              onChange={(e) =>
                setNewEvent({
                  ...newEvent,
                  rsvp_capacity:
                    e.target.value,
                })
              }
            />
          </div>

          <textarea
            className="adminTextarea"
            placeholder="Description"
            value={
              newEvent.description
            }
            onChange={(e) =>
              setNewEvent({
                ...newEvent,
                description:
                  e.target.value,
              })
            }
          />

          <button className="primaryBtn">
            Create Event
          </button>
        </form>
      </section>

      {/* ================= EXISTING ================= */}

      <section className="adminSectionCard">
        <h2 className="adminSectionTitle">
          Existing Events
        </h2>

        <div className="adminList">
          {events.map((ev) => {
            const editing =
              editingEventId === ev.id;

            const rsvpOpen =
              rsvpOpenForEventId ===
              ev.id;

            return (
              <div
                key={ev.id}
                className="adminEventCard"
              >
                <div className="adminEventHeader">
                  <div>
                    <strong>
                      {ev.title}
                    </strong>

                    <div className="adminMeta">
                      {formatEventDates(
                        ev
                      )}

                      {" • "}

                      {formatEventSchedule(
                        ev
                      )}

                      {ev.category
                        ? ` • ${ev.category}`
                        : ""}
                    </div>
                  </div>

                  <div className="adminActions">
                    <button
                      type="button"
                      className="ghostBtn"
                      onClick={() =>
                        rsvpOpen
                          ? setRsvpOpenForEventId(
                              null
                            )
                          : loadRsvps(
                              ev.id
                            )
                      }
                    >
                      RSVPs
                    </button>

                    <button
                      type="button"
                      className="secondaryBtn"
                      onClick={() =>
                        startEdit(ev)
                      }
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      className="dangerBtn"
                      onClick={() =>
                        deleteEvent(
                          ev.id
                        )
                      }
                    >
                      Delete
                    </button>
                  </div>
                </div>

                {ev.image_url && (
                  <img
                    src={mediaUrl(
                      ev.image_url
                    )}
                    alt={
                      ev.title ||
                      "Event"
                    }
                    className="adminImagePreview"
                  />
                )}

                {ev.description && (
                  <p className="adminDescription">
                    {
                      ev.description
                    }
                  </p>
                )}

                {/* ================= RSVP LIST ================= */}

                {rsvpOpen && (
                  <div className="adminEditSection">
                    <h3>
                      Event RSVPs
                    </h3>

                    {rsvpStatus && (
                      <p>
                        {rsvpStatus}
                      </p>
                    )}

                    {!rsvps.length &&
                      !rsvpStatus && (
                        <p className="adminMeta">
                          No RSVPs yet.
                        </p>
                      )}

                    {rsvps.map(
                      (rsvp) => (
                        <div
                          key={
                            rsvp.id
                          }
                          className="adminEventHeader"
                        >
                          <div>
                            <strong>
                              {
                                rsvp.name
                              }
                            </strong>

                            <div className="adminMeta">
                              {
                                rsvp.email
                              }

                              {rsvp.guests
                                ? ` • ${rsvp.guests} guest${
                                    Number(
                                      rsvp.guests
                                    ) ===
                                    1
                                      ? ""
                                      : "s"
                                  }`
                                : ""}
                            </div>
                          </div>

                          <button
                            type="button"
                            className="dangerBtn"
                            onClick={() =>
                              deleteRsvp(
                                rsvp.id
                              )
                            }
                          >
                            Delete
                          </button>
                        </div>
                      )
                    )}
                  </div>
                )}

                {/* ================= EDIT ================= */}

                {editing &&
                  editEvent && (
                    <div className="adminEditSection">
                      <h3>
                        Edit Event
                      </h3>

                      <input
                        className="adminInput"
                        placeholder="Title *"
                        value={
                          editEvent.title
                        }
                        onChange={(
                          e
                        ) =>
                          setEditEvent({
                            ...editEvent,
                            title:
                              e.target
                                .value,
                          })
                        }
                      />

                      <EventDateFields
                        value={
                          editEvent.dates
                        }
                        onChange={(
                          dates
                        ) =>
                          setEditEvent({
                            ...editEvent,
                            dates,
                          })
                        }
                      />

                      <EventTimeFields
                        event={
                          editEvent
                        }
                        setEvent={
                          setEditEvent
                        }
                      />

                      <div className="adminGrid2">
                        <input
                          className="adminInput"
                          placeholder="Category"
                          value={
                            editEvent.category
                          }
                          onChange={(
                            e
                          ) =>
                            setEditEvent({
                              ...editEvent,
                              category:
                                e
                                  .target
                                  .value,
                            })
                          }
                        />

                        <input
                          className="adminInput"
                          placeholder="Location"
                          value={
                            editEvent.location
                          }
                          onChange={(
                            e
                          ) =>
                            setEditEvent({
                              ...editEvent,
                              location:
                                e
                                  .target
                                  .value,
                            })
                          }
                        />
                      </div>

                      <label className="adminFileLabel">
                        Replace Event
                        Image

                        <input
                          type="file"
                          accept="image/*"
                          onChange={(
                            e
                          ) =>
                            setEditEventFile(
                              e.target
                                .files?.[0] ||
                                null
                            )
                          }
                        />
                      </label>

                      {editEventFile ? (
                        <img
                          src={URL.createObjectURL(
                            editEventFile
                          )}
                          alt="Event preview"
                          className="adminImagePreview"
                        />
                      ) : (
                        editEvent.image_url && (
                          <img
                            src={mediaUrl(
                              editEvent.image_url
                            )}
                            alt={
                              editEvent.title ||
                              "Event"
                            }
                            className="adminImagePreview"
                          />
                        )
                      )}

                      <div className="adminRow">
                        <label>
                          <input
                            type="checkbox"
                            checked={
                              editEvent.is_special
                            }
                            onChange={(
                              e
                            ) => {
                              const checked =
                                e
                                  .target
                                  .checked;

                              setEditEvent({
                                ...editEvent,

                                is_special:
                                  checked,

                                rsvp_enabled:
                                  checked
                                    ? editEvent.rsvp_enabled
                                    : false,

                                rsvp_capacity:
                                  checked
                                    ? editEvent.rsvp_capacity
                                    : "",
                              });
                            }}
                          />
                          Special
                        </label>

                        <label>
                          <input
                            type="checkbox"
                            checked={
                              editEvent.rsvp_enabled
                            }
                            disabled={
                              !editEvent.is_special
                            }
                            onChange={(
                              e
                            ) =>
                              setEditEvent({
                                ...editEvent,

                                rsvp_enabled:
                                  e
                                    .target
                                    .checked,

                                rsvp_capacity:
                                  e
                                    .target
                                    .checked
                                    ? editEvent.rsvp_capacity
                                    : "",
                              })
                            }
                          />
                          RSVP
                        </label>

                        <input
                          className="adminInput"
                          placeholder="Capacity"
                          type="number"
                          min="1"
                          value={
                            editEvent.rsvp_capacity
                          }
                          disabled={
                            !editEvent.rsvp_enabled
                          }
                          onChange={(
                            e
                          ) =>
                            setEditEvent({
                              ...editEvent,

                              rsvp_capacity:
                                e
                                  .target
                                  .value,
                            })
                          }
                        />
                      </div>

                      <textarea
                        className="adminTextarea"
                        placeholder="Description"
                        value={
                          editEvent.description
                        }
                        onChange={(
                          e
                        ) =>
                          setEditEvent({
                            ...editEvent,

                            description:
                              e.target
                                .value,
                          })
                        }
                      />

                      <div className="adminActions">
                        <button
                          type="button"
                          className="primaryBtn"
                          onClick={() =>
                            saveEdit(
                              ev.id
                            )
                          }
                        >
                          Save
                        </button>

                        <button
                          type="button"
                          className="ghostBtn"
                          onClick={
                            cancelEdit
                          }
                        >
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