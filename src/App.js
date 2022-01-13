import React, { useState } from 'react';
import Question from './components/Question';
import CategorySelector from './components/CategorySelector';
import ResultModal from './components/ResultModal';
import Scoreboard from './components/Scoreboard';
import './App.css';
import useTrivia from './useTrivia';

export default function App() {
  const {question, getQuestion, category, setCategory} = useTrivia();// деструктуризуєм кастомний хук useTrivia()
  const [isCorrect, setIsCorrect] = useState(null);// робим флаг для перевірки відповідей куди пізніше попаде бул тру або фалсе

  function handleQuestionAnswered(answer) {
    const isAnswerCorrect = answer === question.correct_answer; // порівнюєм відповідь гравця з правильною отримуєм бул і записуєм в перемінну
    setIsCorrect(isAnswerCorrect);
  }

  function handleNextQuestion() {
    setIsCorrect(null); // зкидаєм значення на нуль перед новим питанням
    getQuestion(); // берем нове питання
  }

  return (
    <div className="app">
      {/* show the result modal ----------------------- */}
      {isCorrect !== null && ( // робим перевірку після чого передаєм параметри
        <ResultModal 
          isCorrect={isCorrect}
          question={question}
          getQuestion={handleNextQuestion}
        />
      )}

      {/* question header ----------------------- */}
      <div className="question-header">
        <CategorySelector category={category} setCategory={setCategory} />
        <Scoreboard  isCorrect={isCorrect} />
      </div>

      {/* the question itself ----------------------- */}
      <div className="question-main">
        {question && (
          <Question question={question} answerQuestion={handleQuestionAnswered}/>
        )}
      </div>

      {/* question footer ----------------------- */}
      <div className="question-footer">
        <button onClick={handleNextQuestion}>Go to next question <span>👉</span></button>
      </div>
    </div>
  );
}
