import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Component/Nav';
import FilteringPage from './StockTime';
import '../screens/landingPage.css';

const landingPage = () => {
  const [apiKey, updateApiKey] = useState(null);

  const handleChange = (e) => {
    updateApiKey(e.target.value);
    localStorage.setItem('apiKey', apiKey);
  };
  return (
    <div className='main-container'>
      <Navigation />
      <div className='hero-intro'>
        <p className='home-text'>
          Alpha Vantage API Documentation available here now!
        </p>
        <input
          placeholder='Enter your Api key here'
          onChange={handleChange}
        ></input>
        {console.log(apiKey)}
        <Link className='submit-btn' to='/data'>
          Submit
        </Link>
      </div>
    </div>
  );
};

export default landingPage;

//what is Api ky functonality
