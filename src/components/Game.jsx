import "../App.css";
import { Board } from "./Board";
import { useState } from "react";

export const Game = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  const handlePlay = (nextSquares) => {
    // TODO
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board
          xIsNext={xIsNext}
          setXIsNext={setXIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
        />
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
};
