import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child ({ onChangeColor, color}) {
  function handleClick() {
    onChangeColor(getRandomColor());
  }
  return (
    <div className="child"
          style={{ backgroundColor: color }}
          onClick={handleClick}>

    </div>

  );
}

export default Child;
