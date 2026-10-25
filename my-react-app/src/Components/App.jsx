import { useState, useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Product from "./Product";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NotFound from "./NotFound";
import Profile from "./Profile";

// Context Imports
import { userContext } from "../Context/UserContext";
import { ThemeContext } from "../Context/ThemeContext";
import { loginContext } from "../Context/loginContext";
import { calculationContext } from "../Context/calculationContext";

function App() {

  // ---------------- USER CONTEXT ----------------

  const user = {
    name: "Manveen",
    age: 26
  };


  // ---------------- useReducer ----------------
  //reducer: A reducer is a pure function that takes the current state 
  // and an action as arguments, and returns a brand-new state.
  //in reducer two parameters are passed first state(stores the current value)
  //and action (what do you want to perform).
  function reducer(state, action) {
    switch (action.type) {
      case "increament":
        return state + action.payload;
      //payload: Extra data required for the action.
      case "decreament":
        return state - 1;
      case "double":
        return state * 2;
      case "increaseby5":
        return state + 5;
      default:
        return state;
    }
  }

  const [count, dispatch] = useReducer(reducer, 0);
  //useReducer is a built-in React hook 
  // designed to manage complex state logic in your components
  //dispatch is the function that sends an action to the reducer.

  // ---------------- THEME CONTEXT ----------------

  const [theme, setTheme] = useState("light");
  function toggleTheme() {
    setTheme(prev =>
      prev === "light" ? "dark" : "light"
    );
  }
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = () => {
    setIsLoggedIn(true);
  };
  const logout = () => {
    setIsLoggedIn(false);
  };
  return (
    <BrowserRouter>
      {/* USER CONTEXT */}
      <userContext.Provider value={{ user }}>

        {/* THEME CONTEXT */}
        <ThemeContext.Provider
          value={{ theme, toggleTheme }}
        >

          {/* LOGIN CONTEXT */}
          <loginContext.Provider value={{isLoggedIn,login,logout}}>

            {/* CALCULATION CONTEXT */}

            <calculationContext.Provider value={{ count, dispatch }}>

              {/* REDUCER BUTTONS */}

              <h2>{count}</h2>

<button onClick={() =>dispatch({type: "increament",payload: 3})}>Increase by 3</button>
<button onClick={() =>dispatch({type: "decreament"})}>Decrease by 1</button>
<button onClick={() =>dispatch({type: "double"})}>Double</button>
<button onClick={() =>dispatch({type: "increaseby5"})}>Increase by 5</button>

  {/* LOGIN BUTTON */}
<button onClick={login}>Login Button</button>

{/* NAVBAR */}

<Navbar />

{/* ROUTES */}

<Routes>
<Route path="/" element={<Home />}/>
<Route path="/About" element={<About />}/>
<Route path="/Product" element={<Product />}/>
<Route path="/Products" element={<Products />}/>
<Route path="/Login" element={<Login />}/>
<Route path="/Profile" element={<Profile />}/>
<Route path="/products/:id" element={<ProductDetails />}/>
<Route path="*" element={<NotFound />}/>
</Routes>
  
  {/* FOOTER */}
<Footer />
</calculationContext.Provider>
</loginContext.Provider>
</ThemeContext.Provider>
</userContext.Provider>
</BrowserRouter>
  );
}

export default App;