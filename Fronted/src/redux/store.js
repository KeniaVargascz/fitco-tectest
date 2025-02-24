import { configureStore } from "@reduxjs/toolkit";
import publicationReducer from "../redux/slices/publications/publicationSlice";
import userReducer from "../redux/slices/user/userSlice";

export const store = configureStore({
    reducer:{
        publication: publicationReducer,
        user: userReducer
    }
})