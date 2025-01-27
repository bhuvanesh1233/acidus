import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Table from './components/Table';

function App() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/persons')
      .then((response) => response.json())
      .then((data) => setPersons(data));
  }, []);

  const addPerson = (newPerson) => {
    fetch('http://localhost:5000/api/persons', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPerson),
    })
      .then((response) => response.json())
      .then((data) => setPersons([...persons, data]));
  };

  return (
    <div>
      <h1>Person Manager</h1>
      <Form addPerson={addPerson} />
      <Table persons={persons} />
    </div>
  );
}

export default App;