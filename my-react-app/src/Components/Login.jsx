import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { userContext } from "../Context/UserContext"; 
import { loginContext } from "../Context/loginContext"; // Target your correct file here

function Login() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user } = useContext(userContext); 
  const { isLoggedIn, login, logout } = useContext(loginContext); // Use loginContext
  
  return (
    <>
      <h1>Login as {user?.name}</h1> 
      <h3>Status: {isLoggedIn ? "Logged In" : "Logged Out"}</h3>
      
      {isLoggedIn ? (
        <button onClick={logout}>Log Out</button>
      ) : (
        <button onClick={login}>Log In</button>
      )}
      
      <hr />
      <h1>Theme: {theme}</h1>
      <button onClick={toggleTheme}>Change Theme</button>
    </>
  );
}

export default Login;
