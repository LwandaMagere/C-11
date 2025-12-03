import React from 'react'
import { useState } from 'react';

const Content = () => {

    const [name, setName] = useState('ODIWOR');
    const [count, setCount] = useState(0);

const handleNameChange = () => {
    const names = ['Dado', 'Steven', 'Lenssen'];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  }

const handleClick = () => {
    setCount(count + 1);
    console.log(count);
}

// const handleClick2 = (name) => {
//     console.log(`${name} was clicked!`);
// }

// const handleClick3 = (e) => {
//     console.log(e.target);
// }

  return (
    <main>
        <p onDoubleClick={handleClick}>
            hello {name}!
        </p>

        <button onClick={handleNameChange}>Change name</button>
        {/* <button onClick={() => handleClick2('Dado')}>Click it 2</button>
        <button onClick={(e) => handleClick3(e)}>Click it 3</button> */}
    </main>
  )
}

export default Content
