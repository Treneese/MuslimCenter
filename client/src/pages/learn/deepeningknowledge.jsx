import "../../styles/learn.css";

const deeperTopics = [
  {
    title: "Spiritual Purification",
    text: "Explore the heart, sincerity, discipline, repentance, and inner growth in Islam.",
  },
  {
    title: "Prophetic Character in Depth",
    text: "Study the character of the Prophet ﷺ more deeply and apply those qualities in modern life.",
  },
  {
    title: "Islamic History & Scholarship",
    text: "Learn from the lives of scholars, major historical periods, and the preservation of knowledge.",
  },
  {
    title: "Ethics, Responsibility, and Leadership",
    text: "Examine how Islam speaks to justice, service, accountability, and communal responsibility.",
  },
  {
    title: "Deeper Quran Study",
    text: "Move beyond basic familiarity into layered reflection, themes, and understanding.",
  },
  {
    title: "Lifelong Learning in Islam",
    text: "Continue growing in humility, study, service, and spiritual maturity over time.",
  },
];

export default function AdultDeepeningKnowledge() {
  return (
    <div className="page learnPage adultPathPage">
      <section className="learnHero">
        <p className="learnEyebrow">Adult Learning</p>
        <h1 className="pageTitle">Deepening Knowledge</h1>
        <p className="pageSubtitle learnIntro">
          For learners seeking deeper study, stronger reflection, richer
          understanding, and continued growth over the long term.
        </p>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>Go Further in Study</h2>
          <p>
            This path is for people who want to keep learning with greater depth,
            seriousness, and reflection.
          </p>
        </div>

        <div className="learnGrid three">
          {deeperTopics.map((topic) => (
            <div key={topic.title} className="infoCard">
              <h3>{topic.title}</h3>
              <p>{topic.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}