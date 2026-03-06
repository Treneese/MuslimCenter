import { Link } from "react-router-dom";
import "../../styles/learn.css";

const firstSteps = [
  {
    title: "Begin with the Shahada",
    text: "The Shahada is the declaration of faith in Islam. It is the beginning of a new relationship with Allah built on sincerity, belief, and submission.",
  },
  {
    title: "Learn Prayer Gradually",
    text: "Do not feel like you must know everything immediately. Start learning the daily prayers step by step and build consistency over time.",
  },
  {
    title: "Start Reading the Quran",
    text: "Begin with translation, short surahs, and simple explanations. Focus on understanding and connection, not rushing.",
  },
  {
    title: "Stay Connected to Community",
    text: "A supportive masjid and good company can make a big difference. Ask questions, attend classes, and take your journey one step at a time.",
  },
];

const supports = [
  {
    title: "Prayer Help",
    text: "Learn the basics of wudu, prayer times, and how to begin salah with patience and support.",
  },
  {
    title: "Beginner Resources",
    text: "Use simple guides, beginner-friendly Quran resources, and trusted educational content.",
  },
  {
    title: "Questions Welcome",
    text: "It is normal to have questions. Learning Islam is a journey, and no sincere question is too small.",
  },
];

export default function NewToIslam() {
  return (
    <div className="page learnPage">
      <section className="learnHero">
        <p className="learnEyebrow">New to Islam</p>
        <h1 className="pageTitle">Welcome</h1>
        <p className="pageSubtitle learnIntro">
          Whether you are exploring Islam, considering the Shahada, or have
          recently accepted Islam, you are welcome here. This page is meant to
          help you begin with clarity, peace, and practical next steps.
        </p>

        <div className="quoteBanner">
          <p>
            “You do not have to know everything at once. Begin sincerely, keep
            learning, and trust Allah with your growth.”
          </p>
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>You Are Not Alone</h2>
          <p>
            Many people come to Islam with questions, emotions, and a desire to
            understand more deeply. Islam is not about becoming perfect
            overnight. It is about turning to Allah sincerely and continuing to
            grow.
          </p>
        </div>

        <div className="learnGrid three">
          <div className="infoCard">
            <h3>Take it step by step</h3>
            <p>
              Focus on learning one thing at a time instead of trying to carry
              everything at once.
            </p>
          </div>

          <div className="infoCard">
            <h3>Ask questions freely</h3>
            <p>
              Questions are part of learning. Growth comes through seeking
              understanding with sincerity.
            </p>
          </div>

          <div className="infoCard">
            <h3>Stay connected</h3>
            <p>
              A healthy Muslim community can help you feel supported,
              encouraged, and grounded.
            </p>
          </div>
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>The Shahada</h2>
          <p>
            The Shahada is the declaration of faith in Islam and the foundation
            of becoming Muslim.
          </p>
        </div>

        <div className="splitSection">
          <div className="infoCard shahadaCard">
            <h3>Arabic</h3>
            <p className="arabicText">
              أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا ٱللَّٰهُ وَأَشْهَدُ أَنَّ
              مُحَمَّدًا رَسُولُ ٱللَّٰهِ
            </p>
          </div>

          <div className="infoCard">
            <h3>English Meaning</h3>
            <p>
              I bear witness that there is no god but Allah, and I bear witness
              that Muhammad is the Messenger of Allah.
            </p>
            <p>
              Saying the Shahada with sincere belief is how a person enters
              Islam.
            </p>
          </div>
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>First Steps</h2>
          <p>
            These are some of the most important next steps after accepting or
            seriously exploring Islam.
          </p>
        </div>

        <div className="learnGrid two">
          {firstSteps.map((step) => (
            <div key={step.title} className="infoCard">
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>Helpful Support Areas</h2>
        </div>

        <div className="learnGrid three">
          {supports.map((item) => (
            <div key={item.title} className="infoCard">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>Watch and Learn</h2>
          <p>
            Add trusted beginner-friendly videos here for prayer, belief, and
            first steps in Islam.
          </p>
        </div>

        <div className="videoCard">
          <div className="videoPlaceholder">
            Beginner-friendly YouTube video embed goes here
          </div>
          <div className="videoMeta">
            <h3>Starting Your Journey</h3>
            <p>
              Use a trusted approved video that explains the basics of Islam in
              a welcoming and clear way.
            </p>
          </div>
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>Where to Go Next</h2>
        </div>

        <div className="learnGrid three">
          <Link to="/learn/what-is-islam" className="navCard">
            <h3>What is Islam?</h3>
            <p>Return to the foundations of belief and practice.</p>
            <span>Go to page →</span>
          </Link>

          <Link to="/learn/faq" className="navCard">
            <h3>FAQ</h3>
            <p>Find quick answers to common questions.</p>
            <span>Go to page →</span>
          </Link>

          <Link to="/contact" className="navCard">
            <h3>Need Support?</h3>
            <p>Reach out to the masjid for guidance and connection.</p>
            <span>Contact us →</span>
          </Link>
        </div>
      </section>
    </div>
  );
}