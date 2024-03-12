import React from "react";

const Question = ({ question, onAnsweQuesion }) => {
  return (
    <>
      <div className="  w-max border m-auto p-20 mt-10">
        <div>
        <h2 className="pb-10"> {question.question} </h2>
        <div>
          {question.answerOptions.map((item) => {
            return (
              <button
              className=" bg-amber-500 text-white px-6 py-1 mx-2 rounded-sm"
                key={item.text}
                onClick={() => onAnsweQuesion(item.isCorrect)}
              >
                {" "}
                {item.text}{" "}
              </button>
            );
          })}
        </div>
        </div>
      </div>
    </>
  );
};

export default Question;
