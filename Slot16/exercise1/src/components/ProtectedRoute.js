import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children, currentUser }) => {
  // Kiểm tra xem user đã đăng nhập chưa
  if (!currentUser) {
    // Chuyển hướng về trang login nếu chưa đăng nhập
    return <Navigate to="/" replace />;
  }

  // Render component con nếu đã đăng nhập
  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  currentUser: PropTypes.object
};

export default ProtectedRoute;
