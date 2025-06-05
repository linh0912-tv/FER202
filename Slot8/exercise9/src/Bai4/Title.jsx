import React from 'react';

function Title({ text }) {
  return (
    <h5 style={{ color: '#f4a261', borderBottom: '2px solid #f4a261', paddingBottom: '0.5rem', marginTop: '1rem'}}>{text}</h5>
  );
}

export default Title;