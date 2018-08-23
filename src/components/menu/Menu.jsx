import React from 'react';
import './menu.scss';
import propTypes from 'prop-types';
import autobind from 'autobind-decorator';

export default class Menu extends React.PureComponent {
  @autobind
  handleDonateClick(e) {
    const { toggleStateContent } = this.props;

    e.preventDefault();

    toggleStateContent('donate');
  }

  @autobind
  handleGoToMainClick(e) {
    const { toggleStateMenu, changePage } = this.props;

    e.preventDefault();

    toggleStateMenu(false);
    changePage('main');
  }

  @autobind
  handleMoreAboutUsClick(e) {
    const { toggleStateMenu, changePage } = this.props;

    e.preventDefault();

    toggleStateMenu(false);
    changePage('about');
  }

  render() {
    const { activePage } = this.props;

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
            {activePage === 'about' && (
              <a href="#" onClick={this.handleGoToMainClick}>
                Go to main
              </a>
            )}

            {activePage === 'main' && (
              <a href="#" onClick={this.handleMoreAboutUsClick}>
                More about us
              </a>
            )}
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
  activePage: propTypes.string.isRequired,
  changePage: propTypes.func.isRequired,
  toggleStateContent: propTypes.func.isRequired,
  toggleStateMenu: propTypes.func.isRequired
};
