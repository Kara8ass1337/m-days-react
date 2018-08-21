import React from 'react';
import { hot } from 'react-hot-loader';
import './assets/styles/styles.scss';
import Index from './pages/index';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Index />
    );
  }
}

export default hot(module)(App);
