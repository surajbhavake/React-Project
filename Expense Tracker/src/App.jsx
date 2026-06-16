import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addExpenses,deleteExpense } from './store/expenseSlice'
import {store} from './store/store'

function App() {

  const [expenseName,setExpenseName] = useState('')
  const [amount,setAmount] = useState('')
  const [error,setError] = useState('')
  const[editingIndex,setEditingIndex] = useState(null)

  const expense = useSelector((state)=>state.expense.expenses)

  const dispatch = useDispatch()

  let Total = 0;
  let updateExpsense = '';
  

  function addExpense(){

    if(expenseName.trim()===''|| amount.trim()===''){
      setError('Please Enter something')
    }
    
    else{
    // setExpense(prev=>[{expenseName,amount:parseInt(amount)},...prev])
    dispatch(addExpenses({ expenseName, amount: parseInt(amount) }) )
    setAmount('')
    setExpenseName('')
    setError('')

    
    }
    

  }

  Total = expense.reduce((sum,current)=>{
      return sum + current.amount
    },0)


  // function handelDelete(indexToDelete){
  //   // setExpense(prev=>prev.filter((expense,index)=>(
  //   //   index !== indexToDelete
  //   // )))
    
  // }

  function handelUpdate(indextoUpdate){
    setEditingIndex(indextoUpdate)
    setAmount(expense[indextoUpdate].amount)
    setExpenseName(expense[indextoUpdate].expenseName)
  }

  function updateExpenses(){
    updateExpsense = expense.map((expense,index)=>{
      if(index===editingIndex){
        return {expenseName , amount :parseInt(amount) }
      }
      else{
        return expense
      }
      
    })

    setExpense(updateExpsense)
    setAmount('')
    setExpenseName('')
    setEditingIndex(null)
  }



  
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
        type='number'
        value={amount}
        onChange={(e)=>setAmount(e.currentTarget.value)}
        />
      </div>
      <br/>
      <div>{error}</div>
      {editingIndex === null && (
        <div>
        <button
        onClick={addExpense}
        >Add Expense</button>
      </div>
      )}
      {editingIndex !== null && (
        <div>
        <button
        onClick={updateExpenses}
        >Update Expense</button>
      </div>
      )}

      <div>
        {expense.map((expense,index)=>
        <div key={index}>
          <p>{`Expense : ${expense.expenseName}`}</p>
          <p>{`Amount : ${expense.amount}`}</p>
           <div>
            <button
            onClick={()=>dispatch(deleteExpense(index))}
            >Delete</button>
           </div>
           <div>
            <button
            onClick={()=>handelUpdate(index)}
            >Edit</button>
           </div>
        </div>
        )}
      </div>

      <div>{Total}</div>
      
    </div>
  )
}

export default App
