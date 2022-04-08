import React from "react";
import Styles from "./Text.module.scss";

function Text({ style, children }) {
  return (
    <p className={Styles.text} style={style}>
      {children}
    </p>
  );
}

export default Text;
