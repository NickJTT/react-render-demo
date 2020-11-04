import React from 'react';

export const ChildThree = ({ children, name }) => {
  console.log('ChildThree Render');
  return <React.Fragment>
    { children } { name }
    <p>ChildThree Component</p>
  </React.Fragment>;
}

export const MemorizedChildThree = React.memo(ChildThree);
