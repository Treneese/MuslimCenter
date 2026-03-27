import { useMemo, useState } from "react";
import "../../../../styles/components.css"

function shuffleArray(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function MatchingGame({ title, pairs }) {
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [selectedRight, setSelectedRight] = useState(null);
  const [matches, setMatches] = useState([]);
  const [feedback, setFeedback] = useState("");

  const rightItems = useMemo(
    () => shuffleArray(pairs.map((pair) => pair.right)),
    [pairs]
  );

  const matchedLeftValues = matches.map((item) => item.left);
  const matchedRightValues = matches.map((item) => item.right);

  function tryMatch(leftValue, rightValue) {
    const found = pairs.find(
      (pair) => pair.left === leftValue && pair.right === rightValue
    );

    if (found) {
      const alreadyMatched = matches.some(
        (item) => item.left === leftValue && item.right === rightValue
      );

      if (!alreadyMatched) {
        setMatches((prev) => [...prev, found]);
      }

      setFeedback("Great job! That matches.");
    } else {
      setFeedback("Not quite. Try again.");
    }

    setSelectedLeft(null);
    setSelectedRight(null);
  }

  function handleLeftClick(leftValue) {
    if (matchedLeftValues.includes(leftValue)) return;

    setSelectedLeft(leftValue);

    if (selectedRight) {
      tryMatch(leftValue, selectedRight);
    }
  }

  function handleRightClick(rightValue) {
    if (matchedRightValues.includes(rightValue)) return;

    setSelectedRight(rightValue);

    if (selectedLeft) {
      tryMatch(selectedLeft, rightValue);
    }
  }

  function restartGame() {
    setSelectedLeft(null);
    setSelectedRight(null);
    setMatches([]);
    setFeedback("");
  }

  const complete = matches.length === pairs.length;

  return (
    <div className="matchingGame">
      <h3>{title}</h3>

      <p className="gameHelpText">
        Tap one item from the left, then tap its match on the right.
      </p>

      <div className="matchingGrid">
        <div className="matchingColumn">
          {pairs.map((pair) => {
            const isMatched = matchedLeftValues.includes(pair.left);
            const isSelected = selectedLeft === pair.left;

            return (
              <button
                key={pair.left}
                type="button"
                className={`matchingCard${isMatched ? " matched" : ""}${
                  isSelected ? " selected" : ""
                }`}
                onClick={() => handleLeftClick(pair.left)}
              >
                {pair.left}
              </button>
            );
          })}
        </div>

        <div className="matchingColumn">
          {rightItems.map((rightValue) => {
            const isMatched = matchedRightValues.includes(rightValue);
            const isSelected = selectedRight === rightValue;

            return (
              <button
                key={rightValue}
                type="button"
                className={`matchingCard${isMatched ? " matched" : ""}${
                  isSelected ? " selected" : ""
                }`}
                onClick={() => handleRightClick(rightValue)}
              >
                {rightValue}
              </button>
            );
          })}
        </div>
      </div>

      {feedback && <div className="gameFeedback">{feedback}</div>}

      {complete && (
        <div className="gameCompleteBox">
          <p>You matched them all. Great work!</p>
          <button type="button" onClick={restartGame}>
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}