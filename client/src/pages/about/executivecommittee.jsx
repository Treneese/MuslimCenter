import { useMemo, useState } from "react";
import LeadershipModal from "../../component/leadershipmodal";
import LeadershipGridCard from "../../component/leadershipgridcard";
import "../../styles/pages.css";
import "../../styles/components.css";
import lawrenceImg from "../../assets/leadership/lawerence.webp";
import ibrahimImg from "../../assets/leadership/ibrahim.jpg";
import jabrilImg from "../../assets/leadership/jabril.jpg";
import karishaImg from "../../assets/leadership/karisha.jpg";

export default function ExecutiveCommittee() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

 const people = useMemo(
  () => [
    {
      id: "director",
      name: "Brother Ibrahim Romerio Siddiq",
      role: "Director",
      blurb: "Leads operations and supports the overall direction of the Muslim Center.",
      image: ibrahimImg,
      bio: (
        <>
          Brother Ibrahim Romerio Siddiq serves as Director, supporting the leadership,
          coordination, and operational direction of the Muslim Center.
          <br /><br />
          <strong>Focus:</strong> operations, leadership coordination, community direction.
        </>
      ),
    },
    {
      id: "secretary",
      name: "Brother Lawrence A. Ziyad",
      role: "Financial Secretary",
      blurb: "Maintains records and supports governance and administration.",
      image: lawrenceImg,
      bio: (
        <>
          Brother Lawrence A. Ziyad serves as Secretary, ensuring accurate record keeping
          and supporting the administrative functions of the Executive Committee.
        </>
      ),
    },
    {
      id: "communications",
      name: "Karisha Vanzant",
      role: "Communications",
      blurb: "Manages communication and community messaging.",
      image: karishaImg,
      bio: (
        <>
          Karisha Vanzant leads communications efforts, helping keep the community informed,
          connected, and engaged with the work of the Muslim Center.
        </>
      ),
    },
    {
      id: "member",
      name: "Jannah Amirah Jabril",
      role: "Committee Member",
      blurb: "Supports initiatives and contributes to committee efforts.",
      image: jabrilImg,
      bio: (
        <>
          Jannah Amirah Jabril serves as a member of the Executive Committee, supporting
          initiatives and contributing to the mission and growth of the Muslim Center.
        </>
      ),
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
        The Executive Committee supports the day-to-day operations, communication,
and implementation of initiatives at the Muslim Center, working alongside
leadership to serve the community with consistency and care.
        </p>
      </section>

      <section className="leadershipGridPage">
        {people.map((p) => (
          <LeadershipGridCard
  key={p.id}
  name={p.name}
  role={p.role}
  image={p.image}
  imagePosition={p.imagePosition}
  imageFit={p.imageFit}
  blurb={p.blurb}
  onClick={() => openPerson(p)}
/>
        ))}
      </section>

      <LeadershipModal open={open} onClose={close} person={active} />
    </div>
  );
}