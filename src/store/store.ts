import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userAuthSlice/userAuthSlice";

export const store = configureStore({
    reducer: userReducer,
    devTools: process.env.NODE_ENV !== 'production',
});