//SLICE:In Redux, a slice is a collection of Redux reducer 
// logic and actions bundled together for a single, specific feature of your application.

import {createSlice} from "@reduxjs/toolkit";
//this is a state....
//state is a object
const initialState={
    value:0
}

const counterSlice=createSlice({
    name:"counter",
    initialState:initialState,
    reducers:{
        increment:(state)=>{
            state.value=state.value+1;
        },
        decrement:(state)=>{
            state.value=state.value-1;
        },
        double:(state)=>{
            state.value=state.value*2;
        },
        reset:(state)=>{
            state.value=0;
        }
    }
})
export const {increment,decrement,double,reset}=counterSlice.actions;
export default counterSlice.reducer;