import "../styles/components.css";

export default function LeadershipModal({ open, onClose, person }) {
  if (!open || !person) return null;

  return (
    <div className="leadershipModalOverlay" onClick={onClose}>
      <div className="leadershipModal" onClick={(e) => e.stopPropagation()}>
        <div className="leadershipModalTop">
          <div>
            <h2 className="leadershipModalName">{person.name}</h2>
            {person.role && (
              <div className="leadershipModalRole">{person.role}</div>
            )}
          </div>

          <button className="leadershipModalClose" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="leadershipModalBody">
          <img
            src={person.image}
            alt={person.name}
            className="leadershipModalImage"
          />
          <div className="leadershipModalText">{person.bio}</div>
        </div>
      </div>
    </div>
  );
}