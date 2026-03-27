import SectionCards from "../../component/sectioncard";
import "../../styles/pages.css";

import marriageImg from "../../assets/services/marriage.jpg";
import familyImg from "../../assets/services/family.jpg";
import shahadaImg from "../../assets/services/shahada.png";
import janazahImg from "../../assets/services/janazah.jpg";
import gcImg from "../../assets/services/gc.jpg";

export default function ServicesIndex() {
  const items = [
    {
      to: "/services/marriage",
      title: "Marriage Counseling",
      subtitle: "Support and guidance for couples.",
      image: marriageImg,
    },
    {
      to: "/services/family",
      title: "Family Counseling",
      subtitle: "Mediation and community support.",
      image: familyImg,
    },
    {
      to: "/services/shahada",
      title: "New Shahada Support",
      subtitle: "Support for new Muslims and their journey.",
      image: shahadaImg,
    },
    {
      to: "/services/janazah",
      title: "Janazah Services",
      subtitle: "Funeral support and guidance.",
      image: janazahImg,
    },
    {
      to: "/services/general",
      title: "General Counseling",
      subtitle: "Support and guidance.",
      image: gcImg,
    },
  ];

  return (
    <div className="page">
      <section className="learnHero">
        <p className="learnEyebrow">Services</p>
        <h1 className="pageTitle">Services</h1>
        <p className="pageSubtitle pageIntro">
          Community services and support offered through the Muslim Center.
          Explore the options below and choose the one that best fits your need.
        </p>
      </section>

      <SectionCards items={items} />
    </div>
  );
}