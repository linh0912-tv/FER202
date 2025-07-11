import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Alert, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import { API_ENDPOINTS } from "../config/api";

const PostList = ({ currentUser, onLogout }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Fetch dữ liệu khi component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_ENDPOINTS.POSTS);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
        setError("Có lỗi xảy ra khi tải dữ liệu!");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Hàm để xóa bài viết
  const handleDelete = async (id, title) => {
    // Hiển thị thông báo xác nhận
    const isConfirmed = window.confirm(
      `Bạn có chắc chắn muốn xóa bài viết "${title}"?`
    );
    
    if (isConfirmed) {
      try {
        await axios.delete(API_ENDPOINTS.POST_BY_ID(id));
        setData(data.filter((post) => post.id !== id));
        setError("");
      } catch (error) {
        console.error("Lỗi khi xóa bài viết:", error);
        setError("Có lỗi xảy ra khi xóa bài viết!");
      }
    }
  };

  // Hàm đăng xuất
  const handleLogout = () => {
    console.log("Logout button clicked!");
    console.log("Current user before logout:", localStorage.getItem("currentUser"));
    
    if (onLogout) {
      onLogout(); // Gọi function từ App.js
    } else {
      // Fallback nếu không có onLogout prop
      localStorage.removeItem("currentUser");
      navigate("/");
    }
    
    console.log("Logout completed");
  };

  if (loading) {
    return (
      <Container className="mt-5 text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Đang tải...</span>
        </Spinner>
        <p className="mt-2">Đang tải dữ liệu...</p>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1>Danh sách bài viết</h1>
            <div>
              <span className="me-3">
                Xin chào, <strong>{currentUser?.username || "User"}</strong>
              </span>
              <Button 
                variant="outline-danger" 
                size="sm" 
                onClick={(e) => {
                  console.log("Button clicked!", e);
                  try {
                    handleLogout();
                  } catch (error) {
                    console.error("Error in logout:", error);
                  }
                }}
              >
                <i className="bi bi-box-arrow-right me-1"></i>
                Đăng xuất
              </Button>
            </div>
          </div>

          {error && <Alert variant="danger">{error}</Alert>}

          <div className="mb-3">
            <Button as={Link} to="/posts/create" variant="success">
              <i className="bi bi-plus-circle me-2"></i>
              Tạo bài viết mới
            </Button>
          </div>

          {!data || data.length === 0 ? (
            <Alert variant="info">
              Không có bài viết nào! 
              <Button as={Link} to="/posts/create" variant="link" className="p-0 ms-2">
                Tạo bài viết đầu tiên
              </Button>
            </Alert>
          ) : (
            <Row>
              {data.map((post) => (
                <Col md={6} lg={4} key={post.id} className="mb-4">
                  <Card className="h-100">
                    <Card.Body className="d-flex flex-column">
                      <Card.Title>{post.title}</Card.Title>
                      <Card.Text className="flex-grow-1">
                        {post.content.length > 100
                          ? `${post.content.substring(0, 100)}...`
                          : post.content}
                      </Card.Text>
                      <div className="mt-auto">
                        <Button
                          as={Link}
                          to={`/posts/edit/${post.id}`}
                          variant="primary"
                          size="sm"
                          className="me-2"
                        >
                          <i className="bi bi-pencil me-1"></i>
                          Chỉnh sửa
                        </Button>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => handleDelete(post.id, post.title)}
                        >
                          <i className="bi bi-trash me-1"></i>
                          Xóa
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};

PostList.propTypes = {
  currentUser: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string
  }),
  onLogout: PropTypes.func
};

export default PostList;
