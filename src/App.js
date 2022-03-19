import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Form from './components/Form';
import List from './components/List';

import './App.css';

const App = () => {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get('http://localhost:5000/');
    setItems(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Web development lab</h1>
      <p>Add a new item to the list below.</p>
      <h3>Add New</h3>
      <Form fetchData={fetchData} />
      <h3>List items:</h3>
      <List items={items} />
    </div>
  );
};

export default App;
