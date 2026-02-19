import React from 'react'
import { FormattedMessage } from 'react-intl'
import './Footer.scss'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="container">
          <div className="footer__inner">
            <div className="footer__contacts">
              <h5 className="footer__title">
                <FormattedMessage id="contacts" />
              </h5>
              <ul className="footer__social">
                <li className="footer__social-item">
                  <a href="mailto:pnrm.ukraine@gmail.com">
                    <img
                      className="footer__icon"
                      src="/img/footer/e-mail_icon.png"
                      alt="email"
                    />
                    pnrm.ukraine@gmail.com
                  </a>
                </li>
                <li className="footer__social-item">
                  <a href="tel:+380632194913">
                    <img
                      className="footer__icon"
                      src="/img/footer/phone_icon.png"
                      alt="phone"
                    />
                    +3 8063 219 49 13
                  </a>
                </li>
                <li className="footer__social-item">
                  <a
                    href="https://www.linkedin.com/company/pnrm-ukraine/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="footer__icon"
                      src="/img/footer/in_icon.png"
                      alt="telegram"
                    />
                    <FormattedMessage id="in" />
                  </a>
                </li>
                <li className="footer__social-item">
                  <a
                    href="https://x.com/pnrm_ukraine"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="footer__icon"
                      src="/img/footer/x_icon.png"
                      alt="telegram"
                    />
                    <FormattedMessage id="X" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__about">
              <h5 className="footer__title">
                <FormattedMessage id="about.title" defaultMessage="Про нас" />
              </h5>
              <p className="footer__text">
                <FormattedMessage
                  id="about.description"
                  defaultMessage="Професійна мережа менеджерів науки та освіти України (PNRM Ukraine) — це незалежна ініціатива, створена для підтримки фахівців, які працюють у сфері управління науковими дослідженнями та освітніми процесами."
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
