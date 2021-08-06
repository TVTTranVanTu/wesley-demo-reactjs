import React, { useReducer, useState } from 'react';

type State = {
  count: number;
};

type CounterAction = {
  type: string;
  payload: number;
};
const initialState: State = { count: 0 };

function reducer(state: { count: number }, action: CounterAction) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'incrementByAmount':
      return { count: state.count + action.payload };
    case 'decrementByAmount':
      return { count: state.count - action.payload };
    default:
      throw new Error();
  }
}

const ReactHook: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [incrementAmount, setIncrementAmount] = useState('2');
  const incrementValue = Number(incrementAmount) || 0;
  return (
    <div className="react-hooks">
      <div className="counter">
        <button
          className="button"
          aria-label="Decrement value"
          onClick={() => dispatch({ type: 'decrement', payload: 1 })}
        >
          -
        </button>
        <span className="value">{state.count}</span>
        <button
          className="button"
          aria-label="Increment value"
          onClick={() => dispatch({ type: 'increment', payload: 1 })}
        >
          +
        </button>
      </div>
      <div className="counter">
        <input
          className="textbox mt-10"
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className="button"
          onClick={() => dispatch({ type: 'incrementByAmount', payload: incrementValue })}
        >
          Increment Amount
        </button>
        <button
          className="button"
          onClick={() => dispatch({ type: 'decrementByAmount', payload: incrementValue })}
        >
          Decrement Amount
        </button>
      </div>
    </div>
  );
};

export default ReactHook;
