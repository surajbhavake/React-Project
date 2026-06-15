import React, { useState } from 'react'

function App() {

  const [expenseName,setExpenseName] = useState('')
  const [amount,setAmount] = useState('')
  const [expense,setExpense] = useState([])
  const [error,setError] = useState('')

  let Total = 0;
  

  function addExpense(){

    if(expenseName.trim()===''|| amount === 0){
      setError('Please Enter something')
    }
    
    else{
    setExpense(prev=>[{expenseName,amount},...prev])
    setAmount('')
    setExpenseName('')
    setError('')

    
    }
    

  }

  Total = expense.reduce((sum,current)=>{
      return sum + current.amount
    },0)



  
  return (
    <div>

      <div>
        <label>Expense Name : </label>
        <input 
        placeholder='Enter Expense'
        value={expenseName}
        onChange={(e)=>setExpenseName(e.currentTarget.value)}
        />
      </div>
      <br/>
       <div>
        <label>Amount : </label>
        <input 
        value={amount}
        onChange={(e)=>setAmount(parseInt(e.currentTarget.value))}
        />
      </div>
      <br/>
      <div>{error}</div>
      <div>
        <button
        onClick={addExpense}
        >Add Expense</button>
      </div>

      <div>
        {expense.map((expense,index)=>
        <div key={index}>
          <p>{`Expense : ${expense.expenseName}`}</p>
          <p>{`Amount : ${expense.amount}`}</p>
        </div>
        )}
      </div>

      <div>{Total}</div>
      
    </div>
  )
}

export default App
