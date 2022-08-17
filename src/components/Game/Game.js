import React, { useState } from "react";
import "./Game.css";
import Board from "../Board/Board";
import { calculateWinner } from "../../utils/helper";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const xO = xIsNext ? "X" : "O";
  const winner = calculateWinner(history[stepNumber]);

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];

    if (winner || squares[i]) return;

    // click square
    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };

  const reset = () => {
    return (
      <button
        className="reset"
        onClick={() => {
          setHistory([Array(9).fill(null)]);
          setStepNumber(0);
          setXisNext(true);
        }}
      >
        Reset
      </button>
    );
  };

  return (
    <div>
      {/* <div className="player-display">{`Next player: ${xO}`}</div> */}
      <h3 className="player-display">
        {stepNumber === 9 && !winner
          ? "It's a Draw!"
          : winner
          ? `Winner: ${winner}`
          : `Next player: ${xO}`}
      </h3>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div className="button-display">{reset()}</div>;
    </div>
  );
};

export default Game;
