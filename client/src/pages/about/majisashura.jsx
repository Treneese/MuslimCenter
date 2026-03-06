import { useState } from "react";
import LeadershipGrid from "../../component/leadershipgrid";
import LeadershipGridCard from "../../component/leadershipgridcard";
import LeadershipModal from "../../component/leadershipmodal";

import moussaImg from "../../assets/leadership/moussa.webp";
import catherineImg from "../../assets/leadership/catherine.webp";
import lawrenceImg from "../../assets/leadership/lawerence.webp";

export default function MajlisAshuraBoard() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

 const people = [
  {
    name: "Moussa Niang",
    role: "Treasurer",
    image: moussaImg,
    blurb: "Treasurer and community leader.",
    bio: "Moussa Niang serves as Treasurer for The Muslim Center of Detroit, supporting the financial stewardship and operational stability of the organization. In this role, he helps ensure that the Center’s resources are managed responsibly so that programs, services, and community initiatives can continue to grow and serve the Detroit Muslim community.\n\nKnown for his thoughtful leadership and commitment to community development, Moussa works closely with the Ashura and leadership team to help guide responsible financial planning and long-term sustainability for the Center.\n\nBeyond his financial responsibilities, he is dedicated to strengthening the community by supporting initiatives that bring people together, encourage service, and promote the values of faith, cooperation, and mutual support.",
  },

  {
    name: "Al Hajjah Catherine L. Ziyad",
    role: "Secretary",
    image: catherineImg,
    blurb: "Secretary and long-time community servant.",
    bio: "A lifelong servant of The Muslim Center (MC) of Detroit, Al Hajjah Catherine L. Ziyad comes from one of the Center’s founding families. Over the years she has volunteered in many roles, including serving as a soup kitchen cook, a teacher in both the Sunday and Saturday Islamic Schools, and director of the Center’s first children’s choir. She has faithfully served for many years — and continues to serve — as Secretary and a member of the Ashura Board.\n\nKnown for her unwavering compassion and dedication, Catherine is always ready to support the Muslim Center and the broader community. If she cannot assist personally, she works to find the resources needed to ensure the work continues.\n\nCatherine has been married to Lawrence A. Ziyad for 56 years. Together they are blessed with six children, three children-in-law, eleven grandchildren, and nine great-grandchildren.\n\nShe worked for more than 35 years as a behavioral health social worker and retired in 2025.",
  },

  {
    name: "Lawrence A. Ziyad",
    role: "Financial Secretary",
    image: lawrenceImg,
    blurb: "Financial Secretary supporting the Center’s operations.",
    bio: "Brother Lawrence A. Ziyad has been a pillar of Detroit’s Muslim community since joining the Nation of Islam in 1973. In 1975, he transitioned to Sunni Islam under the leadership of Al-Hajj Imam Warith Deen Mohammed, continuing a lifelong commitment to faith, service, and community leadership.\n\nBrother Lawrence is one of the nine founding families of The Muslim Center of Detroit, established in 1985. He continues to serve on the Center’s Ashura and has faithfully served — and continues to serve — as the Center’s Financial Secretary.\n\nIt is rare to see Brother Lawrence without a hammer in hand, as he is often repairing, building, or performing much-needed maintenance throughout the mosque. His hands-on dedication has helped sustain the Center for decades.\n\nHe has also been instrumental in the success of many programs at The Muslim Center and across the Islamic community in Michigan, including Feed 500, Muslim Center family camps, and the soup kitchen. His service extends beyond Detroit through collaboration on the Janaaza Committee with Historic Masjid Wali Muhammad, as well as da’wah efforts with communities in Flint, Michigan, and Toledo, Ohio.",
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