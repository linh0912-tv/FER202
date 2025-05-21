import React from 'react';

const Exercise8 = ({ employees }) => {
  const groups = employees.reduce((acc, emp) => {
    acc[emp.department] = acc[emp.department] || [];
    acc[emp.department].push(emp);
    return acc;
  }, {});

  return (
    <div>
      {Object.entries(groups).map(([dept, emps]) => (
        <div key={dept}>
          <h3>{dept}</h3>
          <ul>
            {emps.map((e, index) => (
              <li key={e.id || index}>{e.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Exercise8;