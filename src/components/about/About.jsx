import React from "react";
import Subtitle from "../Subtitle";
import Title from "../Title";
import Text from "../Text";
import Screenshot1 from "../../images/screenshot1.jpg";

function About() {
  return (
    <section>
      <div>
        <Subtitle>What is SOS?</Subtitle>
        <Title>Social battle royale game</Title>
        <div />
        <Text>
          Each round, you and 15 other contestants compete to escape a deadly
          island filled with monsters. The trick is: three people can survive.
          Will you run solo or form friendships with others to escape? Making
          the right decisions could be the difference between life and death.
        </Text>
      </div>
      <div>
        <img src={Screenshot1} alt="Screenshot" />
      </div>
    </section>
  );
}

export default About;
