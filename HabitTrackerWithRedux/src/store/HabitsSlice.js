import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    habits :[
        {
            habitName :'Nothing',
            CompletionStatus : false
        }
    ]
}

export const habitsSlice = createSlice({
    name : 'habits',
    initialState,
    reducers:{
        addHabit:(state,action)=>{
            const addHabit = {
                habitName : action.payload.habit,
                CompletionStatus : action.payload.CompletionStatus,
            }
            state.habits.push(addHabit)
        },
        toggleHabit:(state,action)=>{

            const indexToToggle = action.payload.index
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
            const indexToDelete = action.payload.index
            state.habits = state.habits.filter((habit,index)=>(
                index !== indexToDelete
            ))
        },
        updateHabit:(state,action)=>{
            const indexToUpdated = action.payload.index

            // const updateChanges = state.habits.map((habit,index)=>{
            //     if(index === indexToUpdated){
            //         return{habitName : action.payload.habit,CompletionStatus : action.payload.CompletionStatus}
            //     }
            //     return habit;
            // })

            // state.habits = updateChanges

            state.habits[indexToUpdated].habitName = action.payload.habit;
            state.habits[indexToUpdated].CompletionStatus = action.payload.CompletionStatus;

            
        }
    }

})

export const CompletedCount = (state) => {
    return state.habits.habits.filter((habit)=>(
        habit.CompletionStatus === true
    )).length
}   
    

export const {addHabit,toggleHabit,deleteHabit,updateHabit} = habitsSlice.actions;
export default habitsSlice.reducer