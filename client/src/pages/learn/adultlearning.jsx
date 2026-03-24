import { Link } from "react-router-dom";
import "../../styles/learn.css";

const adultPaths = [
  {
    title: "Foundations of Islam",
    subtitle: "Start here if you are new or restarting",
    text: "A step-by-step, no-gap guide for new Muslims, curious learners, or anyone rebuilding their understanding from the beginning.",
    to: "/learn/adults/foundations",
  },
  {
    title: "Growing in Faith",
    subtitle: "Strengthen your practice and discipline",
    text: "For Muslims who know the basics and want to improve the quality of their worship, consistency, character, and daily life.",
    to: "/learn/adults/growing-in-faith",
  },
  {
    title: "Deepening Knowledge",
    subtitle: "Go deeper in understanding and reflection",
    text: "For Muslims ready to focus on inner purification, deeper Quran reflection, scholarship, and long-term spiritual growth.",
    to: "/learn/adults/deepening-knowledge",
  },
];

export default function AdultLearning() {
  return (
    <div className="page learnPage adultLearningPage">
      <section className="learnHero">
        <p className="learnEyebrow">Adult Learning</p>
        <h1 className="pageTitle">Adult Learning Paths</h1>
        <p className="pageSubtitle learnIntro">
          Learn Islam in a way that matches your stage of growth. Whether you
          are brand new, building consistency, or seeking deeper understanding,
          these paths are designed to help you move forward clearly and
          confidently.
        </p>

        <div className="quoteBanner">
          <p>
            “You were not created to be perfect. What matters is sincerity,
            growth, and returning to Allah again and again.”
          </p>
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>Choose a Learning Path</h2>
          <p>
            These paths are guides, not strict labels. You can return to the
            basics at any time or move forward when ready.
          </p>
        </div>

        <div className="learnGrid three">
          {adultPaths.map((path) => (
            <Link key={path.title} to={path.to} className="navCard">
              <span className="cardTag">{path.subtitle}</span>
              <h3>{path.title}</h3>
              <p>{path.text}</p>
              <span>Open path →</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}