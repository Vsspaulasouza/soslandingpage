import React from "react";
import logo from "../../images/logo2.png";
import facebook from "../../images/facebook.svg";
import twitter from "../../images/twitter.svg";
import youtube from "../../images/youtube.svg";
import twitch from "../../images/twitch.svg";
import Styles from "./Footer.module.scss";

function Footer() {
  return (
    <section className={Styles.footer}>
      <div className={Styles.footer__main}>
        <img src={logo} alt="Logo" className={Styles.footer__logo} />
        <nav className={Styles.footer__nav}>
          <ul className={Styles.footer__menu}>
            <li className={Styles.footer__item}>
              <a className={Styles.footer__link} href="#main">
                Main
              </a>
            </li>
            <li className={Styles.footer__item}>
              <a className={Styles.footer__link} href="#about">
                About
              </a>
            </li>
            <li className={Styles.footer__item}>
              <a className={Styles.footer__link} href="#features">
                Game Features
              </a>
            </li>
            <li className={Styles.footer__item}>
              <a className={Styles.footer__link} href="#requirements">
                Game Requirements
              </a>
            </li>
            <li className={Styles.footer__item}>
              <a className={Styles.footer__link} href="#quotes">
                Quotes
              </a>
            </li>
          </ul>
          <div className={Styles.footer__icons}>
            <img
              className={Styles.footer__icon}
              src={facebook}
              alt="Facebook icon"
            />
            <img
              className={Styles.footer__icon}
              src={twitter}
              alt="Twitter icon"
            />
            <img
              className={Styles.footer__icon}
              src={youtube}
              alt="Youtube icon"
            />
            <img
              className={Styles.footer__icon}
              src={twitch}
              alt="Twitch icon"
            />
          </div>
        </nav>
      </div>
      <div className={Styles.footer__divider} />
      <div className={Styles.footer__secondary}>
        <p className={Styles.footer__copy}>
          {" "}
          © 2018 Outpost Games, Inc. All Rights Reserved
        </p>
        <ul className={Styles.footer__policyMenu}>
          <li className={Styles.footer__policyItem}>
            <a className={Styles.footer__policyLink} href=" ">
              Privacy Policy
            </a>
          </li>
          <li className={Styles.footer__policyItem}>
            <a className={Styles.footer__policyLink} href=" ">
              Terms of Services
            </a>
          </li>
          <li className={Styles.footer__policyItem}>
            <a className={Styles.footer__policyLink} href=" ">
              Code of Conduct
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
