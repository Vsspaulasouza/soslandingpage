import React from "react";
import Styles from "./Title.module.scss";

function Title({ styledClass, children }) {
  return <h2 className={`${Styles.title} ${styledClass}`}>{children}</h2>;
}

export default Title;
