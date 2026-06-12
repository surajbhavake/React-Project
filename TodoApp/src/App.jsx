import React from 'react'
import { useState } from 'react'

function App() {

  const[tasks,setTasks] = useState('')
  const[taskStore,setTaskStore] = useState([])
  const[error,setError] = useState('')
  
  

  function add(){

    
    if(tasks.trim() === '' ){
     setError('Please enter something')
      
    
    }
    else{
    setTaskStore((prev)=>[...prev,tasks])
    setTasks('')
    setError('')
      
    }
  }
    
   
  function deleteTasks(index){
    taskStore.pop(index)
  }

  return (
    <div>
      <input
      
      placeholder='Enter a Task'
      value={tasks}
      onChange={(e)=>setTasks(e.currentTarget.value)}
      
      
      /><br/>
      <h3>{error}</h3>

      
      <button
      onClick={add}
      >

        Add
      </button>
      <p>Tasks:</p>
      <p>{taskStore.map((task,index)=>(
        <div key={index}>
          <h2>{task}<button
          onClick={()=>deleteTasks(index)} >Delete</button>
          </h2>
          
        </div>
      ))}</p>
      
      
      
    </div>
  )
}

export default App
