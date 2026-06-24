import React, { useState,useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addHabit,toggleHabit,deleteHabit,CompletedCount,updateHabit } from './store/HabitsSlice'


function App() {
  const[habit,setHabit]=useState('')

  const dispatch = useDispatch()
  const habits = useSelector((state)=>state.habits.habits)
  const completedCount = useSelector(CompletedCount)
  const[editingIndex,setEditingIndex] = useState(null)

  function handelAdd(){
    dispatch(addHabit({habit,CompletionStatus : false}))
    setHabit('')
  }
  function handelUpdate(indexToUpdate){
    setHabit(habits[indexToUpdate].habitName)
    setEditingIndex(indexToUpdate)
  }
  function updateChanges(){
    dispatch(updateHabit({habit,CompletionStatus:false,index:editingIndex}))
    setHabit('')
  }


  useEffect(()=>{
    localStorage.setItem('habits',JSON.stringify(habits))
  },[habits])

  // function StoreData(){
  //   localStorage.setItem('habits',JSON.stringify(habits))
  // }

  return (
    <div>
      <div>

        <div className="div"><p>{`Completed: ${completedCount}/${habits.length}`}</p></div>
        <label>Habit : </label>
        <input type="text"
        placeholder='Enter your habit'
        value={habit}
        onChange={(e)=>setHabit(e.currentTarget.value)}
        />
        <div>
          <button
          onClick={handelAdd}
          >Add</button>
        </div>
        
        <div>
          <button
        onClick={updateChanges}
        >Update</button>
        </div>

        <div >
          
          {habits.map((habit,index)=>(
            <div key={index}>
              <p>{`Habits: ${habit.habitName}`}</p>

              <input type="checkbox"
              checked={habit.CompletionStatus}
              onChange={()=>dispatch(toggleHabit({index}))}
              />

              <div>
                <button onClick={() => dispatch(deleteHabit({index}))}>Delete</button><br/>
                <button onClick={()=>handelUpdate(index)}>Edit</button>
              </div>

            </div>
          ))}
        </div>

        
      </div>

      {/* <div>
        <br/>

        <button
        onClick={StoreData}
        >Save</button>
      </div> */}
    </div>
  )
}

export default App
