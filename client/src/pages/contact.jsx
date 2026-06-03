import { useState } from "react";
import "../styles/pages.css";
import { apiUrl } from "../api";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
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
      const res = await fetch(apiUrl("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }));

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

  const isError =
    status &&
    !status.includes("✅") &&
    !status.toLowerCase().includes("sent");

  return (
    <div className="page">
      <section className="learnHero">
        <p className="learnEyebrow">Contact</p>
        <h1 className="pageTitle">Contact Us</h1>
        <p className="pageSubtitle pageIntro">
          Have a question, want to volunteer, need support, or want to connect
          with the masjid? Send us a message and we’ll do our best to respond
          soon.
        </p>
      </section>

      <section className="learnSection">
        <div className="pageCard formShell">
          <form onSubmit={submit} className="formGrid">
            <div className="formGrid two">
              <input
                className="formField"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setField("name", e.target.value)}
              />
              <input
                className="formField"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setField("email", e.target.value)}
              />
            </div>

            <input
              className="formField"
              placeholder="Subject"
              value={form.subject}
              onChange={(e) => setField("subject", e.target.value)}
            />

            <textarea
              className="formTextarea"
              placeholder="Message *"
              value={form.message}
              onChange={(e) => setField("message", e.target.value)}
            />

            <button type="submit" disabled={loading} className="secondaryBtn">
              {loading ? "Sending…" : "Send Message"}
            </button>

            {status && (
              <p className={`formStatus${isError ? " error" : ""}`}>{status}</p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}