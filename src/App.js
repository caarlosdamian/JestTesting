import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setcounter] = useState(0);
  const notCero = () => {
    if (counter === 0) {
      return counter;
    } else {
      setcounter(counter - 1);
    }
  };
  return (
    <div className="App">
      <h1>This is counter app</h1>
      <div id="counter-value">{counter}</div>
      <button id="decrement-btn" onClick={notCero}>
        Decrement
      </button>
      <button id="increment-btn" onClick={() => setcounter(counter + 1)}>
        Increment
      </button>
    </div>
  );
}

export default App;
