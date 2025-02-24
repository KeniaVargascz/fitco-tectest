import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: "",
    isLoading: false,
    error: false
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        startLoadingUser: (state, action) =>{
           state.isLoading = true;
        },
        setUser: (state, action) => {
            state.isLoading = false; 
            state.user = action.payload.user; 
            state.error = action.payload.error; 
        }
    }
});

export const { startLoadingUser, setUser } = userSlice.actions; 
export default userSlice.reducer; 