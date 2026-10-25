import { useState } from 'react';
import './App.css';
import Form from './Form';
import Display from './Display';
import FormContext from './FormContext';
import { increment,decrement } from "./redux/counterSlice";
import { useDispatch,useSelector } from "react-redux";
import GetCount from './GetCount';
//useSelector is used for accessing data
//useDispatch for performing the action

function App() {
  const [data, setData] = useState(null);
  const dispatch=useDispatch();
  //
  const count=useSelector((state=>state.counter.value))
  return (
    <FormContext.Provider value={{ data, setData }}>
      <h1>FORM HANDLING PROJECT</h1>
      <h2>FILL OUT THE FORM:</h2>
      <h2>{count}</h2>
      <Form />
      <h1>{count}</h1>
      <button onClick={()=>{dispatch(increment())}}>INCREAMENT</button>
      <button onClick={()=>{dispatch(decrement())}}>DECREMENT</button>
      <GetCount />
      <hr />
      <Display />
    </FormContext.Provider>
  );
}

export default App;


// import React from 'react';
// import { Counter } from './Counter'; // Import the component

// function App() {
//   return (
//     <div style={{ padding: '20px', textAlign: 'center' }}>
//       <h1>My First Redux App</h1>
//       {/* Render the component here */}
//       <Counter /> 
//     </div>
//   );
// }

// export default App;
