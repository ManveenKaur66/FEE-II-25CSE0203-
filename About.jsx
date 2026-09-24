import { use } from "react";
import useCounter from "../hooks/useCounter";
function About(){

    const {count,increment,decrement}=useCounter();
return(
    <>
    <h1>ABOUT COMPONENT</h1>
    <h2>Count: {count}</h2>
    <button onClick={increment}>increment by 1</button>
    <button onClick={decrement}>decreament by 1</button>
    </>
)
}
export default About;