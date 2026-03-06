import { Link } from "react-router-dom";
import "../../styles/learn.css";

const topics = [
  {
    title: "The Five Pillars",
    text: "Children begin learning the main acts of worship in simple and memorable ways.",
  },
  {
    title: "Prophet Stories",
    text: "Short stories help children connect faith to courage, patience, and trust in Allah.",
  },
  {
    title: "Ramadan and Fasting",
    text: "Children can begin learning what Ramadan is and why Muslims fast.",
  },
  {
    title: "Good Character",
    text: "Islam teaches kindness, honesty, patience, respect, and gratitude.",
  },
];

const quizIdeas = [
  {
    question: "What do Muslims say before eating?",
    answer: "Bismillah",
  },
  {
    question: "How many times do Muslims pray each day?",
    answer: "Five times",
  },
  {
    question: "What is the holy book of Islam?",
    answer: "The Quran",
  },
];

export default function Kids68() {
  return (
    <div className="page learnPage kidsAgePage">
      <section className="learnHero kidsHero">
        <p className="learnEyebrow">Islam for Kids</p>
        <h1 className="pageTitle">Ages 6–8</h1>
        <p className="pageSubtitle learnIntro">
          Fun learning for early readers through short lessons, stories, simple
          questions, and everyday Islamic habits.
        </p>

        <div className="quoteBanner">
          <p>
            “At this age, children grow through curiosity, repetition, and
            learning that feels active.”
          </p>
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>What Children Can Explore</h2>
          <p>
            Ages 6–8 can handle more reading than preschoolers, but lessons
            should still be short, clear, and engaging.
          </p>
        </div>

        <div className="learnGrid two">
          {topics.map((topic) => (
            <div key={topic.title} className="infoCard">
              <h3>{topic.title}</h3>
              <p>{topic.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>Suggested Learning Flow</h2>
        </div>

        <div className="learnGrid three">
          <div className="infoCard">
            <h3>Read</h3>
            <p>Start with a short lesson about one topic.</p>
          </div>

          <div className="infoCard">
            <h3>Watch</h3>
            <p>Add a trusted kid-friendly video to reinforce the lesson.</p>
          </div>

          <div className="infoCard">
            <h3>Do</h3>
            <p>Finish with a quiz, drawing, matching game, or reflection.</p>
          </div>
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>Mini Quiz Ideas</h2>
          <p>
            Later you can turn this into a clickable React quiz component.
          </p>
        </div>

        <div className="learnGrid three">
          {quizIdeas.map((item) => (
            <div key={item.question} className="infoCard quizCard">
              <h3>{item.question}</h3>
              <p>
                <strong>Answer:</strong> {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>Good Activities for This Age</h2>
        </div>

        <div className="splitSection">
          <div className="infoCard">
            <h3>Learning Activities</h3>
            <ul className="learnList">
              <li>Five Pillars matching cards</li>
              <li>Prophet storytime</li>
              <li>Short duas practice</li>
              <li>Ramadan calendar</li>
              <li>Good deeds challenge</li>
            </ul>
          </div>

          <div className="infoCard">
            <h3>Why they work</h3>
            <ul className="learnList">
              <li>They build memory through repetition</li>
              <li>They make learning feel active</li>
              <li>They connect Islam to daily life</li>
              <li>They help children stay engaged</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>Featured Video</h2>
        </div>

        <div className="videoCard">
          <div className="videoPlaceholder">
            Ages 6–8 approved Islamic learning video goes here
          </div>
          <div className="videoMeta">
            <h3>Short and Engaging</h3>
            <p>
              Choose videos that are upbeat, clear, and connected to one lesson
              at a time.
            </p>
          </div>
        </div>
      </section>

      <section className="learnSection">
        <div className="learnGrid three">
          <Link to="/learn/kids-3-5" className="navCard">
            <h3>Previous Age Group</h3>
            <p>Go back to ages 3–5 for preschool learning.</p>
            <span>Go to ages 3–5 →</span>
          </Link>

          <Link to="/learn/islam-for-kids" className="navCard">
            <h3>Back to Kids Home</h3>
            <p>Return to the main kids learning page.</p>
            <span>Go back →</span>
          </Link>

          <Link to="/learn/kids-9-12" className="navCard">
            <h3>Next Age Group</h3>
            <p>Move to ages 9–12 for deeper understanding and reflection.</p>
            <span>Go to ages 9–12 →</span>
          </Link>
        </div>
      </section>
    </div>
  );
}