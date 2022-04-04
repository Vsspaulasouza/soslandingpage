import React from "react";
import Xbox from "../../../images/xbox icon.svg";
import Steam from "../../../images/steam icon.svg";
import Styles from "./SecondaryMenu.module.scss";

function SecondaryMenu({ resolveClass }) {
  const languages = ["Eng", "Rus", "Fra", "Deu"];

  const platforms = [
    { name: "Steam", icon: Steam },
    { name: "Xbox", icon: Xbox },
  ];

  return (
    <div className={resolveClass(Styles, "header__secondaryMenu")}>
      <select name="language" id="language" className={Styles.header__lang}>
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
      <div className={Styles.header__divider} />
      <div className={Styles.header__platforms}>
        {platforms.map(({ name, icon }) => (
          <a
            key={name}
            href={`#${name.replace(" ", "-")}`}
            className={Styles.header__platformsItem}
          >
            <img src={icon} alt={`${name} icon`} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default SecondaryMenu;
