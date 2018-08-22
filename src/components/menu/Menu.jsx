import React from 'react';
import './menu.scss';

export default class Menu extends React.PureComponent {
  constructor() {
    super();

    this.state = {};
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
            <a href="#">
              More about us
            </a>
            <a href="#">
              Go to main
            </a>
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
            <a>
              Donate
            </a>
          </div>
        </div>
      </div>
    );
  }
}
