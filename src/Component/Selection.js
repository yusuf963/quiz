import React from 'react'
import './selection.css'

const Selection = ({ updateQuestionNumber, setCategory, runApi, setHasStarted }) => {
  return <>
  <div className='selection'>
    <h1>Choose your quiz</h1>
    <select onChange={(e)=>{
      updateQuestionNumber(e.target.value)
    }}>
      <option> Number of Questions</option>
      <option value='5'>5</option>
      <option value='10'>10</option>
      <option value='15'>15</option>
      <option value='20'>20</option>
    </select>
    <br />
    <select onChange={(e) => setCategory(e.target.value)}>
      <option value=''>Select Category</option>
      <option value=''>Any</option>
      <option value='9'>General Knowledge</option>
      <option value='10'>Entertainment: Books</option>
      <option value='11'>Entertainment: Film</option>
      <option value='12'>Entertainment: Music</option>
      <option value='13'>Entertainment: Musicals and Theatres</option>
      <option value='14'>Entertainment: Television</option>
      <option value='15'>Entertainment: Video Games</option>
      <option value='16'>Entertainment: Board Games</option>
      <option value='31'>Entertainment: Japanese Anime and Manga</option>
      <option value='32'>Entertainment: Cartoon and Animations</option>
      <option value='29'>Entertainment: Comics</option>
      <option value='17'>Science and Nature</option>
      <option value='18'>Science: Computers</option>
      <option value='19'>Science: Maths</option>
      <option value='30'>Science: Gadgets</option>
      <option value='20'>Mythology</option>
      <option value='21'>Sports</option>
      <option value='22'>Geography</option>
      <option value='23'>History</option>
      <option value='24'>Politics</option>
      <option value='25'>Art</option>
      <option value='26'>Celebrities</option>
      <option value='27'>Animals</option>
      <option value='28'>Vehicles</option>
    </select>
    <button className='start-game' onClick={()=> {
      runApi()
      setHasStarted(true)
    }}>Start Quiz</button>
  </div>
</>
}

export default Selection