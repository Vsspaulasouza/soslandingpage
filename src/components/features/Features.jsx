import React from "react";
import { Subtitle, Title, FeatureTitle, Text } from "../PageComponents";
import Styles from "./Features.module.scss";

function Features() {
  return (
    <section className={Styles.features}>
      <div className={Styles.features__content}>
        <Subtitle>What&apos;s so special?</Subtitle>
        <Title styledClass={Styles.features__title}>Features</Title>
        <div className={Styles.features__box}>
          <FeatureTitle styledClass={Styles.features__featureTitle}>
            Survive at all costs
          </FeatureTitle>
          <Text styledClass={Styles.features__text}>
            You have 30 minutes to find a relic, signal for extraction, and grab
            one of three spots on the rescue chopper.
          </Text>
          <FeatureTitle styledClass={Styles.features__featureTitle}>
            Create allies and enemies
          </FeatureTitle>
          <FeatureTitle styledClass={Styles.features__featureTitle}>
            Impress the audience
          </FeatureTitle>
        </div>
      </div>
    </section>
  );
}

export default Features;
