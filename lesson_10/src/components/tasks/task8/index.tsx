import React, { FC, useState, useEffect } from "react";
import { Alert, Button } from "antd";

import GameRow from "./GameRow";
import setStyles from "../task8/styles";

const Task8: FC = () => {
  const classes = setStyles();
  const [gameInfo, setGameInfo] = useState<TicTacToe>({
    arrayStatus: [
      [-1, -1, -1],
      [-1, -1, -1],
      [-1, -1, -1],
    ],
    currentMove: 1,
    winner: "",
  });

  const transponseArray = (): number[][] => {
    return gameInfo.arrayStatus[0].map((_, i) =>
      gameInfo.arrayStatus.map((row) => row[i])
    );
  };

  const checkDiagonal = (diagonalItems: number[]) => {
    if (
      diagonalItems.every(
        (number) => number === diagonalItems[0] && number !== -1
      )
    ) {
      setGameInfo((prevGameInfo) => ({
        ...prevGameInfo,
        winner: checkWinner(diagonalItems[0]),
      }));
    }
  };

  const checkWinner = (winCell: number) => (winCell === 1 ? "X" : "O");

  const onClickRow = (rowIndex: number, cellIndex: number) => {
    if (gameInfo.arrayStatus[rowIndex][cellIndex] === -1 && !gameInfo.winner) {
      setGameInfo((prevGameInfo) => ({
        ...prevGameInfo,
        arrayStatus: prevGameInfo.arrayStatus.map((row, indexRowInfo) => {
          if (indexRowInfo !== rowIndex) return row;

          return row.map((cell, indexCellInfo) =>
            indexCellInfo !== cellIndex ? cell : prevGameInfo.currentMove % 2
          );
        }),
        currentMove: prevGameInfo.currentMove + 1,
      }));
    }
  };

  const clearGameInfo = () => {
    setGameInfo((prevGameInfo) => ({
      winner: "",
      arrayStatus: prevGameInfo.arrayStatus.map((row) => row.map(() => -1)),
      currentMove: 1,
    }));
  };

  const checkGameRow = (row: number[]) => {
    if (!row.map((cell) => row[0] === cell && row[0] !== -1).includes(false)) {
      setGameInfo((prevGameInfo) => ({
        ...prevGameInfo,
        winner: checkWinner(row[0]),
      }));
    }
  };

  const checkGameField = (gameField: number[][], winner: string) => {
    let firstDiag: number[] = [];
    let secondDiag: number[] = [];

    gameField.forEach((row, index) => {
      firstDiag.push(row[index]);
      secondDiag.push(row[row.length - index - 1]);
      checkGameRow(row);

      return false;
    });

    if (!winner) {
      transponseArray().forEach((row) => {
        checkGameRow(row);

        return false;
      });

      checkDiagonal(firstDiag);
      checkDiagonal(secondDiag);
    }
  };

  useEffect(() => {
    checkGameField(gameInfo.arrayStatus, gameInfo.winner);
  }, [gameInfo.arrayStatus]);

  useEffect(() => {
    const isFullField = gameInfo.arrayStatus
      .map((row) => {
        return row.map((cell) => cell === -1).includes(true);
      })
      .every((item) => item === false);

    if (isFullField) {
      setGameInfo((prevGameInfo) => ({
        ...prevGameInfo,
        winner: "Nobady",
      }));
    }
  }, [gameInfo.arrayStatus]);

  return (
    <div className={classes.root}>
      {gameInfo.winner && (
        <Alert
          style={{ margin: "0 auto", width: "40%" }}
          message={`${gameInfo.winner} win`}
          type="success"
          banner={true}
          action={
            <Button size="small" type="ghost" onClick={clearGameInfo}>
              Replay
            </Button>
          }
        />
      )}
      {gameInfo.arrayStatus.map((gameRow, rowIndex) => (
        <GameRow
          key={rowIndex}
          rowIndex={rowIndex}
          gameRow={gameRow}
          onClickRow={onClickRow}
        />
      ))}
    </div>
  );
};

export default Task8;
