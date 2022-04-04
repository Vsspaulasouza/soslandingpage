import React from "react";
import Menu from "./menu/Menu";
import Styles from "./Header.module.scss";
import MainSection from "./mainSection/MainSection";

function Header() {
  return (
    <header className={Styles.header}>
      <Menu />
      <MainSection />
    </header>
  );
}

export default Header;
