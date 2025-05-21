import React from 'react';

const Exercise6 = ({ employees }) => {
  const itEmployees = employees.filter(e => e.department === 'IT');

  return (
    <ul>
      {itEmployees.map((e, index) => (
        <li key={e.id || index}>{e.name} - {e.department}</li>
      ))}
    </ul>
  );
};

export default Exercise6;