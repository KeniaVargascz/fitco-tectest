import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    publications:[],
    isLoading: false,
};

export const publicationSlice = createSlice({
    name: "publication",
    initialState,
    reducers: {
        startLoadingPublication: (state, action) =>{
           state.isLoading = true;
        },
        setAllPublications: (state, action) => {
            state.isLoading = false; 
            state.publications = action.payload.publications; 
        },
        addPublication: (state, action) => {
            state.publications.unshift(action.payload);
        }
    }
});

export const { startLoadingPublication, setAllPublications, addPublication  } = publicationSlice.actions; 
export default publicationSlice.reducer; 