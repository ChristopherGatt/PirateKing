import React from 'react'
import ResultTable from './ResultTable'
//import '../sttyles/Score.css'

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
          <span className="bold">Futureeee</span>
        </div>

        <div className="flex">
          <span>Total Score</span>
          <span className="bold">20</span>
        </div>
      </div>
      <div className="restart">
        <link className="btn" to={'/'} onClick={onRestart}>
          Restart
        </link>
      </div>
      <div className="container">
        {/*Score Table*/}
        <ResultTable></ResultTable>
      </div>
    </div>
  )
}

export default Score
