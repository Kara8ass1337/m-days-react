import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from './pages/main/Main';
import About from './pages/about/About';
import './assets/styles/styles.scss';

const App = () => (
  <Router>
    <div className="main-wrapper">
      <Route exact path="/" component={Main} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

export default hot(module)(App);
