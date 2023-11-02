import React from "react";
import Cells from "./Cells";

export default function Board({ xIsNext, squares, onPlay }) {
  function handleClick(index) {
    const nextSquares = squares.slice();
    if (squares[index] || calculateWinner(squares)) {
      return;
    }
    if (xIsNext) {
      nextSquares[index] = "X";
    } else {
      nextSquares[index] = "O";
    }
    onPlay(nextSquares);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2], // Linha 1
      [3, 4, 5], // Linha 2
      [6, 7, 8], // Linha 3
      [0, 3, 6], // Coluna 1
      [1, 4, 7], // Coluna 2
      [2, 5, 8], // Coluna 3
      [0, 4, 8], // Diagonal 1
      [2, 4, 6], // Diagonal 2
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="game-container">
        <div className="header-container">
          <div className="status">{status}</div>
        </div>
        <div className="board-container">
          {[0, 1, 2].map((row) => (
            <div className="board-row" key={row}>
              {[0, 1, 2].map((col) => (
                <Cells
                  key={col}
                  value={squares[row * 3 + col]}
                  onCellClick={() => handleClick(row * 3 + col)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
