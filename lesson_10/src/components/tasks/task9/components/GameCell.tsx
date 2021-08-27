import React, { FC } from "react";

interface GameCellProps {
  cellInfo: {
    cell: number | string, 
    index: number
  },
  onClick: (cellIndex: number) => void
}

const GameCell: FC<GameCellProps> = ({ cellInfo, onClick}) => {
  return (
    <div className={`gameCell ${cellInfo.cell !== 0 && 'isSelect'}`} onClick={() => onClick(cellInfo.index)}>
      {cellInfo.cell === 2 && 'X'}
      {typeof cellInfo.cell === 'string' && cellInfo.cell}
    </div>
  );
};

export default GameCell;
