import React, { useState } from 'react';
import { MemorizedChildFour } from './ChildFour';

export const ParentThree = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('TestOne');

  console.log('ParentThree Render');

  return <React.Fragment>
    <button onClick = { () => setCount(count => count + 1) }>{ count }</button>
    <button onClick = { () => setName('TestTwo') }>Change Name</button>
    <MemorizedChildFour name = { name }/>
  </React.Fragment>;
}
