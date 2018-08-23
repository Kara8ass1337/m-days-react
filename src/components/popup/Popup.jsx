import React from 'react';
import './popup.scss';
import propTypes from 'prop-types';
import autobind from 'autobind-decorator';
import Menu from '../menu/Menu';
import Donate from '../donate/Donate';

export default class Popup extends React.Component {
  constructor() {
    super();

    this.state = {
      activeContent: 'menu'
    };
  }

  /**
   *
   * @param state {boolean}
   */
  @autobind
  toggleStateContent(state) {
    if (typeof state === 'string') {
      this.setState({
        activeContent: state
      });
    }
  }

  render() {
    const { isActive, toggleState } = this.props;
    const { activeContent } = this.state;

    return (
      <div className={`popup-wrapper ${isActive ? 'is-active' : ''}`}>
        <div className="popup">
          {activeContent === 'menu' && (
            <Menu toggleStateContent={this.toggleStateContent} toggleStatePopup={toggleState} />
          )}

          {activeContent === 'donate' && (
            <Donate toggleStateContent={this.toggleStateContent} />
          )}
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
