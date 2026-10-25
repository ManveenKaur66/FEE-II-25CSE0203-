//USE COUNTER IS A CUSTOM HOOK...
//
//A custom hook is a reusable function that contains React hook logic.
import { useState } from "react";  //to use React's state functionality.
function useCounter(){        //hook starts with 'use' keyword...
    const [count,setCount]=useState(0); 
    //Initially the count is Zero, setCount is the function used to change the count. count is the current value of the state.
    //count stores/represents the current value of the state. 
    //It starts with the initial value 0 and gets a new value when setCount() updates the state.

    //INCREASE BY 1:
    function increment(){
        setCount(count+1);
    }
    //DECREASE BY 1:
    function decrement(){
        setCount(count-1);
    }
    return {count,increment,decrement}; //This is how the custom hook gives its functionality to the component using it.
    //returns count,increment function,decrement function.
}
export default useCounter; //used for importing into other file, without this file cannot be imported into other file