import React, { useState } from 'react';
import axios from 'axios';

const Form = ({ fetchData }) => {
  const [state, setState] = useState('');

  const handleChange = (e) => {
    setState(e.target.value);
  };

  const submitData = async () => {
    await axios.post('http://localhost:5000/', {
      item: state,
    });
    setState('');

    fetchData();
  };
  return (
    <div className='form'>
      <input type="text" onChange={handleChange} value={state} />
      <button onClick={submitData}>Submit</button>
    </div>
  );
};

export default Form;
