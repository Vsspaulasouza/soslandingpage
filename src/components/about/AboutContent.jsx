import React from "react";
import {
  Title,
  Subtitle,
  Text,
  BoldText as Bt,
  HighlightedText as Ht,
} from "../PageComponents";
import Styles from "./AboutContent.module.scss";

function AboutContent() {
  return (
    <div className={Styles.about__content}>
      <Subtitle>What is SOS?</Subtitle>
      <Title styledClass={Styles.about__title}>Social battle royale game</Title>
      <div className={Styles.about__divider} />
      <Text styledClass={Styles.about__text}>
        Each round, <Bt>you</Bt> and <Bt>15</Bt> other contestants compete to
        escape a deadly island filled with monsters. The trick is:{" "}
        <Bt>three</Bt> people can survive. Will you run solo or form friendships
        with others to escape?
      </Text>
      <Text styledClass={Styles.about__text}>
        Making the right decisions could be the difference between{" "}
        <Ht>life and death.</Ht>
      </Text>
    </div>
  );
}

export default AboutContent;
