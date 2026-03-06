import { useState } from "react";
import "../../styles/learn.css";

const faqSections = [
  {
    title: "About Islam",
    items: [
      {
        question: "What does Islam mean?",
        answer:
          "Islam means submission to Allah, the One God. It is a way of life centered on faith, worship, character, and obedience to Allah.",
      },
      {
        question: "Who do Muslims worship?",
        answer:
          "Muslims worship Allah alone. Allah is the Arabic word for God.",
      },
      {
        question: "Do Muslims worship Prophet Muhammad ﷺ?",
        answer:
          "No. Muslims worship Allah alone. Prophet Muhammad ﷺ is loved and followed as the final messenger, but he is not worshiped.",
      },
      {
        question: "What is the Quran?",
        answer:
          "The Quran is the holy book of Islam. Muslims believe it is the word of Allah revealed to Prophet Muhammad ﷺ.",
      },
    ],
  },
  {
    title: "Beliefs and Practice",
    items: [
      {
        question: "Why do Muslims pray five times a day?",
        answer:
          "Prayer keeps Muslims connected to Allah throughout the day. It builds discipline, remembrance, gratitude, and spiritual strength.",
      },
      {
        question: "What are the Five Pillars of Islam?",
        answer:
          "They are Shahada (faith), Salah (prayer), Zakat (charity), Sawm (fasting in Ramadan), and Hajj (pilgrimage to Mecca).",
      },
      {
        question: "Why do Muslims fast in Ramadan?",
        answer:
          "Muslims fast in Ramadan as an act of worship. Fasting teaches self-control, gratitude, patience, and compassion for others.",
      },
      {
        question: "What is halal?",
        answer:
          "Halal means permissible in Islam. It is often used for food, but it can also refer to what is allowed more generally in daily life.",
      },
    ],
  },
  {
    title: "Women, Dress, and Modesty",
    items: [
      {
        question: "Why do some Muslim women wear hijab?",
        answer:
          "Hijab is part of Islamic modesty for many Muslim women. It can also reflect worship, identity, dignity, and devotion to Allah.",
      },
      {
        question: "Do all Muslim women wear the same thing?",
        answer:
          "No. Muslim women come from many cultures and backgrounds, so clothing styles can look different while still reflecting modesty.",
      },
    ],
  },
  {
    title: "Visiting the Masjid",
    items: [
      {
        question: "Can non-Muslims visit the mosque?",
        answer:
          "Yes. Non-Muslim visitors are welcome to visit respectfully and learn more about Islam.",
      },
      {
        question: "What should I wear when visiting?",
        answer:
          "Visitors should dress modestly. It is best to wear clothing that covers the body respectfully.",
      },
      {
        question: "Do I need to know how to pray before visiting?",
        answer:
          "No. You do not need prior knowledge to visit. The masjid is a place for worship, learning, and community.",
      },
    ],
  },
  {
    title: "New to Islam",
    items: [
      {
        question: "Do I need to know everything before becoming Muslim?",
        answer:
          "No. A person becomes Muslim by sincerely believing in Allah and His Messenger and entering Islam through the Shahada. Learning continues over time.",
      },
      {
        question: "What should I do after taking Shahada?",
        answer:
          "Start learning prayer, connect with the Muslim community, begin reading the Quran, and take your growth step by step.",
      },
      {
        question: "Is it okay to have a lot of questions?",
        answer:
          "Yes. Questions are normal and part of sincere learning. Islam encourages seeking knowledge.",
      },
    ],
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState({});

  function toggleItem(key) {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }

  return (
    <div className="page learnPage">
      <section className="learnHero">
        <p className="learnEyebrow">Questions & Answers</p>
        <h1 className="pageTitle">FAQ</h1>
        <p className="pageSubtitle learnIntro">
          A simple place to find answers to some of the most common questions
          about Islam, Muslim practices, and visiting the masjid.
        </p>

        <div className="quoteBanner">
          <p>
            “Questions are often the beginning of understanding.”
          </p>
        </div>
      </section>

      {faqSections.map((section, sectionIndex) => (
        <section className="learnSection" key={section.title}>
          <div className="sectionHeading">
            <h2>{section.title}</h2>
          </div>

          <div className="faqList">
            {section.items.map((item, itemIndex) => {
              const key = `${sectionIndex}-${itemIndex}`;
              const isOpen = !!openItems[key];

              return (
                <div className={`faqItem ${isOpen ? "open" : ""}`} key={item.question}>
                  <button
                    className="faqQuestion"
                    onClick={() => toggleItem(key)}
                    type="button"
                  >
                    <span>{item.question}</span>
                    <span className="faqIcon">{isOpen ? "−" : "+"}</span>
                  </button>

                  {isOpen && (
                    <div className="faqAnswer">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}