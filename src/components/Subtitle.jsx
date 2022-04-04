import React from "react";
import Styles from "./Subtitle.module.scss";

function Subtitle({ style, children }) {
  return (
    <p className={Styles.subtitle} style={style}>
      {children}
    </p>
  );
}

export default Subtitle;
