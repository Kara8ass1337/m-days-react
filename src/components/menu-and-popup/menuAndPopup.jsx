import React from 'react';
import autobind from 'autobind-decorator';

import MenuBtn from 'components/menu-btn/MenuBtn';
import Popup from 'components/popup/Popup';

export default class MenuAndPopup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuIsActive: false
    };
  }

  /**
   *
   * @param [state] {boolean}
   */
  @autobind
  toggleMenuState(state) {
    const { menuIsActive } = this.state;

    if (typeof state === 'boolean') {
      this.setState({
        menuIsActive: state
      });
    } else {
      this.setState({
        menuIsActive: !menuIsActive
      });
    }
  }

  render() {
    const { menuIsActive } = this.state;

    return (
      <React.Fragment>
        <MenuBtn isActive={menuIsActive} toggleState={this.toggleMenuState} />
        <Popup isActive={menuIsActive} toggleState={this.toggleMenuState} />
      </React.Fragment>
    );
  }
}
