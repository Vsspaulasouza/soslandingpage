import React from "react";
import Title from "../../Title";
import Subtitle from "../../Subtitle";
import Button from "../../Button";
import Styles from "./MainSection.module.scss";

function MainSection() {
  return (
    <section className={Styles.main}>
      <Title>Survive at all costs</Title>
      <Subtitle style={{ "margin-top": "8px" }}>
        Experience new social battle royale game
      </Subtitle>
      <Button href="#Buy-now" style={{ "margin-top": "29px" }}>
        <span>Buy now on Steam</span>
        <div />
        <span>$14.99</span>
      </Button>
    </section>
  );
}

export default MainSection;
