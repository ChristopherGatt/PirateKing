import React from 'react'

import { useQuery } from '@apollo/client'
import { QUERY_ME } from '../utils/queries'
import Auth from '../utils/auth'
import StartQuiz from '../components/StartQuiz'

const Home = () => {
  const { data } = useQuery(QUERY_ME)
  // introduce a useState to track correctly answered questions and display to screen
  return (
    <div className="container">
      {Auth.loggedIn() && (
        <h3>
          Welcome {data?.me.firstName} {data?.me.lastName}!
        </h3>
      )}
      <br />
      <StartQuiz />
    </div>
  )
}

export default Home
