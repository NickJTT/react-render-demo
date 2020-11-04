import React from 'react';

export const ChildTwo = () => {
  console.log('ChildTwo Render');
  return <p>ChildTwo Component</p>;
}

export const MemorizedChildTwo = React.memo(ChildTwo);
