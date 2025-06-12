import React, { useState } from 'react';
import { Form, Card } from 'react-bootstrap';

const EX5 = () => {
  const [color, setColor] = useState('');

  return (
    <div className="d-flex justify-content-center text-center m-3">
      <Card
        className="mb-4 bg-dark text-white"
        style={{
          width: '300px',
          minHeight: '250px',
          borderRadius: '8px',
          padding: '20px',
        }}
      >
        <Card.Body>
          <Form.Select
            aria-label="Color select"
            onChange={(e) => setColor(e.target.value)}
            value={color}
            style={{
              fontSize: '20px',
              backgroundColor: 'white',
              color: 'black',
              marginBottom: '20px',
            }}
          >
            <option value="">Select a color</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
          </Form.Select>

          {color && (
            <div
              style={{
                backgroundColor: color,
                height: '100px',
                width: '100px',
                margin: '0 auto',
              }}
            ></div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default EX5;
