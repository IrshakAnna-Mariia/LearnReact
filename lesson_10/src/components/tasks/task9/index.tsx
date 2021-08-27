import React, { FC, useState } from "react";
import { Button } from "antd";

import { emptyGameField } from "./constants";
import GameField from "./components/GameField";
import useStyles from "./style";

const Task9: FC = () => {
  const classes = useStyles();

  const [gameStatus, setGameStatus] = useState({
    computer: emptyGameField,
    user: emptyGameField,
    isGameStart: false,
  });

  const onStartGame = () => {
    setGameStatus((prevStatus) => ({
      ...prevStatus,
      isGameStart: !prevStatus.isGameStart,
    }));
  };

  const onClickRow = (arr: number[], rowIndex: number, cellIndex: number) => {
    // if (gameStatus.[arr].[rowIndex][cellIndex] === -1 && !gameInfo.winner) {
      
    // }
  };

  return (
    <div className={classes.root}>
      <div className="gameFieldContainer">
        <GameField
          fieldArr={gameStatus.user}
          disabled={gameStatus.isGameStart}
        />
        {gameStatus.isGameStart && <GameField fieldArr={gameStatus.computer} />}
      </div>
      <Button onClick={onStartGame}>
        {gameStatus.isGameStart ? "Restart" : "Start"} Game!
      </Button>
    </div>
  );
};

export default Task9;
