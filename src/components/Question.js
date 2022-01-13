import React from 'react';
import shuffle from 'lodash.shuffle';


export default function Question({ question, answerQuestion }) {
  const answers = shuffle([...question.incorrect_answers, question.correct_answer]);
  return (
    <div className="question">
      {/* <h2>{question.question}</h2> */}
      <h2 dangerouslySetInnerHTML={{__html: question.question}}/>

      {answers.map((answer) => (
        <button key={answer} onClick={() => answerQuestion(answer)}
          dangerouslySetInnerHTML={{__html: answer}}
        />
      ))}
    </div>
  );
}
