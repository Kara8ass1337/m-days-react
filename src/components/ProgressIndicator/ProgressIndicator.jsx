import React from 'react';
import './progress-indicator.scss';
import twoDigitsAlways from 'assets/helpers/twoDigitsAlways';
import moment from 'moment';

moment.locale('en-bgInit');

export default class ProgressIndicator extends React.PureComponent {
  static getValues() {
    const date = moment();
    const day = parseInt(date.format('DD'), 10);
    const month = parseInt(date.format('MM'), 10);
    const monthText = date.format('MMMM');
    const year = parseInt(date.format('YYYY'), 10);
    const hours = parseInt(date.format('HH'), 10);
    const minutes = parseInt(date.format('mm'), 10);
    const seconds = parseInt(date.format('ss'), 10);
    const milliseconds = parseInt(date.format('SSS'), 10);
    const yearStart = moment([year, 0, 1]);
    const daysInYear = moment([year, 11, 31]).diff(yearStart, 'days') + 1;
    const dayCount = date.diff(yearStart, 'days') + 1;
    const perMilliSec = dayCount * 24 * 60 * 60 * 1000
      + hours * 60 * 60 * 1000
      + minutes * 60 * 1000
      + seconds * 1000 + milliseconds;
    const full = 365 * 24 * 60 * 60 * 1000;
    const progress = perMilliSec / full * 100;
    const progressFull = progress.toFixed(7);
    const progressShort = progressFull.toString().slice(0, (progressFull.indexOf('.') + 3));

    return {
      date,
      day,
      month,
      year,
      hours,
      minutes,
      seconds,
      milliseconds,
      dayCount,
      daysInYear,
      monthText,
      progress,
      progressFull,
      progressShort
    };
  }

  constructor() {
    super();

    this.state = {
      values: ProgressIndicator.getValues()
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        values: ProgressIndicator.getValues()
      });
    }, 100);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { values } = this.state;

    return (
      <div className="progress-indicator">
        <div className="progress-indicator__shadow">
          <div className="progress-indicator__wrapper">
            <div className="progress-indicator__left">
              <div className="progress-indicator__year">
                <span>
                  {values.year}
                </span>
              </div>
              <div className="progress-indicator__month">
                <span>
                  {`${values.day}
                      ${values.monthText}`}
                </span>
              </div>
            </div>
            <div className="progress-indicator__center">
              <div className="progress-indicator__time">
                <span className="progress-indicator__time__hours">
                  {twoDigitsAlways(values.hours)}
                  :
                </span>
                <span className="progress-indicator__time__minutes">
                  {twoDigitsAlways(values.minutes)}
                </span>
                <span className="progress-indicator__time__seconds">
                  {twoDigitsAlways(values.seconds)}
                </span>
              </div>
              <div className="progress-indicator__progress-bar">
                <div className="progress-indicator__progress-bar__bg" />
                <div
                  className="progress-indicator__progress-bar__walking"
                  style={{ width: `${values.progressFull}%` }} />
              </div>
              <div className="progress-indicator__day">
                {`${values.dayCount} of ${values.daysInYear} `}
                monochrome&nbsp;days
              </div>
            </div>
            <div className="progress-indicator__right">
              <div className="progress-indicator__percent">
                <span>
                  {values.progressShort}
                  %
                </span>
              </div>
              <div className="progress-indicator__percent-full">
                <span>
                  {values.progressFull}
                  %
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
