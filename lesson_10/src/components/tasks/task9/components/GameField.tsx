import React, { FC, useState } from "react";

import { emptyGameField } from "../constants";
import GameRow from "./GameRow";

const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
interface GameFieldProps {
  disabled?: boolean;
}

const GameField: FC<GameFieldProps> = ({ disabled = false }) => {
  const SHIP_DATA = {
    fourdeck: [1, 4],
    tripdeck: [2, 3],
    doubledeck: [3, 2],
    singledeck: [4, 1]
  }
  const [userField, setUserField] = useState(emptyGameField);

  const onClickRow = (rowIndex: number, cellIndex: number) => {
    if (rowIndex !== -1 && cellIndex !== -1)
    if (!userField[rowIndex][cellIndex]) {
      setUserField((prevArray) =>
        prevArray.map((row, indexRow) =>
          indexRow !== rowIndex
            ? row
            : row.map((cell, indexCell) => (indexCell !== cellIndex ? cell : 1))
        )
      );
    }
  };

  return (
    <div className="gameField">
        <GameRow
        gameRowInfo={{ gameRow: alphabet.slice(0, userField[0].length), index: -1 }}
          onClick={onClickRow}
        />
      {userField.map((gameRow, index) => (
        <GameRow
          key={index}
          gameRowInfo={{ gameRow, index }}
          onClick={onClickRow}
        />
      ))}
    </div>
  );
};

export default GameField;
