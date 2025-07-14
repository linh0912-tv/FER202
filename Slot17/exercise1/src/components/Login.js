import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Alert, Modal, Row, Col, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import axios from 'axios';

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.get('http://localhost:3001/UserAccounts');
      const users = response.data;
      
      const user = users.find(u => 
        u.username === username && 
        u.password === password && 
        u.status === 'active'
      );
      
      if (user) {
        setUser(user);
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          navigate('/laptops');
        }, 2000);
      } else {
        setShowError(true);
        setTimeout(() => setShowError(false), 3000);
      }
    } catch (error) {
      console.error('Login error:', error);
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  return (
    <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={8} md={6} lg={4}>
          <Card className="shadow-lg border-0">
            <Card.Header className="bg-primary text-white text-center py-4">
              <h2 className="mb-0">
                <i className="fas fa-laptop me-2"></i>
                Laptop Management
              </h2>
              <p className="mb-0 mt-2 opacity-75">Please login to continue</p>
            </Card.Header>
            <Card.Body className="p-4">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">
                    <i className="fas fa-user me-2"></i>Username
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    placeholder="Enter your username"
                    className="py-2"
                    size="lg"
                  />
                </Form.Group>
                
                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold">
                    <i className="fas fa-lock me-2"></i>Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Enter your password"
                    className="py-2"
                    size="lg"
                  />
                </Form.Group>
                
                <Button 
                  variant="primary" 
                  type="submit" 
                  className="w-100 py-2 fw-semibold"
                  size="lg"
                >
                  <i className="fas fa-sign-in-alt me-2"></i>Login
                </Button>
              </Form>
              
              {showError && (
                <Alert variant="danger" className="mt-3 text-center">
                  <i className="fas fa-exclamation-triangle me-2"></i>
                  Invalid username or password!
                </Alert>
              )}
              
              <div className="mt-4 text-center">
                <small className="text-muted">
                  Demo credentials: admin / 1234567
                </small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Modal show={showSuccess} onHide={() => setShowSuccess(false)} centered>
        <Modal.Header closeButton className="bg-success text-white">
          <Modal.Title>
            <i className="fas fa-check-circle me-2"></i>Login Successful
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center py-4">
          <div className="mb-3">
            <i className="fas fa-user-check text-success" style={{fontSize: '3rem'}}></i>
          </div>
          <h5>Welcome, <strong>{username}</strong>!</h5>
          <p className="text-muted">Login successful! Redirecting to laptop management...</p>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

Login.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default Login;
