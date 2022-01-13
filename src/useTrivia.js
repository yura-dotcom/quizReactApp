
import { useCallback, useEffect, useState } from "react";

export default function useTrivia(){
  const [question, setQuestion] = useState(null); // cтан питання
  const [category, setCategory] = useState('any'); // cтан категорії

  const getQuestion = useCallback(() => { // використовуєм хук зворотнього виклику для зміни урла питань при зміні категорії
    let url = 'https://opentdb.com/api.php?amount=1'; // оглошуєм перемінну урл по дефолту
    if(category !== 'any') url += `&category=${category}`; // в випадку якщо вибрана певна категорія конкатенуєм параметр категорій в урл

    fetch(url) // робим запит по зібраному урлу
      .then(res => res.json()) // очікуєм відповідь від сервера
      .then(data => setQuestion(data.results[0])); // записуєм в стан відповідь з сервера і оновлюєм question 
  }, [category]); // зміна параметра [category] запускає код в фігурних дужках вище

  useEffect(() => { // використовуєм хук для перерендеру
    getQuestion();
  }, [getQuestion, category]); // зміна параметра [category] запускає код в фігурних дужках вище

  return {question, category, setCategory, getQuestion}; // повертаєм оновлені значення
}