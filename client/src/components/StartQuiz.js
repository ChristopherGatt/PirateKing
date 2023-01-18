import React from 'react'
import { Link } from 'react-router-dom'

function StartQuiz() {
  return (
    <div className="container">
      <h1 className="title"> Ultimate General Knowledge Quiz!!! </h1>

      <div className="start">
        <Link className="btn" to={'/quiz'}>
          Start Quiz
        </Link>
      </div>

      <div className="score">
        <Link className="btn" to={'/scoreboard'}>
          Scoreboard
        </Link>
      </div>
    </div>
  )
}

export default StartQuiz
