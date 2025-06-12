import React, { useState } from 'react';
import { Form, Card } from 'react-bootstrap';

const EX2 = () => {
  const [text, setText] = useState('');

  return (
    <div className="d-flex justify-content-center text-center">
      <Card
        className="mb-4 bg-dark text-white"
       style={{
          width: '400px',
          height: '250px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '8px',
        }}
      >
        <Card.Body  style={{marginTop:'50px'}}>
          <Form.Control 
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type here..."
            style={{
              backgroundColor: 'white',
              width: '300px',
              height: '35px',
              color: 'black',
              fontSize: '25px',
              padding: '5px',
            }}
            className="mb-3"
          />
          <h3 style={{marginTop:'50px'}}>Input text: <strong>{text}</strong></h3>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EX2;
