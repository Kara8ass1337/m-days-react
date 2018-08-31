import React from 'react';
import './menu-btn.scss';
import propTypes from 'prop-types';
import autobind from 'autobind-decorator';

export default class MenuBtn extends React.Component {
  @autobind
  handleClick() {
    const { toggleState } = this.props;

    toggleState();
  }

  render() {
    const { isActive } = this.props;

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

MenuBtn.propTypes = {
  isActive: propTypes.bool,
  toggleState: propTypes.func.isRequired
};

MenuBtn.defaultProps = {
  isActive: false
};
