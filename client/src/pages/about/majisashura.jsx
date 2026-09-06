import { useState } from "react";
import LeadershipGridCard from "../../component/leadershipgridcard";
import LeadershipModal from "../../component/leadershipmodal";
import "../../styles/pages.css";

import moussaImg from "../../assets/leadership/moussa.webp";
import catherineImg from "../../assets/leadership/catherine.webp";
import lawrenceImg from "../../assets/leadership/lawerence.webp";
import abdurImg from "../../assets/leadership/abdur.jpg";
import ibrahimImg from "../../assets/leadership/ibrahim.jpg";
import jabrilImg from "../../assets/leadership/jabril.jpg";


export default function MajlisAshuraBoard() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const people = [
    {
      name: "Moussa Niang",
      role: "Treasurer",
      image: moussaImg,
      blurb: "Treasurer and community leader.",
      bio: `Moussa Niang serves as Treasurer for The Muslim Center of Detroit, where he supports the financial stewardship and long-term sustainability of the organization. In this role, he helps ensure that the Center’s resources are managed responsibly to support programs, services, and community growth.

He is also the Founder and President of Foundation 221, an international nonprofit that has led over $25 million in humanitarian initiatives across Africa, including healthcare development, education, clean water access, and support for vulnerable communities. He previously served as the muslim center boerd chair man.

With a background in global supply chain management at Ford Motor Company and extensive experience in nonprofit leadership, Moussa brings both strategic insight and a deep commitment to service. He works closely with leadership to strengthen the Center’s impact while supporting initiatives that promote unity, faith, and community development.`,
    },
    {
      name: "Al Hajjah Catherine L. Ziyad",
      role: "Secretary",
      image: catherineImg,
      blurb: "Secretary and long-time community servant.",
      bio: `A lifelong servant of The Muslim Center (MC) of Detroit, Al Hajjah Catherine L. Ziyad comes from one of the Center’s founding families. Over the years she has volunteered in many roles, including serving as a soup kitchen cook, a teacher in both the Sunday and Saturday Islamic Schools, and director of the Center’s first children’s choir. She has faithfully served for many years — and continues to serve — as Secretary and a member of the Ashura Board.

Known for her unwavering compassion and dedication, Catherine is always ready to support the Muslim Center and the broader community. If she cannot assist personally, she works to find the resources needed to ensure the work continues.

Catherine has been married to Lawrence A. Ziyad for 56 years. Together they are blessed with six children, three children-in-law, eleven grandchildren, and nine great-grandchildren.

She worked for more than 35 years as a behavioral health social worker and retired in 2025.`,
    },
    {
      name: "Lawrence A. Ziyad",
      role: "Financial Secretary",
      image: lawrenceImg,
      blurb: "Financial Secretary supporting the Center’s operations.",
      bio: `Brother Lawrence A. Ziyad has been a pillar of Detroit’s Muslim community since joining the Nation of Islam in 1973. In 1975, he transitioned to Sunni Islam under the leadership of Al-Hajj Imam Warith Deen Mohammed, continuing a lifelong commitment to faith, service, and community leadership.

Brother Lawrence is one of the nine founding families of The Muslim Center of Detroit, established in 1985. He continues to serve on the Center’s Ashura and has faithfully served — and continues to serve — as the Center’s Financial Secretary.

It is rare to see Brother Lawrence without a hammer in hand, as he is often repairing, building, or performing much-needed maintenance throughout the mosque. His hands-on dedication has helped sustain the Center for decades.

He has also been instrumental in the success of many programs at The Muslim Center and across the Islamic community in Michigan, including Feed 500, Muslim Center family camps, and the soup kitchen. His service extends beyond Detroit through collaboration on the Janaaza Committee with Historic Masjid Wali Muhammad, as well as da’wah efforts with communities in Flint, Michigan, and Toledo, Ohio.`,
    },
     {
      name: "Abdur Rasheed Vanzant",
      role: "Board Member",
      image: abdurImg,
      blurb: "Board member.",
      bio: ``,
    },
     {
      name: "Ibrahim Saadiq",
      role: "Board Member, Ex Committee Chair",
      image: ibrahimImg,
      blurb: "Board member.",
      bio: ``,
    },
     {
      name: "Jabril Abdus Salam",
      role: "Board Member",
      image: jabrilImg,
      blurb: "Board member.",
      bio: ``,
    },
  ]

  function handleOpen(person) {
    setSelected(person);
    setOpen(true);
  }

  return (
    <div className="page">
      <section className="learnHero">
        <p className="learnEyebrow">Leadership</p>
        <h1 className="pageTitle">Majlis Ash-Shura Board</h1>
        <p className="pageSubtitle pageIntro">
          The Majlis Ash-Shura is the governing body of the Muslim Center
          &amp; Community Center.
        </p>
      </section>

      <section className="leadershipGridPage">
        {people.map((p) => (
         <LeadershipGridCard
  key={p.name}
  name={p.name}
  role={p.role}
  image={p.image}
  imagePosition={p.imagePosition}
  imageFit={p.imageFit}
  blurb={p.blurb}
  onClick={() => handleOpen(p)}
/>
        ))}
      </section>

      <LeadershipModal
        open={open}
        person={selected}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}