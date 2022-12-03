import { useState } from "react";
import "./Counter.scss";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="counter">
      <h2 className="counter__title">Counter</h2>
      <p className="counter__display">{counter}</p>
      <div className="counter__value">
        <p onClick={handleDecrement}>-</p>
        <p onClick={handleIncrement}>+</p>
      </div>
    </div>
  );
};

export default Counter;
