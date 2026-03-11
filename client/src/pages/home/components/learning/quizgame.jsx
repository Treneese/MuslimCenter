import { useState } from "react";

export default function QuizGame({ title, questions }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;

  function handleAnswer(option) {
    if (showFeedback) return;

    setSelected(option);
    setShowFeedback(true);

    if (option === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }
  }

  function handleNext() {
    if (isLast) return;
    setCurrentIndex((prev) => prev + 1);
    setSelected(null);
    setShowFeedback(false);
  }

  function handleRestart() {
    setCurrentIndex(0);
    setSelected(null);
    setShowFeedback(false);
    setScore(0);
  }

  return (
    <div className="quizGame">
      <h3>{title}</h3>

      <div className="quizProgress">
        Question {currentIndex + 1} of {questions.length}
      </div>

      <div className="quizQuestionCard">
        <p className="quizQuestion">{currentQuestion.question}</p>

        <div className="quizOptions">
          {currentQuestion.options.map((option) => {
            const isCorrect = option === currentQuestion.answer;
            const isSelected = option === selected;

            let className = "quizOption";
            if (showFeedback && isCorrect) className += " correct";
            if (showFeedback && isSelected && !isCorrect) className += " wrong";

            return (
              <button
                key={option}
                type="button"
                className={className}
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            );
          })}
        </div>

        {showFeedback && (
          <div className="quizFeedback">
            {selected === currentQuestion.answer ? (
              <p>Great job! That’s correct.</p>
            ) : (
              <p>
                Not quite. The correct answer is <strong>{currentQuestion.answer}</strong>.
              </p>
            )}
          </div>
        )}

        <div className="quizActions">
          {!isLast && showFeedback && (
            <button type="button" onClick={handleNext}>
              Next Question
            </button>
          )}

          {isLast && showFeedback && (
            <button type="button" onClick={handleRestart}>
              Restart Quiz
            </button>
          )}
        </div>

        {isLast && showFeedback && (
          <div className="quizScore">
            Score: {score} / {questions.length}
          </div>
        )}
      </div>
    </div>
  );
}