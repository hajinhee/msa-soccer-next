import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    userLoading: false,
    userData: null,
    error: null
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        joinReauest(state, action){state.userLoading = true, state.error = null},
        joinSuccess(state, action){state.userLoading = false, state.error = action.payload},
        joinFailure(state, action){state.userLoading = false, state.error = action.payload}

    }
})

export default userSlice.reducer