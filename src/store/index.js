import { combineReducers, configureStore, } from "@reduxjs/toolkit";
import dustReducer from './slices/dustSlice';


const rootReduce = combineReducers({
    dust: dustReducer,
    
})

const store = configureStore({
    reducer: rootReduce,
   
})

export default store