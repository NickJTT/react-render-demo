import React, { useState } from 'react';
import { ChildOne } from './ChildOne';
import { ParentOne } from './ParentOne';

export const GrandParent = () => {
  const [count, setCount] = useState(0);

  return <React.Fragment>
    <button onClick = { () => setCount(count => count + 1) }>GrandParent Count: { count }</button>
    <ParentOne><ChildOne/></ParentOne>
  </React.Fragment>;
}
