import logo from './logo.svg';
import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState([
    {
      content: 'react를 배워봅시다'
    }
  ]);

  const contentInput = useRef();

  const addList = () => {
    setValue([...value,{
      content: contentInput.current.value
    }])
  }

  return (
    <div className="App">
      <div className='topInput'>
        <input type="text" ref={contentInput} />
        <button onClick={addList}>추가하기</button>
      </div>
      <div className='title'>
        <h1>Todo List</h1>
      </div>
      <div className='lists'>
        {
          value.map((lists, i) => {
            return(
              <div className='list' key={i}>
                <div className='text'>
                  <p>{lists.content}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
