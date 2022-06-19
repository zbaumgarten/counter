import React from "react";
import { useState } from "react";

function App() {
  let [ counter, setCounter ] = useState(1)
  window.setCounter = setCounter
  return (
    <div>
      <h1>{counter}</h1>
      <h1>{counter}</h1>
    </div>
  );
}

export default App;
