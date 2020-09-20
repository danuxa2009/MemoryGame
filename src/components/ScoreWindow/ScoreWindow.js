import React from "react";
import classes from "./ScoreWindow.module.css";

const ScoreWindow = ({ startNewGameHandler, score }) => {
  return (
    <div className={classes.Inner}>
      <button onClick={() => startNewGameHandler()}>Restart Game</button>

      <p>{score}</p>
    </div>
  );
};

export default ScoreWindow;
