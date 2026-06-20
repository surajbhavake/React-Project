import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    expenses:[{
        expenseName : '',
        amount : 0,
        
    }]
}

export const expenseSlice = createSlice({
    name : 'expense',
    initialState,
    reducers:{
        addExpenses:(state,action)=>{
            const addedExpense = {
                expenseName : action.payload.expenseName,
                amount : action.payload.amount,
                
            }
            state.expenses.push(addedExpense)
        },

        deleteExpense:(state,action)=>{
            state.expenses = state.expenses.filter((expense,index)=>(
                index !== action.payload
            ))
        },

        handelUpdate:(state,action)=>{
            state.expenses = state.expenses.map((expense,index)=>{
                if(index === action.payload.editingIndex){
                    return {
                        expenseName : action.payload.expenseName,
                        amount : action.payload.amount
                    }
                }
                return expense;     
        })
        },
       


    }

})

 export const selectTotalExpense = (state) =>{
    return state.expense.expenses.reduce((sum,current)=>{
        return sum + current.amount;
    },0)
        }

export const {addExpenses, deleteExpense, handelUpdate} = expenseSlice.actions;
export default expenseSlice.reducer