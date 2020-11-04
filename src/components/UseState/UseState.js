import React, { useState } from 'react';

export const UseState = () => {
  const [count, setCount] = useState(0);

  console.log('UseState Render');

  return <React.Fragment>
    <button onClick = { () => setCount(count => count + 1) }>{ count }</button>
    <button onClick = { () => setCount(0) }>Set To 0</button>
    <button onClick = { () => setCount(5) }>Set To 5</button>
  </React.Fragment>;
}
