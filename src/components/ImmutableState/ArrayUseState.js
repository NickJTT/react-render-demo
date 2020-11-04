import React, { useState } from 'react';

const initialState = ['FirstPerson', 'SecondPerson'];

export const ArrayUseState = () => {
  const [people, setPeople] = useState(initialState);

  const changeName = () => {
    const setValue = [...people];
    setValue.push('ThirdPerson');
    setValue.push('FourthPerson');
    setPeople(setValue);
  }

  console.log('ArrayUseState Render');

  return <React.Fragment>
    { people.map(person => <p key = { person }>{ person }</p>) }
    <button onClick = { () => changeName() }>Change Name</button>
  </React.Fragment>;
}
