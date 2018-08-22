import React from 'react';
import './popup.scss';
import propTypes from 'prop-types';
import Menu from '../menu/Menu';

export default class Popup extends React.Component {
  constructor() {
    super();

    this.state = {
      activeContent: 'menu'
    };
  }

  render() {
    const { isActive } = this.props;

    return (
      <div className={`popup-wrapper ${isActive ? 'is-active' : ''}`}>
        <div className="popup">
          <Menu />
        </div>
      </div>
    );
  }
}

Popup.propTypes = {
  isActive: propTypes.bool,
  toggleState: propTypes.func.isRequired
};

Popup.defaultProps = {
  isActive: false
};
