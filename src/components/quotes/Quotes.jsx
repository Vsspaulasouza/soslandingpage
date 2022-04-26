import React from "react";
import Card from "./Card";
import Styles from "./Quotes.module.scss";
import Photo1 from "../../images/photo.jpg";

function Quotes() {
  return (
    <Card
      image={Photo1}
      name="Evan Lahti"
      company="PC Gamer"
      comment="One of my gaming highlights of the year."
      date="October 18, 2018"
    />
  );
}

export default Quotes;
