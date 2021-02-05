import React from 'react'
import Navigation from './Nav'
import './About.css'

class About extends React.Component {
  render() {
    return (
      <div className='main-container'>
        <Navigation />
        <div className='about-container'>
          <h1 className='header-about'> The Project</h1>
          <p className='parag-about'>
            This project was created in 48 hours by Stefan and Yusuf as part of General Assembly&apos;s Software Engineering Immersive course.
          </p>
        </div>
      </div>
    )
  }
}

export default About