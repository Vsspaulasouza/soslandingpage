import React from "react";
import Styles from "./Button.module.scss";

function Button({ href, styledClass, children }) {
  return (
    <a href={href} className={`${Styles.button} ${styledClass}`}>
      {children}
    </a>
  );
}

export default Button;
