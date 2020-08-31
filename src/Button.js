import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./style.css";

export default function Button(props) {
  const [counterSteps, setCounterSteps] = useState(0);
  const { onCounterIncreased } = props;

  useEffect(() => {
    setCounterSteps(props.counterSteps);
  }, [props]);

  const increaseCount = () => {
    onCounterIncreased(counterSteps);
  };

  return (
    <div>
      <button onClick={increaseCount}>increase counter</button>
    </div>
  );
}

Button.propTypes = {
  onCounterIncreased: PropTypes.func
};
