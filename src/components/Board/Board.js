import React, { useEffect } from "react";
import Card from "../Card/Card";
import classes from "./Board.module.css";
import {
  cardsIsLoaded,
  initField,
  startNewGame,
} from "../../store/actions/actions";
import { connect } from "react-redux";

const Board = ({ flipCard, startNewGame, dataCards, flippedCards }) => {
  useEffect(() => {
    startNewGame();
  }, []);

  const cardClickHandler = (id) => {
    flipCard(id);
  };
  return (
    <div className={classes.mainBoard}>
      <div className={classes.cards}>
        {dataCards.map((item, index) => {
          const card = dataCards[item];
          const isFlipped = -1 !== flippedCards.indexOf(card.id);
          return (
            <Card
              id={item.imageId}
              key={item.imageId.toString() + index}
              onClick={cardClickHandler}
              card={item.imageSrc}
              isFlipped={isFlipped}
            />
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  dataCards: state.cards.list,
  flippedCards: state.cards.flippedCards,
});
const mapDispatchToProps = (dispatch) => ({
  startNewGame: () => {
    dispatch(initField());
    dispatch(startNewGame());
  },
  flipCard: (id) => dispatch(flipCard(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Board);
