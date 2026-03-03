import SectionCards from "../../component/sectioncard";

export default function ServicesIndex() {
  const items = [
    { to: "/services/marriage", title: "Marriage Counseling", subtitle: "Support and guidance for couples." },
    { to: "/services/family-dispute", title: "Family Dispute Resolution", subtitle: "Mediation and community support." },
    { to: "/services/shahada", title: "New Shahada Support", subtitle: "Support for new Muslims and their journey." },
    { to: "/services/janazah", title: "Janazah Services", subtitle: "Funeral support and guidance." },
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