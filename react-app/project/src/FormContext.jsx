
import { createContext, useReducer } from 'react';

export const FormContext = createContext();

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
        submittedData: { ...state }
      };

    case 'RESET':
      return initialState;

    default:
      return state;
  }
}

export function FormProvider({ children }) {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
}
export default FormContext;