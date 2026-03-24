import { useState } from "react";

export default function ScenarioGame({ title, question, options }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  function handleSelect(index) {
    if (showFeedback) return;
    setSelectedIndex(index);
    setShowFeedback(true);
  }

  function restartGame() {
    setSelectedIndex(null);
    setShowFeedback(false);
  }

  const selectedOption =
    selectedIndex !== null ? options[selectedIndex] : null;

  return (
    <div className="scenarioGame">
      <h3>{title}</h3>

      <div className="scenarioCard">
        <p className="scenarioQuestion">{question}</p>

        <div className="scenarioOptions">
          {options.map((option, index) => {
            const isSelected = index === selectedIndex;
            const isCorrect = option.correct;

            let className = "scenarioOption";
            if (showFeedback && isCorrect) className += " correct";
            if (showFeedback && isSelected && !isCorrect) className += " wrong";

            return (
              <button
                key={option.text}
                type="button"
                className={className}
                onClick={() => handleSelect(index)}
              >
                {option.text}
              </button>
            );
          })}
        </div>

        {showFeedback && selectedOption && (
          <div className="scenarioFeedback">
            {selectedOption.correct ? (
              <p>
                Great choice. {selectedOption.feedback || "That reflects good character."}
              </p>
            ) : (
              <p>
                Not the best choice.{" "}
                {selectedOption.feedback || "Think about what Islam teaches about character and responsibility."}
              </p>
            )}
          </div>
        )}

        {showFeedback && (
          <div className="scenarioActions">
            <button type="button" onClick={restartGame}>
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}