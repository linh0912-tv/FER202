import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, ListGroup, Alert, Badge } from 'react-bootstrap';

function Post() {
  const [posts, setPosts] = useState([]);
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
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading posts:', error);
        setError('Failed to load posts. Please try again later.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Container className="mt-4 text-center fade-in">
        <div className="d-flex flex-column align-items-center">
          <div className="custom-spinner mb-3"></div>
          <h4 className="text-white">Loading Posts...</h4>
          <p className="text-white-50">Fetching data from JSON file</p>
        </div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-4 fade-in">
        <Alert variant="danger" className="custom-alert">
          <Alert.Heading>❌ Error Loading Posts</Alert.Heading>
          <p>{error}</p>
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-4 fade-in">
      <Card className="custom-card hover-lift slide-in-up">
        <Card.Header className="custom-card-header d-flex justify-content-between align-items-center">
          <div>
            <h2 className="mb-1">📁 Posts from JSON File</h2>
            <small className="text-white-50">
              <Badge bg="light" text="dark" className="me-2">
                📊 Static Data
              </Badge>
              {posts.length} posts available
            </small>
          </div>
          <div className="text-end">
            <div className="fs-1">📝</div>
          </div>
        </Card.Header>
        
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
                  to={`/post/${post.id}`} 
                  className="text-decoration-none d-block"
                >
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="flex-grow-1">
                      <div className="d-flex align-items-center mb-2">
                        <Badge bg="primary" className="me-2">#{post.id}</Badge>
                        <h5 className="mb-0 text-primary">{post.title}</h5>
                      </div>
                      <p className="mb-2 post-content-text">
                        {post.content.substring(0, 120)}
                        {post.content.length > 120 && '...'}
                      </p>
                      <div className="d-flex align-items-center">
                        <small className="text-success me-3">
                          📄 {post.content.length} characters
                        </small>
                        <small className="text-info">
                          🔗 Click to read more
                        </small>
                      </div>
                    </div>
                    <div className="flex-shrink-0 ms-3">
                      <div className="text-primary fs-4">
                        ▶️
                      </div>
                    </div>
                  </div>
                </Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        
        <Card.Footer className="text-center text-muted">
          <small>
            💡 Data loaded from <code>/public/posts.json</code> • 
            Example of static file fetching in React
          </small>
        </Card.Footer>
      </Card>
    </Container>
  );
}

export default Post;
