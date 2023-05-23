import React from 'react';

const Counter = ({ value, onIncrement, onDecrement }) => (
    <div>
      {value}

      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
);
export default Counter;