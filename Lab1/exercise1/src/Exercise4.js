import React from 'react';

const averageAge = (...ages) => {
  const total = ages.reduce((sum, age) => sum + age, 0);
  return (total / ages.length).toFixed(2);
};

const Exercise4 = ({ employees }) => {
  const result = averageAge(...employees.map(e => e.age));

  return <p>Average age: {result}</p>;
};

export default Exercise4;