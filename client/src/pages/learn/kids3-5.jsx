import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/learn.css";

import LearningCard from "../home/components/learning/learningcard";
import LearningModal from "../home/components/learning/learningmodal";
import VideoLesson from "../home/components/learning/videolesson";
import QuizGame from "../home/components/learning/quizgame";
import MatchingGame from "../home/components/learning/matchinggame";
import ScenarioGame from "../home/components/learning/scenariogame";
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

export default function Kids35() {
  const [activeTopic, setActiveTopic] = useState(null);

  const topics = useMemo(
    () => [
      {
        id: "allah-made-everything",
        type: "Topic",
        title: "Allah Made Everything",
        subtitle: "A simple first truth for little learners",
        description:
          "Help children connect the world around them to Allah through watching, listening, and play.",
        watch: [
          {
            title: "Watch: Allah Made Everything",
            description:
              "Add your chosen preschool video here about Allah creating the world.",
            embedUrl: "https://www.youtube.com/embed/RWn5WxIcp4Y?si=kEyMgi_LYLudkEvn",
            fallbackNote:
              "Video coming soon. Add a short gentle video about Allah creating the sky, earth, animals, and people.",
            speechText:
              "Watch Allah made everything. A short children’s video about Allah creating the sky, earth, animals, and people.",
          },
        ],
        read: {
          title: "Read: Allah Made Everything",
          text: "Allah made the sky, the earth, the animals, and all people. When children look around at creation, they can begin learning that Allah made everything.",
          speech:
            "Read Allah made everything. Allah made the sky, the earth, the animals, and all people. When children look around at creation, they can begin learning that Allah made everything.",
        },
        play: {
          type: "quiz",
          title: "Play: Allah Made Everything",
          questions: [
            {
              question: "Who made the sky?",
              options: ["Allah", "A bird", "A car"],
              answer: "Allah",
            },
            {
              question: "Who made the animals?",
              options: ["Allah", "A tree", "A toy"],
              answer: "Allah",
            },
          ],
        },
      },
      {
        id: "we-love-allah",
        type: "Topic",
        title: "We Love Allah",
        subtitle: "Faith through love and repetition",
        description:
          "Teach children to love, thank, and remember Allah in simple ways.",
        watch: [
          {
            title: "Watch: We Love Allah",
            description:
              "Add your chosen song or short lesson about loving and thanking Allah.",
            embedUrl: "https://www.youtube.com/embed/-9N91KTahvU?si=8MwDh2FAID283cAw",
            fallbackNote:
              "Video coming soon. Add a joyful short video or song that helps children remember Allah with love.",
            speechText:
              "Watch we love Allah. A gentle video or song helping children remember Allah with joy and love.",
          },
        ],
        read: {
          title: "Read: We Love Allah",
          text: "Muslims love Allah, thank Allah, and remember Allah every day. Little children can begin learning this through kind words, songs, and repetition.",
          speech:
            "Read we love Allah. Muslims love Allah, thank Allah, and remember Allah every day. Little children can begin learning this through kind words, songs, and repetition.",
        },
        play: {
          type: "scenario",
          title: "Play: Loving Allah in Daily Life",
          question: "You finish eating and feel happy. What can you say?",
          options: [
            {
              text: "Alhamdulillah",
              correct: true,
              feedback:
                "Yes. Saying Alhamdulillah is a beautiful way to thank Allah.",
            },
            {
              text: "Nothing at all",
              correct: false,
              feedback:
                "We can remember Allah with small words every day.",
            },
            {
              text: "Only ask for more toys",
              correct: false,
              feedback:
                "This choice does not teach gratitude to Allah.",
            },
          ],
        },
      },
      {
        id: "masjid",
        type: "Topic",
        title: "A Masjid is a Special Place",
        subtitle: "Introduce the masjid with warmth",
        description:
          "Help children understand that the masjid is a place to pray, learn, and gather.",
        watch: [
          {
            title: "Watch: What is a Masjid?",
            description:
              "Add a preschool-friendly introduction to the masjid here.",
            embedUrl: "https://www.youtube.com/embed/PjHNNPwfOWA?si=xjdLNIoGRA502WFA",
            fallbackNote:
              "Video coming soon. Add a short preschool-friendly video introducing the masjid.",
            speechText:
              "Watch what is a masjid. A short preschool-friendly video introducing the masjid.",
          },
        ],
        read: {
          title: "Read: A Masjid is a Special Place",
          text: "A masjid is where Muslims pray, learn, and gather together. It is a peaceful place where families come to worship Allah.",
          speech:
            "Read a masjid is a special place. A masjid is where Muslims pray, learn, and gather together. It is a peaceful place where families come to worship Allah.",
        },
        play: {
          type: "quiz",
          title: "Play: Masjid Quiz",
          questions: [
            {
              question: "Where do Muslims pray together?",
              options: ["Masjid", "Bus", "Store"],
              answer: "Masjid",
            },
            {
              question: "Is the masjid a special place?",
              options: ["Yes", "No", "Only for toys"],
              answer: "Yes",
            },
          ],
        },
      },
      {
        id: "little-daily-words",
        type: "Topic",
        title: "Little Daily Words",
        subtitle: "Bismillah and Alhamdulillah",
        description:
          "Teach simple daily words children can hear and repeat often.",
        watch: [
          {
            title: "Watch: Daily Islamic Words",
            description:
              "Add a short song or children’s lesson for Bismillah and Alhamdulillah.",
            embedUrl: "https://www.youtube.com/embed/H8qsicHveGE?si=hCe75KdfOx9_bTw_",
            fallbackNote:
              "Video coming soon. Add a short children’s video or song teaching Bismillah and Alhamdulillah.",
            speechText:
              "Watch daily Islamic words. A short children’s video or song teaching Bismillah and Alhamdulillah.",
          },
        ],
        read: {
          title: "Read: Little Daily Words",
          text: "Children can begin with small daily words like Bismillah before eating and Alhamdulillah after finishing. These simple words help Islam become part of everyday life.",
          speech:
            "Read little daily words. Children can begin with small daily words like Bismillah before eating and Alhamdulillah after finishing. These simple words help Islam become part of everyday life.",
        },
        play: {
          type: "matching",
          title: "Play: Match the Daily Words",
          pairs: [
            { left: "Bismillah", right: "Before eating" },
            { left: "Alhamdulillah", right: "After finishing" },
          ],
        },
      },
    ],
    []
  );

  const pageIntroSpeech = `
    Islam for Kids. Ages 3 to 5.
    Explore one topic at a time.
    In each topic, children can watch, read, and play.
    This page is best used with a parent or older sibling.
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
            <ListenButton text={topic.read.speech} label="Listen" rate={0.86} />
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
    <div className="page learnPage kidsAgePage kids35Page interactiveLearnPage">
      <section className="learnHero kidsHero">
        <p className="learnEyebrow">Islam for Kids</p>
        <h1 className="pageTitle">Ages 3–5</h1>
        <p className="pageSubtitle learnIntro">
          Simple and loving introductions to Islam for early learners through
          sound, short phrases, gentle repetition, and family support.
        </p>

        <div className="quoteBanner">
          <p>“Little hearts learn through love, repetition, and simple truth.”</p>
        </div>

        <div className="supportBadge">Best with a parent or older sibling</div>

        <div className="pageReaderControls">
          <button
            type="button"
            onClick={() => speakText(pageIntroSpeech, { rate: 0.86, voiceName: "Samantha" })}
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
            <h3>Keep It Light and Repetitive</h3>
            <ListenButton
              text="Keep it light and repetitive. Young children learn through warmth, repetition, simple wording, and short sessions."
              label="Listen"
              rate={0.88}
            />
          </div>
          <p>
            Young children do not need long explanations. Let them hear small
            truths often, repeat key words, and connect Islamic learning to
            daily life with love.
          </p>
        </div>
      </section>

      <section className="learnSection">
        <div className="learnGrid three">
          <Link to="/learn/islam-for-kids" className="navCard">
            <h3>Back to Kids Home</h3>
            <p>Return to the main kids learning page.</p>
            <span>Go back →</span>
          </Link>

          <Link to="/learn/kids-6-8" className="navCard">
            <h3>Next Age Group</h3>
            <p>Move forward to ages 6–8 when your child is ready.</p>
            <span>Go to ages 6–8 →</span>
          </Link>

          <Link to="/learn/new-to-islam" className="navCard">
            <h3>Family Learning</h3>
            <p>Explore more faith-building resources for the whole family.</p>
            <span>Continue learning →</span>
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
