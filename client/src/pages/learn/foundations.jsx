import { Link } from "react-router-dom";
import "../../styles/learn.css";

const foundationTopics = [
  {
    title: "What Islam Means",
    text: "Learn the meaning of Islam, its core beliefs, and why Muslims submit to Allah.",
    to: "/learn/what-is-islam",
  },
  {
    title: "The Shahada",
    text: "Understand the testimony of faith and why it is the foundation of a Muslim’s belief.",
    to: "/learn/new-to-islam",
  },
  {
    title: "Prayer Basics",
    text: "Begin learning why Muslims pray, what salah is, and how daily prayer shapes faith.",
    to: "/learn/new-to-islam",
  },
  {
    title: "Wudu Basics",
    text: "Learn the purpose of wudu and how purification prepares Muslims for prayer.",
    to: "/learn/new-to-islam",
  },
  {
    title: "The Quran",
    text: "Understand what the Quran is, why it matters, and how Muslims relate to it.",
    to: "/learn/what-is-islam",
  },
  {
    title: "Masjid Etiquette",
    text: "Learn what to expect in the masjid and how to feel more comfortable attending.",
    to: "/learn/faq",
  },
];

export default function AdultFoundations() {
  return (
    <div className="page learnPage adultPathPage">
      <section className="learnHero">
        <p className="learnEyebrow">Adult Learning</p>
        <h1 className="pageTitle">Foundations of Islam</h1>
        <p className="pageSubtitle learnIntro">
          A beginner-friendly learning path for those who are new, curious,
          returning, or rebuilding their understanding from the ground up.
        </p>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>Start with the Essentials</h2>
          <p>
            These topics build a strong base and help new learners move forward
            with more clarity and confidence.
          </p>
        </div>

        <div className="learnGrid three">
          {foundationTopics.map((topic) => (
            <Link key={topic.title} to={topic.to} className="navCard">
              <h3>{topic.title}</h3>
              <p>{topic.text}</p>
              <span>Open lesson →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="learnSection">
        <div className="infoCard">
          <h2>Good Starting Point</h2>
          <p>
            If you are completely new, begin with <strong>What is Islam?</strong>{" "}
            and <strong>New to Islam</strong>. Those pages will continue to act
            as your beginner entry points while this path organizes the broader
            journey.
          </p>
        </div>
      </section>
    </div>
  );
}