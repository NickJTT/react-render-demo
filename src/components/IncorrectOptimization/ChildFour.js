import React from 'react';

export const ChildFour = ({ name }) => {
  const date = new Date();
  console.log('ChildFour Render');
  return <p>Hello, { name }! It is currently { date.getHours() }:{ date.getMinutes() }:{ date.getSeconds() }!</p>
}

export const MemorizedChildFour = React.memo(ChildFour);
