import React from 'react';

const Exercise7 = ({ employees }) => {
  const sorted = [...employees].sort((a, b) => {
    const deptCompare = a.department.localeCompare(b.department);
    return deptCompare !== 0 ? deptCompare : a.name.localeCompare(b.name);
  });

  return (
    <ul>
      {sorted.map((e, index) => (
        <li key={e.id || index}>{e.name} - {e.department}</li>
      ))}
    </ul>
  );
};

export default Exercise7;