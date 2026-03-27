import { useEffect, useState } from "react";
import { uploadAdminImage } from "./adminutils";
import "../../styles/pages.css";

export default function ProgramsAdmin({ adminKey }) {
  const [programs, setPrograms] = useState([]);
  const [status, setStatus] = useState("");

  const [newProgram, setNewProgram] = useState({
    title: "",
    audience: "",
    schedule: "",
    description: "",
    image_url: "",
  });
  const [newProgramFile, setNewProgramFile] = useState(null);

  const [editingProgramId, setEditingProgramId] = useState(null);
  const [editProgram, setEditProgram] = useState(null);
  const [editProgramFile, setEditProgramFile] = useState(null);

  async function loadPrograms() {
    const res = await fetch("/api/programs");
    const data = await res.json().catch(() => []);
    setPrograms(Array.isArray(data) ? data : []);
  }

  useEffect(() => {
    loadPrograms();
  }, []);

  function startEdit(p) {
    setStatus("");
    setEditingProgramId(p.id);
    setEditProgram({
      title: p.title || "",
      audience: p.audience || "",
      schedule: p.schedule || "",
      description: p.description || "",
      image_url: p.image_url || "",
    });
    setEditProgramFile(null);
  }

  function cancelEdit() {
    setEditingProgramId(null);
    setEditProgram(null);
    setEditProgramFile(null);
  }

  async function createProgram(e) {
    e.preventDefault();
    setStatus("");

    if (!adminKey) return setStatus("Enter admin key first.");
    if (!newProgram.title.trim()) return setStatus("Title is required.");

    try {
      let image_url = newProgram.image_url;
      if (newProgramFile) {
        image_url = await uploadAdminImage({ adminKey, file: newProgramFile });
      }

      const payload = {
        ...newProgram,
        title: newProgram.title.trim(),
        image_url: image_url || null,
      };

      const res = await fetch("/api/programs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": adminKey,
        },
        body: JSON.stringify(payload),
      });

      const json = await res.json().catch(() => ({}));
      if (!res.ok) return setStatus(json.error || "Create failed");

      setStatus("✅ Program created");
      setNewProgram({
        title: "",
        audience: "",
        schedule: "",
        description: "",
        image_url: "",
      });
      setNewProgramFile(null);
      loadPrograms();
    } catch (err) {
      setStatus(err.message || "Create failed");
    }
  }

  async function saveProgram(id) {
    setStatus("");
    if (!adminKey) return setStatus("Enter admin key first.");
    if (!editProgram?.title?.trim()) return setStatus("Title is required.");

    try {
      let image_url = editProgram.image_url;
      if (editProgramFile) {
        image_url = await uploadAdminImage({ adminKey, file: editProgramFile });
      }

      const payload = {
        ...editProgram,
        title: editProgram.title.trim(),
        image_url: image_url || null,
      };

      const res = await fetch(`/api/programs/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": adminKey,
        },
        body: JSON.stringify(payload),
      });

      const json = await res.json().catch(() => ({}));
      if (!res.ok) return setStatus(json.error || "Update failed");

      setStatus("✅ Program updated");
      cancelEdit();
      loadPrograms();
    } catch (err) {
      setStatus(err.message || "Update failed");
    }
  }

  async function deleteProgram(id) {
    setStatus("");
    if (!adminKey) return setStatus("Enter admin key first.");

    const res = await fetch(`/api/programs/${id}`, {
      method: "DELETE",
      headers: { "x-admin-key": adminKey },
    });

    const json = await res.json().catch(() => ({}));
    if (!res.ok) return setStatus(json.error || "Delete failed");

    setStatus("🗑️ Program deleted");
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
          <p className={`adminStatus${isError ? " error" : ""}`}>{status}</p>
        ) : null}

        <h2 className="adminSectionTitle">Create Program</h2>

        <form onSubmit={createProgram} className="adminForm">
          <input
            className="adminInput"
            placeholder="Title *"
            value={newProgram.title}
            onChange={(e) =>
              setNewProgram({ ...newProgram, title: e.target.value })
            }
          />

          <div className="adminFormRow">
            <input
              className="adminInput"
              placeholder="Audience (Youth / Adults / Family)"
              value={newProgram.audience}
              onChange={(e) =>
                setNewProgram({ ...newProgram, audience: e.target.value })
              }
            />
            <input
              className="adminInput"
              placeholder="Schedule (Saturdays 10:00 AM)"
              value={newProgram.schedule}
              onChange={(e) =>
                setNewProgram({ ...newProgram, schedule: e.target.value })
              }
            />
          </div>

          <label className="adminFileLabel">
            <span className="adminLabel">Program Image (upload)</span>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setNewProgramFile(e.target.files?.[0] || null)}
            />
          </label>

          {newProgramFile ? (
            <img
              src={URL.createObjectURL(newProgramFile)}
              alt="preview"
              className="adminPreview"
            />
          ) : null}

          <textarea
            className="adminTextarea"
            placeholder="Description"
            value={newProgram.description}
            onChange={(e) =>
              setNewProgram({ ...newProgram, description: e.target.value })
            }
            rows={4}
          />

          <button type="submit" className="secondaryBtn">
            Create Program
          </button>
        </form>
      </section>

      <section className="adminSectionCard">
        <h2 className="adminSectionTitle">Existing Programs</h2>

        <div className="adminList">
          {programs.map((p) => {
            const editing = editingProgramId === p.id;

            return (
              <div key={p.id} className="adminItemCard">
                <div className="adminItemTop">
                  <div className="adminItemMeta">
                    <strong>{p.title}</strong>
                    <div className="adminItemSubtext">
                      {p.audience || "-"} • {p.schedule || "-"}
                    </div>
                  </div>

                  <div className="adminButtonRow">
                    <button
                      type="button"
                      className="ghostBtn"
                      onClick={() => startEdit(p)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="ghostBtn"
                      onClick={() => deleteProgram(p.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>

                {p.image_url ? (
                  <img
                    src={p.image_url}
                    alt={p.title}
                    className="adminPreview"
                    style={{ marginTop: 12, maxWidth: 520 }}
                  />
                ) : null}

                {p.description ? (
                  <div className="adminItemSubtext" style={{ marginTop: 12 }}>
                    {p.description}
                  </div>
                ) : null}

                {editing && editProgram ? (
                  <div className="adminEditArea">
                    <div className="adminMiniTitle">Edit Program</div>

                    <div className="adminForm" style={{ marginTop: 12 }}>
                      <input
                        className="adminInput"
                        value={editProgram.title}
                        onChange={(e) =>
                          setEditProgram({
                            ...editProgram,
                            title: e.target.value,
                          })
                        }
                        placeholder="Title *"
                      />

                      <div className="adminFormRow">
                        <input
                          className="adminInput"
                          value={editProgram.audience}
                          onChange={(e) =>
                            setEditProgram({
                              ...editProgram,
                              audience: e.target.value,
                            })
                          }
                          placeholder="Audience"
                        />
                        <input
                          className="adminInput"
                          value={editProgram.schedule}
                          onChange={(e) =>
                            setEditProgram({
                              ...editProgram,
                              schedule: e.target.value,
                            })
                          }
                          placeholder="Schedule"
                        />
                      </div>

                      <label className="adminFileLabel">
                        <span className="adminLabel">Replace Image (upload)</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) =>
                            setEditProgramFile(e.target.files?.[0] || null)
                          }
                        />
                      </label>

                      {editProgramFile ? (
                        <img
                          src={URL.createObjectURL(editProgramFile)}
                          alt="preview"
                          className="adminPreview"
                        />
                      ) : editProgram.image_url ? (
                        <img
                          src={editProgram.image_url}
                          alt="current"
                          className="adminPreview"
                        />
                      ) : null}

                      <textarea
                        className="adminTextarea"
                        value={editProgram.description}
                        onChange={(e) =>
                          setEditProgram({
                            ...editProgram,
                            description: e.target.value,
                          })
                        }
                        rows={4}
                        placeholder="Description"
                      />

                      <div className="adminButtonRow">
                        <button
                          type="button"
                          className="secondaryBtn"
                          onClick={() => saveProgram(p.id)}
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          className="ghostBtn"
                          onClick={cancelEdit}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}