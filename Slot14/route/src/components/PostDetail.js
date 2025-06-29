import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Card, Button, Alert, Badge, Row, Col } from 'react-bootstrap';

function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/posts.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const foundPost = data.find(p => p.id === id);
        if (foundPost) {
          setPost(foundPost);
        } else {
          setError('Post not found');
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading post:', error);
        setError('Failed to load post. Please try again later.');
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Container className="mt-4 text-center fade-in">
        <div className="d-flex flex-column align-items-center">
          <div className="custom-spinner mb-3"></div>
          <h4 className="text-white">Loading Post Details...</h4>
          <p className="text-white-50">Post ID: {id}</p>
        </div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-4 fade-in">
        <Alert variant="danger" className="custom-alert">
          <Alert.Heading>❌ Error Loading Post</Alert.Heading>
          <p>{error}</p>
        </Alert>
        <div className="text-center">
          <Button 
            variant="secondary" 
            onClick={() => navigate('/posts')}
            className="custom-btn-secondary"
          >
            ← Back to Posts
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <Container className="mt-4 fade-in">
      <Row className="justify-content-center">
        <Col lg={10}>
          <Card className="custom-card hover-lift slide-in-up shadow-lg">
            <Card.Header className="custom-card-header">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="d-flex align-items-center mb-2">
                    <Badge bg="light" text="dark" className="me-2">
                      📄 Post #{post.id}
                    </Badge>
                    <Badge bg="primary">📁 From JSON File</Badge>
                  </div>
                  <h2 className="mb-0">{post.title}</h2>
                </div>
                <Button 
                  variant="outline-light" 
                  onClick={() => navigate('/posts')}
                  className="custom-btn-secondary"
                >
                  ← Back
                </Button>
              </div>
            </Card.Header>
            
            <Card.Body className="p-4">
              <div className="mb-4">
                <div className="row">
                  <div className="col-md-8">
                    <h3 className="text-primary mb-3">📖 Content</h3>
                    <div className="post-detail-content">
                      <p className="lead mb-0" style={{ lineHeight: '1.8' }}>
                        {post.content}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <h5 className="text-secondary mb-3">📊 Post Statistics</h5>
                    <Card className="post-stats-card">
                      <Card.Body>
                        <div className="d-flex justify-content-between mb-3">
                          <span className="text-muted">📝 Characters:</span>
                          <Badge bg="info">{post.content.length}</Badge>
                        </div>
                        <div className="d-flex justify-content-between mb-3">
                          <span className="text-muted">📄 Words:</span>
                          <Badge bg="success">
                            {post.content.split(' ').length}
                          </Badge>
                        </div>
                        <div className="d-flex justify-content-between mb-3">
                          <span className="text-muted">🔢 Post ID:</span>
                          <Badge bg="warning">{post.id}</Badge>
                        </div>
                        <div className="d-flex justify-content-between">
                          <span className="text-muted">📦 Source:</span>
                          <Badge bg="secondary">JSON File</Badge>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </div>

              <div className="border-top pt-4 post-navigation-section">
                <div className="row align-items-center">
                  <div className="col-md-8">
                    <h6 className="mb-2">🔍 Navigation</h6>
                    <p className="mb-0">
                      This post was loaded from <code>/public/posts.json</code> using 
                      React Router's dynamic routing feature with parameter <code>id={id}</code>.
                    </p>
                  </div>
                  <div className="col-md-4 text-end">
                    <div className="d-grid gap-2">
                      <Button 
                        variant="primary" 
                        onClick={() => navigate('/posts')}
                        className="custom-btn-primary"
                      >
                        📁 View All Posts
                      </Button>
                      <Button 
                        variant="outline-primary" 
                        onClick={() => navigate('/server-posts')}
                        className="custom-btn-secondary"
                      >
                        🌐 Server Posts
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default PostDetail;
