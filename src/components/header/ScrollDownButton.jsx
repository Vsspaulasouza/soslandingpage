import React from "react";
import Arrow from "../../images/scroll down.svg";
import Styles from "./ScrollDownButton.module.scss";

function ScrollDownButton() {
  return (
    <a href="#about" className={Styles.button}>
      <span className={Styles.button__text}>The story</span>
      <img src={Arrow} alt="Arrow" />
    </a>
  );
}

export default ScrollDownButton;
