import React from 'react';

const Exercise1 = ({ employee }) => (
  <div>
    <h2>Exercise 1 - Employee Details</h2>
    <ul>
      <li>
        {employee.name} - {employee.age} years old - {employee.department}
      </li>
    </ul>
  </div>
);

export default Exercise1;