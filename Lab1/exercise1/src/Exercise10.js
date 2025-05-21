import React, { useState } from 'react';

const Exercise10 = ({ employees }) => {
  const [query, setQuery] = useState('');

  const filtered = employees.filter(e =>
    e.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search employee..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filtered.map((e, index) => (
          <li key={e.id || index}>{e.name} - {e.department}</li>
        ))}
      </ul>
    </div>
  );
};

export default Exercise10;