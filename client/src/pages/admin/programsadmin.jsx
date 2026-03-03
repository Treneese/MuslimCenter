import { useEffect, useState } from "react";
import { uploadAdminImage } from "./adminutils";

export default function ProgramsAdmin({ adminKey }) {
  const [programs, setPrograms] = useState([]);
  const [status, setStatus] = useState("");

  // Create
  const [newProgram, setNewProgram] = useState({
    title: "",
    audience: "",
    schedule: "",
    description: "",
    image_url: "",
  });
  const [newProgramFile, setNewProgramFile] = useState(null);

  // Edit
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
      setNewProgram({ title: "", audience: "", schedule: "", description: "", image_url: "" });
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

  return (
    <div>
      {status ? <p style={{ marginTop: 0 }}>{status}</p> : null}

      <h2>Create Program</h2>
      <form onSubmit={createProgram} style={{ display: "grid", gap: 10, maxWidth: 720 }}>
        <input
          placeholder="Title *"
          value={newProgram.title}
          onChange={(e) => setNewProgram({ ...newProgram, title: e.target.value })}
        />

        <div style={{ display: "grid", gap: 10, gridTemplateColumns: "1fr 1fr" }}>
          <input
            placeholder="Audience (Youth / Adults / Family)"
            value={newProgram.audience}
            onChange={(e) => setNewProgram({ ...newProgram, audience: e.target.value })}
          />
          <input
            placeholder="Schedule (Saturdays 10:00 AM)"
            value={newProgram.schedule}
            onChange={(e) => setNewProgram({ ...newProgram, schedule: e.target.value })}
          />
        </div>

        <label style={{ display: "grid", gap: 6 }}>
          <span>Program Image (upload)</span>
          <input type="file" accept="image/*" onChange={(e) => setNewProgramFile(e.target.files?.[0] || null)} />
        </label>

        {newProgramFile ? (
          <img
            src={URL.createObjectURL(newProgramFile)}
            alt="preview"
            style={{ width: "100%", maxWidth: 420, borderRadius: 10, border: "1px solid #e5e7eb" }}
          />
        ) : null}

        <textarea
          placeholder="Description"
          value={newProgram.description}
          onChange={(e) => setNewProgram({ ...newProgram, description: e.target.value })}
          rows={3}
        />

        <button type="submit" style={{ padding: "10px 14px", width: 180 }}>
          Create Program
        </button>
      </form>

      <h2 style={{ marginTop: 26 }}>Existing Programs</h2>
      <div style={{ display: "grid", gap: 10, maxWidth: 920 }}>
        {programs.map((p) => {
          const editing = editingProgramId === p.id;

          return (
            <div key={p.id} style={{ border: "1px solid #ddd", borderRadius: 12, padding: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                <div style={{ display: "grid", gap: 6 }}>
                  <strong>{p.title}</strong>
                  <div style={{ opacity: 0.85 }}>
                    {p.audience || "-"} • {p.schedule || "-"}
                  </div>
                </div>

                <div style={{ display: "flex", gap: 8 }}>
                  <button type="button" onClick={() => startEdit(p)} style={{ padding: "6px 10px" }}>
                    Edit
                  </button>
                  <button type="button" onClick={() => deleteProgram(p.id)} style={{ padding: "6px 10px" }}>
                    Delete
                  </button>
                </div>
              </div>

              {p.image_url ? (
                <img
                  src={p.image_url}
                  alt={p.title}
                  style={{
                    marginTop: 10,
                    width: "100%",
                    maxWidth: 520,
                    borderRadius: 10,
                    border: "1px solid #e5e7eb",
                  }}
                />
              ) : null}

              {p.description ? <div style={{ marginTop: 10 }}>{p.description}</div> : null}

              {editing && editProgram ? (
                <div style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid #eee" }}>
                  <strong>Edit Program</strong>

                  <div style={{ display: "grid", gap: 10, marginTop: 10, maxWidth: 720 }}>
                    <input
                      value={editProgram.title}
                      onChange={(e) => setEditProgram({ ...editProgram, title: e.target.value })}
                      placeholder="Title *"
                    />

                    <div style={{ display: "grid", gap: 10, gridTemplateColumns: "1fr 1fr" }}>
                      <input
                        value={editProgram.audience}
                        onChange={(e) => setEditProgram({ ...editProgram, audience: e.target.value })}
                        placeholder="Audience"
                      />
                      <input
                        value={editProgram.schedule}
                        onChange={(e) => setEditProgram({ ...editProgram, schedule: e.target.value })}
                        placeholder="Schedule"
                      />
                    </div>

                    <label style={{ display: "grid", gap: 6 }}>
                      <span>Replace Image (upload)</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setEditProgramFile(e.target.files?.[0] || null)}
                      />
                    </label>

                    {editProgramFile ? (
                      <img
                        src={URL.createObjectURL(editProgramFile)}
                        alt="preview"
                        style={{ width: "100%", maxWidth: 420, borderRadius: 10, border: "1px solid #e5e7eb" }}
                      />
                    ) : editProgram.image_url ? (
                      <img
                        src={editProgram.image_url}
                        alt="current"
                        style={{ width: "100%", maxWidth: 420, borderRadius: 10, border: "1px solid #e5e7eb" }}
                      />
                    ) : null}

                    <textarea
                      value={editProgram.description}
                      onChange={(e) => setEditProgram({ ...editProgram, description: e.target.value })}
                      rows={3}
                      placeholder="Description"
                    />

                    <div style={{ display: "flex", gap: 10 }}>
                      <button type="button" onClick={() => saveProgram(p.id)} style={{ padding: "10px 14px" }}>
                        Save
                      </button>
                      <button type="button" onClick={cancelEdit} style={{ padding: "10px 14px" }}>
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
    </div>
  );
}