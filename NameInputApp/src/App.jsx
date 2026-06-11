import React, { useState } from 'react'

function App() {

  const[name,setName] = useState('');

  let charCount = name.length;
  


 

  return (
    <div>
      <label>Name : </label>
         <input
      value={name.toUpperCase()}
      
      placeholder='Enter your name'
      onChange={(e)=>(setName(e.currentTarget.value))}
      >
      </input>

      {name? <p>{`Hello ${name.toUpperCase()}`}</p>: <p>{`Please Enter your Name`}</p>}

      <p>{charCount}</p>
    </div>
  )
}

export default App
