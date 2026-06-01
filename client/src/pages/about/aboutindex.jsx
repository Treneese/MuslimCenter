import SectionCards from "../../component/sectioncard";
import "../../styles/pages.css";

import historyImg from "../../assets/about/history.jpg";
import leadershipImg from "../../assets/about/leadership.jpg";
import partnerImg from "../../assets/about/partner.jpg";

export default function AboutIndex() {
  const items = [
    {
      to: "/about/history",
      title: "History",
      subtitle: "Our story and legacy.",
      image: historyImg,
    },
    {
      to: "/about/leadership",
      title: "Leadership",
      subtitle: "Meet our leadership and committees.",
      image: leadershipImg,
    },
    {
      to: "/about/partners",
      title: "Current Partners",
      subtitle: "Organizations we collaborate with.",
      image: partnerImg,
    },
  ];

  return (
    <div className="page">
      <header className="pageHeroCard">
        <div className="pageBadge">About Us</div>

        <h1 className="pageTitle">About the Muslim Center</h1>

        <p className="pageSubtitle pageIntro">
          The Muslim Center Mosque &amp; Community Center serves Detroit through
          worship, education, outreach, and community support. We welcome people
          of all backgrounds and work to strengthen families, build a islamic foundation,
          and serve our neighbors.
        </p>

        <div className="quickFactsGrid">
          <div className="quickFactCard">
            <div className="quickFactLabel">What we are</div>
            <div className="quickFactValue">Mosque &amp; Community Hub</div>
          </div>
          <div className="quickFactCard">
            <div className="quickFactLabel">What we focus on</div>
            <div className="quickFactValue">Prayer • Education • Service</div>
          </div>
          <div className="quickFactCard">
            <div className="quickFactLabel">Who we serve</div>
            <div className="quickFactValue">Detroit &amp; Surrounding Areas</div>
          </div>
        </div>
      </header>

      <section className="pageContentCard">
        <h2 className="sectionTitle">Our Mission</h2>
        <p className="pageIntro">
          We provide a welcoming place to worship and learn, offer direct support
          services, and host programs that strengthen community life and uplift
          our neighbors.
        </p>
      </section>

      <section className="pageContentCard">
        <h2 className="sectionTitle">Our Vision</h2>
        <ul className="pageList">
          <li>Nurture and develop the spiritual life of our community.</li>
          <li>Involve people of all ages through programs, service, and leadership.</li>
          <li>Build religious learning, fellowship, and strong families.</li>
          <li>Mobilize resources to meet needs within and beyond the Muslim community.</li>
          <li>Support outreach and community engagement grounded in faith and compassion.</li>
        </ul>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>Explore</h2>
          <p>Learn more about our history, leadership, and community partners.</p>
        </div>
        <SectionCards items={items} />
      </section>

      <section className="pageCtaDark">
        <div>
          <h3>Want to connect with us?</h3>
          <p>Visit us for prayer, explore programs, or reach out with questions.</p>
        </div>

        <div className="pageActionRow">
          <a href="/contact" className="primaryBtn">Contact</a>
          <a href="/donate" className="ghostBtn">Donate</a>
        </div>
      </section>
    </div>
  );
}