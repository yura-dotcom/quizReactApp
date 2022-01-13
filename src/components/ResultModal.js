import React from 'react';

export default function ResultModal({isCorrect, question, getQuestion}) {
  return (
    <div className="result-modal">
      <div className="overlay" />
      <div className="result-modal-content">
        {isCorrect && (
          <h3>
            <span>👊👊👊</span>
            <br />
            YOU WON!
          </h3>
        )}

        {!isCorrect && (
          <h3>
            <span>😟😢😟</span>
            <br />
            YOU LOST!
          </h3>
        )}

        {!isCorrect && (
          <div className="correct-answer">
            <small>The correct answer was:</small>
            <br />
            {/* <strong>{question.correct_answer}</strong> */}
            <strong dangerouslySetInnerHTML={{__html: question.correct_answer}}/>

          </div>
        )}

        <button onClick={getQuestion}>Go to next question <span>👉</span></button>
      </div>
    </div>
  );
}
