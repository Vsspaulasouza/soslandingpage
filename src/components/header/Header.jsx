import React from "react";
import Logo from "../../images/logo.png";
import Styles from "./Header.module.scss";

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
          <div>
            <a href="#home">Xbox</a>
            <a href="#home">Steam</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
