import React from "react";
import Logo from "../../images/logo.png";
import Xbox from "../../images/xbox icon.svg";
import Steam from "../../images/steam icon.svg";
import Styles from "./Header.module.scss";

function Header() {
  const [menuActive, setMenuActive] = React.useState("");

  function handleClick() {
    setMenuActive((currentActive) => (currentActive ? "" : "--active"));
  }

  function resolveClass(currentClass, modifier) {
    return modifier
      ? `${Styles[currentClass]} ${Styles[currentClass + modifier]}`
      : `${Styles[currentClass]} ${Styles[currentClass + menuActive]}`;
  }

  const menuItens = [
    "main",
    "about",
    "game features",
    "system requirements",
    "quotes",
  ];

  const languages = ["Eng", "Rus", "Fra", "Deu"];

  return (
    <header className={Styles.header}>
      <nav className={Styles.header__menu}>
        <a href="#home">
          <img src={Logo} alt="Logo" className={Styles.header__logo} />
        </a>
        <ul className={resolveClass("header__menuList")}>
          {menuItens.map((menuItem) => (
            <li key={menuItem} className={Styles.header__menuItem}>
              <a
                href={`#${menuItem.replace(" ", "-")}`}
                className={Styles.header__menuLink}
              >
                {menuItem}
              </a>
            </li>
          ))}
        </ul>
        <div className={resolveClass("header__secondaryMenu")}>
          <select name="language" id="language" className={Styles.header__lang}>
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
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
        <div
          className={resolveClass("header__menuMobile")}
          role="button"
          onClick={handleClick}
          onKeyDown={handleClick}
          tabIndex={0}
        >
          <div className={Styles.header__menuLineContainer}>
            <div className={resolveClass("header__menuLine", "--one")} />
            <div className={resolveClass("header__menuLine", "--two")} />
            <div className={resolveClass("header__menuLine", "--three")} />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
