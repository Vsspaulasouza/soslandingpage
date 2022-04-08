import React from "react";
import Styles from "./Title.module.scss";

function Title({ style, children }) {
  return (
    <h2 className={Styles.title} style={style}>
      {children}
    </h2>
  );
}

export default Title;
