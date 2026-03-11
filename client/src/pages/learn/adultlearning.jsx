import { Link } from "react-router-dom";
import "../../styles/learn.css";

const adultPaths = [
  {
    title: "Foundations of Islam",
    subtitle: "Start with the basics",
    text: "For new Muslims, curious visitors, returning learners, and anyone who wants a clear foundation in Islam.",
    to: "/learn/adults/foundations",
  },
  {
    title: "Growing in Faith",
    subtitle: "Strengthen practice and understanding",
    text: "For Muslims who know the basics and want to build consistency, character, worship, and daily Islamic growth.",
    to: "/learn/adults/growing-in-faith",
  },
  {
    title: "Deepening Knowledge",
    subtitle: "Go further in study and reflection",
    text: "For longer-term learners who want deeper study, reflection, spiritual growth, and stronger understanding.",
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
          are just beginning, strengthening your practice, or seeking deeper
          understanding, these paths are designed to support continued learning.
        </p>

        <div className="quoteBanner">
          <p>
            “Seeking knowledge is a lifelong part of faith, growth, and sincerity.”
          </p>
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>Choose a Learning Path</h2>
          <p>
            You do not have to stay in one lane forever. Move between these
            paths as needed and return to the basics whenever beneficial.
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

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>What You’ll Find Here</h2>
        </div>

        <div className="learnGrid three">
          <div className="infoCard">
            <h3>Short Lessons</h3>
            <p>
              Clear, manageable learning instead of long overwhelming pages.
            </p>
          </div>

          <div className="infoCard">
            <h3>Audio, Video & Quizzes</h3>
            <p>
              Learn through multiple formats with read-aloud support and quick
              checks for understanding.
            </p>
          </div>

          <div className="infoCard">
            <h3>Practical Growth</h3>
            <p>
              Lessons designed to connect faith to everyday practice, worship,
              and character.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}