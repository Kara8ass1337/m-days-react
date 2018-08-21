import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import repeatDate from 'assets/helpers/repeatDate';
import twoDigitsAlways from 'assets/helpers/twoDigitsAlways';

export default class Index extends React.PureComponent {
  componentDidMount() {
    this.setState({
      progressIndicatorValues: repeatDate()
    });

    this.props.timer = setInterval(() => {
      this.setState({
        progressIndicatorValues: repeatDate()
      });
    }, 100);
  }

  componentWillUnmount() {
    const { timer } = this.props;

    clearInterval(timer);
  }

  render() {
    const { progressIndicatorValues } = this.state;

    return (
      <div className="main-wrapper">
        {/* todo: menu-btn;
        todo: popup; */}
        <div className="progress-indicator">
          <div className="progress-indicator__shadow">
            <div className="progress-indicator__wrapper">
              <div className="progress-indicator__left">
                <div className="progress-indicator__year">
                  <span>
                    {progressIndicatorValues.year}
                  </span>
                </div>
                <div className="progress-indicator__month">
                  <span>
                    {`${progressIndicatorValues.day}
                      ${progressIndicatorValues.monthText}`}
                  </span>
                </div>
              </div>
              <div className="progress-indicator__center">
                <div className="progress-indicator__time">
                  <span className="progress-indicator__time__hours">
                    {twoDigitsAlways(progressIndicatorValues.hours)}
                    :
                  </span>
                  <span className="progress-indicator__time__minutes">
                    {twoDigitsAlways(progressIndicatorValues.minutes)}
                  </span>
                  <span className="progress-indicator__time__seconds">
                    {twoDigitsAlways(progressIndicatorValues.seconds)}
                  </span>
                </div>
                <div className="progress-indicator__progress-bar">
                  <div className="progress-indicator__progress-bar__bg" />
                  <div
                    className="progress-indicator__progress-bar__walking"
                    style={`width: ${progressIndicatorValues.progressFull}`} />
                </div>
                <div className="progress-indicator__day">
                  {`${progressIndicatorValues.dayCount} of
                    ${progressIndicatorValues.daysInYear}`}
                  monochrome&nbsp;days
                </div>
              </div>
              <div className="progress-indicator__right">
                <div className="progress-indicator__percent">
                  <span>
                    {progressIndicatorValues.progressShort}
                    %
                  </span>
                </div>
                <div className="progress-indicator__percent-full">
                  <span>
                    {progressIndicatorValues.progressFull}
                    %
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg" />
        <div className="next-bg" />
      </div>
    );
  }
}

Index.propTypes = {
  timer: PropTypes.func
};
