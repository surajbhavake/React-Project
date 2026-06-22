import {configureStore} from '@reduxjs/toolkit';
import habitReducer from './habitSlice';

const store = configureStore({
    reducer: {
        habits : habitSlice.reducer
    }
})