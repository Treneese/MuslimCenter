import { Link } from "react-router-dom";
import "../../styles/learn.css";

const ageGroups = [
  {
    title: "Ages 3–5",
    subtitle: "Visual, simple, and gentle",
    text: "Short phrases, repetition, bright visuals, short duas, and very simple Islamic ideas.",
    to: "/learn/kids-3-5",
  },
  {
    title: "Ages 6–8",
    subtitle: "Fun learning and early understanding",
    text: "Short lessons, prophet stories, basic pillars, short quizzes, and guided activities.",
    to: "/learn/kids-6-8",
  },
  {
    title: "Ages 9–12",
    subtitle: "Deeper thinking and stronger understanding",
    text: "Meaningful topics like prayer, fasting, the Quran, character, and growing responsibility.",
    to: "/learn/kids-9-12",
  },
];

const ideas = [
  "Short animated learning videos",
  "Mini quizzes and matching games",
  "Printable activity sheets",
  "Prophet stories by age group",
  "Good deeds trackers",
  "Ramadan and salah challenge pages",
];

export default function IslamForKids() {
  return (
    <div className="page learnPage kidsPage">
      <section className="learnHero kidsHero">
        <p className="learnEyebrow">Kids & Families</p>
        <h1 className="pageTitle">Islam for Kids</h1>
        <p className="pageSubtitle learnIntro">
          Helping children learn Islam in ways that match their age, attention
          span, and reading level. This section is designed to make learning
          feel welcoming, joyful, and easy to grow into over time.
        </p>

        <div className="quoteBanner">
          <p>
            “Children learn best when truth is taught with love, clarity, and
            consistency.”
          </p>
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>Choose an Age Group</h2>
          <p>
            Reading level, attention span, and learning style change a lot as
            children grow. Start with the group that fits your child best.
          </p>
        </div>

        <div className="learnGrid three">
          {ageGroups.map((group) => (
            <Link key={group.title} to={group.to} className="navCard">
              <span className="cardTag">{group.subtitle}</span>
              <h3>{group.title}</h3>
              <p>{group.text}</p>
              <span>Open age group →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>How This Section Helps</h2>
        </div>

        <div className="learnGrid three">
          <div className="infoCard">
            <h3>Age-appropriate learning</h3>
            <p>
              Younger children need visuals and short repetition. Older children
              can handle more meaning, questions, and reflection.
            </p>
          </div>

          <div className="infoCard">
            <h3>More than reading</h3>
            <p>
              Children learn through stories, activities, videos, routines, and
              simple interaction, not just long paragraphs.
            </p>
          </div>

          <div className="infoCard">
            <h3>Family support</h3>
            <p>
              Parents and caregivers can use this section as a starting point
              for conversations and consistent learning at home.
            </p>
          </div>
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>What Kids Can Learn Here</h2>
        </div>

        <div className="splitSection">
          <div className="infoCard">
            <ul className="learnList">
              <li>Who Allah is</li>
              <li>What a masjid is</li>
              <li>The Five Pillars in simple language</li>
              <li>Short duas and daily manners</li>
              <li>Ramadan and why Muslims fast</li>
              <li>Stories of the prophets</li>
            </ul>
          </div>

          <div className="infoCard">
            <ul className="learnList">
              <li>Why Muslims pray</li>
              <li>What the Quran is</li>
              <li>Kindness, honesty, and patience</li>
              <li>Respect for parents and community</li>
              <li>Good habits and gratitude</li>
              <li>Growing love for faith over time</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>Interactive Learning Ideas</h2>
          <p>
            This is what will make the page feel much stronger than a basic info
            page later on.
          </p>
        </div>

        <div className="learnGrid three">
          {ideas.map((idea) => (
            <div key={idea} className="infoCard">
              <h3>{idea}</h3>
              <p>
                This can be built into the kids section as the learning area
                grows.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>Featured Family Resource</h2>
        </div>

        <div className="videoCard">
          <div className="videoPlaceholder">
            Kids or family YouTube video embed goes here
          </div>
          <div className="videoMeta">
            <h3>Learn Together</h3>
            <p>
              Add a trusted, approved video here for families or children. Keep
              it short, clear, and age-appropriate.
            </p>
          </div>
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>Parent & Family Note</h2>
        </div>

        <div className="infoCard">
          <p>
            Every child learns differently. Some children respond best to
            stories, some to visuals, some to repetition, and some to hands-on
            activity. This section should support families by making Islamic
            learning feel natural, encouraging, and realistic.
          </p>
        </div>
      </section>
    </div>
  );
}