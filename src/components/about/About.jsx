import React from "react";
import AboutContent from "./AboutContent";
import Screenshot1 from "../../images/screenshot1.jpg";
import Styles from "./About.module.scss";

function About() {
  return (
    <section className={Styles.about}>
      <AboutContent />
      <div className={Styles.about__sliderContainer}>
        <img
          className={Styles.about__sliderImg}
          src={Screenshot1}
          alt="Screenshot"
        />
      </div>
    </section>
  );
}

export default About;
