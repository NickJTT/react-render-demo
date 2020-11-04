import React, { useState } from 'react';
import { MemorizedChildA } from './ContextChildren';

export const CountContext = React.createContext();
const CountProvider = CountContext.Provider;

export const ContextParent = () => {
  const [count, setCount] = useState(0);

  console.log('ContextParent Render');

  return <>
    <button onClick = { () => setCount(count => count + 1) }>{ count }</button>
    <CountProvider value = { count }>
      <MemorizedChildA/>
    </CountProvider>
  </>;
}
