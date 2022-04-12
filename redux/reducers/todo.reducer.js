import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    date: '',
    todo: ''
}
export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {}
})
export default todoSlice.reducer