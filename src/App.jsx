import React, { useEffect, useState } from 'react'

function App() {

  const [count,setCount] = useState(0);
  const [increase, setIncrease] = useState(0);
  const [decrease,setDecrease] = useState(0);
  const [highest,setHighest] = useState(0);
  let message = '';

  if(count> 0){
    message = 'Positive Number'
  }
  else if(count<0){
    message = 'Negative number'
  }
  else{
    message = 'zero'
  }


  

  function increment(){
    setCount(prevCount=> prevCount + 1)
    setIncrease(preIncrease => preIncrease + 1)
    if(count > highest){
    setHighest(count)
  }

  }
    function decrement(){
      if (count>0){
         setCount(prevCount=> prevCount - 1)
         setDecrease(preDecrease => preDecrease + 1)
      }
   
    
  }

  function reset(){
    setCount(0)
    setIncrease(0)
    setDecrease(0)
  }


  
  return (
    <div>
      <label>{count}</label>
      <h1>{message}</h1>
      <h3>{`Increase button is clicked for ${increase}`}</h3>
      <h3>{`Decrease button is clicked for ${decrease}`}</h3>
      <h4>{`Highest Count : ${highest}`}</h4>
      <br></br>
      <button
      
      onClick={increment}
      >
        Increase
      </button>
      <br></br>

      <button
      
      onClick={decrement}
      >
        Decrease
      </button>
      <br></br>
      <button
      onClick={reset}
      >
        Reset
      </button>
    </div>
  )
}

export default App
