import SectionCards from "../../component/sectioncard";

export default function LearnIndex() {
  const items = [
    { to: "/learn/what-is-islam", title: "What is Islam?", subtitle: "A clear introduction for everyone." },
    { to: "/learn/islam-for-kids", title: "Islam for Kids", subtitle: "Simple learning for families and youth." },
    { to: "/learn/new-to-islam", title: "New to Islam", subtitle: "Shahada support and next steps." },
    { to: "/learn/faq", title: "FAQ", subtitle: "Common questions and answers." },
  ];

  return (
    <div className="page">
      <h1 className="pageTitle">Learn About Islam</h1>
      <p className="pageSubtitle" style={{ maxWidth: 900 }}>
        Resources for beginners, families, and anyone learning about Islam.
      </p>

      <SectionCards items={items} />
    </div>
  );
}