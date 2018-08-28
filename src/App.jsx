import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MenuAndPopup from './components/menu-and-popup/menuAndPopup';
import Main from './pages/main/Main';
import About from './pages/about/About';
import './assets/styles/styles.scss';

const PrimaryLayout = ({ match }) => {
  //console.log(match.url);

  return (
    <div className="main-wrapper">
      <MenuAndPopup />

      <Route exact path="/" component={Main} />
      <Route path="/about" component={About} />
    </div>
  );
};

const App = ({ match }) => {
  console.log(match.url);

  return (
    <Router>
      <PrimaryLayout />
    </Router>
  );
};

export default hot(module)(App);
