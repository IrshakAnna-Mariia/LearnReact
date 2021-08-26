import React, { FC } from "react";

import GameCell from "./GameCell";

interface GameRowProps {
  rowIndex: number;
  gameRow: number[];
  onClickRow: (rowIndex: number, cellIndex: number) => void;
}

const GameRow: FC<GameRowProps> = ({ rowIndex, gameRow, onClickRow }) => {
  const onClickCell = (cellIndex: number) => onClickRow(rowIndex, cellIndex);

  return (
    <div className="gameRow">
      {gameRow.map((gameCell, cellIndex) => (
        <GameCell
          key={cellIndex}
          gameCell={gameCell}
          cellIndex={cellIndex}
          onClickCell={onClickCell}
        />
      ))}
    </div>
  );
};

export default GameRow;
