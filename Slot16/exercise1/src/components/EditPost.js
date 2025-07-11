import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form, Button, Alert, Spinner } from "react-bootstrap";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import { API_ENDPOINTS } from "../config/api";

const EditPost = ({ onPostUpdated }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [validationErrors, setValidationErrors] = useState({});
  
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(API_ENDPOINTS.POST_BY_ID(id));
        if (response.data) {
          setTitle(response.data.title);
          setContent(response.data.content);
        } else {
          setStatus(`Không tìm thấy bài viết với id ${id}`);
        }
      } catch (error) {
        console.error("Lỗi khi lấy bài viết:", error);
        setStatus("Có lỗi xảy ra khi tải bài viết!");
      } finally {
        setInitialLoading(false);
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id]);

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

    const updatedPost = {
      title: title.trim(),
      content: content.trim(),
    };

    try {
      const response = await axios.put(API_ENDPOINTS.POST_BY_ID(id), updatedPost);
      if (response.status === 200) {
        setStatus("Bài viết đã được cập nhật thành công!");
        setValidationErrors({});

        // Gọi callback nếu có
        if (onPostUpdated) {
          onPostUpdated(response.data);
        }

        // Chuyển hướng về trang danh sách sau 1.5 giây
        setTimeout(() => {
          navigate("/posts");
        }, 1500);
      }
    } catch (error) {
      setStatus("Có lỗi xảy ra khi cập nhật bài viết.");
      console.error("Lỗi khi cập nhật bài viết:", error);
    } finally {
      setLoading(false);
    }
  };

  if (initialLoading) {
    return (
      <Container className="mt-5 text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Đang tải...</span>
        </Spinner>
        <p className="mt-2">Đang tải thông tin bài viết...</p>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card>
            <Card.Header>
              <h3 className="mb-0">Chỉnh sửa bài viết</h3>
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
                    variant="primary"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Đang cập nhật...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-check-circle me-2"></i>
                        Cập nhật bài viết
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

EditPost.propTypes = {
  onPostUpdated: PropTypes.func
};

export default EditPost;
