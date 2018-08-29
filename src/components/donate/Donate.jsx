import React from 'react';
import './donate.scss';
import propTypes from 'prop-types';
import autobind from 'autobind-decorator';
import BtnLink from '../btnLink/BtnLink';
import LinkExternal from '../linkExternal/LinkExternal';

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
                    value="-----BEGIN PKCS7-----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-----END PKCS7-----
" />
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
                  <div
                    className="pay-item__instruction__close"
                    title="Close"
                    onClick={this.handleCloseQiwiClick}>
                    x
                  </div>
                </div>
              )}
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
