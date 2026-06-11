import React, { useState } from 'react'

function App() {

  const[password,setPassword] =useState('')

  let strength = '';

  if (password.length === 0){
    strength = ''
  }
  else if(password.length<= 4){
    strength = 'Weak'
  }
  else if(password.length <= 8){
    strength = 'Medium'
  }
  else{
    strength = 'Strong'
  }

  return (
    <div>
      <label>Enter you password : </label>
      <input 
      placeholder='Enter Password'
      value={password}
      onChange={(e)=>setPassword(e.currentTarget.value)}
      />
      <p>{strength}</p>
    </div>
  )
}

export default App
