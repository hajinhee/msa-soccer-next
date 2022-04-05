import { combineReducers } from "@reduxjs/toolkit"; 
import { HYDRATE } from "next-redux-wrapper"; 
import counter from 'store/basic/counterSlice'; 
const rootReducer = (state, action) => { 
    if (action.type === HYDRATE) { 
        return { ...state, 
            ...action.payload }; 
    } 
    return combineReducers(
        { 
            counter, // 여기에 추가 
        })(state, action); 
} 
export default rootReducer;