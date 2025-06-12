import React, { useState } from 'react';
import { Form, Card, ListGroup } from 'react-bootstrap';

const EX6 = () => {
  const [search, setSearch] = useState('');
  const items = ['apple', 'banana', 'grape', 'orange', 'watermelon'];

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Card className="mb-3 bg-dark text-white ">
      <Card.Body>
        <Card.Title>Search Filter</Card.Title>
        <Form.Control
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ListGroup className="mt-3">
          {filteredItems.map((item, i) => (
            <ListGroup.Item key={i} className="bg-secondary text-white">{item}</ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default EX6;
