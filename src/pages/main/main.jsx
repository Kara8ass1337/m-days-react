import React from 'react';
import './main.scss';
import ProgressIndicator from 'components/progressIndicator/ProgressIndicator';
import MenuBtn from 'components/menu-btn/MenuBtn';
import Popup from 'components/popup/Popup';
import autobind from 'autobind-decorator';

export default class Main extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      isActive: false
    };
  }

  /**
   *
   * @param [state] {boolean}
   */
  @autobind
  toggleState(state) {
    const { isActive } = this.state;

    if (typeof state === 'boolean') {
      this.setState({
        isActive: state
      });
    } else {
      this.setState({
        isActive: !isActive
      });
    }
  }

  render() {
    const { isActive } = this.state;

    return (
      <div className="main-wrapper">
        <MenuBtn isActive={isActive} toggleState={this.toggleState} />
        <Popup isActive={isActive} toggleState={this.toggleState} />
        <ProgressIndicator />

        <div className="bg" />
        <div className="next-bg" />
      </div>
    );
  }
}
