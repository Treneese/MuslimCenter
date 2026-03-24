import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/learn.css";

import LearningCard from "../home/components/learning/learningcard";
import LearningModal from "../home/components/learning/learningmodal";
import VideoLesson from "../home/components/learning/videolesson";
import QuizGame from "../home/components/learning/quizgame";
import MatchingGame from "../home/components/learning/matchinggame";
import ListenButton from "../../component/listenbutton";
import ScenarioGame from "../home/components/learning/scenariogame";
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

export default function Kids912() {
  const [activeTopic, setActiveTopic] = useState(null);

  const topics = useMemo(
    () => [
      {
        id: "why-muslims-pray",
        type: "Topic",
        title: "Why Muslims Pray",
        subtitle: "Prayer as connection, discipline, and faith",
        description:
          "Explore prayer through video, deeper reading, and a quiz about its meaning.",
        watch: [
          {
            title: "Watch: Why Muslims Pray",
            description:
              "Add your chosen older-kids prayer lesson here.",
            embedUrl: "",
            fallbackNote:
              "Video coming soon. Add a strong older-kids lesson explaining why salah matters in daily life.",
            speechText:
              "Watch why Muslims pray. A lesson helping older children understand why salah matters in daily life.",
          },
        ],
        read: {
          title: "Read: Why Muslims Pray",
          text: "Prayer is not only a routine. It keeps Muslims connected to Allah, brings discipline, and strengthens faith throughout the day. Salah reminds Muslims to stop, remember Allah, and return to what matters most.",
          speech:
            "Read why Muslims pray. Prayer is not only a routine. It keeps Muslims connected to Allah, brings discipline, and strengthens faith throughout the day. Salah reminds Muslims to stop, remember Allah, and return to what matters most.",
        },
        play: {
          type: "quiz",
          title: "Play: Prayer Quiz",
          questions: [
            {
              question: "Why do Muslims pray?",
              options: [
                "To stay connected to Allah",
                "Only because others do it",
                "Just to pass time",
              ],
              answer: "To stay connected to Allah",
            },
            {
              question: "What can prayer build in a person?",
              options: ["Discipline", "Laziness", "Confusion"],
              answer: "Discipline",
            },
          ],
        },
      },
      {
        id: "quran",
        type: "Topic",
        title: "What the Quran Means to Muslims",
        subtitle: "Guidance, mercy, and reflection",
        description:
          "Learn how Muslims relate to the Quran through video, reading, and a quiz.",
        watch: [
          {
            title: "Watch: The Quran",
            description:
              "Add your chosen Quran lesson here for older children.",
            embedUrl: "",
            fallbackNote:
              "Video coming soon. Add a short lesson about what the Quran is and why it matters.",
            speechText:
              "Watch the Quran. A short lesson about what the Quran is and why it matters.",
          },
        ],
        read: {
          title: "Read: What the Quran Means",
          text: "The Quran is guidance, mercy, wisdom, and a source of reflection. Muslims read it to understand how to live with faith, character, and obedience to Allah.",
          speech:
            "Read what the Quran means. The Quran is guidance, mercy, wisdom, and a source of reflection. Muslims read it to understand how to live with faith, character, and obedience to Allah.",
        },
        play: {
          type: "quiz",
          title: "Play: Quran Quiz",
          questions: [
            {
              question: "What is the Quran for Muslims?",
              options: ["Guidance", "A comic book", "A game manual"],
              answer: "Guidance",
            },
            {
              question: "Why do Muslims read the Quran?",
              options: [
                "To understand how to live",
                "Only for decoration",
                "To avoid learning",
              ],
              answer: "To understand how to live",
            },
          ],
        },
      },
      {
        id: "ramadan",
        type: "Topic",
        title: "What Ramadan Teaches",
        subtitle: "Patience, gratitude, and self-control",
        description:
          "Explore the deeper meaning of Ramadan through a lesson, reading, and quiz.",
        watch: [
          {
            title: "Watch: What Ramadan Teaches",
            description:
              "Add your chosen Ramadan lesson here for older children.",
            embedUrl: "",
            fallbackNote:
              "Video coming soon. Add a short lesson on fasting, self-control, gratitude, and care for others.",
            speechText:
              "Watch what Ramadan teaches. A short lesson on fasting, self-control, gratitude, and care for others.",
          },
        ],
        read: {
          title: "Read: What Ramadan Teaches",
          text: "Ramadan teaches patience, gratitude, self-control, worship, and care for others. It helps Muslims grow spiritually and become more aware of Allah throughout the day.",
          speech:
            "Read what Ramadan teaches. Ramadan teaches patience, gratitude, self-control, worship, and care for others. It helps Muslims grow spiritually and become more aware of Allah throughout the day.",
        },
        play: {
          type: "quiz",
          title: "Play: Ramadan Quiz",
          questions: [
            {
              question: "What can Ramadan teach?",
              options: [
                "Patience and gratitude",
                "Rudeness and laziness",
                "Only hunger",
              ],
              answer: "Patience and gratitude",
            },
            {
              question: "What does Ramadan help Muslims do more?",
              options: ["Remember Allah", "Forget prayer", "Ignore others"],
              answer: "Remember Allah",
            },
          ],
        },
      },
      {
        id: "faith-and-character",
        type: "Topic",
        title: "Faith and Character",
        subtitle: "How belief shapes behavior",
        description:
          "Learn how Islam connects faith with honesty, patience, compassion, and responsibility.",
        watch: [
          {
            title: "Watch: Faith and Character",
            description:
              "Add your chosen lesson on Islamic character here.",
            embedUrl: "",
            fallbackNote:
              "Video coming soon. Add a lesson on how Islamic belief shapes the way Muslims treat others.",
            speechText:
              "Watch faith and character. A lesson on how Islamic belief shapes the way Muslims treat others.",
          },
        ],
        read: {
          title: "Read: Faith and Character",
          text: "Islam is not only about rituals. It is also about honesty, patience, respect, responsibility, and compassion. Real faith shows in the way a person treats Allah’s creation.",
          speech:
            "Read faith and character. Islam is not only about rituals. It is also about honesty, patience, respect, responsibility, and compassion. Real faith shows in the way a person treats Allah’s creation.",
        },
        play: {
          type: "scenario",
          title: "Play: What Would You Do?",
          question:
            "A new student is sitting alone and looks nervous. What should you do?",
          options: [
            {
              text: "Include them and speak kindly",
              correct: true,
              feedback:
                "That reflects kindness, respect, and the kind of character Islam teaches.",
            },
            {
              text: "Ignore them and look away",
              correct: false,
              feedback:
                "Ignoring someone in need is not the strongest character response.",
            },
            {
              text: "Laugh with your friends instead",
              correct: false,
              feedback:
                "That would be hurtful and goes against Islamic manners and compassion.",
            },
          ],
        },
      },
      {
        id: "responsibility",
        type: "Topic",
        title: "Responsibility and Good Choices",
        subtitle: "Faith in everyday decisions",
        description:
          "Help older children connect Islam to honesty, responsibility, and daily decision-making.",
        watch: [
          {
            title: "Watch: Responsibility and Good Choices",
            description:
              "Add a short lesson here about honesty, responsibility, and making the right choice.",
            embedUrl: "",
            fallbackNote:
              "Video coming soon. Add a short lesson on honesty, responsibility, and good decisions.",
          },
        ],
        read: {
          title: "Read: Responsibility and Good Choices",
          text: "Growing in Islam means learning to make better choices even when nobody is watching. Muslims are taught to be trustworthy, truthful, respectful, and responsible in everyday life.",
          speech:
            "Growing in Islam means learning to make better choices even when nobody is watching. Muslims are taught to be trustworthy, truthful, respectful, and responsible in everyday life.",
        },
        play: {
          type: "matching",
          title: "Play: Match the Character Trait",
          pairs: [
            { left: "Honesty", right: "Telling the truth" },
            { left: "Responsibility", right: "Doing what you should do" },
            { left: "Trustworthy", right: "People can depend on you" },
          ],
        },
      },
    ],
    []
  );

  const pageIntroSpeech = `
    Islam for Kids. Ages 9 to 12.
    Explore one topic at a time.
    In each topic, children can watch, read, and play while growing in understanding and reflection.
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

  function renderPlaySection(play) {
    if (!play) return null;

    if (play.type === "quiz") {
      return <QuizGame title={play.title} questions={play.questions} />;
    }

    if (play.type === "matching") {
      return <MatchingGame title={play.title} pairs={play.pairs} />;
    }

    if (play.type === "scenario") {
      return (
        <ScenarioGame
          title={play.title}
          question={play.question}
          options={play.options}
        />
      );
    }

    return null;
  }

  function renderTopicModal(topic) {
    if (!topic) return null;

    return (
      <div className="topicLessonFlow">
        <section className="topicFlowSection">
          <div className="topicFlowHeader">
            <h3>Watch</h3>
          </div>
          {renderWatchSection(Array.isArray(topic.watch) ? topic.watch : [topic.watch])}
        </section>

        <section className="topicFlowSection">
          <div className="topicFlowHeader">
            <h3>Read</h3>
            <ListenButton text={topic.read.speech} label="Listen" rate={0.92} />
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

          <div className="topicPlayCard">{renderPlaySection(topic.play)}</div>
        </section>
      </div>
    );
  }

  return (
    <div className="page learnPage kidsAgePage olderKidsPage interactiveLearnPage">
      <section className="learnHero kidsHero">
        <p className="learnEyebrow">Islam for Kids</p>
        <h1 className="pageTitle">Ages 9–12</h1>
        <p className="pageSubtitle learnIntro">
          Stronger Islamic learning for older children through meaning,
          reflection, real-life connection, and deeper understanding.
        </p>

        <div className="quoteBanner">
          <p>
            “As children grow, they begin asking not only what Islam teaches,
            but why it matters.”
          </p>
        </div>

        <div className="pageReaderControls">
          <button
            type="button"
            onClick={() =>
              speakText(pageIntroSpeech, { rate: 0.92, voiceName: "Samantha" })
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
          <p>Open one topic at a time, then watch, read, and play in order.</p>
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
            <h3>Encourage Thought and Discussion</h3>
            <ListenButton
              text="Encourage thought and discussion. Children ages nine to twelve can begin asking deeper questions and connecting Islamic learning to real life."
              label="Listen"
              rate={0.94}
            />
          </div>
          <p>
            Children in this age group can begin asking deeper questions and
            connecting Islamic learning to real life. Give them room to think,
            reflect, and talk through what they are learning.
          </p>
        </div>
      </section>

      <section className="learnSection">
        <div className="learnGrid three">
          <Link to="/learn/kids-6-8" className="navCard">
            <h3>Previous Age Group</h3>
            <p>Go back to ages 6–8 for early reader learning.</p>
            <span>Go to ages 6–8 →</span>
          </Link>

          <Link to="/learn/islam-for-kids" className="navCard">
            <h3>Back to Kids Home</h3>
            <p>Return to the main kids learning page.</p>
            <span>Go back →</span>
          </Link>

          <Link to="/learn/new-to-islam" className="navCard">
            <h3>Continue Learning</h3>
            <p>Explore more learning for older youth and families.</p>
            <span>Go to next page →</span>
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
