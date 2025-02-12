// client/src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const response = await fetch('/api/employees');
    const data = await response.json();
    setEmployees(data);
  };

  const deleteEmployee = async (id) => {
    await fetch(`/api/employees/${id}`, { method: 'DELETE' });
    setEmployees(employees.filter(employee => employee._id !== id));
  };

  return (
    <div className="App">
      <h1>Employee Management</h1>
      <ul>
        {employees.map((employee) => (
          <li key={employee._id}>
            {employee.name} - {employee.position} 
            <button onClick={() => deleteEmployee(employee._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
