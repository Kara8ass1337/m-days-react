import React from 'react';
import { hot } from 'react-hot-loader';
import './assets/styles/styles.scss';
import Main from './pages/main/main';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Main />
    );
  }
}

export default hot(module)(App);
