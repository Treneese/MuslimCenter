import SectionCards from "../../component/sectioncard";

export default function AboutIndex() {
  const items = [
    { to: "/about/history", title: "History", subtitle: "Our story and legacy." },
    { to: "/about/leadership", title: "Leadership", subtitle: "Meet our leadership and committees." },
    { to: "/about/partners", title: "Current Partners", subtitle: "Organizations we collaborate with." },
  ];

  return (
    <div className="page">
      <h1 className="pageTitle">About</h1>
      <p className="pageSubtitle" style={{ maxWidth: 900 }}>
        Learn about our masjid, our mission, and the community we serve.
      </p>

      <SectionCards items={items} />
    </div>
  );
}