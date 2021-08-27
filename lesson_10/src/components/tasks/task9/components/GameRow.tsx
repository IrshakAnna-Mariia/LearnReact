import React, { FC } from "react";

import GameCell from "./GameCell";

interface GameRowProps {
  gameRowInfo: number[]
}

const GameRow: FC<GameRowProps> = ({ gameRowInfo}) => {
  return (
    <div className='gameRow'>
      {gameRowInfo.map((cell, index)=> (
        <GameCell key={index} cellInfo={cell}/>
      ))}
    </div>
  );
};

export default GameRow;
