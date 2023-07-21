import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import { getQuestion } from "./getQuestions";

const randomizeArray = (data = []) => {
  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]]
  }

  return data
} 

const TriviaApp = () => {
    const {data,isLoading,isError,error} = useQuery('trivia',getQuestion)
    console.log("Data", data);
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [optionChosen, setOptionChosen] = useState("");

    const [score, setScore] = useState(0);
    const correctAnswer = data?.data?.results ? data.data.results[currentQuestion ?? 0]?.correct_answer : ''
    const wrongAnswers = data?.data?.results ? data.data.results[currentQuestion ?? 0]?.incorrect_answers : []
    const answers = randomizeArray([correctAnswer, ...wrongAnswers])
    console.log(answers);
    const nextQuestion =()=>{
      if(data?.data.results[currentQuestion].correct_answer == optionChosen){
        setScore(x=>x+1)
      }
      setCurrentQuestion(y=>y+1)
    }
  return (
    <div className="Quiz">
        <h2>{data?.data.results[currentQuestion].question}</h2>
        <h3>Scores :{score}</h3>
      <div className="Options">
        <button onClick={(e)=>setOptionChosen(e.target.textContent)}>{answers[0]}</button>
        <button onClick={(e)=>setOptionChosen(e.target.textContent)}>{answers[1]}</button>
        <button onClick={(e)=>setOptionChosen(e.target.textContent)}>{answers[2]}</button>
        <button onClick={(e)=>setOptionChosen(e.target.textContent)}>{answers[3]}</button>
      </div>
        <button onClick={()=>nextQuestion()}>NextQuestion</button>
    </div>
  );
};

export default TriviaApp;
