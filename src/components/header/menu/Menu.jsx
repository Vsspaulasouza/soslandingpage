import React from "react";
import MenuList from "./MenuList";
import SecondaryMenu from "./SecondaryMenu";
import MenuMobile from "./MenuMobile";
import Logo from "../../../images/logo.png";
import Styles from "./Menu.module.scss";

function Menu() {
  const [menuActive, setMenuActive] = React.useState("");
  const [scrollClass, setScrollClass] = React.useState("");

  const resolveClass = React.useCallback(
    (compStyle, currentClass, modifier) =>
      modifier
        ? `${compStyle[currentClass]} ${compStyle[currentClass + modifier]}`
        : `${compStyle[currentClass]} ${compStyle[currentClass + menuActive]}`,
    [menuActive]
  );

  // function debounce(func, wait, immediate) {
  //   let timeout;
  //   return (...args) => {
  //     const context = this;
  //     const later = () => {
  //       timeout = null;
  //       if (!immediate) func.apply(context, args);
  //     };
  //     const callNow = immediate && !timeout;
  //     clearTimeout(timeout);
  //     timeout = setTimeout(later, wait);
  //     if (callNow) func.apply(context, args);
  //   };
  // }

  function handleScroll() {
    if (window.scrollY === 0) setScrollClass("");
    else setScrollClass(` ${Styles["header__menu--scroll"]}`);
  }

  window.addEventListener("scroll", handleScroll);

  return (
    <nav className={Styles.header__menu + scrollClass}>
      <a href="#home">
        <img src={Logo} alt="Logo" className={Styles.header__logo} />
      </a>
      <MenuList resolveClass={resolveClass} />
      <SecondaryMenu resolveClass={resolveClass} />
      <MenuMobile resolveClass={resolveClass} setMenuActive={setMenuActive} />
    </nav>
  );
}

export default Menu;
