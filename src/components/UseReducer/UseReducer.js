import React, { useReducer } from 'react';

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case 'decrement': return state - 1;
    case 'reset': return initialState;
    case 'increment': return state + 1;
    default: return state;
  }
}

export const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  console.log('UseReducer Render');
  return <React.Fragment>
    <p>{ count }</p>
    <button onClick = { () => dispatch('decrement') }>Decrement</button>
    <button onClick = { () => dispatch('reset') }>Reset</button>
    <button onClick = { () => dispatch('increment') }>Increment</button>
  </React.Fragment>;
}
