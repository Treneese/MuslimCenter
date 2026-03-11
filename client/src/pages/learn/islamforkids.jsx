import { Link } from "react-router-dom";
import "../../styles/learn.css";

const ageGroups = [
  {
    title: "Ages 3–5",
    subtitle: "Visual, simple, and gentle",
    text: "Early learning through short phrases, repetition, audio, pictures, and parent-guided activities.",
    to: "/learn/kids-3-5",
  },
  {
    title: "Ages 6–8",
    subtitle: "Fun, active, and easy to follow",
    text: "Short lessons, simple reading, prophet stories, mini quizzes, and hands-on Islamic learning.",
    to: "/learn/kids-6-8",
  },
  {
    title: "Ages 9–12",
    subtitle: "Growing understanding and reflection",
    text: "Deeper learning about prayer, fasting, the Quran, character, responsibility, and everyday faith.",
    to: "/learn/kids-9-12",
  },
];

const learnAreas = [
  "Who Allah is",
  "What a masjid is",
  "The Five Pillars",
  "Short duas and daily manners",
  "Stories of the prophets",
  "Prayer, gratitude, and kindness",
];

const learningFormats = [
  {
    title: "Watch",
    text: "Short, trusted videos that help children learn through visuals, sound, and repetition.",
  },
  {
    title: "Read",
    text: "Simple age-based lessons designed for growing attention spans and reading levels.",
  },
  {
    title: "Practice",
    text: "Mini questions, matching, repetition, and reflection that help lessons stick.",
  },
  {
    title: "Try at Home",
    text: "Printable pages, family prompts, and simple activities that continue learning beyond the screen.",
  },
];

const featuredVideos = [
  {
    title: "Omar & Hana",
    subtitle: "Songs, manners, and everyday Islamic learning",
    description:
      "A familiar series for young children with simple Islamic themes, songs, and daily life lessons.",
    url: "https://www.youtube.com/@OmarHanaIslamicSongsforKids",
    tag: "Preschool + Early Readers",
  },
  {
    title: "Mina and Mila",
    subtitle: "Faith, family, and daily Muslim life",
    description:
      "Gentle stories and faith-based learning for children through fun and relatable family moments.",
    url: "https://www.youtube.com/@MinaMilaMuslimTwins",
    tag: "Ages 3–8",
  },
  {
    title: "Zaky and friends",
    subtitle: "Islamic stories and character lessons",
    description:
      "Animated lessons that help children learn values, Islamic habits, and meaningful everyday lessons.",
    url: "https://www.youtube.com/@One4kids-Zaky",
    tag: "Ages 6–12",
  },
  {
    title: "Muhammad: The Last Prophet",
    subtitle: "Animated film for older children and families",
    description:
      "A longer animated resource better suited for older children with parent guidance and discussion.",
    url: "https://www.youtube.com/watch?v=KfDsedlR6F0",
    tag: "Older Kids + Family",
  },
  {
    title: "Little Ammar",
    subtitle: "Songs, manners, and everyday Islamic learning",
    description:
      "A familiar series for young children with simple Islamic themes, songs, and daily life lessons.",
    url: "https://www.youtube.com/@LittleAmmarIslamicSongsDurioo",
    tag: "Preschool + Early Readers",
  },
  {
    title: "Little Muslim Nation",
    subtitle: "Songs about faith, patience, and reliance on Allah",
    description:
      "Helpful for reinforcing messages children can remember through rhythm and repetition.",
    url: "https://www.youtube.com/channel/UCxFzGwiomf2BgIUaEnszy-w",
    tag: "Ages 3–8",
  },
   {
    title: "MiniMuslims",
    subtitle: "Songs and stories for Muslim kids",
    description:
      "Animated lessons and songs that help children learn values, Islamic habits, and meaningful everyday lessons.",
    url: "https://www.youtube.com/channel/UCIDYe6rgdROl77DDevNIcPA",
    tag: "Ages 3–8",
  },
  {
    title: "Prophet Story Videos",
    subtitle: "Stories that teach courage and patience",
    description:
      "Short videos that help children connect with the lives and lessons of the prophets.",
    url: "https://www.youtube.com/@IslamicKidsVideos",
    tag: "Ages 6–12",
  },
];

export default function IslamForKids() {
  return (
    <div className="page learnPage kidsPage">
      <section className="learnHero kidsHero">
        <p className="learnEyebrow">Kids & Families</p>
        <h1 className="pageTitle">Islam for Kids</h1>
        <p className="pageSubtitle learnIntro">
          A growing learning space for children and families with age-based
          lessons, simple faith-building tools, and resources designed to make
          Islamic learning feel warm, accessible, and consistent.
        </p>

        <div className="quoteBanner">
          <p>
            “Children grow best when faith is taught with love, clarity, and consistency.”
          </p>
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
          <h2>What Children Can Learn Here</h2>
          <p>
            Lessons are designed to help children grow in understanding, routine,
            confidence, and love for Islam over time.
          </p>
        </div>

        <div className="learnGrid three">
          {learnAreas.map((item) => (
            <div key={item} className="infoCard softCard">
              <h3>{item}</h3>
              <p>
                Age-appropriate learning designed to be simple, meaningful, and easy to return to again and again.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>Ways Families Can Learn</h2>
          <p>
            Children learn in different ways, so this section is built to support more than just reading.
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
            Browse family-friendly Islamic videos, songs, stories, and animated resources for different age groups.
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
              <span className="videoLibraryLink">Watch resource ↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="learnSection">
        <div className="infoCard">
          <h2>Parent & Family Note</h2>
          <p>
            Children do not all learn the same way. Some respond to stories, some to visuals, some to repetition, and some to hands-on activities. The goal of this section is to support families in building steady, encouraging Islamic learning one step at a time.
          </p>
        </div>
      </section>
    </div>
  );
}