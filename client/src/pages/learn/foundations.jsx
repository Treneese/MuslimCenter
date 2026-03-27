import { useState } from "react";
import "../../styles/learn.css";

import LearningCard from "../home/components/learning/learningcard";
import LearningModal from "../home/components/learning/learningmodal";
import VideoLesson from "../home/components/learning/videolesson";
import ListenButton from "../../component/listenbutton";

export default function AdultFoundations() {
  const [activeLesson, setActiveLesson] = useState(null);

  const lessons = [
    {
      id: "shahada",
      title: "Step 1: Shahada",
      subtitle: "Entering Islam",
      video: "https://www.youtube.com/embed/SsXHcObCLJw?si=P6VLM4AxlWdQ_MqQ",
      content: `
The Shahada is the declaration of faith:

“There is no god but Allah, and Muhammad is the messenger of Allah.”

This is what makes a person Muslim.

What matters most is sincerity. A person does not need to know everything before becoming Muslim. Islam begins with true belief, then learning continues step by step.

Saying the Shahada is not about becoming perfect instantly. It is about entering Islam sincerely and beginning the journey with Allah.
      `,
      keyPoints: [
        "The Shahada is the statement that enters a person into Islam",
        "Sincerity matters more than knowing everything at once",
        "Learning and growth come after belief",
      ],
    },
    {
      id: "first-days",
      title: "Step 2: Your First Days",
      subtitle: "Start simple and avoid overwhelm",
      content: `
The first days of Islam should be simple, clear, and manageable.

Focus first on:
- believing in Allah
- learning the Shahada
- beginning prayer step by step
- learning purification
- staying encouraged

Do not pressure yourself to master everything immediately. It is normal to feel emotional, nervous, excited, or overwhelmed.

A strong beginning is not about speed. It is about sincerity and consistency.
      `,
      keyPoints: [
        "Do not try to learn everything at once",
        "Focus on essentials first",
        "A slow and sincere start is better than overwhelm",
      ],
    },
    {
      id: "purification",
      title: "Step 3: Purification",
      subtitle: "Wudu, ghusl, and preparing for prayer",
      video: "https://www.youtube.com/embed/gkXsvKU7tJs?si=cVvo-7XgPZNQ7x_y",
      content: `
Purification is an important part of worship in Islam.

Wudu is the washing done before prayer. It prepares a Muslim to stand before Allah in salah.

Common things that break wudu include:
- using the bathroom
- passing gas
- deep sleep
- loss of consciousness

Ghusl is a full-body purification required after certain major situations.

A new Muslim should learn the basics clearly without making purification feel harder than it is.
      `,
      keyPoints: [
        "Wudu is required before prayer",
        "Learn clearly what breaks wudu",
        "Ghusl is only required in specific situations",
      ],
    },
    {
      id: "prayer",
      title: "Step 4: Prayer",
      subtitle: "Begin learning salah",
      video: "https://www.youtube.com/embed/4zr6tNgmKSI?si=Zh2SaC27N4TSaLrw",
      content: `
Prayer is the most important daily act of worship in Islam.

Muslims pray five times each day. A new Muslim should begin learning prayer gradually and not panic about mastering everything immediately.

One of the best ways to start is by learning one prayer first, then building from there.

Prayer may feel difficult at first, but with repetition it becomes more familiar, more natural, and more meaningful.
      `,
      keyPoints: [
        "Prayer is central in a Muslim’s daily life",
        "Learn step by step instead of trying to master everything at once",
        "Starting small is better than giving up",
      ],
    },
    {
      id: "required",
      title: "Step 5: Required vs Optional",
      subtitle: "Know what matters first",
      content: `
A new Muslim needs clarity about what is required and what can be learned gradually.

What matters first:
- belief
- learning prayer
- learning purification
- staying away from clear major wrongs as you grow

Other things may take time:
- extra prayers
- deeper Islamic studies
- advanced rulings
- non-essential details

Islam does not expect a person to carry everything all at once on day one.
      `,
      keyPoints: [
        "Focus on what is required first",
        "Not everything must be mastered immediately",
        "Growth happens step by step",
      ],
    },
    {
      id: "build",
      title: "Step 6: Build Slowly",
      subtitle: "Create a simple daily connection",
      content: `
A strong beginning in Islam is built through small, regular actions.

Start with simple habits such as:
- one prayer at a time
- short Quran reading
- a small dua list
- remembering Allah during the day
- learning one new thing at a time

The goal is not to do everything. The goal is to keep building.
      `,
      keyPoints: [
        "Small habits build strong foundations",
        "Consistency matters more than intensity",
        "Keep your routine simple and realistic",
      ],
    },
    {
      id: "consistency",
      title: "Building Consistency in Prayer",
      subtitle: "Move from learning prayer to protecting it",
      video: "https://www.youtube.com/embed/s2mqy3dxOjk?si=eZmsUbyRDjoSsPJA",
      content: `
After learning the basics of prayer, the next challenge is consistency.

Many new Muslims know prayer matters but struggle with timing, memory, motivation, or life transitions. This is normal.

Consistency grows by:
- praying as soon as prayer time enters when possible
- keeping prayer materials ready
- building your schedule around salah
- not letting one missed prayer turn into a full collapse

A person becomes stronger by returning again and again.
      `,
      keyPoints: [
        "Consistency usually takes time to build",
        "Do not let one hard day become a full setback",
        "Protecting prayer is part of strengthening faith",
      ],
    },
    {
      id: "worship-meaning",
      title: "Understanding Worship",
      subtitle: "Why Muslims pray, fast, make dua, and remember Allah",
      content: `
Worship in Islam is not only about actions. It is also about meaning.

Prayer builds connection with Allah.
Fasting builds discipline and God-consciousness.
Dua teaches dependence on Allah.
Remembrance softens the heart and keeps Allah in the mind.

A new Muslim should begin learning not only what to do, but why these acts matter.
      `,
      keyPoints: [
        "Islamic worship has both actions and meaning",
        "Understanding worship helps strengthen practice",
        "Learning the why can make the how easier",
      ],
    },
    {
      id: "returning",
      title: "Returning to Allah After Struggle",
      subtitle: "Do not give up when things get hard",
      content: `
Many Muslims go through periods of struggle, inconsistency, or emotional heaviness.

A new Muslim may miss prayers, feel confused, feel behind, or worry they are failing. The answer is not to quit. The answer is to return.

Returning to Allah means:
- making sincere repentance
- restarting without shame
- asking for help
- keeping obligations in front of you
- refusing hopelessness

Falling short does not mean the journey is over.
      `,
      keyPoints: [
        "Struggle does not mean failure",
        "Repentance and return are part of the journey",
        "Keep coming back to Allah",
      ],
    },
    {
      id: "quran-reflection",
      title: "Quran Reflection",
      subtitle: "Begin connecting with the Quran personally",
      content: `
A new Muslim should begin forming a relationship with the Quran, even if that relationship starts small.

This can include:
- listening to recitation
- reading translation
- learning short surahs
- asking what Allah is teaching
- reflecting on mercy, warning, guidance, and hope

You do not need advanced study yet. You need a living connection.
      `,
      keyPoints: [
        "A small connection with the Quran is better than none",
        "Reflection can begin before advanced study",
        "The Quran should become part of your life over time",
      ],
    },
    {
      id: "community",
      title: "Family, Community, and the Masjid",
      subtitle: "Learning how to belong",
      content: `
Islam is not only private. It is also lived with people.

A new Muslim often needs help learning:
- what to expect in the masjid
- how community can support faith
- how to ask questions
- how to deal with awkwardness or nervousness
- how Islam shapes relationships with others

You do not need to know everything socially right away. Belonging also grows with time.
      `,
      keyPoints: [
        "Community support matters",
        "It is normal to feel new or unsure in masjid spaces",
        "Islam shapes both private worship and relationships",
      ],
    },
  ];

  return (
    <div className="page learnPage adultPathPage">
      <section className="learnHero">
        <p className="learnEyebrow">Foundations</p>
        <h1 className="pageTitle">Foundations of Islam</h1>
        <p className="pageSubtitle learnIntro">
          A clear, step-by-step path for curious visitors, people preparing for
          shahada, brand new Muslims, and anyone returning to the basics. This
          path covers the essentials with no gaps while also helping you begin
          building early consistency and understanding.
        </p>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>Start from the Beginning</h2>
          <p>
            Begin with the essentials, then move into the early habits and
            understanding that help a new Muslim grow with more confidence.
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