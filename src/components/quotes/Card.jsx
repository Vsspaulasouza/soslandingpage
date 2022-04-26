import React from "react";
import Styles from "./Card.module.scss";
import { Title, Text } from "../PageComponents";
import Twitter from "../../images/twitter.svg";

function Card({ image, name, company, comment, date }) {
  return (
    <div className={Styles.card}>
      <div className={Styles.card__header}>
        <img src={image} alt={name} className={Styles.card__profile} />
        <div className={Styles.card__info}>
          <Title styledClass={Styles.card__name}>{name}</Title>
          <Text styledClass={Styles.card__company}>{company}</Text>
        </div>
        <img src={Twitter} alt="Twitter" className={Styles.card__twitter} />
      </div>
      <Text styledClass={Styles.card__comment}>{`"${comment}"`}</Text>
      <Text styledClass={Styles.card__date}>{date}</Text>
    </div>
  );
}

export default Card;
