import "../styles/components.css";

export default function PersonCard({
  name,
  title,
  image,
  description,
  meta,
  reverse = false,
}) {
  return (
    <section className={`personCard${reverse ? " reverse" : ""}`}>
      <div className="personCardImageWrap">
        <img src={image} alt={name} className="personCardImage" />
      </div>

      <div className="personCardContent">
        {meta && <div className="pillBadge">{meta}</div>}

        <h2 className="personCardName">{name}</h2>
        {title && <p className="personCardTitle">{title}</p>}

        <div className="personCardText">{description}</div>
      </div>
    </section>
  );
}