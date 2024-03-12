import React from 'react'

const Answer = ({userAnswer, question, resetfun}) => {

    const correctAns = userAnswer.filter((item) => item);
  // console.log(question);

  return (
    <div>
       <p>Correct ans {correctAns.length} out of {question.length} question.</p>

       <button onClick={()=> resetfun()} className='bg-yellow-500 text-white px-4 py-1 rounded-sm'> Star Again </button>

       <ul>
        {question.map((item,id)=> <li key={id}> 
            <p> Question : {item.question} </p>
            <p> Correct Answer : {item.answerOptions.map((item, index)=> <span key={index} > {item.isCorrect && item.text }  </span> )} </p>
         </li> )}
       </ul>
    </div>
  )
}

export default Answer;