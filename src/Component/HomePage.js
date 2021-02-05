import React from 'react'
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
      <a className='play-now' href='/quiz'>Play now </a> 
    </div>
  </div> 
}

export default HomePage