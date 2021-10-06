import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from '../Component/Nav';
import * as ReactBootStrap from 'react-bootstrap';

const FilteringPage = () => {
  const [selectCompany, updateSelectCompany] = useState(null);
  const [companyName, setCompanyName] = useState(null);
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setCompanyName(e.target.value);
  };
  //get the apiKey from local storage
  if (localStorage) {
    console.log(localStorage.apiKey);
    // gets data from the API
    useEffect(() => {
      axios
        .get(
          `https://www.alphaantage.co/query?function=SYMBOL_SEARCH&keywords=${companyName}&apikey=${sessionStorage.apiKey}`
        )
        .then((res) => {
          setData(res.data);
        });
    }, [companyName]);

    console.log('returned data', data);
  }

  return (
    <div className='main-container'>
      <Navigation />
      <div className='hero-intro'>
        <h5 className='home-text'>Select Company</h5>
        <select onChange={(e) => updateSelectCompany(e.target.value)}>
          {console.log(selectCompany)}
          <option>Select</option>
          <option value='MSFT'>Microsoft</option>
          <option value='IBM'>IBM</option>
          <option value='Apple'>Apple</option>
        </select>
        <h5>--OR--</h5>
        <h5 className='home-text'> Search by Company name</h5>
        <input
          placeholder='Type company name here'
          onChange={handleChange}
        ></input>
        {console.log('typed here', companyName)}
        <h4>RECENT END OF DAY PRICES</h4>

        <ReactBootStrap.Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Open</th>
              <th>Hight</th>
              <th>Low</th>
              <th>close</th>
              <th>adjusted close</th>
              <th>Volume</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
            </tr>
            <tr>
              <td>2</td>
            </tr>
            <tr>
              <td>3</td>
            </tr>
          </tbody>
        </ReactBootStrap.Table>
      </div>
    </div>
  );
};

export default FilteringPage;
