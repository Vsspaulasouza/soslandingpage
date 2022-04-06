import React from "react";
import Arrow from "../../images/scroll down.svg";
import Styles from "./ScrollDownButton.module.scss";

function ScrollDownButton() {
  return (
    <button type="button" className={Styles.button}>
      <span className={Styles.button__text}>The story</span>
      <img src={Arrow} alt="Arrow" />
    </button>
  );
}

export default ScrollDownButton;
