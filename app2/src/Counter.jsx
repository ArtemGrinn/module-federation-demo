import React, { useState } from "react";
import "./index.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div class="counter">
      <div>
        Counter: {counter}
      </div>
      <button onClick={() => setCounter(x => x + 1)}>
        Increment
      </button>
      <button onClick={() => setCounter(x => x - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;