import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Quiz from './Component/Quiz'
import About from './Component/About.js'
import HomePage from './Component/HomePage.js'
import './styles/style.scss'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/home" component={() => <HomePage />} />
      <Route path="/quiz" component={() => <Quiz />} />
      <Route path="/about" component={() => <About />} />
      <Redirect to="/home" />
    </Switch>
  </BrowserRouter>
)

export default App