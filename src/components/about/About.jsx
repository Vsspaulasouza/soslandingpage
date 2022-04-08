import React from "react";
import Subtitle from "../Subtitle";
import Title from "../Title";
import Text from "../Text";
import Screenshot1 from "../../images/screenshot1.jpg";
import Styles from "./About.module.scss";

function About() {
  return (
    <section className={Styles.about}>
      <div className={Styles.about__background1}>
        <div className={Styles.about__background2}>
          <div className={Styles.about__content}>
            <Subtitle>What is SOS?</Subtitle>
            <Title
              style={{
                maxWidth: "410px",
                textAlign: "initial",
                marginTop: "13px",
              }}
            >
              Social battle royale game
            </Title>
            <div className={Styles.about__divider} />
            <Text
              style={{
                maxWidth: "365px",
                marginTop: "50px",
                alignSelf: "flex-end",
              }}
            >
              Each round, <span style={{ fontWeight: "bolder" }}>you</span> and{" "}
              <span style={{ fontWeight: "bolder" }}>15</span> other contestants
              compete to escape a deadly island filled with monsters. The trick
              is: <span style={{ fontWeight: "bolder" }}>three</span> people can
              survive. Will you run solo or form friendships with others to
              escape?
            </Text>
            <Text
              style={{
                maxWidth: "365px",
                marginTop: "20px",
                alignSelf: "flex-end",
              }}
            >
              Making the right decisions could be the difference between{" "}
              <span style={{ textDecoration: "underline #ffb548 6px" }}>
                life and death.
              </span>
            </Text>
          </div>
          <div className={Styles.about__sliderContainer}>
            <img
              className={Styles.about__sliderImg}
              src={Screenshot1}
              alt="Screenshot"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
