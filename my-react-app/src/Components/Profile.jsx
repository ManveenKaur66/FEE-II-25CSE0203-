import Login from "./Login";
import { useContext } from "react"; 
import { userContext } from "../Context/UserContext";

function Profile() {
  // Destructuring { user } directly from the context object value={{ user }}
  const { user } = useContext(userContext);

  return (
    <>
      <h1>User Profile: {user?.name}</h1>
      <h1>User Age: {user?.age}</h1>
      <Login />
    </>
  );
}

export default Profile;
