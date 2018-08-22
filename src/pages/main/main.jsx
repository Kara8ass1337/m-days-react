import React from 'react';
import './main.scss';
import ProgressIndicator from 'components/progressIndicator/ProgressIndicator';

export default class Main extends React.PureComponent {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="main-wrapper">
        {/* todo: menu-btn;
        todo: popup; */}
        <ProgressIndicator />

        <div className="bg" />
        <div className="next-bg" />
      </div>
    );
  }
}
