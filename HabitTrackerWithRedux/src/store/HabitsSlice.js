import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    habits :[
        {
            habitName :'',
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

        },
        deleteHabit:(state,action)=>{

        }
    }

})

export const {addHabit,toggleHabit,deleteHabit} = habitsSlice.actions;
export default habitsSlice.reducer