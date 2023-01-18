import React, { useEffect, useState } from 'react'

import { useQuery } from '@apollo/client'
import { QUERY_ME, QUERY_QUESTIONS } from '../utils/queries'
import Auth from '../utils/auth'

const Home = () => {
  const { data } = useQuery(QUERY_ME)
  const res = useQuery(QUERY_QUESTIONS)
  // introduce a useState to track correctly answered questions and display to screen
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState('')

  return (
    <div className="container">
      <h1>Welcome {Auth.loggedIn() ? data?.me.email : 'no user'}</h1>

      <div>
        {Auth.loggedIn()
          ? res.data?.questions.map((q) => (
              <div>
                {/* {/*  instead of p tag make it a button with onClick function to check correct answer or not, make interactive where correct answer changes button color/*} */}
                <h1>{q.question}</h1>

                {
                  <button
                    key={q.answer1}
                    style={{ cursor: 'pointer' }}
                    onClick={() => {}}
                  ></button>
                }

                <p>a: {q.answer1}</p>

                <p>b: {q.answer2}</p>
                <p>c: {q.answer3}</p>
                <p>d: {q.answer4}</p>
              </div>
            ))
          : ''}
      </div>
    </div>
  )
}

export default Home
