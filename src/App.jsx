import React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    return (
      <React.Fragment>
        m-days new frontend
      </React.Fragment>
    );
  }
}

export default hot(module)(App);
