import React from "react";
import logo from "../../images/logo2.png";
import facebook from "../../images/facebook.svg";
import twitter from "../../images/twitter.svg";
import youtube from "../../images/youtube.svg";
import twitch from "../../images/twitch.svg";
import Styles from "./Footer.module.scss";

function Footer() {
  const menuItens = [
    { text: "Main", href: "#main" },
    { text: "About", href: "#about" },
    { text: "Game Features", href: "#game-features" },
    { text: "Game Requirements", href: "#system-requirements" },
    { text: "Quotes", href: "#quotes" },
  ];

  const socialMedias = [
    { icon: facebook, name: "Facebook" },
    { icon: twitter, name: "Twitter" },
    { icon: youtube, name: "Youtube" },
    { icon: twitch, name: "Twitch" },
  ];

  return (
    <section className={Styles.footer}>
      <div className={Styles.footer__main}>
        <img src={logo} alt="Logo" className={Styles.footer__logo} />
        <nav className={Styles.footer__nav}>
          <ul className={Styles.footer__menu}>
            {menuItens.map(({ text, href }) => (
              <li key={text} className={Styles.footer__item}>
                <a className={Styles.footer__link} href={href}>
                  {text}
                </a>
              </li>
            ))}
          </ul>
          <div className={Styles.footer__icons}>
            {socialMedias.map(({ icon, name }) => (
              <img
                key={name}
                className={Styles.footer__icon}
                src={icon}
                alt={`${name} icon`}
              />
            ))}
          </div>
        </nav>
      </div>
      <div className={Styles.footer__divider} />
      <div className={Styles.footer__secondary}>
        <p className={Styles.footer__copy}>
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
