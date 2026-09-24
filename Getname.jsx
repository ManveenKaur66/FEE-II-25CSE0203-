import { useState } from "react";
function Getname({name,setName}){
    function handleClick(e){
        setName(e.target.value);
    }
    return(
        <>
        <input type="text" value={name} onChange={handleClick}/>
        <h1>Name is {name}</h1>
        </>
    )
}
export default Getname;