import React, { FC } from "react";

interface GameCellProps {
  cellInfo: number
}

const GameCell: FC<GameCellProps> = ({cellInfo}) => {
  return (
    <div className='gameCell'>
      {cellInfo !== 0 && cellInfo}
    </div>
  );
};

export default GameCell;
