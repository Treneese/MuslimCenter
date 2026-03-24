import SectionCards from "../../component/sectioncard";
import "../../styles/pages.css";

import boardImg from "../../assets/leadership/board.jpg";
import ecImg from "../../assets/leadership/ec.jpg";
import imamImg from "../../assets/leadership/imam.jpg";

export default function LeadershipIndex() {
  const items = [
    {
      to: "/about/leadership/imams",
      title: "Meet the Imams",
      subtitle: "Resident and assistant imams.",
      image: imamImg,
    },
    {
      to: "/about/leadership/majlis-ashura",
      title: "Majlis Ash-Shura Board",
      subtitle: "Governing body and members.",
      image: boardImg,
    },
    {
      to: "/about/leadership/executive",
      title: "Executive Committee",
      subtitle: "Operations and community leadership.",
      image: ecImg,
    },
  ];

  return (
    <div className="page">
      <section className="learnHero">
        <p className="learnEyebrow">Leadership</p>
        <h1 className="pageTitle">Leadership</h1>
        <p className="pageSubtitle pageIntro">
          Learn about the leadership of the Muslim Center. Explore the Imams and
          the committees that support our community and services.
        </p>
      </section>

      <SectionCards items={items} />
    </div>
  );
}