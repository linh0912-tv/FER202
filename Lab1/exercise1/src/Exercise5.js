import React from 'react';

const Exercise5 = ({ employees }) => (
  <select>
    {employees.map((e, index) => (
      <option key={e.id || index} value={e.name}>{e.name}</option>
    ))}
  </select>
);

export default Exercise5;