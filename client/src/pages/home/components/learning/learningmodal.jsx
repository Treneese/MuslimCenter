import { useEffect } from "react";

export default function LearningModal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="learningModalOverlay" onClick={onClose}>
      <div
        className="learningModal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <div className="learningModalHeader">
          <h2>{title}</h2>
          <button type="button" className="modalCloseButton" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="learningModalBody">{children}</div>
      </div>
    </div>
  );
}