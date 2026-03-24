import { useMemo, useState } from "react";
import { serviceFormConfig } from "./serviceformconfig";
import { getInvolvedConfig } from "./getinvolvedconfig";

function buildInitialState(fields) {
  const state = {};

  fields.forEach((field) => {
    state[field.name] = field.type === "checkbox" ? [] : "";
  });

  return state;
}

export default function ServiceRequestModal({
  serviceKey,
  open,
  onClose,
  configMap,
}) {
  const config = configMap[serviceKey];

  const initialForm = useMemo(
    () => buildInitialState(config?.fields || []),
    [config]
  );

  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  
  const payload = {
  service: serviceKey,
  subject: config.title,
  routeTo: config.routeTo || "general",
  ...form,
};

  if (!open || !config) return null;

  function setField(name, value) {
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function toggleCheckbox(name, option) {
    setForm((prev) => {
      const current = Array.isArray(prev[name]) ? prev[name] : [];
      const next = current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option];

      return { ...prev, [name]: next };
    });
  }

  function validate() {
    for (const field of config.fields) {
      if (!field.required) continue;

      const value = form[field.name];

      if (field.type === "checkbox") {
        if (!Array.isArray(value) || value.length === 0) {
          return `${field.label} is required.`;
        }
      } else if (!String(value || "").trim()) {
        return `${field.label} is required.`;
      }
    }

    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("");

    const error = validate();
    if (error) {
      setStatus(error);
      return;
    }

    setLoading(true);

    try {
      const payload = {
        service: serviceKey,
        subject: config.title,
        ...form,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.error || "Failed to send request");
      }

      setStatus(config.successMessage);
      setForm(buildInitialState(config.fields));
    } catch (err) {
      setStatus(err.message || "Failed to send request");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={overlay} onClick={onClose}>
      <div style={modal} onClick={(e) => e.stopPropagation()}>
        <button type="button" onClick={onClose} style={closeBtn}>
          ×
        </button>

        <h2 style={title}>{config.title}</h2>
        <p style={intro}>{config.intro}</p>

        <form onSubmit={handleSubmit} style={formWrap}>
          {config.fields.map((field) => (
            <div key={field.name}>
              <label style={label}>
                {field.label} {field.required ? "*" : ""}
              </label>

              {field.type === "textarea" && (
                <textarea
                  value={form[field.name]}
                  onChange={(e) => setField(field.name, e.target.value)}
                  style={{ ...input, minHeight: 130, resize: "vertical" }}
                />
              )}

              {field.type === "select" && (
                <select
                  value={form[field.name]}
                  onChange={(e) => setField(field.name, e.target.value)}
                  style={input}
                >
                  <option value="">Select an option</option>
                  {field.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}

              {field.type === "checkbox" && (
                <div style={chipWrap}>
                  {field.options.map((option) => {
                    const active = form[field.name].includes(option);

                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => toggleCheckbox(field.name, option)}
                        style={{
                          ...chip,
                          ...(active ? chipActive : {}),
                        }}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              )}

              {(field.type === "text" || field.type === "email") && (
                <input
                  type={field.type}
                  value={form[field.name]}
                  onChange={(e) => setField(field.name, e.target.value)}
                  style={input}
                />
              )}
            </div>
          ))}

          <button type="submit" disabled={loading} style={submitBtn}>
            {loading ? "Sending..." : config.submitLabel}
          </button>

          {status && <p style={statusStyle}>{status}</p>}
        </form>
      </div>
    </div>
  );
}

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.55)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 20,
  zIndex: 999,
};

const modal = {
  width: "100%",
  maxWidth: 760,
  maxHeight: "90vh",
  overflowY: "auto",
  background: "#fff",
  borderRadius: 20,
  padding: 24,
  position: "relative",
};

const closeBtn = {
  position: "absolute",
  top: 12,
  right: 12,
  width: 38,
  height: 38,
  borderRadius: "50%",
  border: "1px solid #dbe7dd",
  background: "#fff",
  fontSize: 24,
  cursor: "pointer",
};

const title = {
  marginTop: 0,
  color: "#1e6b3a",
};

const intro = {
  lineHeight: 1.6,
  color: "#334155",
};

const formWrap = {
  display: "grid",
  gap: 16,
};

const label = {
  display: "block",
  marginBottom: 8,
  fontWeight: 700,
};

const input = {
  width: "100%",
  boxSizing: "border-box",
  padding: 12,
  borderRadius: 10,
  border: "1px solid #cfe4d6",
};

const chipWrap = {
  display: "flex",
  flexWrap: "wrap",
  gap: 8,
};

const chip = {
  padding: "10px 12px",
  borderRadius: 10,
  border: "1px solid #cfe4d6",
  background: "#fff",
  cursor: "pointer",
};

const chipActive = {
  background: "#1e6b3a",
  color: "#fff",
  border: "1px solid #1e6b3a",
};

const submitBtn = {
  padding: "12px 16px",
  borderRadius: 10,
  border: "1px solid #1e6b3a",
  background: "#1e6b3a",
  color: "#fff",
  fontWeight: 700,
  cursor: "pointer",
  width: 260,
};

const statusStyle = {
  margin: 0,
};