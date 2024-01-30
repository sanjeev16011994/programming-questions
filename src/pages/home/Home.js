import React from 'react'
import "./home.scss"
import pg from "../../assets/images/programming-languages.jpg"

const Home = () => {
  return (
    <div className='home-container' >
      <h1>Welcome to Programming Questions</h1>
      <p>"Unlock the secrets to successful interviews with our comprehensive collection of interview questions, expert tips, and real-world insights."</p>
      <img src={pg} alt='pg' ></img>
    </div>
  )
}

export default Home