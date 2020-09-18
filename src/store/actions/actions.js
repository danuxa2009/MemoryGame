import {
  SET_GAME_OVER,
  START_NEW_GAME,
  CARDS_LOADED,
  SET_GUESSED_CARDS,
  SET_FLIPPED_CARDS,
  INCREMENT_MOVE,
} from "../constans/constans";

import { getShuffledCards } from "../../assets/cardsList";

export const startNewGame = () => ({
  type: START_NEW_GAME,
});

// export function incrementMove() {
//   return {
//     type: INCREMENT_MOVE,
//   };
// }

export const initField = () => {
  return (dispatch) => {
    const cards = getShuffledCards();
    dispatch(cardsIsLoaded(cards));
  };
};

export const flipCard = (id) => {
  return (dispatch, getState) => {
    const { list, flippedCards, guessedCards } = getState().dataCards;
    if (-1 !== flippedCards.indexOf(id)) {
      return;
    }

    const unGuessedFlipped = [];

    for (const card of flippedCards) {
      if (-1 === guessedCards.indexOf(card)) {
        unGuessedFlipped.push(card);
      }
    }

    const flipped = flippedCards.slice();

    if (unGuessedFlipped.length === 1) {
      if (list[id].imageId === list[unGuessedFlipped[0]].imageId) {
        const guessed = guessedCards.slice().concat([id, unGuessedFlipped[0]]);

        if (guessed.length === Object.keys(list).length) {
          dispatch(setGameOver(true));
        }

        dispatch(setGuessedCards(guessed));
      } else {
        setTimeout(() => {
          for (const cardId of [unGuessedFlipped[0], id]) {
            const index = flipped.indexOf(cardId);
            if (index !== -1) {
              flipped.splice(index, 1);
            }
          }

          dispatch(setFlippedCards(flipped.slice()));
        }, 500);
      }

      dispatch(incrementMove());
    } else {
      for (const cardId of unGuessedFlipped) {
        const index = flipped.indexOf(cardId);
        if (index !== -1) {
          flipped.splice(index, 1);
        }
      }
    }

    flipped.push(id);

    dispatch(setFlippedCards(flipped));
  };
};

export const cardsIsLoaded = (payload) => ({
  type: CARDS_LOADED,
  payload,
});

export const setGameOver = (isOver) => ({
  type: SET_GAME_OVER,
  isOver,
});

export const incrementMove = () => ({
  type: INCREMENT_MOVE,
});

const setFlippedCards = (ids) => ({
  type: SET_FLIPPED_CARDS,
  ids,
});

const setGuessedCards = (ids) => ({
  type: SET_GUESSED_CARDS,
  ids,
});
