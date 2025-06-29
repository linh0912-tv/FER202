import React, { useContext } from 'react';
import { Navbar, Nav, Container, Button, Badge } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

function Navigation() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-lg" style={{
      background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%) !important'
    }}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold pulse-on-hover">
          <span className="me-2">🚀</span>
          React Router Demo
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={`fw-semibold px-3 mx-1 rounded ${isActive('/') ? 'bg-primary' : ''}`}
            >
              🏠 Home
            </Nav.Link>
            
            <Nav.Link 
              as={Link} 
              to="/about" 
              className={`fw-semibold px-3 mx-1 rounded ${isActive('/about') ? 'bg-primary' : ''}`}
            >
              ℹ️ About
            </Nav.Link>
            
            {user && (
              <>
                <Nav.Link 
                  as={Link} 
                  to="/posts" 
                  className={`fw-semibold px-3 mx-1 rounded ${isActive('/posts') ? 'bg-primary' : ''}`}
                >
                  📁 Posts (JSON)
                  <Badge bg="secondary" className="ms-2">Static</Badge>
                </Nav.Link>
                
                <Nav.Link 
                  as={Link} 
                  to="/server-posts" 
                  className={`fw-semibold px-3 mx-1 rounded ${isActive('/server-posts') ? 'bg-primary' : ''}`}
                >
                  🌐 Posts (Server)
                  <Badge bg="success" className="ms-2">Live</Badge>
                </Nav.Link>
              </>
            )}
          </Nav>
          
          <Nav>
            {user ? (
              <div className="d-flex align-items-center">
                <Navbar.Text className="me-3">
                  <div className="d-flex align-items-center">
                    <span className="me-2">👤</span>
                    <div>
                      <div className="fw-semibold">Welcome back!</div>
                      <small className="text-white-50">{user.username}</small>
                    </div>
                  </div>
                </Navbar.Text>
                <Button 
                  variant="outline-light" 
                  size="sm" 
                  onClick={handleLogout}
                  className="custom-btn-secondary"
                >
                  🚪 Logout
                </Button>
              </div>
            ) : (
              <Nav.Link 
                as={Link} 
                to="/login" 
                className={`fw-semibold px-3 rounded ${isActive('/login') ? 'bg-primary' : ''}`}
              >
                <Button 
                  variant="outline-light" 
                  size="sm"
                  className="custom-btn-secondary"
                >
                  🔐 Login
                </Button>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
