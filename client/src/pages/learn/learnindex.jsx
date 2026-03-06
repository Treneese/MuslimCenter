import SectionCards from "../../component/sectioncard";
import "../../styles/learn.css";

import faqImg from "../../assets/learn/faq.jpg";
import whatImg from "../../assets/learn/whatisislam.jpg";
import newImg from "../../assets/learn/newtoislam.jpg";
import kidsImg from "../../assets/learn/islamkids.jpg";

export default function LearnIndex() {
  const items = [
    { to: "/learn/what-is-islam", title: "What is Islam?", subtitle: "A clear introduction for everyone.", image: whatImg, },
    { to: "/learn/islam-for-kids", title: "Islam for Kids", subtitle: "Simple learning for families and youth.", image: kidsImg, },
    { to: "/learn/new-to-islam", title: "New to Islam", subtitle: "Shahada support and next steps.", image: newImg, },
    { to: "/learn/faq", title: "FAQ", subtitle: "Common questions and answers.", image: faqImg, },
  ];

  return (
    <div className="page">
      <h1 className="pageTitle">Learn About Islam</h1>

      <p className="pageSubtitle" style={{ maxWidth: 900 }}>
        Resources for beginners, families, and anyone learning about Islam.
      </p>

      <p
        style={{
          maxWidth: 900,
          marginTop: 10,
          marginBottom: 24,
          lineHeight: 1.7,
          color: "#2f5132",
          fontWeight: 500,
        }}
      >
       "You were not created to be perfect. What matters is sincerity, growth, and returning to Allah in both ease and hardship."
      </p>

      <SectionCards items={items} />
    </div>
  );
}