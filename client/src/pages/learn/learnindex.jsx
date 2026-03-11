import SectionCards from "../../component/sectioncard";
import "../../styles/learn.css";

import faqImg from "../../assets/learn/faq.jpg";
import whatImg from "../../assets/learn/whatisislam.jpg";
import newImg from "../../assets/learn/newtoislam.jpg";
import kidsImg from "../../assets/learn/islamkids.jpg";
// add an image for adults when you have one
import adultImg from "../../assets/learn/adultlearning.jpg";

export default function LearnIndex() {
  const items = [
    {
      to: "/learn/what-is-islam",
      title: "What is Islam?",
      subtitle: "A clear introduction for beginners and curious visitors.",
      image: whatImg,
    },
    {
      to: "/learn/new-to-islam",
      title: "New to Islam",
      subtitle: "Support, next steps, and guidance for new Muslims.",
      image: newImg,
    },
    {
      to: "/learn/islam-for-kids",
      title: "Islam for Kids",
      subtitle: "Age-based learning through stories, games, videos, and activities.",
      image: kidsImg,
    },
    {
      to: "/learn/adult-learning",
      title: "Adult Learning Paths",
      subtitle: "Structured paths for foundations, growth, and deeper study.",
      image: adultImg,
    },
    {
      to: "/learn/faq",
      title: "FAQ",
      subtitle: "Common questions and clear answers about Islam.",
      image: faqImg,
    },
  ];

  return (
    <div className="page learnHubPage">
      <section className="learnHero">
        <p className="learnEyebrow">Learn</p>
        <h1 className="pageTitle">Learn About Islam</h1>

        <p className="pageSubtitle learnIntro" style={{ maxWidth: 900 }}>
          A growing learning space for children, new Muslims, curious visitors,
          and lifelong learners. Explore Islam through clear lessons, guided
          paths, audio support, videos, stories, and interactive activities.
        </p>

        <div className="quoteBanner">
          <p>
            “You were not created to be perfect. What matters is sincerity,
            growth, and returning to Allah in both ease and hardship.”
          </p>
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>Choose Where to Begin</h2>
          <p>
            Start with the section that best fits your stage of learning and the
            kind of support you need.
          </p>
        </div>

        <SectionCards items={items} />
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>Who This Learning Area Is For</h2>
        </div>

        <div className="learnGrid three">
          <div className="infoCard">
            <h3>Curious Visitors</h3>
            <p>
              Start with simple introductions to Islam, common questions, and
              beginner-friendly resources.
            </p>
          </div>

          <div className="infoCard">
            <h3>New Muslims</h3>
            <p>
              Find practical next steps, prayer and wudu basics, and support for
              growing in faith with confidence.
            </p>
          </div>

          <div className="infoCard">
            <h3>Families & Lifelong Learners</h3>
            <p>
              Explore age-based kids learning and adult learning paths for
              continued growth and deeper understanding.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}