import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, ListGroup, Alert, Button, Badge } from 'react-bootstrap';

function ServerPost() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Try to fetch from JSON Server (assuming it runs on port 3001)
      const response = await fetch('http://localhost:3001/posts');
      
      if (!response.ok) {
        throw new Error('JSON Server not available. Please start the server.');
      }
      
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error loading posts from server:', error);
      setError(error.message);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading && !refreshing) {
    return (
      <Container className="mt-4 text-center fade-in">
        <div className="d-flex flex-column align-items-center">
          <div className="custom-spinner mb-3"></div>
          <h4 className="text-white">Connecting to Server...</h4>
          <p className="text-white-50">Fetching data from JSON Server</p>
        </div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-4 fade-in">
        <Alert variant="warning" className="custom-alert">
          <Alert.Heading>🚨 Server Connection Error</Alert.Heading>
          <p className="mb-3">{error}</p>
          <hr />
          <div className="row align-items-center">
            <div className="col-md-4">
              <Button 
                variant="primary" 
                onClick={fetchPosts}
                className="custom-btn-primary w-100"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" />
                    Retrying...
                  </>
                ) : (
                  <>🔄 Retry Connection</>
                )}
              </Button>
            </div>
            <div className="col-md-8">
              <div className="bg-dark text-white p-3 rounded">
                <p className="mb-2"><strong>💡 To start JSON Server:</strong></p>
                <code className="text-warning">
                  npx json-server --watch db.json --port 3001
                </code>
              </div>
            </div>
          </div>
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-4 fade-in">
      <Card className="custom-card hover-lift slide-in-up">
        <Card.Header className="custom-card-header d-flex justify-content-between align-items-center">
          <div>
            <h2 className="mb-1">🌐 Posts from JSON Server</h2>
            <small className="text-white-50">
              <Badge bg="success" className="me-2">
                🚀 Live API
              </Badge>
              {posts.length} posts • Server: localhost:3001
            </small>
          </div>
          <Button 
            variant="outline-light" 
            onClick={handleRefresh}
            disabled={refreshing}
            className="custom-btn-secondary"
          >
            {refreshing ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" />
                Refreshing...
              </>
            ) : (
              <>🔄 Refresh</>
            )}
          </Button>
        </Card.Header>
        
        {posts.length === 0 ? (
          <Card.Body className="text-center py-5">
            <div className="mb-4">
              <div className="fs-1 mb-3">📭</div>
              <h4 className="text-muted">No Posts Found</h4>
              <p className="text-muted">
                Make sure your JSON Server is running with data.
              </p>
            </div>
            <Alert variant="info" className="custom-alert">
              <p className="mb-0">
                <strong>Server Status:</strong> Connected but no data available
              </p>
            </Alert>
          </Card.Body>
        ) : (
          <div className="p-3">
            <ListGroup variant="flush">
              {posts.map((post, index) => (
                <ListGroup.Item 
                  key={post.id} 
                  className="custom-list-item hover-lift"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <Link 
                    to={`/server-post/${post.id}`} 
                    className="text-decoration-none d-block"
                  >
                    <div className="d-flex justify-content-between align-items-start">
                      <div className="flex-grow-1">
                        <div className="d-flex align-items-center mb-2">
                          <Badge bg="success" className="me-2">
                            🌐 #{post.id}
                          </Badge>
                          <h5 className="mb-0 text-primary">{post.title}</h5>
                        </div>
                        <p className="mb-2 post-content-text">
                          {post.content ? (
                            <>
                              {post.content.substring(0, 120)}
                              {post.content.length > 120 && '...'}
                            </>
                          ) : (
                            <em>No content available</em>
                          )}
                        </p>
                        <div className="d-flex align-items-center">
                          <small className="text-success me-3">
                            📊 API Response
                          </small>
                          <small className="text-info">
                            🔗 View details
                          </small>
                        </div>
                      </div>
                      <div className="flex-shrink-0 ms-3">
                        <div className="text-success fs-4">
                          ▶️
                        </div>
                      </div>
                    </div>
                  </Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        )}
        
        <Card.Footer className="text-center text-muted">
          <small>
            🚀 Data from JSON Server • 
            <span className="text-success">●</span> Live API Connection • 
            Port: 3001
          </small>
        </Card.Footer>
      </Card>
    </Container>
  );
}

export default ServerPost;
