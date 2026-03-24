import { Link } from "react-router-dom";
import "../../styles/learn.css";

const ageGroups = [
  {
    title: "Ages 3–5",
    subtitle: "Visual, simple, and gentle",
    text: "Short lessons, repetition, audio, and parent-guided activities for very early learners.",
    to: "/learn/kids-3-5",
    badge: "Start Here",
  },
  {
    title: "Ages 6–8",
    subtitle: "Fun, active, and easy to follow",
    text: "Watch, read, match, and quiz through simple Islamic lessons children can return to often.",
    to: "/learn/kids-6-8",
    badge: "Build Routine",
  },
  {
    title: "Ages 9–12",
    subtitle: "Growing understanding and reflection",
    text: "Deeper learning about prayer, the Quran, fasting, character, and everyday faith.",
    to: "/learn/kids-9-12",
    badge: "Grow Deeper",
  },
];

const learnAreas = [
  {
    title: "Who Allah is",
    text: "Children begin learning that Allah created, provides, hears, sees, and deserves worship.",
  },
  {
    title: "Prayer and worship",
    text: "Children can learn what prayer is, why Muslims pray, and how worship builds routine and love for Allah.",
  },
  {
    title: "Manners and daily duas",
    text: "Short Islamic words and habits can become part of meals, greetings, gratitude, and kindness.",
  },
  {
    title: "Stories of the prophets",
    text: "Stories help children connect faith to courage, patience, mercy, and trust in Allah.",
  },
  {
    title: "Ramadan, gratitude, and generosity",
    text: "Children can begin understanding fasting, self-control, thankfulness, and caring for others.",
  },
  {
    title: "Faith in real life",
    text: "Older children can connect Islamic learning to honesty, responsibility, compassion, and good choices.",
  },
];

const learningFormats = [
  {
    title: "Watch",
    text: "Short trusted videos help children learn through visuals, sound, repetition, and storytelling.",
  },
  {
    title: "Read",
    text: "Each page uses age-based language so lessons feel clear instead of too heavy or too advanced.",
  },
  {
    title: "Practice",
    text: "Matching, quiz, and scenario activities help lessons stick instead of being forgotten right away.",
  },
  {
    title: "Learn Together",
    text: "Parent notes and simple prompts make it easier to continue learning off-screen at home.",
  },
];

const featuredVideos = [
  {
    title: "Omar & Hana",
    subtitle: "Songs, manners, and everyday Islamic learning",
    description:
      "Helpful for early learners who respond well to repetition, songs, and gentle reminders.",
    url: "https://www.youtube.com/@OmarHanaIslamicSongsforKids",
    tag: "Preschool + Early Readers",
  },
  {
    title: "Mina and Mila",
    subtitle: "Faith, family, and daily Muslim life",
    description:
      "Warm family-centered content that can support simple conversation about Islamic habits and identity.",
    url: "https://www.youtube.com/@MinaMilaMuslimTwins",
    tag: "Ages 3–8",
  },
  {
    title: "One4Kids / Zaky",
    subtitle: "Islamic stories and character lessons",
    description:
      "Animated lessons that work well for prophet stories, character building, and values-based learning.",
    url: "https://www.youtube.com/@One4kids-Zaky",
    tag: "Ages 6–12",
  },
  {
    title: "Little Ammar",
    subtitle: "Songs and simple Islamic reminders",
    description:
      "A strong option for younger children who need short, cheerful, repeatable learning.",
    url: "https://www.youtube.com/@LittleAmmarIslamicSongsDurioo",
    tag: "Ages 3–6",
  },
  {
    title: "MiniMuslims",
    subtitle: "Stories and songs for Muslim kids",
    description:
      "Useful for combining fun, rhythm, and simple Islamic messages in a kid-friendly way.",
    url: "https://www.youtube.com/channel/UCIDYe6rgdROl77DDevNIcPA",
    tag: "Ages 3–8",
  },
  {
    title: "Islamic Kids Videos",
    subtitle: "Prophet stories and learning videos",
    description:
      "Helpful when families want story-based content for slightly older children.",
    url: "https://www.youtube.com/@IslamicKidsVideos",
    tag: "Ages 6–12",
  },
];

const pathSteps = [
  "Choose the age group that fits your child best.",
  "Open one topic at a time instead of doing everything at once.",
  "Use the order: Watch → Read → Play.",
  "Repeat favorite lessons often so learning becomes familiar.",
];

export default function IslamForKids() {
  return (
    <div className="page learnPage kidsPage">
      <section className="learnHero kidsHero">
        <p className="learnEyebrow">Kids & Families</p>
        <h1 className="pageTitle">Islam for Kids</h1>
        <p className="pageSubtitle learnIntro">
          A warm, structured learning space for children and families with
          age-based Islamic lessons, guided practice, and simple tools that make
          returning to faith-building habits easier.
        </p>

        <div className="quoteBanner">
          <p>
            “Children grow best when faith is taught with love, clarity, and
            consistency.”
          </p>
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>How to Use This Section</h2>
          <p>
            This area works best when children learn one step at a time instead
            of jumping through random topics.
          </p>
        </div>

        <div className="learnGrid two">
          <div className="infoCard softCard">
            <h3>Simple Path</h3>
            <div className="simpleStepList">
              {pathSteps.map((step, index) => (
                <div key={step} className="simpleStepItem">
                  <span className="stepNumber">{index + 1}</span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="infoCard softCard">
            <h3>Built for Different Learners</h3>
            <p>
              Some children learn best through sound. Some through visuals. Some
              need repetition. Some need interaction. These pages are built to
              support all of that, not just reading.
            </p>
          </div>
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>Choose an Age Group</h2>
          <p>
            Start with the group that best matches your child’s reading level,
            attention span, and stage of learning.
          </p>
        </div>

        <div className="learnGrid three">
          {ageGroups.map((group) => (
            <Link key={group.title} to={group.to} className="navCard">
              <span className="cardTag">{group.badge}</span>
              <h3>{group.title}</h3>
              <h4>{group.subtitle}</h4>
              <p>{group.text}</p>
              <span>Open age group →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>What Children Can Learn Here</h2>
          <p>
            Lessons are designed to help children grow in understanding,
            routine, confidence, and love for Islam over time.
          </p>
        </div>

        <div className="learnGrid three">
          {learnAreas.map((item) => (
            <div key={item.title} className="infoCard softCard">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>How Children Learn Best Here</h2>
          <p>
            The goal is not just to fill the page. It is to help children truly
            understand and remember.
          </p>
        </div>

        <div className="learnGrid two">
          {learningFormats.map((item) => (
            <div key={item.title} className="infoCard">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>Trusted Kids Videos & Shows</h2>
          <p>
            Families can use these alongside the learning pages to reinforce
            Islamic ideas through stories, songs, and visuals.
          </p>
        </div>

        <div className="videoScroller">
          {featuredVideos.map((video) => (
            <a
              key={video.title}
              href={video.url}
              target="_blank"
              rel="noreferrer"
              className="videoLibraryCard"
            >
              <span className="videoLibraryTag">{video.tag}</span>
              <h3>{video.title}</h3>
              <h4>{video.subtitle}</h4>
              <p>{video.description}</p>
              <span className="videoLibraryLink">Open resource ↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="learnSection">
        <div className="infoCard">
          <h2>Parent & Family Note</h2>
          <p>
            Children do not need perfection to begin learning Islam. They need
            loving guidance, repetition, and room to grow. Let this section be
            a tool that supports steady learning, not pressure.
          </p>
        </div>
      </section>
    </div>
  );
}
