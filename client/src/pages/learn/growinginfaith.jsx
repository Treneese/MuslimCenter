import "../../styles/learn.css";

const growthTopics = [
  {
    title: "Building Consistency in Prayer",
    text: "Move from knowing prayer matters to building it steadily into daily life.",
  },
  {
    title: "Islamic Character",
    text: "Grow in honesty, patience, mercy, gratitude, and responsibility.",
  },
  {
    title: "Understanding Worship More Deeply",
    text: "Learn the meaning behind prayer, fasting, dua, and remembrance.",
  },
  {
    title: "Family, Community, and Service",
    text: "Explore how Islam shapes relationships, community involvement, and daily conduct.",
  },
  {
    title: "Returning to Allah After Struggle",
    text: "Find encouragement, mercy, and practical ways to keep growing after hardship or inconsistency.",
  },
  {
    title: "Quran Reflection",
    text: "Begin moving from recitation alone into reflection and personal application.",
  },
];

export default function AdultGrowingInFaith() {
  return (
    <div className="page learnPage adultPathPage">
      <section className="learnHero">
        <p className="learnEyebrow">Adult Learning</p>
        <h1 className="pageTitle">Growing in Faith</h1>
        <p className="pageSubtitle learnIntro">
          For learners who know the basics and want to strengthen worship,
          daily practice, understanding, and Islamic character.
        </p>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>Build a Stronger Practice</h2>
          <p>
            This path focuses on moving from basic knowledge into consistent,
            meaningful growth.
          </p>
        </div>

        <div className="learnGrid three">
          {growthTopics.map((topic) => (
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