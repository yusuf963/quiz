import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Nav'
import './home.css'

const HomePage = () => {
  return <div className='main-container'>
    <Navigation />
    <div className='hero-intro'>
      <h1>Ultimate Trivia</h1>
      <p className='home-text'>Engage in thrilling trivia questions from a long list of categories. There are thousands of questions available!</p>
      <p className='home-text'>What score will you get?</p>
      <p className='home-text'>Best of luck!</p>
      <Link className='play-now' to='/quiz/quiz'>Play now </Link>
    </div>
  </div>
}

export default HomePage