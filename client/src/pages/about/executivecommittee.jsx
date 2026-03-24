import { useMemo, useState } from "react";
import LeadershipModal from "../../component/leadershipmodal";
import LeadershipGridCard from "../../component/leadershipgridcard";
import "../../styles/pages.css";

export default function ExecutiveCommittee() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const people = useMemo(
    () => [
      {
        id: "pres",
        name: "Name Coming Soon",
        role: "President",
        blurb: "Oversees operations and leadership direction.",
        image: "",
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
        blurb: "Supports operations and key initiatives.",
        image: "",
        bio: <>Full bio coming soon.</>,
      },
      {
        id: "sec",
        name: "Name Coming Soon",
        role: "Secretary",
        blurb: "Keeps records and supports governance admin.",
        image: "",
        bio: <>Full bio coming soon.</>,
      },
      {
        id: "treas",
        name: "Name Coming Soon",
        role: "Treasurer",
        blurb: "Supports finances and responsible oversight.",
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
      <section className="learnHero">
        <p className="learnEyebrow">Leadership</p>
        <h1 className="pageTitle">Executive Committee</h1>
        <p className="pageSubtitle pageIntro">
          The Executive Committee supports governance and day-to-day leadership
          for the Muslim Center &amp; Community Center.
        </p>
      </section>

      <section className="leadershipGridPage">
        {people.map((p) => (
          <LeadershipGridCard
            key={p.id}
            name={p.name}
            role={p.role}
            image={p.image}
            blurb={p.blurb}
            onClick={() => openPerson(p)}
          />
        ))}
      </section>

      <LeadershipModal open={open} onClose={close} person={active} />
    </div>
  );
}