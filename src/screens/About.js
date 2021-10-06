import React from 'react';
import Navigation from '../Component/Nav';
import './About.css';

class About extends React.Component {
  render() {
    return (
      <div className='main-container'>
        <Navigation />
        <div className='about-container'>
          <h1 className='header-about'> The Project</h1>
          <p className='parag-about'>
            This project is create for Colmore Co &apos;s Software Engineering.
            <br></br>Technologies used: <br></br>
            HTML <br></br>
            CSS/SASS <br></br>
            ReactJS <br></br>
            Axios <br></br>
            Browser localStorage <br></br>
            Bootstrap <br></br>
          </p>
        </div>
      </div>
    );
  }
}

export default About;
