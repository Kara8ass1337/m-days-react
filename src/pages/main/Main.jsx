import React from 'react';
import './main.scss';
import ProgressIndicator from 'components/progressIndicator/ProgressIndicator';

export default function Main() {
  return (
    <React.Fragment>
      <ProgressIndicator />

      <div className="bg" />
      <div className="next-bg" />
    </React.Fragment>
  );
}
