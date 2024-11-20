import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className="home-section">
    <div className="title-container">
      <h1 className="title">
        <span>Student</span>
        <span>Developers</span>
        <span>Initiative</span>
      </h1>
    </div>
    <div className="subtitle">
      <h2>&lt;We dream tech /&gt;</h2>
    </div>
      <div className="arrow-down">
      <a href="/register"><i class="fa-solid fa-caret-down"></i></a>
      </div>
  </div>
  )
}

export default Home
