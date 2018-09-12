import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import About from './pages/About/About';
import './assets/styles/styles.scss';

const App = () => (
  <Router>
    <div className="mainWrapper">
      <Route exact path="/" component={Main} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

export default hot(module)(App);
