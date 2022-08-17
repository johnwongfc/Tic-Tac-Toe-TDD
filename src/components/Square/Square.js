import React from "react";
import "./Square.css";

const Square = ({ value, onClick }) => {
  return <button className="squares" onClick={onClick}>{value}</button>;
};

export default Square;
