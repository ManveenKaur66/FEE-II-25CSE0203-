
import { useContext } from 'react';
import FormContext from './FormContext';

function Display() {
  const { data } = useContext(FormContext);

  if (!data || !data.submittedData) {
    return <h3>No data submitted yet.</h3>;
  }

  const formData = data.submittedData;

  return (
    <div>
      <h2>Submitted Form Data</h2>

      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>
        Password: {'*'.repeat(formData.password.length)}
      </p>
    </div>
  );
}

export default Display;
