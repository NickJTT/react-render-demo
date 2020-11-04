import React, { useState, useMemo, useCallback } from 'react';
import { MemorizedChildFive } from './ChildFive';

export const ParentFour = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('TestOne');

  const person = { firstName: 'FirstName', lastName: 'LastName' };

  // eslint-disable-next-line
  const memorizedPerson = useMemo(() => person, []);

  const handleClick = () => {}

  const memorizedHandleClick = useCallback(handleClick, [])

  console.log('ParentFour Render');

  return <React.Fragment>
    <button onClick = { () => setCount(count => count + 1) }>{ count }</button>
    <button onClick = { () => setName('TestTwo') }>Change Name</button>
    <MemorizedChildFive name = { name } person = { memorizedPerson } handleClick = { memorizedHandleClick }/>
  </React.Fragment>;
}
