import React from "react";
import Styles from "./Title.module.scss";

function Title({ children }) {
  return <h2 className={Styles.title}>{children}</h2>;
}

export default Title;
