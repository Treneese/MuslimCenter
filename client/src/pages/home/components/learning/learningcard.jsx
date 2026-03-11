export default function LearningCard({
  title,
  subtitle,
  description,
  type,
  image,
  onClick,
}) {
  return (
    <button type="button" className="learningCard" onClick={onClick}>
      {image ? (
        <img src={image} alt={title} className="learningCardImage" />
      ) : (
        <div className="learningCardImagePlaceholder">{type}</div>
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