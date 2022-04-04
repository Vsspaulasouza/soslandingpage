import React from "react";
import Styles from "./Button.module.scss";

function Button({ href, style, children }) {
  return (
    <a href={href} style={style} className={Styles.button}>
      {children}
    </a>
  );
}

export default Button;
