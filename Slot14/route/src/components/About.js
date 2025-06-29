import React from 'react';
import { Container, Card, Row, Col, ProgressBar } from 'react-bootstrap';

function About() {
  const technologies = [
    { name: "React 19", progress: 100, color: "primary" },
    { name: "React Router", progress: 95, color: "success" },
    { name: "React Bootstrap", progress: 90, color: "info" },
    { name: "CSS Animations", progress: 85, color: "warning" }
  ];

  const examples = [
    {
      title: "Static Routes",
      description: "Home and About pages with smooth navigation",
      status: "completed"
    },
    {
      title: "Dynamic Routes",
      description: "Post details with URL parameters and dynamic content",
      status: "completed"
    },
    {
      title: "Data Fetching",
      description: "Loading data from JSON files with error handling",
      status: "completed"
    },
    {
      title: "Authentication",
      description: "Login form with route protection and context management",
      status: "completed"
    },
    {
      title: "External APIs",
      description: "JSON Server integration with CRUD operations",
      status: "completed"
    }
  ];

  return (
    <Container className="mt-4 fade-in">
      <Row className="justify-content-center">
        <Col lg={10}>
          <Card className="custom-card hover-lift slide-in-up">
            <Card.Header className="custom-card-header text-center">
              <h2 className="mb-0">📋 About This Application</h2>
            </Card.Header>
            <Card.Body className="p-4">
              <div className="text-center mb-5">
                <h3 className="text-primary mb-3">🎨 Modern React Router Demo</h3>
                <p className="lead text-muted">
                  A comprehensive showcase of React Router capabilities with beautiful UI design, 
                  smooth animations, and best practices implementation.
                </p>
              </div>

              <Row className="mb-5">
                <Col md={6}>
                  <Card className="border-0 shadow-sm h-100">
                    <Card.Body>
                      <h4 className="text-success mb-4">🛠️ Technologies Used</h4>
                      {technologies.map((tech, index) => (
                        <div key={index} className="mb-3">
                          <div className="d-flex justify-content-between mb-1">
                            <small className="fw-semibold">{tech.name}</small>
                            <small>{tech.progress}%</small>
                          </div>
                          <ProgressBar 
                            variant={tech.color} 
                            now={tech.progress} 
                            className="mb-2"
                            style={{ height: '8px' }}
                          />
                        </div>
                      ))}
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={6}>
                  <Card className="border-0 shadow-sm h-100">
                    <Card.Body>
                      <h4 className="text-info mb-4">✅ Implementation Status</h4>
                      {examples.map((example, index) => (
                        <div key={index} className="d-flex align-items-start mb-3 p-2 rounded hover-lift">
                          <div className="flex-shrink-0 me-3">
                            <span className="badge bg-success rounded-pill">✓</span>
                          </div>
                          <div>
                            <h6 className="mb-1 text-primary">{example.title}</h6>
                            <small className="text-muted">{example.description}</small>
                          </div>
                        </div>
                      ))}
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              <div className="text-center">
                <Card className="border-0 bg-light">
                  <Card.Body className="p-4">
                    <h5 className="text-primary mb-3">🚀 Features Highlights</h5>
                    <Row className="g-3">
                      <Col md={4}>
                        <div className="p-3 pulse-on-hover">
                          <div className="h2 mb-2">🎭</div>
                          <h6>Smooth Animations</h6>
                          <small className="text-muted">CSS transitions & keyframes</small>
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="p-3 pulse-on-hover">
                          <div className="h2 mb-2">📱</div>
                          <h6>Responsive Design</h6>
                          <small className="text-muted">Mobile-first approach</small>
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="p-3 pulse-on-hover">
                          <div className="h2 mb-2">🔐</div>
                          <h6>Secure Routes</h6>
                          <small className="text-muted">Protected authentication</small>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </div>

              <div className="text-center mt-4">
                <p className="text-muted mb-0">
                  <small>Built with ❤️ using React 19, React Router DOM, and React Bootstrap</small>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
