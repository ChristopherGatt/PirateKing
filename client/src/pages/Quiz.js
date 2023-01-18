import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/client'

import { QUERY_MY_RESULTS, QUERY_QUESTIONS } from '../utils/queries'
import { ADD_ANSWER } from '../utils/mutations'
import Question from '../components/Question'

//redux store import
// import { useSelector } from 'react-redux'

function Quiz() {
  const { data } = useQuery(QUERY_QUESTIONS)
  const { data: resultsData, refetch } = useQuery(QUERY_MY_RESULTS)

  const [addAnswer] = useMutation(ADD_ANSWER)
  const [questions, setQuestions] = useState([])
  const [results, setResults] = useState([])

  const [currentIndex, setCurrentIndex] = useState(0)

  const selectedOptionFunc = async ({ _id, answer }) => {
    await addAnswer({
      variables: { question: _id, answer },
    })

    await refetch()
  }

  function previousClick() {
    setCurrentIndex(currentIndex - 1)
  }
  function nextClick() {
    setCurrentIndex(currentIndex + 1)
  }

  function checkAnswer(q) {
    if (results) {
      const v = results.find((v) => v.question._id === q._id)
      if (v !== undefined) {
        return v
      }
    }
    return -1
  }

  useEffect(() => {
    if (data) setQuestions(data.questions)
  }, [data])

  useEffect(() => {
    if (resultsData) setResults([...(resultsData?.me?.results || [])])
  }, [resultsData])

  return (
    <div className="container">
      <h1 className="title">Quiz</h1>
      <div className="toolbar">
        <>
          {results.length === questions.length ? (
            <>
              <Link is={'button'} to="/complete">
                <button className="btn next">Finish</button>
              </Link>
            </>
          ) : null}
          <button
            className="btn next"
            onClick={previousClick}
            disabled={currentIndex === 0}
          >
            Previous
          </button>
          <div>
            [{currentIndex + 1}/{questions.length}]
          </div>
          <button
            className="btn next"
            onClick={nextClick}
            disabled={currentIndex === questions.length - 1}
          >
            Next
          </button>
        </>
      </div>
      <Question
        n={currentIndex + 1}
        data={questions[currentIndex]}
        onClick={(i) => {
          selectedOptionFunc({
            _id: questions[currentIndex]._id,
            answer: i,
          })
        }}
        answer={checkAnswer(questions[currentIndex]).answer}
        correct={checkAnswer(questions[currentIndex]).correct}
      />
    </div>
  )
}

export default Quiz
