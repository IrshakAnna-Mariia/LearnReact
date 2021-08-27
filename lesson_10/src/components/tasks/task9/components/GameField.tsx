import React, { FC } from "react";

import GameRow from "./GameRow";

interface GameFieldProps {
  fieldArr: number[][],
  disabled?: boolean,
}

const GameField: FC<GameFieldProps> = ({ fieldArr, disabled = false}) => {
  const onClick = () => {
    if (!disabled) console.log('some')
  }

  return (
    <div className='gameField' onClick={onClick}>
      {fieldArr.map((gameRow, index) => (
        <GameRow key={index} gameRowInfo={gameRow}/>
      ))}
    </div>
  );
};

export default GameField;
