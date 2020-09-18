import { combineReducers } from "redux";
import cardsReducer from "./cards";
import gameStatusReducer from "./gameStatus";
const rootReducer = combineReducers({
  cards: cardsReducer,
  game: gameStatusReducer,
});

export default rootReducer;
