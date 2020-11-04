import React, { useState } from 'react';
import { MemorizedChildTwo } from './ChildTwo';

export const ParentTwo = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('TestOne');

  console.log('ParentTwo Render');

  return <React.Fragment>
    <button onClick = { () => setCount(count => count + 1) }>{ count }</button>
    <button onClick = { () => setName('TestTwo') }>Change Name</button>
    <MemorizedChildTwo name = { name }/>
  </React.Fragment>;
}
