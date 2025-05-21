import React from 'react';
import Exercise1 from './Exercise1';
import Exercise2 from './Exercise2';
import Exercise3 from './Exercise3';
import Exercise4 from './Exercise4';
import Exercise5 from './Exercise5';
import Exercise6 from './Exercise6';
import Exercise7 from './Exercise7';
import Exercise8 from './Exercise8';
import Exercise9 from './Exercise9';
import Exercise10 from './Exercise10';
import employees from './employees';
import './App.css';

const employee = { name: "John Doe", age: 30, department: "IT" };

const App = () => (
  <div className="App">
    <h1>Welcome to the Employee Directory</h1>
    <Exercise1 employee={employee} />
    <Exercise2 employees={employees} />
    <Exercise3 employees={employees} />
    <Exercise4 employees={employees} />
    <Exercise5 employees={employees} />
    <Exercise6 employees={employees} />
    <Exercise7 employees={employees} />
    <Exercise8 employees={employees} />
    <Exercise9 employees={employees} />
    <Exercise10 employees={employees} />
  </div>
);

export default App;