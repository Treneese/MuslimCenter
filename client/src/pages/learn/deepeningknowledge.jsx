import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/learn.css";

import LearningCard from "../home/components/learning/learningcard";
import LearningModal from "../home/components/learning/learningmodal";
import VideoLesson from "../home/components/learning/videolesson";
import ListenButton from "../../component/listenbutton";

export default function AdultDeepeningKnowledge() {
  const [activeLesson, setActiveLesson] = useState(null);

  const lessons = [
    {
      id: "heart",
      title: "Purification of the Heart",
      subtitle: "Inner refinement and spiritual honesty",
      video: "https://www.youtube.com/embed/IiKHifXKS0s?si=-4RfXZjitZdzD9Zj",
      content: `
At a deeper level of learning, a Muslim must begin paying serious attention to the condition of the heart.

A person may pray, fast, attend classes, and still struggle with inner diseases that weaken faith. Real growth requires more than outward practice. It requires honesty about what is happening inside.

Purification of the heart includes learning to recognize:
- arrogance
- envy
- showing off
- resentment
- pride in knowledge
- hardness of heart
- love of praise
- heedlessness

A deeper learner begins asking not only, "What am I doing?" but also, "What is happening inside me while I do it?"

Islam does not only teach outward obedience. It also teaches inner refinement.
      `,
      keyPoints: [
        "Deep learning includes inner purification, not only outward practice",
        "A person can appear religious while still struggling internally",
        "The heart must be trained, softened, and watched carefully",
      ],
    },
    {
      id: "sincerity",
      title: "Sincerity and the Danger of Showing Off",
      subtitle: "Protecting worship from ego",
      video: "https://www.youtube.com/embed/wZJBgzYxDiU?si=JWjIAPzZnqI7yD6W",
      content: `
One of the greatest spiritual dangers is doing good while quietly seeking the attention, praise, or approval of people.

At a deeper stage of learning, a Muslim must begin watching intention more carefully. Why am I doing this? Who am I trying to impress? What happens to my motivation when nobody sees me?

Showing off is not always obvious. It can enter:
- worship
- speaking about knowledge
- community work
- public reminders
- charity
- religious appearance

Sincerity means doing what is right for Allah even when it is unseen, uncelebrated, and difficult.

The more a person grows, the more carefully they must guard intention.
      `,
      keyPoints: [
        "Deep growth requires serious attention to intention",
        "Showing off can hide inside good deeds",
        "Sincerity must be renewed often",
      ],
    },
    {
      id: "adab-knowledge",
      title: "Adab of Seeking Knowledge",
      subtitle: "How to learn with humility",
      video: "https://www.youtube.com/embed/Lz8hC4C2SWA?si=xYaoI5baKoDxbMKB",
      content: `
Seeking knowledge in Islam is not only about collecting information. It is also about adab, humility, patience, and responsibility.

A serious learner should ask:
- Am I learning to change, or only to know?
- Am I becoming softer, or more arrogant?
- Do I respect scholars, sources, and context?
- Do I speak too quickly on things I barely understand?

Adab of knowledge includes:
- humility
- patience
- careful speech
- respect for scholarship
- willingness to say "I do not know"
- learning with the goal of guidance, not superiority

Knowledge without adab can become spiritually dangerous.
      `,
      keyPoints: [
        "Islamic learning requires humility and responsibility",
        "Collecting information is not the same as being guided",
        "Adab protects knowledge from turning into ego",
      ],
    },
    {
      id: "history",
      title: "Islamic History and the Preservation of Knowledge",
      subtitle: "Learning how Islam was carried forward",
      video: "https://www.youtube.com/embed/UIwaJb6Ce-4?si=yUjjrEqaHZnQjfbe",
      content: `
A deeper Muslim learner should begin understanding how Islam was preserved, taught, defended, and transmitted across generations.

This includes learning about:
- the Prophet ﷺ and his companions
- the generations after them
- scholars and schools of thought
- the preservation of Quran and hadith
- major periods in Islamic civilization
- the sacrifices made to protect sacred knowledge

Studying history builds respect, perspective, and intellectual maturity.

It reminds the learner that Islam did not arrive casually. It was preserved by people of sincerity, discipline, sacrifice, and scholarship.
      `,
      keyPoints: [
        "Islamic history builds respect for the tradition",
        "Knowledge was preserved through sacrifice and discipline",
        "A serious learner should understand how Islam reached us",
      ],
    },
    {
      id: "quran-themes",
      title: "Deeper Quran Study",
      subtitle: "Themes, patterns, and layered reflection",
      video: "https://www.youtube.com/embed/fcHClR5yO5Q?si=_Q44GyASk5INcWwA",
      content: `
At this stage, Quran study should begin moving beyond occasional reflection into deeper engagement with themes, patterns, and meaning.

A mature learner begins noticing:
- repeated themes across surahs
- how Quran addresses the heart
- patterns in stories
- the relationship between warning and mercy
- the nature of guidance and misguidance
- what Quran reveals about people, power, weakness, and repentance

This does not require pretending to be a scholar. It requires seriousness, humility, and sustained reflection.

The Quran is not shallow. A deeper learner returns again and again and continues to see more.
      `,
      keyPoints: [
        "Deep Quran study looks for themes, patterns, and transformation",
        "The Quran continues opening deeper meanings over time",
        "Reflection should become more layered and more serious",
      ],
    },
    {
      id: "ethics",
      title: "Ethics, Justice, and Responsibility",
      subtitle: "Faith beyond the personal level",
      video: "https://www.youtube.com/embed/Fxn18YHB6NU?si=3D5za_2650sANr1N",
      content: `
At a deeper stage, Islam must be understood not only as personal worship, but also as a way of carrying justice, responsibility, and moral seriousness into the world.

A serious learner should begin reflecting on:
- justice
- trust
- power
- leadership
- accountability
- service
- rights of others
- speaking truth with wisdom

This is where Islam moves beyond being only personal comfort. It becomes a framework for responsibility.

A mature Muslim should become more trustworthy, more principled, and more beneficial.
      `,
      keyPoints: [
        "Islam speaks to justice, responsibility, and accountability",
        "Deeper faith should shape how a person carries trust and power",
        "Maturity includes becoming beneficial to others",
      ],
    },
    {
      id: "lifelong",
      title: "Lifelong Learning and Spiritual Maturity",
      subtitle: "Growing without arrogance",
      video: "https://www.youtube.com/embed/dReWt-xk4oI?si=2zGoDWowG-w0sBPv",
      content: `
The deeper a person goes in Islam, the more they should realize how much they still need Allah.

Spiritual maturity is not feeling above others. It is becoming more humble, more stable, more thoughtful, and more aware of your dependence on Allah.

Lifelong learning includes:
- staying teachable
- continuing repentance
- avoiding spiritual pride
- serving others
- revisiting the basics with fresh depth
- growing in humility as knowledge grows

A person is not “done” because they have learned more. In many ways, deeper knowledge should make them more careful, more sincere, and more gentle.
      `,
      keyPoints: [
        "Deep knowledge should increase humility, not ego",
        "Lifelong learning means remaining teachable",
        "Spiritual maturity includes service, repentance, and humility",
      ],
    },
  ];

  return (
    <div className="page learnPage adultPathPage">
      <section className="learnHero">
        <p className="learnEyebrow">Deepening</p>
        <h1 className="pageTitle">Deepening Knowledge</h1>
        <p className="pageSubtitle learnIntro">
          For Muslims who already have a strong foundation and want to go
          deeper in study, reflection, inner purification, and long-term
          spiritual and intellectual growth.
        </p>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>Go Deeper with Seriousness and Reflection</h2>
          <p>
            This stage focuses on the heart, the ethics of learning, the depth
            of Quran, the legacy of scholarship, and the responsibility that
            comes with deeper understanding.
          </p>
        </div>

        <div className="learnGrid three">
          {lessons.map((lesson) => (
            <LearningCard
              key={lesson.id}
              title={lesson.title}
              subtitle={lesson.subtitle}
              onClick={() => setActiveLesson(lesson)}
            />
          ))}
        </div>
      </section>

      <LearningModal
  isOpen={!!activeLesson}
  onClose={() => setActiveLesson(null)}
  title={activeLesson?.title || ""}
>
  {activeLesson && (
    <>
      <VideoLesson
  title={`Watch: ${activeLesson.title}`}
  description="Watch this lesson to support your learning."
  embedUrl={activeLesson.video}
  speechText={activeLesson.content}
/>

      <ListenButton text={activeLesson.content} />

      <p style={{ whiteSpace: "pre-line" }}>{activeLesson.content}</p>

      <ul>
        {activeLesson.keyPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </>
  )}
</LearningModal>
    </div>
  );
}