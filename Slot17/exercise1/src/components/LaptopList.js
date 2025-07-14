import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Form, InputGroup, Badge } from 'react-bootstrap';
import axios from 'axios';

const LaptopList = () => {
  const [laptops, setLaptops] = useState([]);
  const [filteredLaptops, setFilteredLaptops] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchLaptops();
  }, []);

  const fetchLaptops = async () => {
    try {
      const response = await axios.get('http://localhost:3001/Laptops');
      setLaptops(response.data);
      setFilteredLaptops(response.data);
    } catch (error) {
      console.error('Error fetching laptops:', error);
    }
  };

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      setFilteredLaptops(laptops);
    } else {
      const filtered = laptops.filter(laptop =>
        laptop.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        laptop.model.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredLaptops(filtered);
    }
  };

  const handleViewDetails = (id) => {
    navigate(`/laptops/${id}`);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <Container fluid className="bg-light min-vh-100">
      {/* Header */}
      <div className="bg-primary text-white py-4 mb-4">
        <Container>
          <Row className="align-items-center">
            <Col>
              <h1 className="mb-0">
                <i className="fas fa-laptop me-3"></i>
                Laptop Management System
              </h1>
              <p className="mb-0 mt-2 opacity-75">Browse and manage our laptop collection</p>
            </Col>
            <Col xs="auto">
              <Button variant="outline-light" onClick={handleLogout} size="lg">
                <i className="fas fa-sign-out-alt me-2"></i>
                Logout
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        {/* Search Section */}
        <Row className="mb-4">
          <Col>
            <Card className="shadow-sm border-0">
              <Card.Body className="py-4">
                <Row className="align-items-center">
                  <Col md={8}>
                    <InputGroup size="lg">
                      <InputGroup.Text className="bg-primary text-white border-primary">
                        <i className="fas fa-search"></i>
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="Search by brand or model (e.g., Dell, MacBook, ThinkPad)"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="border-primary"
                      />
                      <Button 
                        variant="primary" 
                        onClick={handleSearch}
                        className="px-4"
                      >
                        <i className="fas fa-search me-2"></i>Search
                      </Button>
                    </InputGroup>
                  </Col>
                  <Col md={4} className="mt-3 mt-md-0">
                    <div className="text-md-end">
                      <Badge bg="info" className="fs-6 py-2 px-3">
                        <i className="fas fa-list me-2"></i>
                        {filteredLaptops.length} laptop(s) found
                      </Badge>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Laptop Grid */}
        <Row>
          {filteredLaptops.map(laptop => (
            <Col key={laptop.id} xs={12} sm={6} lg={4} xl={3} className="mb-4">
              <Card className="h-100 shadow-sm border-0 laptop-card">
                <div className="position-relative">
                  <Card.Img 
                    variant="top" 
                    src={laptop.image} 
                    alt={`${laptop.brand} ${laptop.model}`}
                    className="laptop-image"
                    style={{ height: '220px', objectFit: 'cover' }}
                  />
                  <Badge 
                    bg="primary" 
                    className="position-absolute top-0 end-0 m-2 px-2 py-1"
                  >
                    {laptop.year}
                  </Badge>
                </div>
                <Card.Body className="d-flex flex-column p-3">
                  <Card.Title className="mb-2 text-primary">
                    <i className="fas fa-laptop me-2"></i>
                    {laptop.brand} {laptop.model}
                  </Card.Title>
                  <Card.Text className="flex-grow-1">
                    <Row className="g-2">
                      <Col xs={6}>
                        <small className="text-muted">
                          <i className="fas fa-calendar-alt me-1"></i>Year:
                        </small>
                        <br />
                        <span className="fw-semibold">{laptop.year}</span>
                      </Col>
                      <Col xs={6}>
                        <small className="text-muted">
                          <i className="fas fa-dollar-sign me-1"></i>Price:
                        </small>
                        <br />
                        <span className="fw-semibold text-success">{laptop.price}</span>
                      </Col>
                    </Row>
                  </Card.Text>
                  <Button 
                    variant="primary" 
                    className="mt-auto w-100"
                    onClick={() => handleViewDetails(laptop.id)}
                    size="sm"
                  >
                    <i className="fas fa-eye me-2"></i>View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {filteredLaptops.length === 0 && (
          <Row>
            <Col>
              <Card className="text-center py-5 border-0 shadow-sm">
                <Card.Body>
                  <i className="fas fa-search text-muted" style={{fontSize: '4rem'}}></i>
                  <h4 className="mt-3 text-muted">No laptops found</h4>
                  <p className="text-muted">
                    No laptops match your search criteria. Try adjusting your search terms.
                  </p>
                  <Button 
                    variant="outline-primary" 
                    onClick={() => {
                      setSearchTerm('');
                      setFilteredLaptops(laptops);
                    }}
                  >
                    <i className="fas fa-refresh me-2"></i>Show All Laptops
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </Container>
  );
};

export default LaptopList;
