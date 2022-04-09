import React from "react";
import Title from "../../Title";
import Subtitle from "../../Subtitle";
import Button from "../../Button";
import Styles from "./MainSection.module.scss";

function MainSection() {
  return (
    <section className={Styles.main}>
      <Title>Survive at all costs</Title>
      <Subtitle styledClass={Styles.main__subtitle}>
        Experience new social battle royale game
      </Subtitle>
      <Button href="#Buy-now" styledClass={Styles.main__button}>
        <span>Buy now on Steam</span>
        <div className={Styles.button__divider} />
        <span>$14.99</span>
      </Button>
    </section>
  );
}

export default MainSection;
