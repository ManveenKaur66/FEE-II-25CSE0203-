import { useNavigate } from "react-router";
function Login(){
    const navigate=useNavigate();
    function handleClick(){
        navigate("/");
    }
return(
    <>
    <h1>LOGIN COMPONENT</h1>
    <button onClick={handleClick}>Login In</button>
    </>
)
}
export default Login;