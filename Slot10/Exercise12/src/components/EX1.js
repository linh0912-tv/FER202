import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const EX1 = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="d-flex justify-content-center">
      <Card
        className="mb-3 bg-dark text-white text-center"
        style={{
          width: '400px',
          height: '250px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '8px',
        }}
      >
        <Card.Body style={{marginTop:'50px'}}>
          <Button
            variant="light"
            className="mb-3"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </Button>
          <Card.Title>Counter {count}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EX1;
