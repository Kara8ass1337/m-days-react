import React from 'react';
import './menu.scss';
import propTypes from 'prop-types';
import autobind from 'autobind-decorator';
import { Link } from 'react-router-dom';
import routePropsShape from 'assets/helpers/routePropsShape';
import BtnLink from 'components/BtnLink';
import LinkExternal from 'components/LinkExternal';

export default class Menu extends React.Component {
  @autobind
  handleDonateClick() {
    const { toggleStateContent } = this.props;

    toggleStateContent('donate');
  }

  @autobind
  handleLinkClick() {
    const { toggleStateMenu } = this.props;

    toggleStateMenu(false);
  }

  render() {
    const { routeProps } = this.props;
    const { match } = routeProps;

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
            {match.path === '/about' && (
              <Link to="/" onClick={this.handleLinkClick}>
                Go to main
              </Link>
            )}

            {match.path === '/' && (
              <Link to="/about" onClick={this.handleLinkClick}>
                More about us
              </Link>
            )}
          </div>
          <div className="popup__item">
            Send us your works to
            <LinkExternal href="mailto:m-days@m-days.ru">
              m-days@m-days.ru
            </LinkExternal>
            <br />
            (please tell your name and link
            <br />
            if you want to be in the list of authors).
            <br />
            And post them in socials with
            <LinkExternal href="https://instagram.com/explore/tags/mdays/" target="_blank">
              #mdays
            </LinkExternal>
          </div>
          <div className="popup__item">
            follow us at
          </div>
          <div className="popup__item">
            <div className="menu__soc-btns-wrapper">
              <div className="menu__soc-btn insta">
                <LinkExternal href="https://instagram.com/m0nochrome_days/" target="_blank">
                  <img src="/img/insta.png" alt="" />
                </LinkExternal>
              </div>
              <div className="menu__soc-btn vk">
                <LinkExternal href="https://vk.com/mono_days" target="_blank">
                  <img src="/img/vk.png" alt="" />
                </LinkExternal>
              </div>
              <div className="menu__soc-btn twit">
                <LinkExternal href="https://twitter.com/MonochromeDays" target="_blank">
                  <img src="/img/twitter.png" alt="" />
                </LinkExternal>
              </div>
            </div>
          </div>
          <div className="popup__item">
            <BtnLink onClick={this.handleDonateClick}>
              Donate
            </BtnLink>
          </div>
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  routeProps: routePropsShape.isRequired,
  toggleStateContent: propTypes.func.isRequired,
  toggleStateMenu: propTypes.func.isRequired
};