import React, { useState } from 'react';
import { Form, Button, Card, ListGroup, Row, Col, Container } from 'react-bootstrap';

const EX4 = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const deleteTodo = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

  return (
    <Container fluid style={{ backgroundColor: '#2c2f36', minHeight: '45vh', paddingTop: '50px' }}>
      <Row className="justify-content-center">
        {/* Input bên trái */}
        <Col md={5}>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Please input a Task"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{
                fontSize: '16px',
                backgroundColor: 'white',
                color: 'black',
              }}
            />
            <Button
              variant="danger"
              className="ms-2"
              style={{ fontWeight: 'bold' }}
              onClick={addTodo}
            >
              Add Todo
            </Button>
          </Form>
        </Col>

        {/* Danh sách Todo bên phải */}
        <Col md={4}>
          <Card className="shadow-sm mt-3 mt-md-0">
            <Card.Body>
              <Card.Title className="text-center mb-3" style={{ fontWeight: 'bold' }}>
                Todo List
              </Card.Title>
              <ListGroup>
                {todos.map((todo, i) => (
                  <ListGroup.Item
                    key={i}
                    className="d-flex justify-content-between align-items-center"
                  >
                    {todo}
                    <Button variant="danger" size="sm" onClick={() => deleteTodo(i)}>
                      Delete
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EX4;
