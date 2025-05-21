import React from 'react';

const Exercise2 = ({ employees }) => (
  <div>
    <h2>Employee List</h2>
    <ul>
      {employees.map((e, index) => (
        <li key={e.id || index}>
          {e.name} - {e.department}
        </li>
      ))}
    </ul>
  </div>
);

export default Exercise2;