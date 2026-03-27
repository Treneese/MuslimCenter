import ListenButton from "../../../../component/listenbutton";
import "../../../../styles/components.css"
const hasRealEmbed = (url = "") =>
  typeof url === "string" &&
  url.startsWith("https://www.youtube.com/embed/") &&
  !url.includes("VIDEO_ID");

export default function VideoLesson({
  title,
  description,
  embedUrl,
  speechText,
}) {
  const showVideo = hasRealEmbed(embedUrl);

  return (
    <div className="lessonContent">
      <div className="lessonTopRow">
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        {speechText && <ListenButton text={speechText} label="Listen" />}
      </div>

      {showVideo ? (
        <div className="videoEmbedWrap">
          <iframe
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <div className="videoComingSoonCard">
          <div className="videoComingSoonIcon">▶</div>
          <h4>Video coming soon</h4>
          <p>
            We’re still adding a child-friendly video for this lesson.
          </p>
        </div>
      )}
    </div>
  );
}