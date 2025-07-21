import React from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";

const NavigationBar = () => {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="sidebar-navigation">
      <div className="sidebar-logo">
        <img
          src="/images/logo.jpg"
          alt="CarRental Logo"
          style={{ height: "100px", marginBottom: "16px", objectFit: "contain", display: "block", marginLeft: "auto", marginRight: "auto" }}
        />
        <div style={{ color: '#f5f6fa', textAlign: 'center', fontWeight: 'bold', fontSize: '1.5rem', letterSpacing: '2px', marginBottom: '24px' }}>
          CarRental
        </div>
      </div>
      <nav className="sidebar-menu">
        <Nav className="flex-column align-items-center w-100">
          <Nav.Link as={Link} to="/" className="sidebar-link">Home</Nav.Link>
          <Nav.Link as={Link} to="/about" className="sidebar-link">Về CarRental</Nav.Link>
          {user && <Nav.Link as={Link} to="/my-trips" className="sidebar-link">Chuyến của tôi</Nav.Link>}
          {user?.role === "admin" && <Nav.Link as={Link} to="/admin" className="sidebar-link">Admin</Nav.Link>}
        </Nav>
      </nav>
      <div className="sidebar-auth mt-auto">
        {!user ? (
          <>
            <Button variant="outline-light" as={Link} to="/login" className="mb-2 w-100">
              Đăng nhập
            </Button>
            <Button variant="light" as={Link} to="/login" state={{ showRegister: true }} className="w-100">
              Đăng ký
            </Button>
          </>
        ) : (
          <Button variant="danger" onClick={handleLogout} className="w-100">
            Đăng xuất
          </Button>
        )}
      </div>
    </div>
  );
};
export default NavigationBar;