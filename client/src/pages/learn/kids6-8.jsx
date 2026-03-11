import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/learn.css";

import LearningCard from "../home/components/learning/learningcard";
import LearningModal from "../home/components/learning/learningmodal";
import VideoLesson from "../home/components/learning/videolesson";
import QuizGame from "../home/components/learning/quizgame";
import ListenButton from "../../component/listenbutton";
import {
  speakText,
  stopSpeech,
  pauseSpeech,
  resumeSpeech,
} from "../../utils/speech";

export default function Kids68() {
  const [activeTopic, setActiveTopic] = useState(null);

  const topics = useMemo(
    () => [
      {
        id: "pillars",
        type: "Topic",
        title: "The Five Pillars",
        subtitle: "Learn the main acts of worship in Islam",
        description:
          "Explore the pillars through a short video, a simple reading lesson, and a quiz.",
        speech:
          "The Five Pillars. Learn the main acts of worship in Islam through watching, reading, and playing.",
        watch: [
          {
          title: "Watch: The Five Pillars",
          description:
            "A short lesson introducing shahada, salah, zakat, sawm, and hajj in a simple way.",
          embedUrl: "https://www.youtube.com/embed/mWJ-tlZdtK4?si=OOwM10LLOU6Cjm_X",
          speechText:
            "Watch the Five Pillars. A short lesson introducing Shahada, Salah, Zakat, Sawm, and Hajj in a simple way.",
        },
      ],
        read: {
          title: "Read: The Five Pillars",
          text: "The Five Pillars are the main acts of worship in Islam. They are shahada, salah, zakat, sawm, and hajj. Muslims learn them so they can understand how faith is practiced in daily life and over time.",
          speech:
            "Read the Five Pillars. The Five Pillars are the main acts of worship in Islam. They are Shahada, Salah, Zakat, Sawm, and Hajj. Muslims learn them so they can understand how faith is practiced in daily life and over time.",
        },
        play: {
          type: "quiz",
          title: "Play: Five Pillars Quiz",
          questions: [
            {
              question: "How many pillars are there in Islam?",
              options: ["Three", "Five", "Seven"],
              answer: "Five",
            },
            {
              question: "Which pillar means prayer?",
              options: ["Salah", "Zakat", "Hajj"],
              answer: "Salah",
            },
            {
              question: "Which pillar means fasting in Ramadan?",
              options: ["Sawm", "Shahada", "Zakat"],
              answer: "Sawm",
            },
          ],
        },
      },
      {
        id: "prophet-stories",
        type: "Topic",
        title: "Prophet Stories",
        subtitle: "Learn courage, patience, and trust in Allah",
        description:
          "Watch a story lesson, read a simple faith-building summary, and answer questions.",
        speech:
          "Prophet Stories. Learn courage, patience, and trust in Allah through watching, reading, and playing.",
        watch: [
  {
    title: "Watch: Prophet Story Lesson",
    description:
      "A short story lesson that helps children connect with the lives and character of the prophets.",
    embedUrl: "https://www.youtube.com/embed/2n6NbViZ8CU?si=TsJVmwDiN5XvCqhQ",
    speechText:
      "Watch a prophet story lesson. Learn from the lives and character of the prophets.",
  },
  {
    title: "Watch: Trust Allah Song",
    description:
      "A children's song about trusting Allah and having faith even when things feel difficult.",
    embedUrl: "https://www.youtube.com/embed/nBPVlcpl7Jg",
    speechText:
      "Watch the Trust Allah song. This song reminds children to trust Allah and stay strong in faith.",
  }
],
        read: {
          title: "Read: Trusting Allah",
          text: "The prophets trusted Allah even when life was hard. They stayed patient, obeyed Allah, and kept doing what was right. Their stories teach children that strong faith includes courage, patience, and trust.",
          speech:
            "Read trusting Allah. The prophets trusted Allah even when life was hard. They stayed patient, obeyed Allah, and kept doing what was right. Their stories teach children that strong faith includes courage, patience, and trust.",
        },
        play: {
          type: "quiz",
          title: "Play: Prophet Story Quiz",
          questions: [
            {
              question: "What do prophet stories teach us?",
              options: [
                "Patience and trust in Allah",
                "How to be rude",
                "How to avoid helping others",
              ],
              answer: "Patience and trust in Allah",
            },
            {
              question: "What should we do when life feels hard?",
              options: [
                "Give up right away",
                "Trust Allah and keep trying",
                "Blame everyone else",
              ],
              answer: "Trust Allah and keep trying",
            },
          ],
        },
      },
      {
        id: "ramadan",
        type: "Topic",
        title: "Ramadan and Fasting",
        subtitle: "Why Ramadan matters",
        description:
          "Learn what Ramadan teaches through video, reading, and a quick quiz.",
        speech:
          "Ramadan and fasting. Learn why Ramadan matters through watching, reading, and playing.",
        watch: [
          {
          title: "Watch: Ramadan and Fasting",
          description:
            "A short lesson on fasting, gratitude, worship, and remembering Allah in Ramadan.",
          embedUrl: "https://www.youtube.com/embed/2OEq51wKr9o?si=LhrNfs2m-wUqxp--",
          speechText:
            "Watch Ramadan and fasting. Learn about fasting, gratitude, worship, and remembering Allah in Ramadan.",
        },
      ],
        read: {
          title: "Read: What Ramadan Teaches",
          text: "Ramadan is a special month when Muslims fast, pray more, and remember Allah more often. Ramadan teaches gratitude, patience, self-control, and care for others.",
          speech:
            "Read what Ramadan teaches. Ramadan is a special month when Muslims fast, pray more, and remember Allah more often. Ramadan teaches gratitude, patience, self-control, and care for others.",
        },
        play: {
          type: "quiz",
          title: "Play: Ramadan Quiz",
          questions: [
            {
              question: "What do Muslims do in Ramadan?",
              options: ["Fast", "Sleep all day", "Stop praying"],
              answer: "Fast",
            },
            {
              question: "What can Ramadan teach us?",
              options: [
                "Gratitude and self-control",
                "Rudeness",
                "Laziness",
              ],
              answer: "Gratitude and self-control",
            },
          ],
        },
      },
      {
        id: "good-character",
        type: "Topic",
        title: "Good Character",
        subtitle: "Kindness, honesty, respect, and gratitude",
        description:
          "Learn how good character is part of Islam through a video, reading, and a quiz.",
        speech:
          "Good character. Learn kindness, honesty, respect, and gratitude through watching, reading, and playing.",
        watch: [
          {
          title: "Watch: Good Character",
          description:
            "A short lesson on Islamic manners, kindness, honesty, and respect.",
          embedUrl: "https://www.youtube.com/embed/PTubULlSPog?si=iQ9kpbdnjvwbGq2X",
          speechText:
            "Watch good character. Learn about Islamic manners, kindness, honesty, and respect.",
        },
      ],
        read: {
          title: "Read: Character in Islam",
          text: "Islam teaches Muslims to be kind, honest, respectful, patient, and grateful. Good character is not separate from faith. The way we treat people matters in Islam.",
          speech:
            "Read character in Islam. Islam teaches Muslims to be kind, honest, respectful, patient, and grateful. Good character is not separate from faith. The way we treat people matters in Islam.",
        },
        play: {
          type: "quiz",
          title: "Play: Good Character Quiz",
          questions: [
            {
              question: "Which action shows kindness?",
              options: [
                "Helping someone who is struggling",
                "Laughing at others",
                "Ignoring someone in need",
              ],
              answer: "Helping someone who is struggling",
            },
            {
              question: "Which choice shows honesty?",
              options: [
                "Telling the truth",
                "Blaming someone else",
                "Making up a story",
              ],
              answer: "Telling the truth",
            },
            {
              question: "Which choice shows respect?",
              options: [
                "Listening when others speak",
                "Using rude words",
                "Pushing to get your way",
              ],
              answer: "Listening when others speak",
            },
          ],
        },
      },
    ],
    []
  );

  const pageIntroSpeech = `
    Islam for Kids. Ages 6 to 8.
    Explore one topic at a time.
    In each topic, children can watch, read, and play.
  `;

  function renderTopicModal(topic) {
    if (!topic) return null;

    return (
      <div className="topicLessonFlow">
        <section className="topicFlowSection">
          <div className="topicFlowHeader">
            <h3>Watch</h3>
            <ListenButton
              text={topic.watch.speechText}
              label="Listen"
              rate={0.88}
            />
          </div>

          <section className="topicFlowSection">
  <div className="topicFlowHeader">
    <h3>Watch</h3>
  </div>

  <div className="watchVideoGrid">
    {topic.watch.map((video) => (
      <VideoLesson
        key={video.title}
        title={video.title}
        description={video.description}
        embedUrl={video.embedUrl}
        speechText={video.speechText}
      />
    ))}
  </div>
</section>
        </section>

        <section className="topicFlowSection">
          <div className="topicFlowHeader">
            <h3>Read</h3>
            <ListenButton
              text={topic.read.speech}
              label="Listen"
              rate={0.88}
            />
          </div>

          <div className="topicReadCard">
            <h4>{topic.read.title}</h4>
            <p>{topic.read.text}</p>
          </div>
        </section>

        <section className="topicFlowSection">
          <div className="topicFlowHeader">
            <h3>Play</h3>
          </div>

          <div className="topicPlayCard">
            <QuizGame
              title={topic.play.title}
              questions={topic.play.questions}
            />
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page learnPage kidsAgePage interactiveLearnPage">
      <section className="learnHero kidsHero">
        <p className="learnEyebrow">Islam for Kids</p>
        <h1 className="pageTitle">Ages 6–8</h1>
        <p className="pageSubtitle learnIntro">
          Fun learning for early readers through short lessons, stories, simple
          questions, and everyday Islamic habits.
        </p>

        <div className="quoteBanner">
          <p>
            “At this age, children grow through curiosity, repetition, and
            learning that feels active.”
          </p>
        </div>

        <div className="pageReaderControls">
          <button
            type="button"
            onClick={() =>
              speakText(pageIntroSpeech, { rate: 0.88, voiceName: "Samantha" })
            }
          >
            🔊 Read Page Intro
          </button>
          <button type="button" onClick={pauseSpeech}>
            ⏸ Pause
          </button>
          <button type="button" onClick={resumeSpeech}>
            ▶ Resume
          </button>
          <button type="button" onClick={stopSpeech}>
            ⏹ Stop
          </button>
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>Choose a Topic</h2>
          <p>
            Open one topic at a time, then watch, read, and play in order.
          </p>
        </div>

        <div className="learnGrid two">
          {topics.map((topic) => (
            <LearningCard
              key={topic.id}
              title={topic.title}
              subtitle={topic.subtitle}
              description={topic.description}
              type={topic.type}
              onClick={() => setActiveTopic(topic)}
            />
          ))}
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>Parent Note</h2>
        </div>

        <div className="infoCard">
          <div className="cardTopRow">
            <h3>Keep It Short and Active</h3>
            <ListenButton
              text="Keep it short and active. Children ages six to eight learn well through short lessons, repetition, simple questions, and encouragement."
              label="Listen"
              rate={0.9}
            />
          </div>
          <p>
            Children in this age group learn well through short lessons,
            repetition, simple questions, and active participation. Let them
            answer aloud first, then guide them gently through the topic.
          </p>
        </div>
      </section>

      <section className="learnSection">
        <div className="learnGrid three">
          <Link to="/learn/kids-3-5" className="navCard">
            <h3>Previous Age Group</h3>
            <p>Go back to ages 3–5 for preschool learning.</p>
            <span>Go to ages 3–5 →</span>
          </Link>

          <Link to="/learn/islam-for-kids" className="navCard">
            <h3>Back to Kids Home</h3>
            <p>Return to the main kids learning page.</p>
            <span>Go back →</span>
          </Link>

          <Link to="/learn/kids-9-12" className="navCard">
            <h3>Next Age Group</h3>
            <p>Move to ages 9–12 for deeper understanding and reflection.</p>
            <span>Go to ages 9–12 →</span>
          </Link>
        </div>
      </section>

      <LearningModal
        isOpen={!!activeTopic}
        onClose={() => setActiveTopic(null)}
        title={activeTopic?.title || ""}
      >
        {renderTopicModal(activeTopic)}
      </LearningModal>
    </div>
  );
}