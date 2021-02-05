import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Quiz from './Component/Quiz'
import About from './Component/About.js'
import HomePage from './Component/HomePage.js'
import './styles/style.scss'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/quizapp/home" component={() => <HomePage />} />
      <Route path="/quizapp/quiz" component={() => <Quiz />} />
      <Route path="/quizapp/about" component={() => <About />} />
      <Redirect to="/quizapp/home" />
    </Switch>
  </BrowserRouter>
)

export default App