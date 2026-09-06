import { useEffect, useState } from "react";
import { uploadAdminImage } from "./adminutils";
import "../../styles/pages.css";
import { apiUrl, mediaUrl } from "../../api";

const WEEKDAYS = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
];

const PRAYER_TIMES = [
  { value: "FAJR", label: "Fajr" },
  { value: "DHUHR", label: "Dhuhr" },
  { value: "ASR", label: "Asr" },
  { value: "MAGHRIB", label: "Maghrib" },
  { value: "ISHA", label: "Isha" },
];

const MONTHLY_WEEKS = [
  { value: "FIRST", label: "First" },
  { value: "SECOND", label: "Second" },
  { value: "THIRD", label: "Third" },
  { value: "FOURTH", label: "Fourth" },
  { value: "LAST", label: "Last" },
];

function emptyProgramForm() {
  return {
    title: "",
    audience: "",

    recurrence_type: "WEEKLY",
    weekdays: [],

    monthly_week: "",
monthly_patterns: [
  {
    week: "",
    weekday: "",
  },
],

    recurrence_start_date: "",
    recurrence_end_date: "",

    start_time_type: "CLOCK",
    start_time_value: "",

    end_time_type: "CLOCK",
    end_time_value: "",

    no_end_time: false,

    schedule: "",
    description: "",
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

function formatTimeValue(type, value) {
  if (!value) return "";

  if (type === "PRAYER") {
    const prayer = PRAYER_TIMES.find(
      (item) => item.value === value
    );

    return prayer?.label || value;
  }

  return formatTime12(value);
}

function formatProgramTime(program) {
  const start = formatTimeValue(
    program.start_time_type,
    program.start_time_value
  );

  if (!start) {
    return "";
  }

  if (program.no_end_time) {
    return start;
  }

  const end = formatTimeValue(
    program.end_time_type,
    program.end_time_value
  );

  if (!end) {
    return start;
  }

  return `${start} – ${end}`;
}

function titleCaseDay(day) {
  if (!day) return "";

  return (
    day.charAt(0) +
    day.slice(1).toLowerCase()
  );
}

function formatProgramRecurrence(program) {
  const weekdays =
    Array.isArray(program.weekdays)
      ? program.weekdays
      : [];

  if (program.recurrence_type === "WEEKLY") {
    if (!weekdays.length) {
      return program.schedule || "";
    }

    const days = weekdays
      .map(titleCaseDay)
      .join(" & ");

    return `Every ${days}`;
  }

  if (
    program.recurrence_type ===
    "EVERY_OTHER_WEEK"
  ) {
    if (!weekdays.length) {
      return "Every other week";
    }

    const days = weekdays
      .map(titleCaseDay)
      .join(" & ");

    return `Every other ${days}`;
  }

  if (
  program.recurrence_type ===
  "MONTHLY_NTH"
) {
  const patterns =
    Array.isArray(program.monthly_patterns)
      ? program.monthly_patterns
      : [];

  if (!patterns.length) {
    return "Monthly";
  }

  return patterns
    .map((pattern) => {
      const week =
        MONTHLY_WEEKS.find(
          (item) =>
            item.value ===
            pattern.week
        );

      const day =
        titleCaseDay(
          pattern.weekday
        );

      return `${week?.label || pattern.week} ${day}`;
    })
    .join(" & ");
}


return program.schedule || "";
}

function normalizeExistingProgram(program) {
  return {
    title: program.title || "",
    audience: program.audience || "",

    recurrence_type:
      program.recurrence_type || "WEEKLY",

    weekdays:
      Array.isArray(program.weekdays)
        ? program.weekdays
        : [],

    monthly_patterns:
  Array.isArray(program.monthly_patterns) &&
  program.monthly_patterns.length
    ? program.monthly_patterns
    : [
        {
          week: "",
          weekday: "",
        },
      ],

    recurrence_start_date:
      program.recurrence_start_date || "",

    recurrence_end_date:
      program.recurrence_end_date || "",

    start_time_type:
      program.start_time_type || "CLOCK",

    start_time_value:
      program.start_time_value || "",

    end_time_type:
      program.end_time_type || "CLOCK",

    end_time_value:
      program.end_time_value || "",

    no_end_time:
      !!program.no_end_time,

    schedule:
      program.schedule || "",

    description:
      program.description || "",

    image_url:
      program.image_url || "",
  };
}

function WeekdaySelector({
  weekdays,
  onChange,
  single = false,
}) {
  function toggleDay(day) {
    if (single) {
      onChange([day]);
      return;
    }

    if (weekdays.includes(day)) {
      onChange(
        weekdays.filter(
          (existingDay) =>
            existingDay !== day
        )
      );
    } else {
      onChange([
        ...weekdays,
        day,
      ]);
    }
  }

  return (
    <div className="adminWeekdayGrid">
      {WEEKDAYS.map((day) => {
        const active =
          weekdays.includes(day);

        return (
          <button
            type="button"
            key={day}
            className={
              active
                ? "secondaryBtn"
                : "ghostBtn"
            }
            onClick={() =>
              toggleDay(day)
            }
          >
            {titleCaseDay(day)}
          </button>
        );
      })}
    </div>
  );
}

function ProgramRecurrenceFields({
  program,
  setProgram,
}) {
  const monthly =
    program.recurrence_type ===
    "MONTHLY_NTH";

  function changeRecurrenceType(type) {
    setProgram({
      ...program,
      recurrence_type: type,
      monthly_patterns:
        type === "MONTHLY_NTH"
          ? program.monthly_patterns?.length
            ? program.monthly_patterns
            : [
                {
                  week: "",
                  weekday: "",
                },
              ]
          : program.monthly_patterns,
    });
  }

  function updateMonthlyPattern(
    index,
    field,
    value
  ) {
    const patterns = [
      ...(program.monthly_patterns || []),
    ];

    patterns[index] = {
      ...patterns[index],
      [field]: value,
    };

    setProgram({
      ...program,
      monthly_patterns: patterns,
    });
  }

  function addMonthlyPattern() {
    setProgram({
      ...program,
      monthly_patterns: [
        ...(program.monthly_patterns || []),
        {
          week: "",
          weekday: "",
        },
      ],
    });
  }

  function removeMonthlyPattern(index) {
    const patterns =
      program.monthly_patterns.filter(
        (_, patternIndex) =>
          patternIndex !== index
      );

    setProgram({
      ...program,
      monthly_patterns:
        patterns.length
          ? patterns
          : [
              {
                week: "",
                weekday: "",
              },
            ],
    });
  }

  return (
    <div className="adminScheduleBlock">
      <label className="adminFieldLabel">
        Recurrence
      </label>

      <select
        className="adminInput"
        value={program.recurrence_type}
        onChange={(e) =>
          changeRecurrenceType(
            e.target.value
          )
        }
      >
        <option value="WEEKLY">
          Every Week
        </option>

        <option value="EVERY_OTHER_WEEK">
          Every Other Week
        </option>

        <option value="MONTHLY_NTH">
          Monthly Pattern
        </option>
      </select>

      {monthly ? (
        <>
          <label className="adminFieldLabel">
            Monthly Patterns
          </label>

          <div className="adminDateList">
            {(
              program.monthly_patterns || []
            ).map((pattern, index) => (
              <div
                className="adminDateRow"
                key={index}
              >
                <select
                  className="adminInput"
                  value={pattern.week}
                  onChange={(e) =>
                    updateMonthlyPattern(
                      index,
                      "week",
                      e.target.value
                    )
                  }
                >
                  <option value="">
                    Select week
                  </option>

                  {MONTHLY_WEEKS.map(
                    (week) => (
                      <option
                        key={week.value}
                        value={week.value}
                      >
                        {week.label}
                      </option>
                    )
                  )}
                </select>

                <select
                  className="adminInput"
                  value={pattern.weekday}
                  onChange={(e) =>
                    updateMonthlyPattern(
                      index,
                      "weekday",
                      e.target.value
                    )
                  }
                >
                  <option value="">
                    Select day
                  </option>

                  {WEEKDAYS.map((day) => (
                    <option
                      key={day}
                      value={day}
                    >
                      {titleCaseDay(day)}
                    </option>
                  ))}
                </select>

                <button
                  type="button"
                  className="ghostBtn"
                  onClick={() =>
                    removeMonthlyPattern(
                      index
                    )
                  }
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="ghostBtn"
            onClick={addMonthlyPattern}
          >
            + Add Monthly Pattern
          </button>
        </>
      ) : (
        <>
          <label className="adminFieldLabel">
            Days
          </label>

          <WeekdaySelector
            weekdays={program.weekdays}
            onChange={(weekdays) =>
              setProgram({
                ...program,
                weekdays,
              })
            }
          />
        </>
      )}

      <div className="adminGrid2">
        <div>
          <label className="adminFieldLabel">
            Starts
          </label>

          <input
            type="date"
            className="adminInput"
            value={
              program.recurrence_start_date
            }
            onChange={(e) =>
              setProgram({
                ...program,
                recurrence_start_date:
                  e.target.value,
              })
            }
          />
        </div>

        <div>
          <label className="adminFieldLabel">
            Ends
          </label>

          <input
            type="date"
            className="adminInput"
            value={
              program.recurrence_end_date
            }
            onChange={(e) =>
              setProgram({
                ...program,
                recurrence_end_date:
                  e.target.value,
              })
            }
          />
        </div>
      </div>

      <div className="adminMeta">
        Leave the end date blank if the
        program continues indefinitely.
      </div>
    </div>
  );
}

function ProgramTimeFields({
  program,
  setProgram,
}) {
  function updateStartType(type) {
    setProgram({
      ...program,
      start_time_type: type,
      start_time_value: "",
    });
  }

  function updateEndType(type) {
    setProgram({
      ...program,
      end_time_type: type,
      end_time_value: "",
    });
  }

  return (
    <div className="adminScheduleBlock">
      <div className="adminTimeSection">
        <label className="adminFieldLabel">
          Start Time
        </label>

        <div className="adminGrid2">
          <select
            className="adminInput"
            value={
              program.start_time_type
            }
            onChange={(e) =>
              updateStartType(
                e.target.value
              )
            }
          >
            <option value="CLOCK">
              Custom Time
            </option>

            <option value="PRAYER">
              Prayer Time
            </option>
          </select>

          {program.start_time_type ===
          "PRAYER" ? (
            <select
              className="adminInput"
              value={
                program.start_time_value
              }
              onChange={(e) =>
                setProgram({
                  ...program,
                  start_time_value:
                    e.target.value,
                })
              }
            >
              <option value="">
                Select prayer
              </option>

              {PRAYER_TIMES.map(
                (prayer) => (
                  <option
                    key={
                      prayer.value
                    }
                    value={
                      prayer.value
                    }
                  >
                    {prayer.label}
                  </option>
                )
              )}
            </select>
          ) : (
            <input
              type="time"
              className="adminInput"
              value={
                program.start_time_value
              }
              onChange={(e) =>
                setProgram({
                  ...program,
                  start_time_value:
                    e.target.value,
                })
              }
            />
          )}
        </div>
      </div>

      <label>
        <input
          type="checkbox"
          checked={
            program.no_end_time
          }
          onChange={(e) =>
            setProgram({
              ...program,
              no_end_time:
                e.target.checked,
            })
          }
        />
        No End Time
      </label>

      {!program.no_end_time && (
        <div className="adminTimeSection">
          <label className="adminFieldLabel">
            End Time
          </label>

          <div className="adminGrid2">
            <select
              className="adminInput"
              value={
                program.end_time_type
              }
              onChange={(e) =>
                updateEndType(
                  e.target.value
                )
              }
            >
              <option value="CLOCK">
                Custom Time
              </option>

              <option value="PRAYER">
                Prayer Time
              </option>
            </select>

            {program.end_time_type ===
            "PRAYER" ? (
              <select
                className="adminInput"
                value={
                  program.end_time_value
                }
                onChange={(e) =>
                  setProgram({
                    ...program,
                    end_time_value:
                      e.target.value,
                  })
                }
              >
                <option value="">
                  Select prayer
                </option>

                {PRAYER_TIMES.map(
                  (prayer) => (
                    <option
                      key={
                        prayer.value
                      }
                      value={
                        prayer.value
                      }
                    >
                      {prayer.label}
                    </option>
                  )
                )}
              </select>
            ) : (
              <input
                type="time"
                className="adminInput"
                value={
                  program.end_time_value
                }
                onChange={(e) =>
                  setProgram({
                    ...program,
                    end_time_value:
                      e.target.value,
                  })
                }
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProgramsAdmin({
  adminKey,
}) {
  const [programs, setPrograms] =
    useState([]);

  const [status, setStatus] =
    useState("");

  const [
    newProgram,
    setNewProgram,
  ] = useState(
    emptyProgramForm()
  );

  const [
    newProgramFile,
    setNewProgramFile,
  ] = useState(null);

  const [
    editingProgramId,
    setEditingProgramId,
  ] = useState(null);

  const [
    editProgram,
    setEditProgram,
  ] = useState(null);

  const [
    editProgramFile,
    setEditProgramFile,
  ] = useState(null);

  async function loadPrograms() {
    const res = await fetch(
      apiUrl("/api/programs")
    );

    const data = await res
      .json()
      .catch(() => []);

    setPrograms(
      Array.isArray(data)
        ? data
        : []
    );
  }

  useEffect(() => {
    loadPrograms();
  }, []);

  function startEdit(program) {
    setStatus("");

    setEditingProgramId(
      program.id
    );

    setEditProgram(
      normalizeExistingProgram(
        program
      )
    );

    setEditProgramFile(null);
  }

  function cancelEdit() {
    setEditingProgramId(null);
    setEditProgram(null);
    setEditProgramFile(null);
  }

  function validateProgram(program) {
    if (!program.title.trim()) {
      return "Title is required.";
    }

    if (
  program.recurrence_type !==
    "MONTHLY_NTH" &&
  !program.weekdays.length
) {
  return "Select at least one day.";
}

    if (
  program.recurrence_type ===
  "MONTHLY_NTH"
) {
  const patterns =
    program.monthly_patterns || [];

  if (!patterns.length) {
    return "Add at least one monthly pattern.";
  }

  const incomplete =
    patterns.some(
      (pattern) =>
        !pattern.week ||
        !pattern.weekday
    );

  if (incomplete) {
    return "Choose both a week and day for each monthly pattern.";
  }
}

    if (
      program.recurrence_type ===
        "EVERY_OTHER_WEEK" &&
      !program.recurrence_start_date
    ) {
      return "Every-other-week programs need a start date.";
    }

    if (
      !program.start_time_value
    ) {
      return "Start time is required.";
    }

    if (
      !program.no_end_time &&
      !program.end_time_value
    ) {
      return "End time is required, or select No End Time.";
    }

    if (
      program.recurrence_start_date &&
      program.recurrence_end_date &&
      program.recurrence_end_date <
        program.recurrence_start_date
    ) {
      return "End date cannot be before the start date.";
    }

    return null;
  }

  function preparePayload(
    program,
    image_url
  ) {
    return {
      title:
        program.title.trim(),

      audience:
        program.audience?.trim() ||
        null,

      recurrence_type:
        program.recurrence_type,

      weekdays:
        program.weekdays,

      monthly_week: null,

monthly_patterns:
  program.recurrence_type ===
  "MONTHLY_NTH"
    ? program.monthly_patterns
    : [],

      recurrence_start_date:
        program.recurrence_start_date ||
        null,

      recurrence_end_date:
        program.recurrence_end_date ||
        null,

      start_time_type:
        program.start_time_type,

      start_time_value:
        program.start_time_value ||
        null,

      end_time_type:
        program.no_end_time
          ? null
          : program.end_time_type,

      end_time_value:
        program.no_end_time
          ? null
          : program.end_time_value ||
            null,

      no_end_time:
        !!program.no_end_time,

      schedule:
        program.schedule || null,

      description:
        program.description?.trim() ||
        null,

      image_url:
        image_url || null,
    };
  }

  async function createProgram(e) {
    e.preventDefault();
    setStatus("");

    if (!adminKey) {
      return setStatus(
        "Enter admin key first."
      );
    }

    const validation =
      validateProgram(newProgram);

    if (validation) {
      return setStatus(
        validation
      );
    }

    try {
      let image_url =
        newProgram.image_url;

      if (newProgramFile) {
        image_url =
          await uploadAdminImage({
            adminKey,
            file: newProgramFile,
          });
      }

      const payload =
        preparePayload(
          newProgram,
          image_url
        );

      const res = await fetch(
        apiUrl("/api/programs"),
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
        "✅ Program created"
      );

      setNewProgram(
        emptyProgramForm()
      );

      setNewProgramFile(null);

      loadPrograms();
    } catch (err) {
      setStatus(
        err.message ||
          "Create failed"
      );
    }
  }

  async function saveProgram(id) {
    setStatus("");

    if (!adminKey) {
      return setStatus(
        "Enter admin key first."
      );
    }

    if (!editProgram) {
      return;
    }

    const validation =
      validateProgram(editProgram);

    if (validation) {
      return setStatus(
        validation
      );
    }

    try {
      let image_url =
        editProgram.image_url;

      if (editProgramFile) {
        image_url =
          await uploadAdminImage({
            adminKey,
            file: editProgramFile,
          });
      }

      const payload =
        preparePayload(
          editProgram,
          image_url
        );

      const res = await fetch(
        apiUrl(
          `/api/programs/${id}`
        ),
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
        "✅ Program updated"
      );

      cancelEdit();
      loadPrograms();
    } catch (err) {
      setStatus(
        err.message ||
          "Update failed"
      );
    }
  }

  async function deleteProgram(id) {
    setStatus("");

    if (!adminKey) {
      return setStatus(
        "Enter admin key first."
      );
    }

    const res = await fetch(
      apiUrl(
        `/api/programs/${id}`
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
      return setStatus(
        json.error ||
          "Delete failed"
      );
    }

    setStatus(
      "🗑️ Program deleted"
    );

    loadPrograms();
  }

  const isError =
    status &&
    !status.includes("✅") &&
    !status.includes("🗑️");

  return (
    <div className="adminPage">
      <section className="adminSectionCard">
        {status ? (
          <p
            className={`adminStatus${
              isError
                ? " error"
                : ""
            }`}
          >
            {status}
          </p>
        ) : null}

        <h2 className="adminSectionTitle">
          Create Program
        </h2>

        <form
          onSubmit={createProgram}
          className="adminForm"
        >
          <input
            className="adminInput"
            placeholder="Title *"
            value={
              newProgram.title
            }
            onChange={(e) =>
              setNewProgram({
                ...newProgram,
                title:
                  e.target.value,
              })
            }
          />

          <input
            className="adminInput"
            placeholder="Audience (Youth / Adults / Family)"
            value={
              newProgram.audience
            }
            onChange={(e) =>
              setNewProgram({
                ...newProgram,
                audience:
                  e.target.value,
              })
            }
          />

          <ProgramRecurrenceFields
            program={newProgram}
            setProgram={
              setNewProgram
            }
          />

          <ProgramTimeFields
            program={newProgram}
            setProgram={
              setNewProgram
            }
          />

          <label className="adminFileLabel">
            <span className="adminLabel">
              Program Image
            </span>

            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setNewProgramFile(
                  e.target.files?.[0] ||
                    null
                )
              }
            />
          </label>

          {newProgramFile && (
            <img
              src={URL.createObjectURL(
                newProgramFile
              )}
              alt="Program preview"
              className="adminPreview"
            />
          )}

          <textarea
            className="adminTextarea"
            placeholder="Description"
            value={
              newProgram.description
            }
            onChange={(e) =>
              setNewProgram({
                ...newProgram,
                description:
                  e.target.value,
              })
            }
            rows={4}
          />

          <button
            type="submit"
            className="secondaryBtn"
          >
            Create Program
          </button>
        </form>
      </section>

      <section className="adminSectionCard">
        <h2 className="adminSectionTitle">
          Existing Programs
        </h2>

        <div className="adminList">
          {programs.map((p) => {
            const editing =
              editingProgramId ===
              p.id;

            const recurrence =
              formatProgramRecurrence(
                p
              );

            const time =
              formatProgramTime(p);

            return (
              <div
                key={p.id}
                className="adminItemCard"
              >
                <div className="adminItemTop">
                  <div className="adminItemMeta">
                    <strong>
                      {p.title}
                    </strong>

                    <div className="adminItemSubtext">
                      {p.audience ||
                        "-"}

                      {recurrence
                        ? ` • ${recurrence}`
                        : ""}

                      {time
                        ? ` • ${time}`
                        : ""}
                    </div>
                  </div>

                  <div className="adminButtonRow">
                    <button
                      type="button"
                      className="ghostBtn"
                      onClick={() =>
                        startEdit(p)
                      }
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      className="ghostBtn"
                      onClick={() =>
                        deleteProgram(
                          p.id
                        )
                      }
                    >
                      Delete
                    </button>
                  </div>
                </div>

                {p.image_url && (
                  <img
                    src={mediaUrl(
                      p.image_url
                    )}
                    alt={p.title}
                    className="adminPreview"
                    style={{
                      marginTop: 12,
                      maxWidth: 520,
                    }}
                  />
                )}

                {p.description && (
                  <div
                    className="adminItemSubtext"
                    style={{
                      marginTop: 12,
                    }}
                  >
                    {p.description}
                  </div>
                )}

                {editing &&
                  editProgram && (
                    <div className="adminEditArea">
                      <div className="adminMiniTitle">
                        Edit Program
                      </div>

                      <div
                        className="adminForm"
                        style={{
                          marginTop: 12,
                        }}
                      >
                        <input
                          className="adminInput"
                          value={
                            editProgram.title
                          }
                          onChange={(
                            e
                          ) =>
                            setEditProgram({
                              ...editProgram,
                              title:
                                e
                                  .target
                                  .value,
                            })
                          }
                          placeholder="Title *"
                        />

                        <input
                          className="adminInput"
                          value={
                            editProgram.audience
                          }
                          onChange={(
                            e
                          ) =>
                            setEditProgram({
                              ...editProgram,
                              audience:
                                e
                                  .target
                                  .value,
                            })
                          }
                          placeholder="Audience"
                        />

                        <ProgramRecurrenceFields
                          program={
                            editProgram
                          }
                          setProgram={
                            setEditProgram
                          }
                        />

                        <ProgramTimeFields
                          program={
                            editProgram
                          }
                          setProgram={
                            setEditProgram
                          }
                        />

                        <label className="adminFileLabel">
                          <span className="adminLabel">
                            Replace Image
                          </span>

                          <input
                            type="file"
                            accept="image/*"
                            onChange={(
                              e
                            ) =>
                              setEditProgramFile(
                                e
                                  .target
                                  .files?.[0] ||
                                  null
                              )
                            }
                          />
                        </label>

                        {editProgramFile ? (
                          <img
                            src={URL.createObjectURL(
                              editProgramFile
                            )}
                            alt="Program preview"
                            className="adminPreview"
                          />
                        ) : editProgram.image_url ? (
                          <img
                            src={mediaUrl(
                              editProgram.image_url
                            )}
                            alt={
                              editProgram.title
                            }
                            className="adminPreview"
                          />
                        ) : null}

                        <textarea
                          className="adminTextarea"
                          value={
                            editProgram.description
                          }
                          onChange={(
                            e
                          ) =>
                            setEditProgram({
                              ...editProgram,
                              description:
                                e
                                  .target
                                  .value,
                            })
                          }
                          rows={4}
                          placeholder="Description"
                        />

                        <div className="adminButtonRow">
                          <button
                            type="button"
                            className="secondaryBtn"
                            onClick={() =>
                              saveProgram(
                                p.id
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