import SectionCards from "../../component/sectioncard";

import boardImg from "../../assets/leadership/board.jpg";
import ecImg from "../../assets/leadership/ec.jpg";
import imamImg from "../../assets/leadership/imam.jpg";

export default function LeadershipIndex() {
  const items = [
    {
      to: "/about/leadership/imams",
      title: "Meet the Imam’s",
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
      <h1 className="pageTitle">Leadership</h1>

      <p className="pageSubtitle" style={{ maxWidth: 920 }}>
        Learn about the leadership of the Muslim Center. Explore the Imam’s and the
        committees that support our community and services.
      </p>

      <SectionCards items={items} />
    </div>
  );
}