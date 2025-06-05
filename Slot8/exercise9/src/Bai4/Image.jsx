import React from 'react';

function Image({ url }) {
  return (
    <div style={{ backgroundColor: '#ffffff', height: '200px', width: '700px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f4a261' }}>
      {url ? <img src={url} alt="Card" style={{ maxHeight: '100%', maxWidth: '70%' }} /> : 'IMG'}
    </div>
  );
}

export default Image;