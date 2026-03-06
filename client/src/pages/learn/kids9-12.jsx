import { Link } from "react-router-dom";
import "../../styles/learn.css";

const deeperTopics = [
  {
    title: "Why Muslims Pray",
    text: "Prayer is not only a routine. It keeps Muslims connected to Allah, brings discipline, and strengthens faith throughout the day.",
  },
  {
    title: "What the Quran Means to Muslims",
    text: "The Quran is guidance, mercy, wisdom, and a source of reflection. Muslims read it to understand how to live with faith and character.",
  },
  {
    title: "What Ramadan Teaches",
    text: "Ramadan teaches patience, gratitude, self-control, worship, and care for others.",
  },
  {
    title: "Faith and Character",
    text: "Islam is not only about rituals. It is also about honesty, patience, respect, responsibility, and compassion.",
  },
];

const reflectionQuestions = [
  "How does prayer help a person during the day?",
  "Why do you think gratitude is important in Islam?",
  "What good habits help a person grow in faith?",
  "How can kindness be part of worship?",
];

export default function Kids912() {
  return (
    <div className="page learnPage kidsAgePage olderKidsPage">
      <section className="learnHero kidsHero">
        <p className="learnEyebrow">Islam for Kids</p>
        <h1 className="pageTitle">Ages 9–12</h1>
        <p className="pageSubtitle learnIntro">
          Stronger Islamic learning for older children through meaning,
          reflection, real-life connection, and deeper understanding.
        </p>

        <div className="quoteBanner">
          <p>
            “As children grow, they begin asking not only what Islam teaches,
            but why it matters.”
          </p>
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>Deeper Learning Topics</h2>
          <p>
            Children in this age range can begin thinking more seriously about
            worship, purpose, and character.
          </p>
        </div>

        <div className="learnGrid two">
          {deeperTopics.map((topic) => (
            <div key={topic.title} className="infoCard">
              <h3>{topic.title}</h3>
              <p>{topic.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>Learning Beyond Memorization</h2>
        </div>

        <div className="learnGrid three">
          <div className="infoCard">
            <h3>Understand</h3>
            <p>
              Children can begin understanding the meaning behind prayer,
              fasting, Quran, and good character.
            </p>
          </div>

          <div className="infoCard">
            <h3>Reflect</h3>
            <p>
              This age is strong for guided questions, journaling, and personal
              thought.
            </p>
          </div>

          <div className="infoCard">
            <h3>Apply</h3>
            <p>
              Islamic learning becomes stronger when children connect it to
              everyday choices and behavior.
            </p>
          </div>
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>Reflection Questions</h2>
          <p>
            These help older children think about Islam more personally and more
            deeply.
          </p>
        </div>

        <div className="learnGrid two">
          {reflectionQuestions.map((question) => (
            <div key={question} className="infoCard reflectionCard">
              <h3>Think About This</h3>
              <p>{question}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>Good Learning Activities for This Age</h2>
        </div>

        <div className="splitSection">
          <div className="infoCard">
            <h3>Activities</h3>
            <ul className="learnList">
              <li>Short reading and discussion</li>
              <li>Reflection journal prompts</li>
              <li>Quran-themed study sheets</li>
              <li>Ramadan goals tracker</li>
              <li>Character challenge of the week</li>
            </ul>
          </div>

          <div className="infoCard">
            <h3>Why this works</h3>
            <ul className="learnList">
              <li>Builds personal understanding</li>
              <li>Strengthens confidence in faith</li>
              <li>Encourages thoughtful conversation</li>
              <li>Moves beyond passive learning</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>Featured Video or Lesson</h2>
        </div>

        <div className="videoCard">
          <div className="videoPlaceholder">
            Ages 9–12 approved Islamic lesson video goes here
          </div>
          <div className="videoMeta">
            <h3>Faith with Meaning</h3>
            <p>
              Choose videos that explain ideas clearly and respect the maturity
              of older children.
            </p>
          </div>
        </div>
      </section>

      <section className="learnSection">
        <div className="learnGrid three">
          <Link to="/learn/kids-6-8" className="navCard">
            <h3>Previous Age Group</h3>
            <p>Go back to ages 6–8 for early reader learning.</p>
            <span>Go to ages 6–8 →</span>
          </Link>

          <Link to="/learn/islam-for-kids" className="navCard">
            <h3>Back to Kids Home</h3>
            <p>Return to the main kids learning page.</p>
            <span>Go back →</span>
          </Link>

          <Link to="/learn/new-to-islam" className="navCard">
            <h3>Continue Learning</h3>
            <p>Explore another learning page for older youth and families.</p>
            <span>Go to next page →</span>
          </Link>
        </div>
      </section>
    </div>
  );
}