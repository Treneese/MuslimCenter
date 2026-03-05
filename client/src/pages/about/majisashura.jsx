import { useState } from "react";
import LeadershipGrid from "../../component/leadershipgrid";
import LeadershipGridCard from "../../component/leadershipgridcard";
import LeadershipModal from "../../component/leadershipmodal";

export default function MajlisAshuraBoard() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const people = [
    {
      name: "Moussa Niang",
      role: "Treasurer",
      image: "/images/leadership/moussa.jpg",
      blurb: "Treasurer and community leader.",
      bio: "Full bio goes here...",
    },
    {
      name: "Al Hajjah Catherine L. Ziyad",
      role: "Secretary",
      image: "/images/leadership/catherine.jpg",
      blurb: "Secretary and long-time community servant.",
      bio: "Full bio goes here...",
    },
    {
      name: "Lawrence A. Ziyad",
      role: "Financial Secretary",
      image: "/images/leadership/lawrence.jpg",
      blurb: "Financial Secretary supporting the Center’s operations.",
      bio: "Full bio goes here...",
    },
  ];

  function handleOpen(person) {
    setSelected(person);
    setOpen(true);
  }

  return (
    <div className="page">
      <h1 className="pageTitle">Majlis Ash-Shura Board</h1>
      <p className="pageSubtitle" style={{ maxWidth: 900 }}>
        The Majlis Ash-Shura is the governing body of the Muslim Center &amp; Community Center.
      </p>

      <LeadershipGrid>
        {people.map((p) => (
          <LeadershipGridCard
            key={p.name}
            name={p.name}
            role={p.role}
            image={p.image}
            blurb={p.blurb}
            onClick={() => handleOpen(p)}
          />
        ))}
      </LeadershipGrid>

      <LeadershipModal
        open={open}
        person={selected}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}