import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const EX3 = () => {
  const [visible, setVisible] = useState(false);

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
          <Button
            variant="light"
            onClick={() => setVisible(!visible)}
            style={{ fontSize: '18px', padding: '6px 20px' }}
            className="mb-3"
          >
            {visible ? 'Hide' : 'Show'}
          </Button>
          {visible && <h4>Toggle me!</h4>}
        </Card.Body>
      </Card>
    </div>
  );
};

export default EX3;
