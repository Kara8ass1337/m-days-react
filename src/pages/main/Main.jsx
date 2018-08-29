import React from 'react';
import ProgressIndicator from 'components/progressIndicator/ProgressIndicator';
import MenuAndPopup from 'components/menu-and-popup/menuAndPopup';
import Bg from 'components/bg/Bg';
import './main.scss';
import redirectWithRouter from 'assets/helpers/redirectWithRouter';

export default class Main extends React.Component {
  constructor(routeProps) {
    super(routeProps);

    this.routeProps = routeProps;
  }

  componentDidMount() {
    redirectWithRouter(this.routeProps);
  }

  render() {
    const { routeProps } = this;

    return (
      <React.Fragment>
        <MenuAndPopup routeProps={routeProps} />
        <ProgressIndicator />
        <Bg />
      </React.Fragment>
    );
  }
}
