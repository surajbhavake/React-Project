import {createSlice} from '@reduxjs/toolkit';


const savedHabit = localStorage.getItem('habits')

// If savedHabits has data (which counts as "true"), 
// it runs JSON.parse(savedHabits). Otherwise (if it counts as "false"), it runs []
const initialState = {
   habits : savedHabit ? JSON.parse(savedHabit) : [],
}

export const habitsSlice = createSlice({
    name : 'habits',
    initialState,
    reducers:{
        addHabit:(state,action)=>{
            const addHabit = {
                id : Date.now(),
                habitName : action.payload.habit,
                CompletionStatus : action.payload.CompletionStatus,
            }
            state.habits.push(addHabit)
        },
        toggleHabit:(state,action)=>{

            const HabitToToggle = action.payload
            const indexToToggle = state.habits.findIndex((habit)=>(
                habit.id === HabitToToggle
            ))
            // const updateToggle = state.habits.map((habit,index)=>{
            //     if(index === indexToToggle){
            //         return {...habit,CompletionStatus:!habit.CompletionStatus}
            //     }
            //     return habit
            // })

            // state.habits = updateToggle

            state.habits[indexToToggle].CompletionStatus = !state.habits[indexToToggle].CompletionStatus
        },
        deleteHabit:(state,action)=>{
            const HabitToDelete = action.payload
            state.habits = state.habits.filter((habit,index)=>(
                habit.id !== HabitToDelete
            ))
        },
        updateHabit:(state,action)=>{
            const HabitToUpdated = action.payload.id

            const indexToUpdated = state.habits.findIndex((habit)=>(
                habit.id === HabitToUpdated
            ))

            // const updateChanges = state.habits.map((habit,index)=>{
            //     if(index === indexToUpdated){
            //         return{habitName : action.payload.habit,CompletionStatus : action.payload.CompletionStatus}
            //     }
            //     return habit;
            // })

            // state.habits = updateChanges

            state.habits[indexToUpdated].habitName = action.payload.habit;
            

            
        }
    }

})

export const CompletedCount = (state) => {
    return state.habits.habits.filter((habit)=>(
        habit.CompletionStatus
    )).length
}  

export const TotalHabits = (state) =>(state.habits.habits.length)


    

export const {addHabit,toggleHabit,deleteHabit,updateHabit} = habitsSlice.actions;
export default habitsSlice.reducer