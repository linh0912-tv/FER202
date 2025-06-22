import React, { useReducer } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

// Define the reducer function to handle actions
function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  // Use useReducer to manage the count state
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <Card className="shadow-lg border-0 rounded-4 p-4 text-center">
            <h2 className="mb-4 text-primary">Counter</h2>
            <h1 className="display-3 mb-4">{state.count}</h1>
            <div className="d-flex justify-content-center gap-3">
              <Button
                variant="success"
                size="lg"
                onClick={() => dispatch({ type: "INCREMENT" })}
              >
                +
              </Button>
              <Button
                variant="danger"
                size="lg"
                onClick={() => dispatch({ type: "DECREMENT" })}
              >
                -
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => dispatch({ type: "RESET" })}
              >
                Reset
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Counter;