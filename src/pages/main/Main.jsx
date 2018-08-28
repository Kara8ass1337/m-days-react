import React from 'react';
import './main.scss';
import ProgressIndicator from 'components/progressIndicator/ProgressIndicator';
import MenuAndPopup from 'components/menu-and-popup/menuAndPopup';

export default function Main(routeProps) {
  return (
    <React.Fragment>
      <MenuAndPopup routeProps={routeProps} />
      <ProgressIndicator />

      <div className="bg" />
      <div className="next-bg" />
    </React.Fragment>
  );
}
