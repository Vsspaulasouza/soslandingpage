import React from "react";
import Menu from "./Menu";
import Styles from "./Header.module.scss";

function Header() {
  return (
    <header className={Styles.header}>
      <Menu />
    </header>
  );
}

export default Header;
