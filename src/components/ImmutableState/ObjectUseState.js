import React, { useState } from 'react';

const initialState = { firstName: 'FirstName', lastName: 'LastName' };

export const ObjectUseState = () => {
  const [person, setPerson] = useState(initialState);

  const changeName = () => {
    setPerson({ firstName: 'FirstNameTest', lastName: 'LastNameTest' });
  }

  console.log('ObjectUseState Render');

  return <React.Fragment>
    <p>{ person.firstName + ' ' + person.lastName }</p>
    <button onClick = { () => changeName() }>Change Name</button>
  </React.Fragment>;
}
