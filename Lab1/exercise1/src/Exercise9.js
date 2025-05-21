import React from 'react';

const Exercise9 = ({ employees }) => {
  const isTeenager = employees.some(e => e.age >= 10 && e.age <= 20);

  return <p>Any teenager? {isTeenager.toString()}</p>;
};

export default Exercise9;