import React from 'react'
import { useState } from 'react'; // {The first thing you need to do}

const Content = () => {
     //const [name, setName] = useState('Onyango') // This is the default state
      // const [lwanda, magere] = useState('Lwanda');

      const [items, setItems] = useState([
        {
          id: 1,
          checked: false,
          item: 'This is Dado 1'
        },
        {
          id: 2,
          checked: false,
          item: 'This is Dado 2'
        },
        {
          id: 3,
          checked: false,
          item: 'This is Dado 3'
        },

      ]);



      

    // const handleNameChange = () => { // 1
    //     const names = ['Dado', 'Steven', 'Oduor'];
    //     const int = Math.floor(Math.random() * 3);
    //     //setName(names[int]) ;
    //     magere(names[int]);
    // }

    // const handleClick = () => {
    //     console.log('You clicked it');
    // }

    // const handleClick2 = (name) => {
    //     console.log(`${name} was clicked`);
    // }

    // const handleClick3 = (e) => {
    //     console.log(e);
    // }



  return (
    <main>
        <ul>
          {items.map((item) => (
            <li className='item' key={item.id}>
              <input
                type="checkbox"
                checked={item.checked}
                />
                <label>{item.item}</label>
                <button>Delete</button>

            </li>
          ))}
        </ul>
    </main>
    
  )


  // <p onDoubleClick={handleClick}>Hello {lwanda}!</p> // this code was from the main tag
  //       <button onClick={handleNameChange}>Change Name</button> {/*Using a referrence*/}
  //       <button onClick={() => handleClick2('Dado')}>Click it2</button>
  //       <button onClick={(e) => handleClick3(e.target)}>Click it3</button>
}


export default Content
