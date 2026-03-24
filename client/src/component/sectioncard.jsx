import { Link } from "react-router-dom";
import "../styles/components.css";


export default function SectionCards({ items = [] }) {
  return (
    <div className="sectionCardsGrid">
      {items.map((item) => (
        <Link key={item.to} to={item.to} className="sectionCard">
          {item.image ? (
            <div className="sectionCardMedia">
              <img src={item.image} alt={item.title} className="sectionCardImage" />
              <div className="sectionCardOverlay" />
              {item.meta && (
                <div className="sectionCardBadgeRow">
                  <span className="sectionCardBadge">{item.meta}</span>
                </div>
              )}
            </div>
          ) : (
            <div className="sectionCardFallback">
              {item.meta && (
                <div className="sectionCardBadgeRow">
                  <span className="sectionCardBadge">{item.meta}</span>
                </div>
              )}
              <div className="sectionCardFallbackIcon">MC</div>
            </div>
          )}

          <div className="sectionCardBody">
            <h3 className="sectionCardTitle">{item.title}</h3>
            {item.subtitle && (
              <p className="sectionCardSubtitle">{item.subtitle}</p>
            )}

            <div className="sectionCardFooter">
              <span>View</span>
              <span>→</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}