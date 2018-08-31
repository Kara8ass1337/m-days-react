import React from 'react';
import { v4 } from 'uuid';
import MenuAndPopup from 'components/MenuAndPopup';
import LinkExternal from 'components/LinkExternal';
import members from './members';
import './about.scss';

export default class About extends React.PureComponent {
  constructor(routeProps) {
    super(routeProps);

    this.routeProps = routeProps;
  }

  render() {
    const { routeProps } = this;

    return (
      <React.Fragment>
        <MenuAndPopup routeProps={routeProps} />
        <div className="about">
          <div className="about__title">
            Project Owners
          </div>
          <div className="about__members-wrapper">
            {/* Олег Шилов */}
            <div className="about__member">
              <LinkExternal href="https://vk.com/id15927588" target="_blank">
                <img className="about__member__img" src="/img/about/shilov.jpg" alt="" />
              </LinkExternal>
              <div className="about__member__name">
                <LinkExternal href="https://vk.com/id15927588" target="_blank">
                  Oleg
                  <br />
                  Shilov
                </LinkExternal>
              </div>
            </div>
            {/* Гордей Переходов */}
            <div className="about__member">
              <LinkExternal href="https://vk.com/likilo" target="_blank">
                <img className="about__member__img" src="/img/about/perekhodov.jpg" alt="" />
              </LinkExternal>
              <div className="about__member__name">
                <LinkExternal href="https://vk.com/likilo" target="_blank">
                  Gordey
                  <br />
                  Perekhodov
                </LinkExternal>
              </div>
            </div>
          </div>
          <div className="about__title">
            Project Members
          </div>
          <div className="about__members-wrapper">
            {members.map(memberCur => (
              <div key={v4()} className="about__member">
                <LinkExternal href={memberCur.href} target="_blank">
                  <img className="about__member__img" src={memberCur.img} alt="" />
                </LinkExternal>
                <div className="about__member__name">
                  <LinkExternal href={memberCur.href} target="_blank">
                    <span>
                      {memberCur.name}
                    </span>
                    <br />
                    <span>
                      {memberCur.surname}
                    </span>
                  </LinkExternal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
