import React from "react";
import Styles from "./Newsletter.module.scss";
import { Subtitle, Title, Text, Button } from "../PageComponents";
import newsletterImage from "../../images/newsletter.png";

function Newsletter() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section className={Styles.newsletter}>
      <img
        src={newsletterImage}
        alt="Newsletter"
        className={Styles.newsletter__image}
      />
      <div className={Styles.newsletter__content}>
        <Subtitle styledClass={Styles.newsletter__subtitle}>
          Want to stay in touch?
        </Subtitle>
        <Title styledClass={Styles.newsletter__title}>
          newsletter SUBSCRIBE{" "}
        </Title>
        <Text styledClass={Styles.newsletter__text}>
          In order to start receiving our news, all you have to do is enter your
          email address. Everything else will be taken care of by us. We will
          send you emails containing information about game. We don't spam.
        </Text>
        <form onSubmit={handleSubmit} className={Styles.newsletter__form}>
          <input type="text" className={Styles.newsletter__input} />
          <Button styledClass={Styles.newsletter__button}>Subscribe now</Button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
