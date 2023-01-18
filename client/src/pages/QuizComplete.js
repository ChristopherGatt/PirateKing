import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/client'

import { RETAKE_QUIZ } from '../utils/mutations'
import { QUERY_MY_RESULTS, QUERY_QUESTIONS } from '../utils/queries'

const QuizComplete = () => {
  //GraphQL queries to get questions & answers/results of user
  const { data } = useQuery(QUERY_QUESTIONS)
  const { data: resultsData } = useQuery(QUERY_MY_RESULTS)

  //GraphQL mutation to nullify results and retake the quiz
  const [retakeQuiz] = useMutation(RETAKE_QUIZ)

  // Function to trigger to retake the quiz
  const retake = async () => {
    await retakeQuiz()
    window.location.assign('/quiz')
  }

  return (
    <div className="container">
      <div className="question-card">
        <div className="flex-column gap align-items-center">
          {/* Show content & action button according to quiz completion */}
          {(data === undefined && resultsData === undefined) ||
          data?.questions.length !== resultsData?.me?.results.length ? (
            <>
              <h2 className="py-2">Quiz Incomplete</h2>
              <Link to="/quiz">
                <button>Continue</button>
              </Link>
            </>
          ) : (
            <>
              <h2 className="py-2">Quiz Completed</h2>
              <button onClick={retake}>Retake</button>
            </>
          )}
          <Link to="/scoreboard">
            <button>Scoreboard</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default QuizComplete
