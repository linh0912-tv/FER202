import React, { useReducer } from "react";
import { Form, Card, Container, Row, Col } from "react-bootstrap";

function formReducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.value };
    case "SET_AGE":
      return { ...state, age: action.value };
    default:
      return state;
  }
}

function ChangeNameAge() {
  const [state, dispatch] = useReducer(formReducer, { name: "", age: "" });

  const handleNameChange = (e) => {
    dispatch({ type: "SET_NAME", value: e.target.value });
  };

  const handleAgeChange = (e) => {
    dispatch({ type: "SET_AGE", value: e.target.value });
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} lg={5}>
          <Card className="shadow-lg border-0 rounded-4 p-4">
            <h2 className="mb-4 text-primary text-center">Change Name & Age</h2>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  type="text"
                  value={state.name}
                  onChange={handleNameChange}
                  placeholder="Input name"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Age:</Form.Label>
                <Form.Control
                  type="text"
                  value={state.age}
                  onChange={handleAgeChange}
                  placeholder="Input age"
                />
              </Form.Group>
            </Form>
            <div className="mt-4 text-center">
              <h5>
                Name: <span className="text-success">{state.name}</span>
              </h5>
              <h5>
                Age: <span className="text-info">{state.age}</span>
              </h5>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ChangeNameAge;