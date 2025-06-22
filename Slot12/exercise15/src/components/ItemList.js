import React, { useReducer, useState } from "react";
import { Button, Form, Container, Row, Col, ListGroup, InputGroup } from "react-bootstrap";

function listReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.item] };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
}

const initialState = {
  items: [],
};

function ItemList() {
  const [state, dispatch] = useReducer(listReducer, initialState);
  const [newItemName, setNewItemName] = useState("");

  const handleAddItem = () => {
    if (newItemName.trim()) {
      const newItem = { id: Date.now(), name: newItemName };
      dispatch({ type: "ADD_ITEM", item: newItem });
      setNewItemName("");
    }
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={7} lg={6}>
          <div className="shadow-lg border-0 rounded-4 p-4 bg-white">
            <h2 className="mb-4 text-primary text-center">Item List</h2>
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                placeholder="Enter item name"
                onKeyDown={(e) => e.key === "Enter" && handleAddItem()}
              />
              <Button variant="primary" onClick={handleAddItem}>
                Add Item
              </Button>
            </InputGroup>
            <h5 className="mt-4 mb-2">Your Items:</h5>
            <ListGroup>
              {state.items.length === 0 && (
                <ListGroup.Item className="text-muted text-center">
                  No items yet.
                </ListGroup.Item>
              )}
              {state.items.map((item) => (
                <ListGroup.Item
                  key={item.id}
                  className="d-flex justify-content-between align-items-center"
                >
                  <span>{item.name}</span>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemList;