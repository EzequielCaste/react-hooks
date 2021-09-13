import React, { useReducer } from 'react'

const TYPES = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  RESET: 'reset',
}

const reducer = (state, action) => {
  switch(action.type) {
    case TYPES.INCREMENT: 
      return state+1;
    case TYPES.DECREMENT:
      return state-1;
    case TYPES.RESET:
      return 0;
    default:
      return state;
  }
}

const CounterApp = () => {

  const [counter, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>Clicks: {counter}</h1>
      <button onClick={() => dispatch({ type: TYPES.INCREMENT })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: TYPES.DECREMENT  })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: TYPES.RESET })}>
        Reset
      </button>
    </div>
  )
}

export default CounterApp