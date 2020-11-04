import React, { useState } from 'react';

export const ParentOne = ({ children }) => {
  const [count, setCount] = useState(0);

  console.log('ParentOne Render');

  return <React.Fragment>
    { children }
    <button onClick = { () => setCount(count => count + 1) }>{ count }</button>
  </React.Fragment>;
}
