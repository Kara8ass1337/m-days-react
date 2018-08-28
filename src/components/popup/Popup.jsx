import React from 'react';
import propTypes from 'prop-types';
import autobind from 'autobind-decorator';

import Menu from 'components/menu/Menu';
import Donate from 'components/donate/Donate';
import './popup.scss';

import routePropsShape from 'assets/helpers/routePropsShape';

export default class Popup extends React.Component {
  constructor(props) {
    super(props);

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
    const { isActive, toggleState, routeProps } = this.props;
    const { activeContent } = this.state;

    return (
      <div className={`popup-wrapper ${isActive ? 'is-active' : ''}`}>
        <div className="popup">
          {activeContent === 'menu' && (
            <Menu
              routeProps={routeProps}
              toggleStateContent={this.toggleStateContent}
              toggleStateMenu={toggleState} />
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
  routeProps: routePropsShape.isRequired,
  isActive: propTypes.bool,
  toggleState: propTypes.func.isRequired
};

Popup.defaultProps = {
  isActive: false
};
