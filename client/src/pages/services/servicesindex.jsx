import SectionCards from "../../component/sectioncard";

// optional: add images for each service card
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
      <h1 className="pageTitle">Services</h1>
      <p className="pageSubtitle" style={{ maxWidth: 900 }}>
        Community services and support offered by the masjid.
      </p>

      <SectionCards items={items} />
    </div>
  );
}