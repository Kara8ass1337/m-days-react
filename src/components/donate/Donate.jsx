import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './donate.scss';
import propTypes from 'prop-types';
import autobind from 'autobind-decorator';
import BtnLink from 'components/btnLink/BtnLink';
import LinkExternal from 'components/linkExternal/LinkExternal';
import payPalKey from './payPalKey';

export default class Donate extends React.Component {
  constructor() {
    super();

    this.state = {
      instructionIsActive: false
    };
  }

  /**
   *
   * @param [state] {boolean}
   */
  toggleInstruction(state) {
    const { instructionIsActive } = this.state;

    if (typeof state === 'boolean') {
      this.setState({
        instructionIsActive: state
      });
    } else {
      this.setState({
        instructionIsActive: !instructionIsActive
      });
    }
  }

  @autobind
  handleQiwiClick() {
    this.toggleInstruction(true);
  }

  @autobind
  handleCloseQiwiClick(e) {
    e.stopPropagation();

    this.toggleInstruction(false);
  }

  @autobind
  handleGoBackClick() {
    const { toggleStateContent } = this.props;

    toggleStateContent('menu');
  }

  render() {
    const { instructionIsActive } = this.state;

    return (
      <div className="donate">
        <div className="popup__logo">
          <img src="/img/logo.png" alt="" />
        </div>
        <div className="popup__title">
          Monochrome days
        </div>
        <div className="popup__item">
          You can help with development of the project.
          <br />
          Send us a bit of money on coffee and cookies.
          <br />
          Thanks!
        </div>
        <div className="popup__item">
          <div className="pay-items-wrapper">
            <div className="pay-item">
              <div className="pay-item__btn paypal">
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                  <input type="hidden" name="cmd" value="_s-xclick" />
                  <input
                    type="hidden"
                    name="encrypted"
                    value={payPalKey} />
                  <input type="image" src="/img/paypal.png" alt="" name="submit" />
                  <img
                    src="https://www.paypalobjects.com/ru_RU/i/scr/pixel.gif"
                    alt=""
                    width="1"
                    height="1" />
                </form>
              </div>
            </div>
            <button
              type="button"
              className={`pay-item ${instructionIsActive ? 'instruction-is-active' : ''}`}
              onClick={this.handleQiwiClick}>
              <ReactCSSTransitionGroup
                transitionName="qiwi"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                {!instructionIsActive && (
                  <div className="pay-item__btn qiwi" />
                )}

                {instructionIsActive && (
                  <div className="pay-item__instruction">
                    Go to&nbsp;
                    <LinkExternal href="https://visa.qiwi.ru/transfer/form.action" target="_blank">
                      link.
                    </LinkExternal>
                    <br />
                    Input this number:
                    <br />
                    +7 965 422 59 82
                    {/* eslint-disable */}
                    <div
                      className="pay-item__instruction__close"
                      title="Close"
                      onClick={this.handleCloseQiwiClick}>
                      x
                    </div>
                    {/* eslint-enable */}
                  </div>
                )}
              </ReactCSSTransitionGroup>
            </button>
            <div className="pay-item">
              <div className="pay-item__btn webmoney">
                <form action="https://merchant.webmoney.ru/lmi/payment.asp" method="POST" target="_blank">
                  <input type="hidden" name="LMI_PAYMENT_AMOUNT" value="5.00" />
                  <input type="hidden" name="LMI_PAYMENT_DESC_BASE64" value="" />
                  <input type="hidden" name="LMI_PAYEE_PURSE" value="Z361243128492" />
                  <input type="submit" value="" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="popup__go-back">
          <BtnLink onClick={this.handleGoBackClick}>
            Go back
          </BtnLink>
        </div>
      </div>
    );
  }
}

Donate.propTypes = {
  toggleStateContent: propTypes.func.isRequired
};
