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

        },
        toggleHabit:(state,action)=>{

        },
        deleteHabit:(state,action)=>{

        }
    }

})