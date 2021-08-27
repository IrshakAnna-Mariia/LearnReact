import React, { FC } from "react";

import GameCell from "./GameCell";

interface GameRowProps {
  gameRowInfo: {
    gameRow: (number | string)[], 
    index: number,
  },
  onClick: (rowIndex: number, cellIndex: number) => void
}

const GameRow: FC<GameRowProps> = ({ gameRowInfo, onClick }) => {
  const onClickCell = (cellIndex: number) => onClick(gameRowInfo.index, cellIndex);

  return (
    <div className='gameRow'>
      <GameCell cellInfo={{ cell: (gameRowInfo.index + 1).toString(), index: -1 }} onClick={onClickCell} />
      {gameRowInfo.gameRow.map((cell, index)=> (
        <GameCell key={index} cellInfo={{ cell, index }} onClick={onClickCell}/>
      ))}
    </div>
  );
};

export default GameRow;
