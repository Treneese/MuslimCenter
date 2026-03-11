import ListenButton from "../../../../component/listenbutton";

export default function VideoLesson({
  title,
  description,
  embedUrl,
  speechText,
}) {
  return (
    <div className="lessonContent">
      <div className="lessonTopRow">
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        {speechText && <ListenButton text={speechText} label="Listen" />}
      </div>

      <div className="videoEmbedWrap">
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}