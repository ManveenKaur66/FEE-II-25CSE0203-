// import { useState } from "react";
// import Input from "./Input";

//import { useReducer } from "react"

// export default function Form() {
//   const [data, setData] = useState({ name: "", password: "", age: "" });

//   const handleChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!data.name.trim()) return alert("Name cannot be empty!");
//     if (data.password.length < 6) return alert("Password must be at least 6 characters!");
//     if (!data.age.trim() || isNaN(data.age)) return alert("Enter a valid number for age!");

//     alert("Success! Logged in.");
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
//       <Input label="Name: " type="text" name="name" placeholder="Name" value={data.name} onChange={handleChange} required/>
//       <Input label="Password: " type="password" name="password" placeholder="Password" value={data.password} onChange={handleChange} required/>
//       <Input label="Age: " type="text" name="age" placeholder="Age" value={data.age} onChange={handleChange} required/>
//       <button type="submit">SUBMIT THE FORM</button>
//     </form>
//   );
// }


// import { useReducer } from 'react';
// import Input from './Input';

// const initialState = {
//   name: '',
//   email: '',
//   password: ''
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'UPDATE_FIELD':
//       return {
//         ...state,
//         [action.field]: action.value
//       };
//     case 'RESET':
//       return initialState;
//     default:
//       return state;
//   }
// }

// export default function Form() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log('Form Data:', state);
//     alert('Form submitted successfully!');
//     dispatch({ type: 'RESET' });
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <Input label="Name: " type="text" placeholder="Enter your name" value={state.name} onChange={(e) =>dispatch({
//             type: 'UPDATE_FIELD',
//             field: 'name',
//             value: e.target.value
//           })
//         }
//         required
//       />

//       <Input label="Email: " type="email" placeholder="Enter your email" value={state.email} onChange={(e) =>dispatch({type: 'UPDATE_FIELD',field: 'email',value: e.target.value})}required/>
//       <Input label="Password: "type="password"placeholder="Enter your password" value={state.password} onChange={(e) =>dispatch({type: 'UPDATE_FIELD',field: 'password',value: e.target.value})}required/>
//       <button type="submit">Submit</button>
//       <button type="button" onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
//     </form>
//   );
// }


import { useReducer, useContext } from 'react';
import Input from './Input';
import FormContext from './FormContext';

const initialState = {
  name: '',
  email: '',
  password: '',
  submittedData: null
};
function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.field]: action.value
      };
    case 'SUBMIT':
      return {
        ...state,
        submittedData: {
          name: state.name,
          email: state.email,
          password: state.password
        }
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export default function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const context = useContext(FormContext);
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: 'SUBMIT' });

    context.setData({
      name: state.name,
      email: state.email,
      password: state.password
    });

    console.log('Form Data:', state);
    alert('Form submitted successfully!');
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Name: " type="text" placeholder="Enter your name" value={state.name} onChange={(e) => dispatch({ type: 'UPDATE_FIELD', field: 'name', value: e.target.value })}required/>
      <Input label="Email: " type="email"
        placeholder="Enter your email" value={state.email} onChange={(e) => dispatch({type: 'UPDATE_FIELD',field: 'email',value: e.target.value})}required/>
      <Input label="Password: " type="password" placeholder="Enter your password" value={state.password} onChange={(e) =>dispatch({type: 'UPDATE_FIELD',field: 'password',value: e.target.value})}required/>
      <button type="submit">Submit</button>
      <button type="button" onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </form>
  );
}
