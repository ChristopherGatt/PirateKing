import React, { useState, useEffect } from 'react'
import data from './database/data.json'

import { useSelector } from 'react-redux'

function Questions() {
  const [checked, setChecked] = useState(undefined)

  const question = data[0]

  const { questions } = useSelector((state) => state)

  useEffect(() => {
    console.log({ questions })
    console.log({ question })
  }, [])

  function onSelect() {
    setChecked(true)
    console.log('radio button change')
  }

  return (
    <div className="questions">
      <h2 className="text">{question.question}</h2>

      <ul key={question.id}>
        {questions?.map((q, i) => (
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
        ))}
      </ul>
    </div>
  )
}

export default Questions
