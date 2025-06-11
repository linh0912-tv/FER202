import React, { useState } from 'react';

const SearchFilter = () => {
  const [query, setQuery] = useState('');
  const items = [
    'Hue',
    'Da nang',
    'Ho Chi Minh',
    'Ha Noi'
  ];

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: '2rem', minHeight: '100vh' }}>
      <h2>Search Filter</h2>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        // style={{
        //   padding: '10px',
        //   fontSize: '16px',
        //   width: '300px',
        //   marginBottom: '20px'
        // }}
      />
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {filteredItems.map((item, index) => (
          <li key={index} >
            {/* style={{
            backgroundColor: '#374151',
            margin: '5px 0',
            padding: '10px',
            borderRadius: '5px'
          }} */}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
