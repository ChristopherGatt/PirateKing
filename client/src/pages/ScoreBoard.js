import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'

import { QUERY_ME, QUERY_SCORES } from '../utils/queries'
import auth from '../utils/auth'

const ScoreBoard = () => {
  //GraphQL queries to get scores of users and logged in user data
  const { data: me } = useQuery(QUERY_ME)
  const { data } = useQuery(QUERY_SCORES)
  //State to manage scores
  const [scores, setScores] = useState([])

  //populate scores in state using effects
  useEffect(() => {
    if (data) {
      setScores(data.scores)
    }
  }, [data])

  return (
    <div className="scoreboard-card">
      <div className="flex-column gap align-items-center">
        <h2 className="py-2">Score Board</h2>
        <table>
          <thead className="table-header">
            <tr className="table-row">
              <th>User</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((e, i) => (
              <tr
                key={i}
                className={
                  auth.loggedIn() && me?.me.email && me?.me.email === e.user
                    ? 'current-user'
                    : ''
                }
              >
                <td>{e.user}</td>
                <td>{e.name}</td>
                <td>{e.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ScoreBoard
