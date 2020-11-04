import React, { useContext } from 'react';
import { CountContext } from './ContextParent';

export const ChildA = () => {
  console.log('Child A Render');
  return <>
    <p>Child A</p>
    <ChildB/>
  </>;
};

export const MemorizedChildA = React.memo(ChildA);

export const ChildB = () => {
  console.log('Child B Render');
  return <>
    <p>Child B</p>
    <ChildC/>
  </>;
};

export const ChildC = () => {
  const count = useContext(CountContext);
  console.log('Child C Render');
  return <p>Child C count = { count }</p>;
};
