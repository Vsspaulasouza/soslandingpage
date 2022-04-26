import React from "react";
import Styles from "./Card.module.scss";
import { HighlightedText, Text } from "../PageComponents";
import Twitter from "../../images/Twitter.svg";

function Card({ image, name, company, comment, date }) {
  return (
    <div>
      <div>
        <img src={image} alt={name} />
        <div>
          <HighlightedText>{name}</HighlightedText>
          <Text>{company}</Text>
        </div>
        <img src={Twitter} alt="Twitter" />
      </div>
      <Text>{comment}</Text>
      <Text>{date}</Text>
    </div>
  );
}

export default Card;
