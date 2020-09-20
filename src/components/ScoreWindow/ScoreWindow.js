import React from "react";
import NewGameButton from "../NewGameButton/NewGameButton";
import classes from "./ScoreWindow.module.css";

const ScoreWindow = ({ score, gameOver }) => {
  return (
    <div className={classes.Inner}>
      {gameOver ? (
        <div className={classes.Inner}>
          <NewGameButton />
          <p>Congratulations, you won in {score} moves</p>
        </div>
      ) : (
        <div className={classes.Inner}>
          <NewGameButton />
          <p>Moves: {score}</p>
        </div>
      )}
    </div>
  );
};

export default ScoreWindow;
