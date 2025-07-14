import React from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/laptops');
  };

  const handleGoLogin = () => {
    navigate('/login');
  };

  return (
    <Container fluid className="bg-light min-vh-100 d-flex align-items-center justify-content-center">
      <Card className="text-center border-0 shadow" style={{maxWidth: '600px'}}>
        <Card.Body className="py-5">
          <div className="mb-4">
            <i className="fas fa-search text-warning" style={{fontSize: '5rem'}}></i>
          </div>
          <h1 className="display-4 text-muted mb-3">404</h1>
          <h4 className="text-dark mb-3">Page Not Found</h4>
          <p className="text-muted mb-4 fs-5">
            Oops! The page you are looking for does not exist or has been moved.
          </p>
          <div className="d-grid gap-2 d-md-block">
            <Button variant="primary" onClick={handleGoHome} size="lg" className="me-md-2">
              <i className="fas fa-laptop me-2"></i>Go to Laptop List
            </Button>
            <Button variant="outline-primary" onClick={handleGoLogin} size="lg" className="me-md-2">
              <i className="fas fa-sign-in-alt me-2"></i>Login
            </Button>
            <Button variant="outline-secondary" onClick={() => window.history.back()} size="lg">
              <i className="fas fa-arrow-left me-2"></i>Go Back
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default NotFound;
