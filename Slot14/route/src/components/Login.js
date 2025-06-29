import React, { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Container, Card, Form, Button, Alert, InputGroup } from 'react-bootstrap';
import { AuthContext } from '../contexts/AuthContext';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get the page user was trying to access before login
  const from = location.state?.from?.pathname || '/posts';

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call with loading animation
    setTimeout(() => {
      // Demo credentials - in real app, this would be an API call
      if (formData.username === 'admin' && formData.password === 'password') {
        login({
          username: formData.username,
          email: 'admin@example.com'
        });
        navigate(from, { replace: true });
      } else {
        setErrors({ general: 'Invalid username or password' });
      }
      setIsLoading(false);
    }, 1500);
  };

  const fillDemoCredentials = () => {
    setFormData({
      username: 'admin',
      password: 'password'
    });
    setErrors({});
  };

  return (
    <Container className="mt-4 fade-in">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <Card className="custom-card hover-lift slide-in-up shadow-lg">
            <Card.Header className="custom-card-header text-center">
              <div className="mb-2">
                <div className="fs-1">🔐</div>
              </div>
              <h3 className="mb-0">Welcome Back!</h3>
              <small className="text-white-50">Sign in to continue</small>
            </Card.Header>
            
            <Card.Body className="p-4">
              <Alert variant="info" className="custom-alert border-0">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <strong>🚀 Demo Credentials:</strong><br />
                    <small>
                      Username: <code>admin</code><br />
                      Password: <code>password</code>
                    </small>
                  </div>
                  <Button 
                    variant="outline-primary" 
                    size="sm"
                    onClick={fillDemoCredentials}
                    className="custom-btn-secondary"
                  >
                    Auto Fill
                  </Button>
                </div>
              </Alert>
              
              {errors.general && (
                <Alert variant="danger" className="custom-alert">
                  <div className="d-flex align-items-center">
                    <span className="me-2">❌</span>
                    {errors.general}
                  </div>
                </Alert>
              )}
              
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">
                    👤 Username
                  </Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="bg-light border-end-0">
                      <span>👤</span>
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      isInvalid={!!errors.username}
                      placeholder="Enter your username"
                      className="custom-form-control border-start-0"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.username}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold">
                    🔒 Password
                  </Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="bg-light border-end-0">
                      <span>🔒</span>
                    </InputGroup.Text>
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      isInvalid={!!errors.password}
                      placeholder="Enter your password"
                      className="custom-form-control border-start-0 border-end-0"
                    />
                    <InputGroup.Text 
                      className="bg-light border-start-0 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{ cursor: 'pointer' }}
                    >
                      <span>{showPassword ? '🙈' : '👁️'}</span>
                    </InputGroup.Text>
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <div className="d-grid">
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="custom-btn-primary py-3"
                    size="lg"
                  >
                    {isLoading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" />
                        Signing In...
                      </>
                    ) : (
                      <>🚀 Sign In</>
                    )}
                  </Button>
                </div>
              </Form>

              <div className="text-center mt-4">
                <small className="text-muted">
                  🔒 Secure authentication • Protected routes ahead
                </small>
              </div>
            </Card.Body>
          </Card>

          <div className="text-center mt-3">
            <small className="text-white-50">
              New to React Router? Check out our <strong>Home</strong> page for more info!
            </small>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Login;
