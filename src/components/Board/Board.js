import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import classes from "./Board.module.css";
import { getShuffledCards } from "../../assets/cardsList";

const Board = () => {
  const [deck, setDeck] = useState([]);
  useEffect(() => {
    setDeck(getShuffledCards());
  }, []);

  return (
    <div className={classes.mainBoard}>
      <div className={classes.cards}>
        {deck.map((item, index) => {
          return (
            <Card
              id={item.imageId}
              key={item.imageId.toString() + index}
              card={item.imageSrc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Board;
