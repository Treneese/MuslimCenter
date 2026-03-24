import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/learn.css";

import LearningCard from "../home/components/learning/learningcard";
import LearningModal from "../home/components/learning/learningmodal";
import VideoLesson from "../home/components/learning/videolesson";
import QuizGame from "../home/components/learning/quizgame";
import MatchingGame from "../home/components/learning/matchinggame";
import ListenButton from "../../component/listenbutton";
import {
  speakText,
  stopSpeech,
  pauseSpeech,
  resumeSpeech,
} from "../../utils/speech";

const hasRealEmbed = (url = "") =>
  typeof url === "string" &&
  url.startsWith("https://www.youtube.com/embed/") &&
  !url.includes("VIDEO_ID");

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
          "Explore the pillars through a short video, reading, matching, and a quick check quiz.",
        watch: [
          {
            title: "Watch: The Five Pillars",
            description:
              "A short lesson introducing shahada, salah, zakat, sawm, and hajj.",
            embedUrl: "https://www.youtube.com/embed/mWJ-tlZdtK4?si=OOwM10LLOU6Cjm_X",
            speechText:
              "Watch the Five Pillars. A short lesson introducing Shahada, Salah, Zakat, Sawm, and Hajj.",
          },
        ],
        read: {
          title: "Read: The Five Pillars",
          text: "The Five Pillars are the main acts of worship in Islam. They are shahada, salah, zakat, sawm, and hajj. Muslims learn them so they can understand how faith is practiced in daily life.",
          speech:
            "Read the Five Pillars. The Five Pillars are Shahada, Salah, Zakat, Sawm, and Hajj.",
        },
        play: {
          game: {
            type: "matching",
            title: "Game: Match the Pillars",
            pairs: [
              { left: "Salah", right: "Prayer" },
              { left: "Zakat", right: "Charity" },
              { left: "Sawm", right: "Fasting" },
              { left: "Hajj", right: "Pilgrimage" },
            ],
          },
          quiz: {
            title: "Quiz: Five Pillars Check",
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
            ],
          },
        },
      },
      {
        id: "prophet-stories",
        type: "Topic",
        title: "Prophet Stories",
        subtitle: "Courage, patience, and trust in Allah",
        description:
          "Watch and reflect on what children can learn from the prophets.",
        watch: [
          {
            title: "Watch: Prophet Story Lesson",
            description: "Learn from the lives and character of the prophets.",
            embedUrl: "https://www.youtube.com/embed/2n6NbViZ8CU?si=TsJVmwDiN5XvCqhQ",
          },
          {
            title: "Watch: Trust Allah Song",
            description: "A song reminding children to trust Allah.",
            embedUrl: "https://www.youtube.com/embed/nBPVlcpl7Jg",
          },
        ],
        read: {
          title: "Read: Trusting Allah",
          text: "The prophets trusted Allah even when life was difficult. They stayed patient, obeyed Allah, and kept doing what was right.",
          speech:
            "The prophets trusted Allah even when life was difficult and stayed patient.",
        },
        play: {
          game: {
            type: "matching",
            title: "Game: Match the Lesson",
            pairs: [
              { left: "Prophets", right: "Trusted Allah" },
              { left: "Patience", right: "Staying steady" },
              { left: "Obedience", right: "Doing what is right" },
            ],
          },
          quiz: {
            title: "Quiz: Prophet Stories",
            questions: [
              {
                question: "What do prophet stories teach us?",
                options: [
                  "Patience and trust in Allah",
                  "How to be rude",
                  "How to ignore others",
                ],
                answer: "Patience and trust in Allah",
              },
              {
                question: "What did the prophets do when life was hard?",
                options: ["Stayed patient", "Gave up", "Forgot Allah"],
                answer: "Stayed patient",
              },
            ],
          },
        },
      },
      {
        id: "ramadan",
        type: "Topic",
        title: "Ramadan and Fasting",
        subtitle: "Why Ramadan matters",
        description:
          "Learn what Ramadan teaches through video, reading, a game, and a quiz.",
        watch: [
          {
            title: "Watch: Ramadan and Fasting",
            description:
              "A short lesson on fasting, gratitude, and remembering Allah.",
            embedUrl: "https://www.youtube.com/embed/2OEq51wKr9o?si=LhrNfs2m-wUqxp--",
          },
        ],
        read: {
          title: "Read: What Ramadan Teaches",
          text: "Ramadan is a special month when Muslims fast, pray more, and remember Allah more often. It teaches gratitude, self-control, and caring for others.",
          speech:
            "Ramadan is a special month when Muslims fast, pray more, and remember Allah. It teaches gratitude, self-control, and caring for others.",
        },
        play: {
          game: {
            type: "matching",
            title: "Game: Match Ramadan Words",
            pairs: [
              { left: "Ramadan", right: "Special month" },
              { left: "Fast", right: "Do not eat all day" },
              { left: "Gratitude", right: "Being thankful" },
            ],
          },
          quiz: {
            title: "Quiz: Ramadan",
            questions: [
              {
                question: "What do Muslims do in Ramadan?",
                options: ["Fast", "Sleep all day", "Stop praying"],
                answer: "Fast",
              },
              {
                question: "What can Ramadan teach?",
                options: ["Gratitude", "Bad manners", "Selfishness"],
                answer: "Gratitude",
              },
            ],
          },
        },
      },
      {
        id: "daily-manners",
        type: "Topic",
        title: "Daily Manners",
        subtitle: "Islam in everyday behavior",
        description:
          "Help children connect Islamic learning to kindness, greetings, and respect.",
        watch: [
          {
            title: "Watch: Daily Manners",
            description:
              "Add a short manners video here if you find one you like later.",
            embedUrl: "",
            fallbackNote:
              "Video coming soon. Add a short lesson on kind words, greetings, and respect.",
          },
        ],
        read: {
          title: "Read: Good Manners Matter",
          text: "Islam teaches children to be kind, respectful, honest, and helpful. Saying salam, speaking well, and treating others gently are all part of Islamic character.",
          speech:
            "Islam teaches children to be kind, respectful, honest, and helpful. Saying salam and treating others gently are part of Islamic character.",
        },
        play: {
          game: {
            type: "matching",
            title: "Game: Match the Manners",
            pairs: [
              { left: "Salam", right: "Peaceful greeting" },
              { left: "Kind words", right: "Good manners" },
              { left: "Helping others", right: "Good character" },
            ],
          },
          quiz: {
            title: "Quiz: Daily Manners",
            questions: [
              {
                question: "What is a good Islamic greeting?",
                options: ["Salam", "Shouting", "Ignoring people"],
                answer: "Salam",
              },
              {
                question: "Which action shows good manners?",
                options: ["Helping others", "Being rude", "Laughing at others"],
                answer: "Helping others",
              },
            ],
          },
        },
      },
    ],
    []
  );

  const pageIntroSpeech = `
    Islam for Kids. Ages six to eight.
    Choose a topic. Then watch, read, and play.
  `;

  function renderWatchSection(watchItems = []) {
    return (
      <div className="watchVideoGrid">
        {watchItems.map((video) =>
          hasRealEmbed(video.embedUrl) ? (
            <VideoLesson
              key={video.title}
              title={video.title}
              description={video.description}
              embedUrl={video.embedUrl}
              speechText={video.speechText}
            />
          ) : (
            <div key={video.title} className="topicReadCard videoPendingCard">
              <h4>{video.title}</h4>
              <p>{video.description}</p>
              <p>{video.fallbackNote}</p>
            </div>
          )
        )}
      </div>
    );
  }

  function renderGame(game) {
    if (!game) return null;

    if (game.type === "matching") {
      return <MatchingGame title={game.title} pairs={game.pairs} />;
    }

    return null;
  }

  function renderQuiz(quiz) {
    if (!quiz) return null;
    return <QuizGame title={quiz.title} questions={quiz.questions} />;
  }

  function renderTopicModal(topic) {
    if (!topic) return null;

    const watchItems = Array.isArray(topic.watch) ? topic.watch : [topic.watch];

    return (
      <div className="topicLessonFlow">
        <section className="topicFlowSection">
          <div className="topicFlowHeader">
            <h3>Watch</h3>
          </div>
          {renderWatchSection(watchItems)}
        </section>

        <section className="topicFlowSection">
          <div className="topicFlowHeader">
            <h3>Read</h3>
            <ListenButton text={topic.read.speech} label="Listen" />
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

          <div className="playSplitGrid">
            <div className="topicPlayCard">
              <h4>Game</h4>
              {renderGame(topic.play?.game)}
            </div>

            <div className="topicPlayCard">
              <h4>Quiz</h4>
              {renderQuiz(topic.play?.quiz)}
            </div>
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
          Fun, clear Islamic learning for growing readers through simple
          lessons, strong visuals, and interactive practice.
        </p>

        <div className="quoteBanner">
          <p>“This is the age where simple lessons can start becoming lasting habits.”</p>
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
          <button type="button" onClick={pauseSpeech}>⏸ Pause</button>
          <button type="button" onClick={resumeSpeech}>▶ Resume</button>
          <button type="button" onClick={stopSpeech}>⏹ Stop</button>
        </div>
      </section>

      <section className="learnSection">
        <div className="sectionHeading">
          <h2>Choose a Topic</h2>
          <p>Open one topic at a time, then watch, read, play the game, and take the quiz.</p>
        </div>

        <div className="learnGrid two">
          {topics.map((topic) => (
            <LearningCard
              key={topic.id}
              title={topic.title}
              subtitle={topic.subtitle}
              description={topic.description}
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
            <h3>Let Children Explain Back</h3>
            <ListenButton
              text="Let children explain back what they learned. This helps lessons stick and shows what they really understood."
              label="Listen"
            />
          </div>
          <p>
            Children in this age group learn well when they repeat things back,
            match ideas, and answer simple questions in their own words.
          </p>
        </div>
      </section>

      <section className="learnSection">
        <div className="learnGrid three">
          <Link to="/learn/kids-3-5" className="navCard">
            <h3>Previous Age Group</h3>
            <p>Go back to ages 3–5 for earlier learning.</p>
            <span>Go to ages 3–5 →</span>
          </Link>

          <Link to="/learn/islam-for-kids" className="navCard">
            <h3>Back to Kids Home</h3>
            <p>Return to the main kids learning page.</p>
            <span>Go back →</span>
          </Link>

          <Link to="/learn/kids-9-12" className="navCard">
            <h3>Next Age Group</h3>
            <p>Move forward to ages 9–12 for deeper learning.</p>
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
