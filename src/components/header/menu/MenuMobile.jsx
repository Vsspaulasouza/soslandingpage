import React from "react";
import Styles from "./MenuMobile.module.scss";

function MenuMobile({ resolveClass, setMenuActive }) {
  function handleClick() {
    setMenuActive((currentActive) => (currentActive ? "" : "--active"));
  }

  return (
    <div
      className={resolveClass(Styles, "header__menuMobile")}
      role="button"
      onClick={handleClick}
      onKeyDown={handleClick}
      tabIndex={0}
    >
      <div className={Styles.header__menuLineContainer}>
        <div className={resolveClass(Styles, "header__menuLine", "--one")} />
        <div className={resolveClass(Styles, "header__menuLine", "--two")} />
        <div className={resolveClass(Styles, "header__menuLine", "--three")} />
      </div>
    </div>
  );
}

export default MenuMobile;
