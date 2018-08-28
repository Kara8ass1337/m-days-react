import React from 'react';
import './menu.scss';
import propTypes from 'prop-types';
import autobind from 'autobind-decorator';
import { Link } from 'react-router-dom';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  @autobind
  handleDonateClick(e) {
    const { toggleStateContent } = this.props;

    e.preventDefault();

    toggleStateContent('donate');
  }

  @autobind
  handleGoToMainClick(e) {
    const { toggleStateMenu } = this.props;

    e.preventDefault();

    toggleStateMenu(false);
  }

  @autobind
  handleMoreAboutUsClick(e) {
    const { toggleStateMenu } = this.props;

    e.preventDefault();

    toggleStateMenu(false);
  }

  render() {
    return (
      <div className="menu">
        <div className="popup__logo">
          <img src="/img/logo.png" alt="" />
        </div>
        <div className="popup__title">
          Monochrome days
        </div>
        <div className="popup__items-wrapper">
          <div className="popup__item">
            Photo project for bwlovers. Our website
            <br />
            displays the percentage of days passed this year
            <br />
            accompanied with best author&apos;s photos.
          </div>
          <div className="popup__item">
            {/* {activePage === 'about' && (
              <a href="#" onClick={this.handleGoToMainClick}>
                Go to main
              </a>
            )} */}

            <Link to="/about">
              More about us
            </Link>

            <h3>
              ID:
              {this.props.match}
            </h3>

            {/* {activePage === 'main' && (
              <a href="#" onClick={this.handleMoreAboutUsClick}>
                More about us
              </a>
            )} */}
          </div>
          <div className="popup__item">
            Send us your works to
            <a href="mailto:m-days@m-days.ru">
              m-days@m-days.ru
            </a>
            <br />
            (please tell your name and link
            <br />
            if you want to be in the list of authors).
            <br />
            And post them in socials with
            <a href="https://instagram.com/explore/tags/mdays/" target="_blank" rel="noopener noreferrer">
              #mdays
            </a>
          </div>
          <div className="popup__item">
            follow us at
          </div>
          <div className="popup__item">
            <div className="menu__soc-btns-wrapper">
              <div className="menu__soc-btn insta">
                <a href="https://instagram.com/m0nochrome_days/" target="_blank" rel="noopener noreferrer">
                  <img src="/img/insta.png" alt="" />
                </a>
              </div>
              <div className="menu__soc-btn vk">
                <a href="https://vk.com/mono_days" target="_blank" rel="noopener noreferrer">
                  <img src="/img/vk.png" alt="" />
                </a>
              </div>
              <div className="menu__soc-btn twit">
                <a href="https://twitter.com/MonochromeDays" target="_blank" rel="noopener noreferrer">
                  <img src="/img/twitter.png" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="popup__item">
            <a href="#" onClick={this.handleDonateClick}>
              Donate
            </a>
          </div>
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  toggleStateContent: propTypes.func.isRequired,
  toggleStateMenu: propTypes.func.isRequired
};
