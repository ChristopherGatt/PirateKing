import React from 'react'
import Questions from './Questions'

function Game() {
  function nextClick() {
    console.log('next click')
  }

  return (
    <div className="container">
      <h1 className="title">Game App</h1>
      {/* Display questions*/}

      <Questions></Questions>

      <div className="grid">
        <button className="btn next" onClick={nextClick}>
          Next
        </button>
      </div>
    </div>
  )
}

export default Game
