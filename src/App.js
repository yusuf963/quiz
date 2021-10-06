import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import About from './screens/About.js';
import './styles/style.scss';
import LandingPage from './screens/LandingnPage';
import StockTime from './screens/StockTime';

const App = () => (
  <HashRouter>
    <Switch>
      <Route path='/home' component={LandingPage} />
      <Route path='/data' component={StockTime} />
      <Route path='/about' component={About} />
      <Redirect to='/home' />
    </Switch>
  </HashRouter>
);

export default App;
