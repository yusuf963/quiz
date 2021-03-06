import React from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import Quiz from './Component/Quiz'
import About from './Component/About.js'
import HomePage from './Component/HomePage.js'
import './styles/style.scss'

const App = () => (
  <HashRouter>
    <Switch>
      <Route path="/quiz/home" component={HomePage} />
      <Route path="/quiz/quiz" component={Quiz} />
      <Route path="/quiz/about" component={About} />
      <Redirect to="/quiz/home" />
    </Switch>
  </HashRouter>
)

export default App