import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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
      activeContent: 'menu',
      isInit: true
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({
        isInit: false
      });
    }, 50); // prevent transition of element when it's got to DOM
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
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
    const { activeContent, isInit } = this.state;

    return (
      <div className={`popup-wrapper ${isActive ? 'is-active' : ''} ${isInit ? 'is-init' : ''}`}>
        <div className="popup">
          <ReactCSSTransitionGroup
            transitionName="popup"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}>
            {activeContent === 'menu' && (
              <Menu
                routeProps={routeProps}
                toggleStateContent={this.toggleStateContent}
                toggleStateMenu={toggleState} />
            )}

            {activeContent === 'donate' && (
              <Donate toggleStateContent={this.toggleStateContent} />
            )}
          </ReactCSSTransitionGroup>
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
