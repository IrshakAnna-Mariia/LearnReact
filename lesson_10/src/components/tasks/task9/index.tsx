import React, { FC, useState } from "react";
import { Button } from "antd";

import GameField from "./components/GameField";
import useStyles from "./style";

const Task9: FC = () => {
  const classes = useStyles();

  const [isGameStart, setIsGameStart] = useState<boolean>(false);

  const onStartGame = () => {
    setIsGameStart(prevStatus => !prevStatus);
  };

  return (
    <div className={classes.root}>
      <div className="gameFieldContainer">
        <GameField disabled={isGameStart}/>
        {isGameStart && <GameField />}
      </div>
      <Button onClick={onStartGame}>
        {isGameStart ? "Restart" : "Start"} Game!
      </Button>
    </div>
  );
};

export default Task9;
