import { Link } from "react-router-dom";
import "../../styles/learn.css";

export default function WhatIsIslam() {
  return (
    <div className="page learnPage">
      <section className="learnHero">
        <p className="learnEyebrow">Learn</p>
        <h1 className="pageTitle">What is Islam?</h1>

        <p className="pageSubtitle learnIntro">
          Islam is a faith centered on worshiping one God, Allah, and living
          with purpose, honesty, compassion, and accountability. Muslims follow
          the guidance revealed to the Prophet Muhammad ﷺ and believe in the
          same line of prophets before him, including Abraham, Moses, and Jesus
          (peace be upon them all).
        </p>

        <div className="quoteBanner">
          <p>
            “Islam calls people to faith, worship, good character, and a life
            lived with awareness of God.”
          </p>
        </div>
      </section>

      {/* CORE IDEA */}
      <section className="learnSection">
        <div className="sectionHeading">
          <h2>At Its Core</h2>
        </div>

        <div className="learnGrid three">
          <div className="infoCard">
            <h3>One God</h3>
            <p>
              Muslims believe in one God, Allah, who created everything and has
              no partners.
            </p>
          </div>

          <div className="infoCard">
            <h3>Guidance</h3>
            <p>
              Muslims follow the Quran as the final revelation and the example
              of the Prophet Muhammad ﷺ.
            </p>
          </div>

          <div className="infoCard">
            <h3>Purpose</h3>
            <p>
              Islam teaches people to live with faith, responsibility, and care
              for others.
            </p>
          </div>
        </div>
      </section>

      {/* BELIEFS */}
      <section className="learnSection">
        <div className="sectionHeading">
          <h2>Core Beliefs</h2>
        </div>

        <div className="learnGrid two">
          <div className="infoCard">
            <p>
              Muslims believe in one God, angels, revealed books, prophets,
              the Day of Judgment, and divine decree.
            </p>
          </div>

          <div className="infoCard">
            <p>
              These beliefs shape how Muslims understand life, purpose, and
              accountability.
            </p>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="learnSection">
        <div className="sectionHeading">
          <h2>The Five Pillars</h2>
        </div>

        <div className="learnGrid three">
          <div className="infoCard"><h3>Faith</h3><p>Shahada</p></div>
          <div className="infoCard"><h3>Prayer</h3><p>Salah</p></div>
          <div className="infoCard"><h3>Charity</h3><p>Zakat</p></div>
          <div className="infoCard"><h3>Fasting</h3><p>Ramadan</p></div>
          <div className="infoCard"><h3>Pilgrimage</h3><p>Hajj</p></div>
        </div>
      </section>

      {/* COMMUNITY BRIDGE */}
      <section className="learnSection">
        <div className="sectionHeading">
          <h2>Faith and Community</h2>
        </div>

        <div className="infoCard">
          <p>
            Islam is not only a belief system. It is also lived in community.
            Muslims gather for prayer, support one another, and grow together.
          </p>

          <p>
            A masjid is more than a place of worship. It is a place for
            connection, learning, and belonging.
          </p>
        </div>
      </section>

      {/* NEXT STEPS */}
      <section className="learnSection">
        <div className="learnGrid three">
          <Link to="/learn/new-to-islam" className="navCard">
            <h3>New to Islam</h3>
            <p>Support, next steps, and guidance.</p>
            <span>Go →</span>
          </Link>

          <Link to="/learn/faq" className="navCard">
            <h3>FAQ</h3>
            <p>Common questions answered clearly.</p>
            <span>Go →</span>
          </Link>

          <Link to="/contact" className="navCard">
            <h3>Visit or Contact</h3>
            <p>Connect with the masjid community.</p>
            <span>Go →</span>
          </Link>
        </div>
      </section>
    </div>
  );
}