import React, { useState } from "react";
import questions from "./constants/question.json";
import Question from "./components/Question";
import Answer from "./components/Answer";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);

  const handleNextQuestion = (anser) => {
    setCurrentQuestion((previous) => previous + 1);
    setUserAnswer([...userAnswer, anser]);
  };

  const resetfun = ()=>{

    setCurrentQuestion(0);
    setUserAnswer([]);

  }
 // console.log(userAnswer);
  return (
    <>
      <div className="text-center pt-10">
        <h1 className=" text-2xl  text-gray-700"> World Quiz-APP </h1>

        {/* Quesion Components */}
        {currentQuestion<questions.length && 
        <Question
          question={questions[currentQuestion]}
          onAnsweQuesion={handleNextQuestion}
        />
      }

        {/* Answer Components */}
      {
      currentQuestion === questions.length && 
        <Answer userAnswer={userAnswer}  question= {questions} resetfun = {resetfun} />

      }

      
      </div>
    </>
  );
};

export default App;
