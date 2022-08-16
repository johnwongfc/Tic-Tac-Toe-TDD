import React from "react";
import "./Board.css";
import Square from "../Square/Square";

const Board = ({ squares, onClick }) => {
  return (
    <div className="Board">
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  );
};

export default Board;
