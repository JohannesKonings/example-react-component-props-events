import React, { useState } from "react";
import CounterSteps from "./CounterSteps";
import Button from "./Button";
import "./style.css";

export default function App() {
  const [counterSteps, setCounterSteps] = useState(0);
  const [count, setCount] = useState(0);

  const handleCurrentInput = currentInput => {
    setCounterSteps(currentInput);
  };

  const handleCounterIncreased = counterSteps => {
    const newCount = count + parseInt(counterSteps);
    setCount(newCount);
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>current counterStepsInput: {counterSteps}</p>
      <p>current count: {count}</p>
      <CounterSteps onCurrentInput={handleCurrentInput} />
      <Button
        counterSteps={counterSteps}
        onCounterIncreased={handleCounterIncreased}
      />
    </div>
  );
}
