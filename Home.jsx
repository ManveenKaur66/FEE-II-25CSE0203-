import Getname from "./Getname";
import DisplayName from "./DisplayName";
import { useState } from "react";
import useCounter from "../hooks/useCounter";
function Home(){
    // const [name,setName]=useState(null);
    const {count,increment,decrement}=useCounter();
return(
    <>
    <h1>Home Component</h1>
    {/* <h1>Home Component</h1>
    <Getname name={name} setName={setName}/>
    <DisplayName name={name}/> */}

    <h2>Count: {count}</h2>
    <button onClick={increment}>increment by 1</button>
    <button onClick={decrement}>decreament by 1</button>
    </>
)
}
export default Home;