import React from "react";
import Subtitle from "../Subtitle";
import Title from "../Title";
import Text from "../Text";
import SpecialText from "../SpecialText";
import Styles from "./AboutContent.module.scss";

function AboutContent() {
  return (
    <div className={Styles.about__content}>
      <Subtitle>What is SOS?</Subtitle>
      <Title styledClass={Styles.about__title}>Social battle royale game</Title>
      <div className={Styles.about__divider} />
      <Text styledClass={Styles.about__text}>
        Each round, <SpecialText>you</SpecialText> and{" "}
        <SpecialText>15</SpecialText> other contestants compete to escape a
        deadly island filled with monsters. The trick is:{" "}
        <SpecialText>three</SpecialText> people can survive. Will you run solo
        or form friendships with others to escape?
      </Text>
      <Text styledClass={Styles.about__text}>
        Making the right decisions could be the difference between{" "}
        <SpecialText styledClass={Styles["about__specialText--yellow"]}>
          life and death.
        </SpecialText>
      </Text>
    </div>
  );
}

export default AboutContent;
