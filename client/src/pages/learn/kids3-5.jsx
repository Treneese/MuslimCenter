import { Link } from "react-router-dom";
import "../../styles/learn.css";

const lessonCards = [
  {
    title: "Allah Made Everything",
    text: "Allah made the sky, the earth, the animals, and all people.",
  },
  {
    title: "We Love Allah",
    text: "Muslims love Allah, thank Allah, and remember Allah every day.",
  },
  {
    title: "A Masjid is a Special Place",
    text: "A masjid is where Muslims pray, learn, and gather together.",
  },
];

const simpleHabits = [
  "Say Bismillah before eating",
  "Say Alhamdulillah after finishing",
  "Be kind to parents and family",
  "Share with others",
  "Use gentle words",
  "Keep hands and body clean",
];

export default function Kids35() {
  return (
    <div className="page learnPage kidsAgePage">
      <section className="learnHero kidsHero">
        <p className="learnEyebrow">Islam for Kids</p>
        <h1 className="pageTitle">Ages 3–5</h1>
        <p className="pageSubtitle learnIntro">
          Simple, loving introductions to Islam for early learners through short
          phrases, clear ideas, and gentle repetition.
        </p>

        <div className="quoteBanner">
          <p>
            “Little hearts learn through love, repetition, and simple truth.”
          </p>
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>What We Learn</h2>
          <p>
            At this age, children learn best through very short language,
            visuals, routine, and repetition.
          </p>
        </div>

        <div className="learnGrid three">
          {lessonCards.map((item) => (
            <div key={item.title} className="infoCard softCard">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>Simple Daily Habits</h2>
          <p>
            These are small Islamic habits young children can begin learning at
            home and in the masjid.
          </p>
        </div>

        <div className="infoCard">
          <ul className="learnList">
            {simpleHabits.map((habit) => (
              <li key={habit}>{habit}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>Short Learning Time</h2>
          <p>
            Keep learning sessions short, happy, and easy to remember.
          </p>
        </div>

        <div className="learnGrid two">
          <div className="infoCard">
            <h3>Good topics for this age</h3>
            <ul className="learnList">
              <li>Who is Allah?</li>
              <li>What is a masjid?</li>
              <li>We say Bismillah</li>
              <li>We love to pray</li>
              <li>Allah loves kindness</li>
            </ul>
          </div>

          <div className="infoCard">
            <h3>Best learning style</h3>
            <ul className="learnList">
              <li>Short videos</li>
              <li>Simple songs or repetition</li>
              <li>Picture-based learning</li>
              <li>Parent-led reading</li>
              <li>Coloring and tracing</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>Watch Together</h2>
          <p>
            Add a very short approved video here for preschool and early
            learners.
          </p>
        </div>

        <div className="videoCard">
          <div className="videoPlaceholder">
            Preschool-friendly Islamic video embed goes here
          </div>
          <div className="videoMeta">
            <h3>Learn with Family</h3>
            <p>
              Keep videos short, gentle, and easy for a child to understand with
              a parent nearby.
            </p>
          </div>
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>Try at Home</h2>
        </div>

        <div className="learnGrid three">
          <div className="infoCard softCard">
            <h3>Coloring Page</h3>
            <p>Print a masjid or moon-and-stars page for simple learning time.</p>
          </div>

          <div className="infoCard softCard">
            <h3>Say the Words</h3>
            <p>Practice Bismillah, Alhamdulillah, and Allah with your child.</p>
          </div>

          <div className="infoCard softCard">
            <h3>Prayer Mat Time</h3>
            <p>Let children explore prayer gently by standing with family.</p>
          </div>
        </div>
      </section>

      <section className="learnSection">
        <div className="learnGrid three">
          <Link to="/learn/islam-for-kids" className="navCard">
            <h3>Back to Kids Home</h3>
            <p>Return to the main kids learning page.</p>
            <span>Go back →</span>
          </Link>

          <Link to="/learn/kids-6-8" className="navCard">
            <h3>Next Age Group</h3>
            <p>Move to ages 6–8 for early reading and more activities.</p>
            <span>Go to ages 6–8 →</span>
          </Link>

          <Link to="/contact" className="navCard">
            <h3>Need Family Support?</h3>
            <p>Reach out to the masjid for children and family resources.</p>
            <span>Contact us →</span>
          </Link>
        </div>
      </section>
    </div>
  );
}