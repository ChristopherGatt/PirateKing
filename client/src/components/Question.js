import React from 'react'

const getButtonColor = (v, i, c) => {
  if (v === -1) {
    return ''
  }

  if (v === i) {
    return c ? 'correct' : 'incorrect'
  }

  return ''
}

function Question({ data, answer = -1, correct = false, onClick, n }) {
  return (
    <div className="question-card">
      <h3 className="py-2">
        {n} : {data?.question}
      </h3>
      <div className="flex-row gap">
        {data?.answers?.map((string, i) => (
          <button
            key={i}
            className={getButtonColor(answer, i, correct)}
            onClick={() => onClick(i)}
            disabled={answer !== -1}
          >
            {string}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Question
