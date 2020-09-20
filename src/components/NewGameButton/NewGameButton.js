import classes from "./NewGameButton.module.css";
import React from "react";
import { connect } from "react-redux";
import { initField, startNewGame } from "../../store/actions/actions";

const NewGameButton = ({ startNewGame }) => {
  return (
    <div>
      <button className={classes.RestartButton} onClick={startNewGame}>
        Restart Game
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startNewGame: () => {
    dispatch(initField());
    dispatch(startNewGame());
  },
});

export default connect(null, mapDispatchToProps)(NewGameButton);
