import React from "react";
import "./Square.css";

const Square = ({ value, onClick }) => {
  return <button className="Square"> {value}</button>;
};

export default Square;