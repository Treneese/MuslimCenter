import { Link } from "react-router-dom";
import "../../styles/learn.css";

const pillars = [
  {
    title: "Shahada",
    subtitle: "Faith",
    text: "The declaration that there is no god but Allah, and Muhammad ﷺ is His messenger.",
  },
  {
    title: "Salah",
    subtitle: "Prayer",
    text: "Muslims pray five times each day to stay connected to Allah through worship and discipline.",
  },
  {
    title: "Zakat",
    subtitle: "Charity",
    text: "A portion of wealth is given to those in need, reminding Muslims to care for the community.",
  },
  {
    title: "Sawm",
    subtitle: "Fasting",
    text: "During Ramadan, Muslims fast from dawn to sunset as an act of worship, patience, and gratitude.",
  },
  {
    title: "Hajj",
    subtitle: "Pilgrimage",
    text: "If able, Muslims make the pilgrimage to Mecca at least once in their lifetime.",
  },
];

const beliefs = [
  {
    title: "Belief in Allah",
    text: "Muslims believe in one God, Allah, who created everything and has no partners.",
  },
  {
    title: "Belief in Angels",
    text: "Muslims believe Allah created angels who carry out His commands.",
  },
  {
    title: "Belief in Revealed Books",
    text: "Muslims believe Allah sent guidance through scriptures, including the Torah, Psalms, Gospel, and the Quran.",
  },
  {
    title: "Belief in the Prophets",
    text: "Muslims believe Allah sent prophets such as Adam, Noah, Abraham, Moses, Jesus, and Muhammad (peace be upon them all).",
  },
  {
    title: "Belief in the Day of Judgment",
    text: "Muslims believe every person will return to Allah and be judged with perfect justice and mercy.",
  },
  {
    title: "Belief in Divine Decree",
    text: "Muslims believe that Allah knows all things and that His wisdom is perfect, even when we do not understand everything.",
  },
];

export default function WhatIsIslam() {
  return (
    <div className="page learnPage">
      <section className="learnHero">
        <p className="learnEyebrow">Learn</p>
        <h1 className="pageTitle">What is Islam?</h1>
        <p className="pageSubtitle learnIntro">
          Islam is a faith centered on worshiping Allah, the One God, and living
          with sincerity, mercy, discipline, and purpose. Muslims follow the
          guidance revealed to the Prophet Muhammad ﷺ and believe in the same
          line of prophets sent before him, including Abraham, Moses, and Jesus
          (peace be upon them all).
        </p>

        <div className="quoteBanner">
          <p>
            “Islam calls people to faith, worship, good character, and a life
            lived with awareness of Allah.”
          </p>
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>At a Glance</h2>
          <p>
            Islam is not only a belief system. It is a complete way of life that
            shapes worship, family, honesty, community, compassion, and personal
            responsibility.
          </p>
        </div>

        <div className="learnGrid three">
          <div className="infoCard">
            <h3>One God</h3>
            <p>
              Muslims worship Allah alone, without partners, images, or
              intermediaries.
            </p>
          </div>

          <div className="infoCard">
            <h3>Revelation</h3>
            <p>
              Muslims believe the Quran is the final revelation sent by Allah as
              guidance for humanity.
            </p>
          </div>

          <div className="infoCard">
            <h3>Purpose</h3>
            <p>
              Islam teaches people to live with faith, integrity, gratitude,
              and care for others.
            </p>
          </div>
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>Core Beliefs</h2>
          <p>
            These foundational beliefs shape how Muslims understand God, life,
            revelation, and the hereafter.
          </p>
        </div>

        <div className="learnGrid two">
          {beliefs.map((item) => (
            <div key={item.title} className="infoCard">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>The Five Pillars of Islam</h2>
          <p>
            The Five Pillars are the central acts of worship in Islam. They help
            Muslims live with remembrance, discipline, generosity, and devotion.
          </p>
        </div>

        <div className="learnGrid pillarGrid">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="pillarCard">
              <span className="cardTag">{pillar.subtitle}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>The Quran</h2>
        </div>

        <div className="splitSection">
          <div className="infoCard">
            <p>
              The Quran is the holy book of Islam. Muslims believe it is the
              word of Allah revealed to Prophet Muhammad ﷺ over many years.
            </p>
            <p>
              It is recited in prayer, memorized by millions, and studied as a
              source of guidance, wisdom, law, and spiritual reflection.
            </p>
          </div>

          <div className="infoCard">
            <h3>Why it matters</h3>
            <ul className="learnList">
              <li>It teaches belief, worship, and character.</li>
              <li>It guides people toward justice, mercy, and truth.</li>
              <li>It connects Muslims directly to revelation.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>Who is Prophet Muhammad ﷺ?</h2>
        </div>

        <div className="infoCard">
          <p>
            Prophet Muhammad ﷺ is the final prophet in Islam. Muslims do not
            worship him. They love, honor, and follow his example as the
            messenger who brought the Quran and taught people how to live by it.
          </p>
          <p>
            His life is a model of patience, mercy, truthfulness, courage, and
            devotion to Allah.
          </p>
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>Watch and Learn</h2>
          <p>
            Approved video resources can be added here for visitors who prefer
            visual learning.
          </p>
        </div>

        <div className="videoCard">
          <div className="videoPlaceholder">
            YouTube video embed goes here
          </div>
          <div className="videoMeta">
            <h3>Introduction to Islam</h3>
            <p>
              Add a trusted beginner-friendly video from an approved Islamic
              educational source.
            </p>
          </div>
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>Continue Learning</h2>
          <p>
            Explore the next step based on where you are in your journey.
          </p>
        </div>

        <div className="learnGrid three">
          <Link to="/learn/new-to-islam" className="navCard">
            <h3>New to Islam</h3>
            <p>Support, first steps, and beginner resources.</p>
            <span>Go to page →</span>
          </Link>

          <Link to="/learn/faq" className="navCard">
            <h3>FAQ</h3>
            <p>Quick answers to common questions about Islam.</p>
            <span>Go to page →</span>
          </Link>

          <Link to="/learn/islam-for-kids" className="navCard">
            <h3>Islam for Kids</h3>
            <p>Age-based learning for children and families.</p>
            <span>Go to page →</span>
          </Link>
        </div>
      </section>
    </div>
  );
}