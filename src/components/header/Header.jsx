import React from "react";
import Menu from "./menu/Menu";
import Styles from "./Header.module.scss";
import MainSection from "./mainSection/MainSection";
import ScrollDownButton from "./ScrollDownButton";

function Header() {
  return (
    <header className={Styles.header}>
      <Menu />
      <MainSection />
      <ScrollDownButton />
    </header>
  );
}

export default Header;
