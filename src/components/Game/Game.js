import React, { useState } from "react";
import "./Game.css";
import Board from "../Board/Board";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const xO = xIsNext ? "X" : "O";

  return (
    <div>
      <Board />
      <div className="player-display">{`Next player: ${xO}`}</div>
    </div>
  );
};

export default Game;
