import React from 'react'
//import ScoreTable from './components/ScoreTable'
//import '../styles/Score.css'

function Score() {
  function onRestart() {
    console.log('restarted')
  }

  return (
    <div className="container">
      <h1 className="title">Quiz App</h1>

      <div className="result flex-center">
        <div className="flex">
          <span>Username</span>
          <span className="bold">Futureee</span>
        </div>

        <div className="flex">
          <span>Total Score</span>
          <span className="bold">20</span>
        </div>
      </div>

      <div className="restart">
        {/* <link className="btn" to={'/'} onClick={onRestart}>
          Restart
        </link>
         */}
      </div>
      <div className="container">
        {/*Score Table*/}
        {/* <ScoreTable></ScoreTable> */}
      </div>
    </div>
  )
}

export default Score
