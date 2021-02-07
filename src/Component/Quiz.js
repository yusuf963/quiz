import React from 'react'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import Selection from './Selection'
import Navigation from './Nav'
import './quiz.css'

const Quiz = () => {
  let correctIndex
  const [displayQuestion, updateDisplayQuestion] = useState([])
  const [token, setToken] = useState('')
  const [hasStarted, setHasStarted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [questionNumber, updateQuestionNumber] = useState(10)
  const [category, setCategory] = useState('20')
  const [score, updateScore] = useState(0)
  const [previousAnswer, setPreviousAnswer] = useState(null)

  // get a token from the site to allow you to recieve data
  useEffect(() => {
    fetch('https://opentdb.com/api_token.php?command=request')
      .then(result => result.json())
      .then(result => setToken(result.token))
      .catch((err) => {
        alert(err, 'token cannot be found')
      })
  },[])

  // gets data from the API
  function runApi() { 
    return new Promise(function(resolve, reject) { 
      fetch(`https://opentdb.com/api.php?amount=${questionNumber}&${!category ? '' : 'category'}=${category}&encode=base64&token=${token}`)
        .then(data => data.json())
        .then((response) => { 
          resolve(updateDisplayQuestion(response.results))
        }, 
        (error) => { 
          reject(console.log(error, 'Error making API call'))
        })
    }) 
  }

  // checks if an answer is correct or not, and then increments the score and current question
  function checkAnswer(input){
    setCurrentQuestion(currentQuestion + 1)
    if (input === correctIndex){
      updateScore(score + 1)
      setPreviousAnswer(true)
    } else {
      setPreviousAnswer(false)
    }
  }

  // resets the previousAnswer state to ensure an animation occurs
  useEffect(()=>{
    setTimeout(() => {
      setPreviousAnswer(null)
    }, 700)
  },[currentQuestion])
   
  // takes wrong answers + correct answer from the API, shuffles them and displays them for the user
  function displayAnswers(){

    let shuffled = [displayQuestion[currentQuestion].correct_answer]
    displayQuestion[currentQuestion].incorrect_answers.map((element) => {
      shuffled.push(element)
    })

    shuffled = shuffled.map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value) 

    correctIndex = shuffled.indexOf(displayQuestion[currentQuestion].correct_answer)
    return <>
    <p>Question #{currentQuestion + 1} / {displayQuestion.length}</p>
    <div className='currentquestion'>{atob(displayQuestion[currentQuestion].question)}</div>
    {(previousAnswer === false) && <p className='animated fadeOut isWrong'>WRONG</p>}
    {(previousAnswer === true) && <p className='animated fadeOut isCorrect'>CORRECT</p>}
    {shuffled.map((element, index) => {
      return <div className='anwsers-container' key={index}>
        <button id={index} className='questionBtn' value={index} onClick={()=> checkAnswer(index)}>
          {atob(element)}
        </button>
      </div>
    })}
    </>
  }

  // creates a spinning loader if the game is loading
  function displayLoader(){
    if (displayQuestion.length < 1){
      return <div style={{ padding: '100px' }}>
        <div className={'spinner-border text-success'} style={{ padding: '30px' }}role="status">
        </div>
      </div>
    }
  }

  // creates the main container where the quiz occurs
  return <div className='main-container'> <Navigation /> 
    {!hasStarted && ( <>
    <Selection 
      updateQuestionNumber={updateQuestionNumber}
      setCategory={setCategory}
      runApi={runApi}
      setHasStarted={setHasStarted}
    />
    </>) } 
    {hasStarted && <div className={'selection'}>
      {displayLoader()}
      {displayQuestion.length > 0 && <>
        {displayQuestion.length > currentQuestion && <>{displayAnswers()}</>}
        {currentQuestion === displayQuestion.length && <>
        {(previousAnswer === false) && <p className='animated fadeOut isWrong'>WRONG</p>}
        {(previousAnswer === true) && <p className='animated fadeOut isCorrect'>CORRECT</p>}
        <h1>Game over!</h1>
        {<Link className='play-now' to='/quiz'>Play again?</Link>}
        </>}
        {<p>Your score is: {score}/{questionNumber}</p>}
        </>}</div>}
  </div> 
}
export default Quiz


