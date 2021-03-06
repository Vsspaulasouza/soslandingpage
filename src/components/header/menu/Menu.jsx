import React from "react";
import debounce from "lodash.debounce";
import MenuList from "./MenuList";
import SecondaryMenu from "./SecondaryMenu";
import MenuMobile from "./MenuMobile";
import Logo from "../../../images/logo.png";
import Styles from "./Menu.module.scss";

function Menu() {
  const [menuActive, setMenuActive] = React.useState("");
  const [scrollClass, setScrollClass] = React.useState("");
  const ref = React.useRef();

  function handleScroll() {
    if (window.scrollY === 0) setScrollClass("");
    else setScrollClass(` ${Styles["header__menu--scroll"]}`);
  }

  React.useEffect(() => {
    window.addEventListener("scroll", debounce(handleScroll, 20));
    return window.removeEventListener("scroll", debounce(handleScroll, 20));
  }, []);

  const resolveClass = React.useCallback(
    (compStyle, currentClass, modifier) =>
      modifier
        ? `${compStyle[currentClass]} ${compStyle[currentClass + modifier]}`
        : `${compStyle[currentClass]} ${compStyle[currentClass + menuActive]}`,
    [menuActive]
  );

  return (
    <nav className={Styles.header__menu + scrollClass} ref={ref}>
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
