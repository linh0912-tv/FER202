import React, { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';
import LoadingSpinner from "./components/LoadingSpinner";
import ProtectedRoute from "./components/ProtectedRoute";

// Lazy loading components
const Login = lazy(() => import("./components/Login"));
const PostList = lazy(() => import("./components/PostList"));
const CreatePost = lazy(() => import("./components/CreatePost"));
const EditPost = lazy(() => import("./components/EditPost"));
const DeletePost = lazy(() => import("./components/DeletePost"));

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Kiểm tra xem user đã đăng nhập chưa khi ứng dụng khởi chạy
  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      try {
        setCurrentUser(JSON.parse(savedUser));
      } catch (error) {
        console.error("Lỗi khi parse user data:", error);
        localStorage.removeItem("currentUser");
      }
    }
    setLoading(false);
  }, []);

  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    console.log("Handling logout from App.js");
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  if (loading) {
    return <LoadingSpinner message="Đang khởi tạo ứng dụng..." />;
  }

  return (
    <Router>
      <div className="App">
        <Suspense fallback={<LoadingSpinner message="Đang tải trang..." />}>
          <Routes>
            {/* Route trang chủ - Login */}
            <Route 
              path="/" 
              element={
                currentUser ? (
                  <Navigate to="/posts" replace />
                ) : (
                  <Login onLoginSuccess={handleLoginSuccess} />
                )
              } 
            />
            
            {/* Protected Routes - Yêu cầu đăng nhập */}
            <Route 
              path="/posts" 
              element={
                <ProtectedRoute currentUser={currentUser}>
                  <PostList currentUser={currentUser} onLogout={handleLogout} />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/posts/create" 
              element={
                <ProtectedRoute currentUser={currentUser}>
                  <CreatePost />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/posts/edit/:id" 
              element={
                <ProtectedRoute currentUser={currentUser}>
                  <EditPost />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/posts/delete/:id" 
              element={
                <ProtectedRoute currentUser={currentUser}>
                  <DeletePost />
                </ProtectedRoute>
              } 
            />

            {/* Route 404 */}
            <Route 
              path="*" 
              element={
                <div className="container mt-5 text-center">
                  <h1>404 - Trang không tìm thấy</h1>
                  <p>Trang bạn đang tìm kiếm không tồn tại.</p>
                  <button 
                    className="btn btn-primary"
                    onClick={() => window.history.back()}
                  >
                    Quay lại
                  </button>
                </div>
              } 
            />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
