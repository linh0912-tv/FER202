import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import PropTypes from 'prop-types';
import axios from 'axios';
import NotFound from './NotFound';

const LaptopDetail = ({ user }) => {
  const { id } = useParams();
  const [laptop, setLaptop] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Kiểm tra authentication
    const checkAuth = () => {
      if (!user) {
        // Nếu không có user, thử kiểm tra localStorage
        const savedUser = localStorage.getItem('user');
        if (!savedUser) {
          navigate('/login');
          return;
        }
      }
      setAuthChecked(true);
    };

    checkAuth();
  }, [user, navigate]);

  useEffect(() => {
    if (!authChecked) return; // Chờ auth check hoàn tất

    const fetchLaptopDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/Laptops/${id}`);
        setLaptop(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching laptop detail:', error);
        setError(true);
        setLoading(false);
      }
    };
    
    fetchLaptopDetail();
  }, [id, authChecked]);

  const handleBackToList = () => {
    navigate('/laptops');
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  // Nếu chưa check auth hoặc đang loading, hiển thị loading
  if (!authChecked || loading) {
    return (
      <Container fluid className="bg-light min-vh-100 d-flex align-items-center justify-content-center">
        <Card className="text-center border-0 shadow">
          <Card.Body className="py-5">
            <div className="spinner-border text-primary mb-3" role="status" style={{width: '3rem', height: '3rem'}}>
              <span className="visually-hidden">Loading...</span>
            </div>
            <h5>Loading laptop details...</h5>
            <p className="text-muted">Please wait while we fetch the information</p>
          </Card.Body>
        </Card>
      </Container>
    );
  }

  // Nếu có lỗi hoặc không tìm thấy laptop, hiển thị NotFound
  if (error || !laptop) {
    return <NotFound />;
  }

  return (
    <Container fluid className="bg-light min-vh-100">
      {/* Header */}
      <div className="bg-primary text-white py-4 mb-4">
        <Container>
          <Row className="align-items-center">
            <Col>
              <h1 className="mb-0">
                <i className="fas fa-laptop me-3"></i>
                Laptop Details
              </h1>
              <p className="mb-0 mt-2 opacity-75">Detailed information about the selected laptop</p>
            </Col>
            <Col xs="auto">
              <div className="d-flex gap-2">
                <Button variant="outline-light" onClick={handleBackToList} size="lg">
                  <i className="fas fa-arrow-left me-2"></i>Back to List
                </Button>
                <Button variant="outline-danger" onClick={handleLogout} size="lg">
                  <i className="fas fa-sign-out-alt me-2"></i>Logout
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Row className="g-4">
          {/* Image Section */}
          <Col lg={6}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-0">
                <div className="position-relative">
                  <Card.Img 
                    variant="top" 
                    src={laptop.image} 
                    alt={`${laptop.brand} ${laptop.model}`}
                    style={{ height: '500px', objectFit: 'cover', borderRadius: '0.375rem' }}
                  />
                  <div className="position-absolute top-0 start-0 m-3">
                    <Badge bg="primary" className="px-3 py-2 fs-6">
                      <i className="fas fa-calendar-alt me-2"></i>
                      {laptop.year}
                    </Badge>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          
          {/* Details Section */}
          <Col lg={6}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="p-4">
                <div className="mb-4">
                  <h2 className="text-primary mb-2">
                    <i className="fas fa-laptop me-2"></i>
                    {laptop.brand} {laptop.model}
                  </h2>
                  <div className="text-success fs-4 fw-bold mb-3">
                    <i className="fas fa-dollar-sign me-1"></i>
                    {laptop.price}
                  </div>
                </div>

                <Row className="g-3 mb-4">
                  <Col sm={6}>
                    <Card className="bg-light border-0 h-100">
                      <Card.Body className="text-center py-3">
                        <i className="fas fa-building text-primary mb-2" style={{fontSize: '1.5rem'}}></i>
                        <h6 className="text-muted mb-1">Brand</h6>
                        <p className="fw-bold mb-0">{laptop.brand}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm={6}>
                    <Card className="bg-light border-0 h-100">
                      <Card.Body className="text-center py-3">
                        <i className="fas fa-laptop text-primary mb-2" style={{fontSize: '1.5rem'}}></i>
                        <h6 className="text-muted mb-1">Model</h6>
                        <p className="fw-bold mb-0">{laptop.model}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm={6}>
                    <Card className="bg-light border-0 h-100">
                      <Card.Body className="text-center py-3">
                        <i className="fas fa-calendar-alt text-primary mb-2" style={{fontSize: '1.5rem'}}></i>
                        <h6 className="text-muted mb-1">Year</h6>
                        <p className="fw-bold mb-0">{laptop.year}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm={6}>
                    <Card className="bg-light border-0 h-100">
                      <Card.Body className="text-center py-3">
                        <i className="fas fa-dollar-sign text-success mb-2" style={{fontSize: '1.5rem'}}></i>
                        <h6 className="text-muted mb-1">Price</h6>
                        <p className="fw-bold mb-0 text-success">{laptop.price}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>

                <Card className="bg-white bg-opacity-10 border-primary border-opacity-25">
                  <Card.Body>
                    <h6 className="text-primary mb-3">
                      <i className="fas fa-info-circle me-2"></i>
                      Product Description
                    </h6>
                    <p className="mb-0 text-dark">
                      This is a high-quality <strong>{laptop.brand} {laptop.model}</strong> laptop 
                      from <strong>{laptop.year}</strong>, featuring premium build quality and excellent 
                      performance for both work and entertainment purposes. Perfect for professionals, 
                      students, and anyone looking for reliable computing power.
                    </p>
                  </Card.Body>
                </Card>

                <div className="mt-4">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="w-100"
                    onClick={handleBackToList}
                  >
                    <i className="fas fa-arrow-left me-2"></i>
                    Back to Laptop List
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

LaptopDetail.propTypes = {
  user: PropTypes.object
};

export default LaptopDetail;
