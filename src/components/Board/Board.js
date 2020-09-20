import React, { useEffect } from "react";
import Card from "../Card/Card";
import classes from "./Board.module.css";
import { flipCard, initField, startNewGame } from "../../store/actions/actions";
import { connect } from "react-redux";
import ScoreWindow from "../ScoreWindow/ScoreWindow";

const Board = ({
  flipCard,
  startNewGame,
  dataCards,
  flippedCards,
  movesScore,
  gameOver,
}) => {
  useEffect(startNewGame, []);

  const cardClickHandler = (id) => {
    flipCard(id);
  };
  return (
    <div className={classes.Wrapper}>
      <ScoreWindow startNewGameHandler={startNewGame} score={movesScore} />
      <div className={classes.MainBoard}>
        <div className={classes.Cards}>
          {dataCards.map((item, index) => {
            const card = dataCards[index];
            const isFlipped = -1 !== flippedCards.indexOf(card.id);
            return (
              <Card
                id={item.id}
                key={item.imageId.toString() + index}
                cardClickHandler={cardClickHandler}
                card={item.imageSrc}
                isFlipped={isFlipped}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  dataCards: state.cards.list,
  flippedCards: state.cards.flippedCards,
  movesScore: state.game.moves,
  gameOver: state.game.isOver,
});
const mapDispatchToProps = (dispatch) => ({
  startNewGame: () => {
    dispatch(initField());
    dispatch(startNewGame());
  },
  flipCard: (id) => dispatch(flipCard(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Board);
