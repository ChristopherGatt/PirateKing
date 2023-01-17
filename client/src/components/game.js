import React, { useEffect, useState } from 'react'
// import Questions from './questions'
import { useQuery } from '@apollo/client'
import { QUERY_QUESTIONS } from '../utils/queries'

//redux store import
// import { useSelector } from 'react-redux'

function Game() {
  const { loading, data, error } = useQuery(QUERY_QUESTIONS)
  //const questions = data?.questions || []
  const [questions, setQuestions] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(null)

  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState('')
  // todo - set state for questions

  // const state = useSelector((state) => state)
  console.log(data)
  const selectedOptionFunc = (value) => {
    // console.log(e.target.innerText)
    setSelectedOption(value)
    console.log(value)
  }
  useEffect(() => {
    setQuestions(questionsArr)
    // console.log(state)
    // todo - get the questions
    // setCurrentQuestion({
    //   question: 'Some question',
    // })
  }, [])
  // useEffect(() => {
  //   console.log(selectedOption)
  // }, [selectedOption])

  let questionsArr = [
    {
      question: 'What is the biggest Planet in the Milkyway?',
      options: ['Earth', 'Venus', 'Jupiter', 'Saturn'],
    },
    {
      question: 'What is the Capital of Germany?',
      options: ['Earth', 'Venus', 'Jupiter', 'Saturn'],
    },
    {
      question: 'Who was the first Prime Minister of Australia?',
      options: ['Earth', 'Venus', 'Jupiter', 'Saturn'],
    },
  ]

  function nextClick() {
    console.log('next click')

    setCurrentIndex(currentIndex + 1)

    // todo - get the question
    ///...........

    // todo -
    setCurrentQuestion(questions[currentIndex])
  }

  return (
    <div className="container">
      <h1 className="title">Game App testing </h1>
      {/* Display questions*/}
      {questions?.map((item) => (
        <>
          <h3>{item?.question}</h3>
          {item?.options?.map((string) => (
            <button
              style={{ cursor: 'pointer' }}
              onClick={() => {
                selectedOptionFunc(string)
              }}
            >
              {string}
            </button>
          ))}
        </>
      ))}
      {currentQuestion && <h3>{currentQuestion.question}</h3>}
      {currentQuestion && <h4>{currentQuestion.options}</h4>}

      {/* {questions.map((question) => (
        <h4>{question.question}</h4>
      ))} */}

      {/* <Questions></Questions> */}

      <div className="grid">
        <button className="btn next" onClick={nextClick}>
          Next
        </button>
      </div>
    </div>
  )
}

export default Game
