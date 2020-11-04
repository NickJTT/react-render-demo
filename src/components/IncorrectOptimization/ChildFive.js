import React from 'react';

export const ChildFive = ({ name, person }) => {
  console.log('ChildFive Render');
  return <p>Hello, { name } and { person.firstName } { person.lastName }!</p>;
}

export const MemorizedChildFive = React.memo(ChildFive);
