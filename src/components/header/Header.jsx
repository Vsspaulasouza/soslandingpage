import React from "react";
import Logo from "../../images/logo.png";
import Xbox from "../../images/xbox icon.svg";
import Steam from "../../images/steam icon.svg";
import Styles from "./Header.module.scss";
import "./MenuMobile.scss";

function Header() {
  return (
    <header className={Styles.header}>
      <nav className={Styles.header__menu}>
        <a href="#home">
          <img src={Logo} alt="Logo" className={Styles.header__logo} />
        </a>
        <ul className={Styles.header__menuList}>
          <li className={Styles.header__menuItem}>asdfg</li>
          <li className={Styles.header__menuItem}>asdfg</li>
          <li className={Styles.header__menuItem}>asdfg</li>
          <li className={Styles.header__menuItem}>asdfg</li>
          <li className={Styles.header__menuItem}>asdfg</li>
        </ul>
        <div className={Styles.header__secondaryMenu}>
          <select name="language" id="language" className={Styles.header__lang}>
            <option value="Eng">Eng</option>
            <option value="Rus">Rus</option>
            <option value="Fra">Fra</option>
            <option value="Deu">Deu</option>
          </select>
          <div className={Styles.header__divider} />
          <div className={Styles.header__platforms}>
            <a href="#home" className={Styles.header__platformsItem}>
              <img src={Xbox} alt="Xbox icon" />
            </a>
            <a href="#home" className={Styles.header__platformsItem}>
              <img src={Steam} alt="Steam icon" />
            </a>
          </div>
        </div>
        <div className="header__menuMobile">
          <div className="header__menuLineContainer">
            <div className="header__menuLine header__menuLine--one" />
            <div className="header__menuLine header__menuLine--two" />
            <div className="header__menuLine header__menuLine--three" />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
