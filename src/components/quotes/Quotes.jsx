import React from "react";
import Card from "./Card";
import { Subtitle, Title, Text, Button } from "../PageComponents";
import Styles from "./Quotes.module.scss";
import Photo1 from "../../images/photo.jpg";
import Photo2 from "../../images/photo2.jpg";
import Photo3 from "../../images/photo3.jpg";

function Quotes() {
  const cards = [
    {
      image: Photo1,
      name: "Evan Lahti",
      company: "PC Gamer",
      comment: "One of my gaming highlights of the year.",
      date: "October 18, 2018",
    },
    {
      image: Photo2,
      name: "Jada Griffin ",
      company: "Nerdreactor",
      comment:
        "The next big thing in the world of streaming and survival games.",
      date: "December 21, 2018",
    },
    {
      image: Photo3,
      name: "Aaron Williams",
      company: "Uproxx",
      comment:
        "Snoop Dogg Playing The Wildly Entertaining 'SOS' Is Ridiculous.",
      date: "December 24, 2018",
    },
  ];

  return (
    <section className={Styles.quotes}>
      <div className={Styles.quotes__content}>
        <Subtitle styledClass={Styles.quotes__subtitle}>
          What people think?
        </Subtitle>
        <Title styledClass={Styles.quotes__title}>Press quotes</Title>
        <Text styledClass={Styles.quotes__text}>
          Our goal is to create a product and service that you're satisfied with
          and use it every day. This is why we're constantly working on our
          services to make it better every day and really listen to what our
          users has to say.
        </Text>
        <Button styledClass={Styles.quotes__button}>
          read more testimonials
        </Button>
      </div>
      <div className={Styles.quotes__cards}>
        {cards.map(({ image, name, company, comment, date }, index) => (
          <Card
            key={name}
            image={image}
            name={name}
            company={company}
            comment={comment}
            date={date}
            styledClass={Styles[`quotes__card--${index + 1}`]}
          />
        ))}
      </div>
    </section>
  );
}

export default Quotes;
