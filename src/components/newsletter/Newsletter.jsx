import React from "react";
import Styles from "./Newsletter.module.scss";
import { Subtitle, Title, Text, Button } from "../PageComponents";

function Newsletter() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section className={Styles.newsletter}>
      <div className={Styles.newsletter__image} />
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
          send you emails containing information about game. We don&lsquo;t
          spam.
        </Text>
        <form onSubmit={handleSubmit} className={Styles.newsletter__form}>
          <label htmlFor="email" className={Styles.newsletter__label}>
            Your email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="example@gmail.com"
            className={Styles.newsletter__input}
          />
          <Button styledClass={Styles.newsletter__button}>Subscribe now</Button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
