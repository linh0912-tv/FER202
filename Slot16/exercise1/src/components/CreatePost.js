import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import { API_ENDPOINTS } from "../config/api";

const CreatePost = ({ onPostCreated }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  
  const navigate = useNavigate();

  // Validation function
  const validateForm = () => {
    const errors = {};
    
    if (!title.trim()) {
      errors.title = "Tiêu đề không được để trống";
    } else if (title.length < 5) {
      errors.title = "Tiêu đề phải có ít nhất 5 ký tự";
    } else if (title.length > 100) {
      errors.title = "Tiêu đề không được vượt quá 100 ký tự";
    }
    
    if (!content.trim()) {
      errors.content = "Nội dung không được để trống";
    } else if (content.length < 10) {
      errors.content = "Nội dung phải có ít nhất 10 ký tự";
    } else if (content.length > 1000) {
      errors.content = "Nội dung không được vượt quá 1000 ký tự";
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    
    // Validate form
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    const newPost = {
      title: title.trim(),
      content: content.trim(),
    };

    try {
      const response = await axios.post(API_ENDPOINTS.POSTS, newPost);
      setStatus("Bài viết đã được tạo thành công!");
      setTitle("");
      setContent("");
      setValidationErrors({});

      // Gọi callback nếu có
      if (onPostCreated) {
        onPostCreated(response.data);
      }

      // Chuyển hướng về trang danh sách sau 1.5 giây
      setTimeout(() => {
        navigate("/posts");
      }, 1500);
    } catch (error) {
      setStatus("Có lỗi xảy ra khi tạo bài viết.");
      console.error("Lỗi khi tạo bài viết:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card>
            <Card.Header>
              <h3 className="mb-0">Thêm bài viết mới</h3>
            </Card.Header>
            <Card.Body>
              {status && (
                <Alert variant={status.includes("thành công") ? "success" : "danger"}>
                  {status}
                </Alert>
              )}
              
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Tiêu đề <span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nhập tiêu đề bài viết"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                      // Clear validation error when user starts typing
                      if (validationErrors.title) {
                        setValidationErrors(prev => ({...prev, title: ""}));
                      }
                    }}
                    isInvalid={!!validationErrors.title}
                    maxLength={100}
                  />
                  <Form.Control.Feedback type="invalid">
                    {validationErrors.title}
                  </Form.Control.Feedback>
                  <Form.Text className="text-muted">
                    {title.length}/100 ký tự
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Nội dung <span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={6}
                    placeholder="Nhập nội dung bài viết"
                    value={content}
                    onChange={(e) => {
                      setContent(e.target.value);
                      // Clear validation error when user starts typing
                      if (validationErrors.content) {
                        setValidationErrors(prev => ({...prev, content: ""}));
                      }
                    }}
                    isInvalid={!!validationErrors.content}
                    maxLength={1000}
                  />
                  <Form.Control.Feedback type="invalid">
                    {validationErrors.content}
                  </Form.Control.Feedback>
                  <Form.Text className="text-muted">
                    {content.length}/1000 ký tự
                  </Form.Text>
                </Form.Group>

                <div className="d-flex justify-content-between">
                  <Button 
                    as={Link} 
                    to="/posts" 
                    variant="secondary"
                    disabled={loading}
                  >
                    <i className="bi bi-arrow-left me-2"></i>
                    Quay lại
                  </Button>
                  <Button 
                    type="submit" 
                    variant="success"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Đang tạo...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-check-circle me-2"></i>
                        Tạo bài viết
                      </>
                    )}
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

CreatePost.propTypes = {
  onPostCreated: PropTypes.func
};

export default CreatePost;
