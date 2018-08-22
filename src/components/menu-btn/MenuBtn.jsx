import React from 'react';
import './menu-btn.scss';
import autobind from 'autobind-decorator';

export default class MenuBtn extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      isActive: false
    };
  }

  @autobind
  handleClick() {
    this.toggleState();
  }

  /**
   *
   * @param [state] {boolean}
   */
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
      <button
        type="button"
        className={`menu-btn ${isActive ? 'is-active' : ''}`}
        onClick={this.handleClick}>
        <span className="menu-btn__helper" />
      </button>
    );
  }
}
