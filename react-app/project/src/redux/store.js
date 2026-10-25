import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer, //  Mapped explicitly to 'counter'
    }
});
