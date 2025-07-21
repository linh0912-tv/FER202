import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Container, Nav } from "react-bootstrap";
import { FaCarSide, FaPlusCircle, FaClipboardList, FaSignOutAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";

export default function AdminLayout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="admin-layout">
      <Nav className="admin-sidebar flex-column">
        <div className="admin-sidebar-title mb-4">QUẢN TRỊ</div>
        <Nav.Link as={NavLink} to="/admin/cars" className="admin-sidebar-link">
          <FaCarSide className="admin-sidebar-icon" /> Tất cả xe
        </Nav.Link>
        <Nav.Link as={NavLink} to="/admin/add-car" className="admin-sidebar-link">
          <FaPlusCircle className="admin-sidebar-icon" /> Thêm xe
        </Nav.Link>
        <Nav.Link as={NavLink} to="/admin/bookings" className="admin-sidebar-link">
          <FaClipboardList className="admin-sidebar-icon" /> Đơn đã thuê
        </Nav.Link>
        <div className="mt-auto">
          <Nav.Link as="button" onClick={handleLogout} className="admin-sidebar-link admin-sidebar-logout">
            <FaSignOutAlt className="admin-sidebar-icon" /> Đăng xuất
          </Nav.Link>
        </div>
      </Nav>
      <div className="admin-content">
        <Container className="admin-content-container">
          <Outlet />
        </Container>
      </div>
    </div>
  );
}
