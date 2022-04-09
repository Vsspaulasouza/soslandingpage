import React from "react";
import Styles from "./Text.module.scss";

function Text({ styledClass, children }) {
  return <p className={`${Styles.text} ${styledClass}`}>{children}</p>;
}

export default Text;
