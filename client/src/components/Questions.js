import React, { useState } from 'react'
import Questions from '../../../server/models/questions'

function Questions() {
  const [checked, setChecked] = useState(undefined)

  const question = data[0]

  function onSelect() {
    setChecked(true)
    console.log('radio button change')
  }

  return (
    <div className="questions">
      <h2 className="text">Question 1</h2>

      <ul key={question.id}>
        <li>
          <input
            type="radio"
            value={true}
            name="options"
            id="g1-option"
            onChange={onSelect()}
          />
          <label className="primary text" htmlFor="q1-option"></label>
          <div className="check checked"></div>
        </li>
      </ul>
    </div>
  )
}

export default Questions
