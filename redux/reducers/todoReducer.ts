import { createSlice } from "@reduxjs/toolkit"

export interface TodoType{
    userid: string;
    task: string;  
    completed: string;
}

export interface TodoState{
    loading: boolean;
    data: TodoType[];
    error: any;
}

const initialState: TodoState = {
    loading: false,
    data: [],
    error: null,
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        taskRequest (state: TodoState, payload) {
            alert('진행 2: Reducer 내부')
            state.loading = true;
        },
        taskSuccess (state: TodoState, {payload}){
            state.data = [...state.data, payload]
            state.loading = false;
        },
        taskFailure (state: TodoState, {payload}){
            state.data = payload;
            state.loading = false;
        }
    }
})
const {reducer, actions} = todoSlice
export const todoActions = actions
export default reducer