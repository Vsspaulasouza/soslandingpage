import React from "react";
import Styles from "./SpecialText.module.scss";

function SpecialText({ styledClass, children }) {
  return (
    <span className={`${Styles.specialText} ${styledClass}`}>{children}</span>
  );
}

export default SpecialText;
