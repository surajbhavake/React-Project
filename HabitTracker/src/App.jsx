import React, { useState } from 'react'

function App() {

  const[habit,setHabit] = useState('')
  const[habits,setHabits] = useState([]);
  const[error,setError] = useState('');


  const completedCount = habits.filter((habit)=>(
    habit.complete===true
  )) .length
  


  function addHabit(){

    if(habit.trim()===''){
      setError("Please Enter valid text")
    }
    else{
    setHabits((prev)=>[{habit:habit,complete : false},...prev])
    setHabit('')
    setError('')
    }
  }
  function updateCompelte(indexToToggle){
    const updatedComplete = habits.map((habit,index)=>{
      if (index === indexToToggle){
        return {...habit, complete:!habit.complete}
      

      }
      else{
        return habit
      }
  })
   setHabits(updatedComplete)
 
  }

  function deleteHabit(indexToDelete){
    setHabits((prev)=>prev.filter((habit,index)=>(
      index !== indexToDelete
    )))


 
  }

   
  
  return (
    <div>
      <div>
        <label >Habit : </label>
        <input type="text"
        placeholder='Enter your habit'
        value={habit}
        onChange={(e)=>setHabit(e.currentTarget.value)}
        />
      </div>
      <div>
        {error}
      </div>

      <div>
        <button
        onClick={addHabit}
        >Add</button>
      </div>

      <div>
        {habits.map((habit,index)=>(
        <div key={index}>
          <p>{habit.habit}</p>
          <div>
            <input type="checkbox"
            checked={habit.complete}
            onChange={()=>updateCompelte(index)}
             >
             </input>
             <div>
              <button
              
              onClick={()=>{deleteHabit(index)}}>
                Delete
              </button>
             </div>

            
          </div>
        </div>
        ))}

        <div>
          <p>Completed : {completedCount}/{habits.length}</p>
        </div>
      </div>
    </div>
  )
}

export default App
