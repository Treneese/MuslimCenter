import { Link } from "react-router-dom";
import "../../styles/learn.css";

export default function NewToIslam() {
  return (
    <div className="page learnPage">
      <section className="learnHero">
        <p className="learnEyebrow">New to Islam</p>
        <h1 className="pageTitle">You Are Welcome Here</h1>

        <p className="pageSubtitle learnIntro">
          Whether you are exploring Islam, thinking about becoming Muslim, or
          have recently accepted Islam, you are not alone. Our masjid and
          community are here to support you with guidance, patience, and care.
        </p>

        <div className="quoteBanner">
          <p>
            “You do not have to know everything at once. Begin sincerely and
            grow step by step.”
          </p>
        </div>
      </section>

      <section className="learnSection">
        <div className="infoCard">
          <h2>You Have a Place Here</h2>
          <p>
            Becoming Muslim is not something you have to figure out on your own.
            Our masjid is here to help you learn, ask questions, and feel
            supported as you begin your journey.
          </p>

          <p>
            You can visit, reach out, or attend at your own pace. There is no
            pressure, only support.
          </p>
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>The Shahada</h2>
          <p>
            The Shahada is the declaration of faith and the beginning of a
            Muslim’s journey.
          </p>
        </div>

        <div className="splitSection">
          <div className="infoCard">
            <h3>Arabic</h3>
            <p className="arabicText">
              أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا ٱللَّٰهُ وَأَشْهَدُ أَنَّ
              مُحَمَّدًا رَسُولُ ٱللَّٰهِ
            </p>
          </div>

          <div className="infoCard">
            <h3>Meaning</h3>
            <p>
              I bear witness that there is no god but Allah, and Muhammad is
              the Messenger of Allah.
            </p>
            <p>
              Saying this sincerely is how a person becomes Muslim.
            </p>
          </div>
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>What to Do First</h2>
          <p>
            Keep your beginning simple. Focus on what matters most first.
          </p>
        </div>

        <div className="learnGrid three">
          <div className="infoCard">
            <h3>Start with belief</h3>
            <p>
              Begin with sincerity, belief in Allah, and learning what Islam
              teaches at a basic level.
            </p>
          </div>

          <div className="infoCard">
            <h3>Learn prayer step by step</h3>
            <p>
              Do not pressure yourself to know everything immediately. Build one
              step at a time.
            </p>
          </div>

          <div className="infoCard">
            <h3>Stay connected</h3>
            <p>
              Support, classes, and good community can make the journey lighter
              and more grounded.
            </p>
          </div>
        </div>
      </section>

      <section className="learnSection">
        <div className="infoCard">
          <h2>Need Personal Support?</h2>
          <p>
            If you are exploring Islam, preparing to take shahada, or have
            recently become Muslim, we would be honored to support you with
            guidance, mentorship, and connection to community.
          </p>

          <Link to="/services/shahada" className="primaryBtn">
            Get Shahada Support →
          </Link>
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>Connect with the Community</h2>
        </div>

        <div className="learnGrid two">

          <Link to="/events" className="navCard">
            <h3>Attend a Program</h3>
            <p>
              Join classes, prayers, and gatherings to begin building
              connection.
            </p>
            <span>View events →</span>
          </Link>

          <Link to="/contact" className="navCard">
            <h3>Reach Out</h3>
            <p>
              Contact the masjid if you have questions or want to speak with
              someone directly.
            </p>
            <span>Contact us →</span>
          </Link>
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>Ready to Learn Step by Step?</h2>
          <p>
            When you are ready, Foundations will walk you through the basics in
            a clear and structured way.
          </p>
        </div>

        <Link to="/learn/adults/foundations" className="primaryBtn">
          Start Foundations →
        </Link>
      </section>
    </div>
  );
}