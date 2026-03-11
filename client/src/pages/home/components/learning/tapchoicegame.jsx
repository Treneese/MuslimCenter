import { useState } from "react";

export default function TapChoiceGame({ title, prompt, choices }) {
  const [feedback, setFeedback] = useState("");

  function handleChoice(choice) {
    if (choice.correct) {
      setFeedback("Great job!");
    } else {
      setFeedback("Try again!");
    }
  }

  return (
    <div className="tapChoiceGame">
      <h3>{title}</h3>
      <p className="tapPrompt">{prompt}</p>

      <div className="tapChoiceGrid">
        {choices.map((choice) => (
          <button
            key={choice.label}
            type="button"
            className="tapChoiceCard"
            onClick={() => handleChoice(choice)}
          >
            {choice.image ? (
              <img src={choice.image} alt={choice.label} />
            ) : (
              <div className="tapChoicePlaceholder">{choice.label}</div>
            )}
            <span>{choice.label}</span>
          </button>
        ))}
      </div>

      {feedback && <div className="tapChoiceFeedback">{feedback}</div>}
    </div>
  );
}