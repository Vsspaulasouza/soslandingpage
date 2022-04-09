import React from "react";
import Styles from "./Subtitle.module.scss";

function Subtitle({ styledClass, children }) {
  return <p className={`${Styles.subtitle} ${styledClass}`}>{children}</p>;
}

export default Subtitle;
