import React, { FC } from "react";
import { Typography } from "antd";
import { CloseOutlined } from "@ant-design/icons";

interface GameCellProps {
  gameCell: number;
  cellIndex: number;
  onClickCell: (cellIndex: number) => void;
}

const GameCell: FC<GameCellProps> = ({ gameCell, cellIndex, onClickCell }) => {
  const getRightElement = () => {
    if (gameCell) {
      return <CloseOutlined className="cellItem" />;
    }

    return <Typography.Text className="cellItem">O</Typography.Text>;
  };

  return (
    <div className="gameCell" onClick={() => onClickCell(cellIndex)}>
      {gameCell !== -1 && getRightElement()}
    </div>
  );
};

export default GameCell;
