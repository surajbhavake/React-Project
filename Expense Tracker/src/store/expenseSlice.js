import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    expenses:[{
        expenseName : '',
        amount : 0
    }]
}

export const expenseSlice = createSlice({
    name : 'expense',
    initialState,
    reducers:{
        addExpenses:(state,action)=>{
            const addedExpense = {
                expenseName : action.payload.expenseName,
                amount : action.payload.amount
            }
            state.expenses.push(addedExpense)
        },

        deleteExpense:(state,action)=>{
            state.expenses = state.expenses.filter((expense,index)=>(
                index !== action.payload
            ))
        },

        handelExpense:(state,action)=>{
            
        }


    }

})

export const {addExpenses, deleteExpense} = expenseSlice.actions;
export default expenseSlice.reducer