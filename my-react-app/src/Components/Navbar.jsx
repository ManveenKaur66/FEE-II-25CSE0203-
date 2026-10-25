import { Link } from "react-router";
import Profile from "./Profile";
import { useContext } from "react";
import { calculationContext } from "../Context/calculationContext";
function Navbar() {
    const{count,dispatch}=useContext(calculationContext);
    //count -> current counter value.
    //dispatch ->function used to send actions to reducer.
    // function handledouble(){
    //     setCount(count*2);
    // }
    return (
        <>
        <h1>Navigation Bar</h1>
        <h2>{count}</h2>
        <button onClick={()=>dispatch({type:"increaseby5"})}>Increament by 5</button>
        <button onClick={()=>dispatch({type:"login"})}>login</button>
        <Profile/>
            {/* <nav>
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Product">Product</Link>
                <Link to="/Products">Products</Link>
                <Link to="/Login">Login</Link>
            </nav> */}
            {/* <h2>{count}</h2>
            <button onClick={handledouble}>double</button> */}
        </>
    );
}

export default Navbar;