import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Card, Button, Alert, Badge } from 'react-bootstrap';

function ServerPostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`http://localhost:3001/posts/${id}`);
        
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Post not found');
          }
          throw new Error('JSON Server not available. Please start the server.');
        }
        
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error('Error loading post from server:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <Container className="mt-4 text-center fade-in">
        <div className="d-flex flex-column align-items-center">
          <div className="custom-spinner mb-3"></div>
          <h4 className="text-white">Loading Post Details...</h4>
          <p className="text-white-50">Fetching from JSON Server • Post ID: {id}</p>
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
            onClick={() => navigate('/server-posts')}
            className="custom-btn-secondary"
          >
            ← Back to Server Posts
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <Container className="mt-4 fade-in">
      <Card className="custom-card hover-lift slide-in-up">
        <Card.Header className="custom-card-header">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <div className="mb-2">
                <Badge bg="success" className="me-2">🌐 JSON Server</Badge>
                <Badge bg="info">ID: {post.id}</Badge>
              </div>
              <h2 className="mb-0 text-white">{post.title}</h2>
            </div>
            <Button 
              variant="outline-light" 
              onClick={() => navigate('/server-posts')}
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
                    {post.content || 'No content available'}
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <h5 className="text-secondary mb-3">🚀 Server Information</h5>
                <Card className="post-stats-card">
                  <Card.Body>
                    <div className="d-flex justify-content-between mb-3">
                      <span className="text-muted">📝 Characters:</span>
                      <Badge bg="info">
                        {post.content ? post.content.length : 0}
                      </Badge>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <span className="text-muted">📄 Words:</span>
                      <Badge bg="success">
                        {post.content ? post.content.split(' ').length : 0}
                      </Badge>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <span className="text-muted">🔢 Post ID:</span>
                      <Badge bg="primary">{post.id}</Badge>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span className="text-muted">🌐 Source:</span>
                      <Badge bg="success">Live API</Badge>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="d-flex justify-content-center gap-3">
              <Button 
                variant="primary" 
                onClick={() => navigate('/server-posts')}
                className="custom-btn-primary"
              >
                📋 View All Posts
              </Button>
              <Button 
                variant="outline-secondary" 
                onClick={() => window.location.reload()}
                className="custom-btn-secondary"
              >
                🔄 Refresh
              </Button>
            </div>
          </div>
        </Card.Body>
        
        <Card.Footer className="text-center">
          <small className="text-secondary">
            🚀 Loaded from JSON Server • 
            <span className="text-success">●</span> Live Connection • 
            Port: 3001
          </small>
        </Card.Footer>
      </Card>
    </Container>
  );
}

export default ServerPostDetail;
