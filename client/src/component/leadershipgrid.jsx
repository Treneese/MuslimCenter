import "../styles/components.css";

export default function LeadershipGridCard({
  name,
  role,
  image,
  blurb,
  onClick,
  imagePosition = "center center",
  imageFit = "contain",
}) {
  return (
    <button
      type="button"
      className="leadershipCard"
      onClick={onClick}
    >
      <div className="leadershipCardImageWrap">
        <img
          src={image}
          alt={name}
          className="leadershipCardImage"
          style={{
            objectPosition: imagePosition,
            objectFit: imageFit,
          }}
        />
      </div>

      <div className="leadershipCardBody">
        <div className="leadershipCardName">
          {name}
        </div>

        {role && (
          <div className="leadershipCardRole">
            {role}
          </div>
        )}

        {blurb && (
          <div className="leadershipCardBlurb">
            {blurb}
          </div>
        )}

        <div className="leadershipCardFooter">
          <span>View</span>
          <span>→</span>
        </div>
      </div>
    </button>
  );
}