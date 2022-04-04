import React from "react";
import Styles from "./MenuList.module.scss";

function MenuList({ resolveClass }) {
  const menuItens = [
    "main",
    "about",
    "game features",
    "system requirements",
    "quotes",
  ];

  return (
    <ul className={resolveClass(Styles, "header__menuList")}>
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
  );
}

export default MenuList;
