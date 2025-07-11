import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import { API_ENDPOINTS } from "../config/api";

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  
  const navigate = useNavigate();

  // Validation function
  const validateForm = () => {
    const errors = {};
    
    if (!username.trim()) {
      errors.username = "Username không được để trống";
    }
    
    if (!password.trim()) {
      errors.password = "Password không được để trống";
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted!", { username, password });
    setError("");
    setSuccess("");
    
    // Validate form
    if (!validateForm()) {
      console.log("Validation failed");
      return;
    }

    console.log("Starting login process...");
    setLoading(true);

    try {
      // Kiểm tra thông tin đăng nhập với json-server
      console.log("Fetching users from:", API_ENDPOINTS.USERS);
      const response = await axios.get(API_ENDPOINTS.USERS);
      const users = response.data;
      console.log("Users received:", users);
      
      const user = users.find(
        (u) => u.username === username && u.password === password
      );
      console.log("Found user:", user);

      if (user) {
        setSuccess(`Login successfully with username: ${username}`);
        
        // Gọi callback nếu có
        if (onLoginSuccess) {
          onLoginSuccess(user);
        }
        
        // Lưu thông tin user vào localStorage
        localStorage.setItem("currentUser", JSON.stringify(user));
        
        // Điều hướng đến PostList sau 1.5 giây
        setTimeout(() => {
          navigate("/posts");
        }, 1500);
      } else {
        setError("Tên đăng nhập hoặc mật khẩu không đúng!");
      }
    } catch (error) {
      console.error("Lỗi khi đăng nhập:", error);
      setError("Có lỗi xảy ra khi đăng nhập. Vui lòng thử lại!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <Card>
            <Card.Header className="text-center">
              <h3>Đăng Nhập</h3>
            </Card.Header>
            <Card.Body>
              {error && <Alert variant="danger">{error}</Alert>}
              {success && <Alert variant="success">{success}</Alert>}
              
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Tên đăng nhập</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nhập tên đăng nhập"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                      // Clear validation error when user starts typing
                      if (validationErrors.username) {
                        setValidationErrors(prev => ({...prev, username: ""}));
                      }
                    }}
                    isInvalid={!!validationErrors.username}
                  />
                  <Form.Control.Feedback type="invalid">
                    {validationErrors.username}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Mật khẩu</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Nhập mật khẩu"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      // Clear validation error when user starts typing
                      if (validationErrors.password) {
                        setValidationErrors(prev => ({...prev, password: ""}));
                      }
                    }}
                    isInvalid={!!validationErrors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {validationErrors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button 
                  variant="primary" 
                  type="submit" 
                  className="w-100"
                  disabled={loading}
                >
                  {loading ? "Đang đăng nhập..." : "Đăng nhập"}
                </Button>
              </Form>
              
              <div className="mt-3 text-center">
                <small className="text-muted">
                  Demo accounts: admin/admin123 hoặc user/user123
                </small>
              </div>
              
              <div className="mt-2 text-center">
                <Button 
                  variant="outline-info" 
                  size="sm"
                  onClick={async () => {
                    try {
                      console.log("Testing API connection...");
                      const response = await axios.get(API_ENDPOINTS.USERS);
                      console.log("API Response:", response.data);
                      alert("API hoạt động tốt! Kiểm tra console để xem dữ liệu.");
                    } catch (error) {
                      console.error("API Error:", error);
                      alert("Lỗi kết nối API: " + error.message);
                    }
                  }}
                >
                  Test API
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

Login.propTypes = {
  onLoginSuccess: PropTypes.func
};

export default Login;
