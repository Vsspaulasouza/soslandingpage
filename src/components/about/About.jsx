import React from "react";
import AboutContent from "./AboutContent";
import Slider from "./Slider";
import Styles from "./About.module.scss";

function About() {
  return (
    <section className={Styles.about} id="about">
      <AboutContent />
      <Slider />
    </section>
  );
}

export default About;
