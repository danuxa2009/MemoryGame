import {
  CARDS_LOADED,
  START_NEW_GAME,
  SET_FLIPPED_CARDS,
  SET_GUESSED_CARDS,
} from "../constans/constans";

const initialState = {
  list: [],
  flippedCards: [],
  guessedCards: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CARDS_LOADED: {
      return { ...state, list: action.payload };
    }
    case SET_FLIPPED_CARDS: {
      return { ...state, flippedCards: action.ids };
    }
    case SET_GUESSED_CARDS: {
      return { ...state, guessedCards: action.ids };
    }
    case START_NEW_GAME: {
      return { ...state, guessedCards: [], flippedCards: [] };
    }
    default:
      return state;
  }
};

export default reducer;
