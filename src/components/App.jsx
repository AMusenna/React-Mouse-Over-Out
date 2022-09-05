import React, { useState } from "react";

function App() {
  const [beforeClick, setBeforeClick] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);

  function buttonClick() {
    setBeforeClick("Submitted");
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{beforeClick}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={buttonClick}
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
