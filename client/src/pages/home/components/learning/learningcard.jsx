import "../../../../styles/components.css"
export default function LearningCard({
  title,
  subtitle,
  description,
  type = "Lesson",
  image,
  onClick,
}) {
  const firstWord = title?.split(" ")?.[0] || "Learn";

  return (
    <button type="button" className="learningCard" onClick={onClick}>
      {image ? (
        <img src={image} alt={title} className="learningCardImage" />
      ) : (
        <div className="learningCardImagePlaceholder">
          <div className="learningCardPlaceholderInner">
            <span className="learningCardPlaceholderBadge">{type}</span>
            <h4>{firstWord}</h4>
          </div>
        </div>
      )}

      <div className="learningCardContent">
        <span className="learningCardBadge">{type}</span>
        <h3>{title}</h3>
        {subtitle && <p className="learningCardSubtitle">{subtitle}</p>}
        {description && <p className="learningCardDescription">{description}</p>}
      </div>
    </button>
  );
}