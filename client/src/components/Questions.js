import React, { useState } from 'react'

function Questions() {
  const [checked, setChecked] = useState(undefined)

  const question = data[0]

  function onSelect() {
    setChecked(true)
    console.log('radio button change')
  }

  return (
    <div className="questions">
      <h2 className="text">{question.question}</h2>

      <ul key={question.id}>
        {
          (question,
          options.map((q, i) => (
            <li key={i}>
              <input
                type="radio"
                value={true}
                name="options"
                id={`q${i}-option`}
                onChange={onSelect()}
              />
              <label className="primary text" htmlFor={`q${i}-option`}>
                {q}
              </label>
              <div className="check checked"></div>
            </li>
          )))
        }
      </ul>
    </div>
  )
}

export default Questions
