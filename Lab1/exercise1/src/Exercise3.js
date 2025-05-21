import React from 'react';

const Exercise3 = ({ employees }) => (
  <table border="1">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Department</th>
      </tr>
    </thead>
    <tbody>
      {employees.map((e, index) => (
        <tr key={e.id || index}>
          <td>{e.id || index + 1}</td>
          <td>{e.name}</td>
          <td>{e.department}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Exercise3;