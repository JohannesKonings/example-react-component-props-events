import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";

export default function CounterSteps(props) {
  const [count, setCount] = useState(0);
  const { onCurrentInput } = props;

  const handleInput = event => {
    onCurrentInput(event.target.value);
  };

  return (
    <div>
      <p>
        <input
          type="number"
          name="counterSteps"
          placeholder="counterSteps"
          onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
          onInput={handleInput}
        />
      </p>
    </div>
  );
}

CounterSteps.propTypes = {
  onCurrentInput: PropTypes.func
};
