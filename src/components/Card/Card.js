import React, { useState } from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipHandle = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      id={props.id}
      className={classes.CardFront}
      onClick={() => flipHandle()}
    >
      <div className={isFlipped ? classes.InnerCard : classes.Back}>
        <img src={props.card} alt={"card " + props.id} />
      </div>
    </div>
  );
};

export default Card;
