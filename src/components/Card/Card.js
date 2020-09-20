import React from "react";
import classes from "./Card.module.css";

const Card = ({ id, isFlipped, card, cardClickHandler }) => {
  return (
    <div
      id={id}
      className={classes.CardFront}
      onClick={() => cardClickHandler(id)}
    >
      <div className={isFlipped ? classes.InnerCard : classes.Back}>
        <img src={card} alt={"card " + id} />
      </div>
    </div>
  );
};

export default Card;
