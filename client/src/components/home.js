import React, { useRef } from 'react'

function Home() {
  const inputRef = useRef(null)

  return (
    <div className="container">
      <h1 className="title"> Ultimate General Knowledge Quiz!!! </h1>

      <form id="name">
        <input ref={inputRef} type="text" placeholder="Enter a user name*" />
      </form>

      <div className="start">
        <link className="btn" to={'game'}></link>
      </div>

      <div className="score">
        <link className="btn" to={'score'}></link>
      </div>
    </div>
  )
}

export default Home
