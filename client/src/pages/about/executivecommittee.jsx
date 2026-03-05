import { useMemo, useState } from "react";
import LeadershipCard from "../../component/personcard";
import LeadershipModal from "../../component/leadershipmodal";
import PersonCard from "../../component/personcard";

export default function ExecutiveCommittee() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const people = useMemo(
    () => [
      {
        id: "pres",
        name: "Name Coming Soon",
        role: "President",
        short: "Oversees operations and leadership direction.",
        image: "", // add later
        bio: (
          <>
            Full bio coming soon.
            <br />
            <br />
            <strong>Focus:</strong> governance, strategy, community leadership.
          </>
        ),
      },
      {
        id: "vp",
        name: "Name Coming Soon",
        role: "Vice President",
        short: "Supports operations and key initiatives.",
        image: "",
        bio: <>Full bio coming soon.</>,
      },
      {
        id: "sec",
        name: "Name Coming Soon",
        role: "Secretary",
        short: "Keeps records and supports governance admin.",
        image: "",
        bio: <>Full bio coming soon.</>,
      },
      {
        id: "treas",
        name: "Name Coming Soon",
        role: "Treasurer",
        short: "Supports finances and responsible oversight.",
        image: "",
        bio: <>Full bio coming soon.</>,
      },
    ],
    []
  );

  function openPerson(person) {
    setActive(person);
    setOpen(true);
  }

  function close() {
    setOpen(false);
    setActive(null);
  }

  return (
    <div className="page">
      <header style={header}>
        <div style={badge}>Leadership</div>

        <h1 className="pageTitle" style={{ marginBottom: 10 }}>
          Executive Committee
        </h1>

        <p className="pageSubtitle" style={{ ...subtitle, maxWidth: 920 }}>
          The Executive Committee supports governance and day-to-day leadership for
          the Muslim Center &amp; Community Center.
        </p>
      </header>

      <section style={grid}>
        {people.map((p) => (
          <PersonCard key={p.id} person={p} onOpen={() => openPerson(p)} />
        ))}
      </section>

      <LeadershipModal open={open} onClose={close} person={active} />
    </div>
  );
}

const header = {
  background: "#efefef",
  borderRadius: 18,
  padding: "22px 18px",
  border: "1px solid #d9e4dd",
  marginBottom: 18,
};

const badge = {
  display: "inline-flex",
  alignItems: "center",
  fontSize: 12,
  fontWeight: 800,
  letterSpacing: 0.3,
  textTransform: "uppercase",
  color: "#1e6b3a",
  background: "#e6f3ea",
  border: "1px solid #cfe4d6",
  padding: "6px 10px",
  borderRadius: 999,
  marginBottom: 10,
};

const subtitle = { lineHeight: 1.6, color: "#2b2b2b" };

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: 14,
};

const mq = window?.matchMedia?.("(max-width: 900px)")?.matches;
if (mq) grid.gridTemplateColumns = "1fr";
