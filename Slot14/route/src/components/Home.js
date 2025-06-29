import React from 'react';
import { Container, Card, Row, Col, Badge } from 'react-bootstrap';

function Home() {
  const features = [
    {
      title: "Basic Routing",
      description: "Navigate between different pages seamlessly",
      icon: "🧭",
      color: "primary"
    },
    {
      title: "Dynamic Routes",
      description: "URL parameters and dynamic content loading",
      icon: "⚡",
      color: "success"
    },
    {
      title: "Data Fetching",
      description: "Load data from JSON files and external APIs",
      icon: "📊",
      color: "info"
    },
    {
      title: "Authentication",
      description: "Secure routes with login protection",
      icon: "🔐",
      color: "warning"
    }
  ];

  return (
    <Container className="mt-4 fade-in">
      <div className="text-center mb-5">
        <h1 className="display-4 text-white mb-3 slide-in-up">
          🚀 React Router Demo
        </h1>
        <p className="lead text-white-50 slide-in-up">
          Explore the power of React Router with beautiful animations
        </p>
      </div>

      <Card className="custom-card hover-lift slide-in-up">
        <Card.Header className="custom-card-header text-center">
          <h2 className="mb-0">✨ Welcome to Our Demo</h2>
        </Card.Header>
        <Card.Body className="p-4">
          <Card.Text className="text-center mb-4 fs-5">
            This application demonstrates React Router capabilities with modern UI design:
          </Card.Text>
          
          <Row className="g-4">
            {features.map((feature, index) => (
              <Col md={6} key={index}>
                <Card className="h-100 border-0 shadow-sm hover-lift" style={{
                  animationDelay: `${index * 0.1}s`
                }}>
                  <Card.Body className="text-center p-4">
                    <div className="fs-1 mb-3">{feature.icon}</div>
                    <Card.Title className="h5 mb-3">
                      <Badge bg={feature.color} className="fs-6 fw-normal px-3 py-2">
                        {feature.title}
                      </Badge>
                    </Card.Title>
                    <Card.Text className="text-muted">
                      {feature.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-5">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="p-4 bg-light rounded-3">
                  <h5 className="text-primary mb-3">🎯 Quick Start Guide</h5>
                  <ol className="text-start text-muted">
                    <li className="mb-2">Login with <strong>username: admin</strong> and <strong>password: password</strong></li>
                    <li className="mb-2">Explore <strong>Posts (JSON)</strong> for static data loading</li>
                    <li className="mb-2">Check <strong>Posts (Server)</strong> for dynamic API integration</li>
                    <li className="mb-2">Click on any post to see detailed views</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Home;
