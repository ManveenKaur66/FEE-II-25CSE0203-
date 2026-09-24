//USE COUNTER IS A CUSTOM HOOK...
//custom hook is stateless, they are state independent.
import { useState } from "react";
function useCounter(){
    const [count,setCount]=useState(0);
    //INCREASE BY 1:
    function increment(){
        setCount(count+1);
    }
    //DECREASE BY 1:
    function decrement(){
        setCount(count-1);
    }
    return {count,increment,decrement};
}
export default useCounter;