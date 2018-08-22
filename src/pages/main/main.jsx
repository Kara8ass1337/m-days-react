import React from 'react';
import './main.scss';
import ProgressIndicator from 'components/progressIndicator/ProgressIndicator';
import MenuBtn from 'components/menu-btn/MenuBtn';

export default class Main extends React.PureComponent {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="main-wrapper">
        <MenuBtn />
        <ProgressIndicator />

        <div className="bg" />
        <div className="next-bg" />
      </div>
    );
  }
}
