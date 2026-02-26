import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  function setField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function submit(e) {
    e.preventDefault();
    setStatus("");

    if (!form.message.trim()) {
      setStatus("Message is required.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Failed to send message");

      setStatus("✅ Message sent. We’ll get back to you soon.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (e2) {
      setStatus(e2.message || "Failed to send message");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ marginTop: 0, color: "#1e6b3a" }}>Contact</h1>

      <p style={{ maxWidth: 820, lineHeight: 1.6 }}>
        Have a question, want to volunteer, or need support? Send us a message.
      </p>

      <form onSubmit={submit} style={{ display: "grid", gap: 12, maxWidth: 640 }}>
        <div style={{ display: "grid", gap: 12, gridTemplateColumns: "1fr 1fr" }}>
          <input
            placeholder="Name"
            value={form.name}
            onChange={(e) => setField("name", e.target.value)}
            style={input}
          />
          <input
            placeholder="Email"
            value={form.email}
            onChange={(e) => setField("email", e.target.value)}
            style={input}
          />
        </div>

        <input
          placeholder="Subject"
          value={form.subject}
          onChange={(e) => setField("subject", e.target.value)}
          style={input}
        />

        <textarea
          placeholder="Message *"
          value={form.message}
          onChange={(e) => setField("message", e.target.value)}
          style={{ ...input, minHeight: 140 }}
        />

        <button type="submit" disabled={loading} style={button}>
          {loading ? "Sending…" : "Send Message"}
        </button>

        {status && <p style={{ marginTop: 0 }}>{status}</p>}
      </form>
    </div>
  );
}

const input = {
  padding: 12,
  borderRadius: 10,
  border: "1px solid #cfe4d6",
  outline: "none",
};

const button = {
  padding: "12px 14px",
  borderRadius: 10,
  border: "1px solid #1e6b3a",
  background: "#1e6b3a",
  color: "white",
  fontWeight: 700,
  width: 180,
};