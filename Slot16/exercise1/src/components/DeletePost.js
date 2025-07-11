import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Alert, Spinner, Modal } from "react-bootstrap";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import { API_ENDPOINTS } from "../config/api";

const DeletePost = ({ onPostDeleted }) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(true);
  
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(API_ENDPOINTS.POST_BY_ID(id));
        if (response.data) {
          setPost(response.data);
        } else {
          setError(`Không tìm thấy bài viết với id ${id}`);
        }
      } catch (error) {
        console.error("Lỗi khi lấy bài viết:", error);
        setError("Có lỗi xảy ra khi tải bài viết!");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id]);

  const handleDelete = async () => {
    setDeleting(true);
    try {
      await axios.delete(API_ENDPOINTS.POST_BY_ID(id));
      
      // Gọi callback nếu có
      if (onPostDeleted) {
        onPostDeleted(id);
      }
      
      // Chuyển hướng về trang danh sách
      navigate("/posts");
    } catch (error) {
      console.error("Lỗi khi xóa bài viết:", error);
      setError("Có lỗi xảy ra khi xóa bài viết!");
      setDeleting(false);
    }
  };

  const handleCancel = () => {
    setShowModal(false);
    navigate("/posts");
  };

  if (loading) {
    return (
      <Container className="mt-5 text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Đang tải...</span>
        </Spinner>
        <p className="mt-2">Đang tải thông tin bài viết...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Alert variant="danger">
              {error}
              <div className="mt-3">
                <Button as={Link} to="/posts" variant="primary">
                  Quay lại danh sách
                </Button>
              </div>
            </Alert>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <>
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card>
              <Card.Header className="bg-danger text-white">
                <h3 className="mb-0">
                  <i className="bi bi-exclamation-triangle me-2"></i>
                  Xác nhận xóa bài viết
                </h3>
              </Card.Header>
              <Card.Body>
                {post && (
                  <div>
                    <p className="mb-3">
                      Bạn có chắc chắn muốn xóa bài viết sau không? Hành động này không thể hoàn tác.
                    </p>
                    <Card className="mb-3">
                      <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>
                          {post.content.length > 200
                            ? `${post.content.substring(0, 200)}...`
                            : post.content}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                )}
                
                <div className="d-flex justify-content-between">
                  <Button 
                    variant="secondary" 
                    onClick={handleCancel}
                    disabled={deleting}
                  >
                    <i className="bi bi-x-circle me-2"></i>
                    Hủy
                  </Button>
                  <Button 
                    variant="danger" 
                    onClick={handleDelete}
                    disabled={deleting}
                  >
                    {deleting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Đang xóa...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-trash me-2"></i>
                        Xóa bài viết
                      </>
                    )}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Modal xác nhận */}
      <Modal show={showModal} onHide={handleCancel} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <i className="bi bi-exclamation-triangle text-warning me-2"></i>
            Xác nhận xóa
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {post && (
            <>
              <p>Bạn có chắc chắn muốn xóa bài viết <strong>"{post.title}"</strong> không?</p>
              <p className="text-muted small">Hành động này không thể hoàn tác.</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel} disabled={deleting}>
            Hủy
          </Button>
          <Button variant="danger" onClick={handleDelete} disabled={deleting}>
            {deleting ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Đang xóa...
              </>
            ) : (
              "Xóa"
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

DeletePost.propTypes = {
  onPostDeleted: PropTypes.func
};

export default DeletePost;
