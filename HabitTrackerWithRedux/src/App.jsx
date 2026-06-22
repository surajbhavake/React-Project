import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addHabit,toggleHabit,deleteHabit } from './store/HabitsSlice'


function App() {
  const[habit,setHabit]=useState('')

  const dispatch = useDispatch()

  function handelAdd(){
    dispatch(addHabit({habit,CompletionStatus : false}))
  }

  return (
    <div>
      <div>
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
      </div>
    </div>
  )
}

export default App
