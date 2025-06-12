import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const BookingForm = () => {
  return (
    <Container className="booking-section">
      <h2>Book Your Table</h2>
      <div className="form-container">
        <Row className="row-cols-1 row-cols-md-3 g-3">
          <Col>
            <Form.Group controlId="name">
              <Form.Label>Your Name *</Form.Label>
              <Form.Control type="text" placeholder="Your Name" required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="email">
              <Form.Label>Your Email *</Form.Label>
              <Form.Control type="email" placeholder="Your Email" required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="service">
              <Form.Label>Select a Service</Form.Label>
              <Form.Select>
                <option>Select a Service</option>
                <option>Dine-in</option>
                <option>Takeaway</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="comment" className="mt-3">
          <Form.Label>Please write your comment</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Please write your comment" />
        </Form.Group>
        <div className="text-center mt-3">
          <Button variant="warning" className="btn-warning">Send Message</Button>
        </div>
      </div>
    </Container>
  );
};

export default BookingForm;