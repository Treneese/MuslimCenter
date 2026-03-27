import { useState } from "react";
import "../../styles/learn.css";

import LearningCard from "../home/components/learning/learningcard";
import LearningModal from "../home/components/learning/learningmodal";
import VideoLesson from "../home/components/learning/videolesson";
import ListenButton from "../../component/listenbutton";

export default function AdultGrowingInFaith() {
  const [activeLesson, setActiveLesson] = useState(null);

  const lessons = [
    {
      id: "khushu",
      title: "Khushu in Prayer",
      subtitle: "Improve the quality of salah",
      video: "https://www.youtube.com/embed/gUZCREmNX6k?si=AO3I6aspVr6tsfHL",
      content: `
At this stage, the goal is not just to pray, but to improve the quality of prayer.

Khushu means humility, focus, softness, and presence before Allah. Many Muslims pray regularly while still struggling to feel connected. That does not mean prayer is failing. It means the heart still needs attention.

Growing in prayer includes:
- understanding what you are saying
- slowing down
- reducing distractions
- preparing mentally before salah
- remembering who you are standing before

Better prayer usually comes through effort, patience, and repetition.
      `,
      keyPoints: [
        "Consistency alone is not the final goal",
        "Prayer should become more focused and meaningful over time",
        "Khushu grows through effort, understanding, and sincerity",
      ],
    },
    {
      id: "discipline",
      title: "Discipline, Habits, and Self-Control",
      subtitle: "Strengthen your daily practice",
      video: "https://www.youtube.com/embed/8tz94txFjgA?si=rYJiCKEYwOCQIoj_",
      content: `
Faith grows when actions become disciplined.

This stage is about building a life where Islam is not only something you believe, but something that shapes your schedule, choices, and behavior.

This includes:
- protecting prayer times
- making space for Quran
- controlling the tongue
- watching what influences the heart
- being more intentional with time

A Muslim who is growing learns that consistency is not automatic. It has to be guarded.
      `,
      keyPoints: [
        "Discipline protects faith",
        "Habits shape spiritual strength",
        "Growth requires intention, structure, and self-control",
      ],
    },
    {
      id: "imaan-dips",
      title: "When Iman Rises and Falls",
      subtitle: "Understanding fluctuation without giving up",
      video: "https://www.youtube.com/embed/L9PDXYXOCmQ?si=a7jiuiXDEzd3lRby",
      content: `
Iman does not stay at one level all the time.

A growing Muslim needs to understand that spiritual highs and lows are normal. The goal is not to panic every time your energy drops. The goal is to know how to return to Allah without letting a dip turn into distance.

During low periods:
- keep the obligations firm
- do not disappear from prayer
- reduce sins where you can
- ask Allah for help often
- stay near beneficial reminders and good company

The believer is not the one who never struggles. The believer is the one who keeps returning.
      `,
      keyPoints: [
        "Iman naturally rises and falls",
        "A low period is not the end of your faith",
        "Keep returning instead of quitting",
      ],
    },
    {
      id: "character",
      title: "Islamic Character in Real Life",
      subtitle: "Carry faith into behavior",
      video: "https://www.youtube.com/embed/MuWzqB9wOh8?si=dy3brJ9oTCsgj5Cp",
      content: `
Growth in Islam must show up in character.

That includes:
- honesty
- patience
- humility
- mercy
- controlling anger
- fulfilling trusts
- speaking carefully
- treating people with dignity

As knowledge and worship increase, character should also improve. A person cannot claim serious growth while ignoring how they deal with people.

Islamic character is not decorative. It is part of faith.
      `,
      keyPoints: [
        "Character is part of religious growth",
        "Faith should shape how you treat people",
        "Patience, honesty, and humility are signs of maturity",
      ],
    },
    {
      id: "relationships",
      title: "Family, Community, and Responsibility",
      subtitle: "Living Islam with others",
      video: "https://www.youtube.com/embed/1Y8HIWTIe8I?si=XrKirEa_ggdmkKWN",
      content: `
Growing in faith also means learning how Islam shapes relationships.

This includes:
- family rights
- showing up for the community
- respecting parents
- being trustworthy
- serving others
- managing conflict better
- understanding responsibility, not just personal spirituality

A mature Muslim does not only focus on private worship. They also learn how to be beneficial to others.
      `,
      keyPoints: [
        "Islam shapes both private and public life",
        "Responsibility and service are part of growth",
        "Faith should improve relationships and community conduct",
      ],
    },
    {
      id: "quran-reflection",
      title: "Quran Reflection and Personal Change",
      subtitle: "Move beyond recitation alone",
      video: "https://www.youtube.com/embed/zIw5sJlnjcM?si=uD7uVsUymZGOWXi6",
      content: `
At this stage, Quran should become more than something recited occasionally.

Growing Muslims should begin reflecting on meaning, themes, warnings, mercy, and personal application.

This does not mean advanced tafsir yet. It means starting to ask:
- what is Allah teaching here?
- what does this reveal about people, guidance, or the heart?
- what needs to change in me?

Reflection turns Quran from a page into a relationship.
      `,
      keyPoints: [
        "Quran should begin shaping your inner life",
        "Reflection helps turn knowledge into change",
        "Personal application is part of spiritual growth",
      ],
    },
  ];

  return (
    <div className="page learnPage adultPathPage">
      <section className="learnHero">
        <p className="learnEyebrow">Growing</p>
        <h1 className="pageTitle">Growing in Faith</h1>
        <p className="pageSubtitle learnIntro">
          For Muslims who already know the basics and want to strengthen the
          quality of their worship, their discipline, their character, and
          their understanding over time.
        </p>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>Strengthen and Mature</h2>
          <p>
            This stage is about becoming steadier, deeper, and more intentional
            in practice. It moves beyond simply starting and focuses on
            strengthening faith in everyday life.
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