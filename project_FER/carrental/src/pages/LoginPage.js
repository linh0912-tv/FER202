import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/slices/authSlice";
import { Navigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaExclamationCircle, FaUser } from "react-icons/fa";

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function validateEmail(email) {
    // Đơn giản, chỉ kiểm tra có @ và .
    return /.+@.+\..+/.test(email);
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (!email || !password) {
      setError("Vui lòng nhập đầy đủ email và mật khẩu.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Email không hợp lệ.");
      return;
    }
    if (password.length < 6) {
      setError("Mật khẩu phải có ít nhất 6 ký tự.");
      return;
    }
    setError("");
    onSubmit({ email, password });
  };

  return (
    <Form onSubmit={handleSubmit} className="p-4 border rounded bg-white shadow-sm">
      {error && <Alert variant="danger" className="text-center mb-2"><FaExclamationCircle style={{ marginRight: 6, marginBottom: 2 }} />{error}</Alert>}
      <Form.Group controlId="email" className="mb-3">
        <Form.Label>Email</Form.Label>
        <div style={{ position: "relative" }}>
          <span style={{ position: "absolute", left: 10, top: 10, color: "#888" }}><FaEnvelope size={16} /></span>
          <Form.Control
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={{ paddingLeft: 36 }}
            placeholder="Nhập email của bạn"
          />
        </div>
      </Form.Group>
      <Form.Group controlId="password" className="mb-2">
        <Form.Label>Mật khẩu</Form.Label>
        <div style={{ position: "relative" }}>
          <span style={{ position: "absolute", left: 10, top: 10, color: "#888" }}><FaLock size={16} /></span>
          <Form.Control
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            minLength={6}
            style={{ paddingLeft: 36 }}
            placeholder="Nhập mật khẩu"
          />
        </div>
      </Form.Group>
      <div className="d-flex justify-content-end mb-3">
        <a href="#" style={{ fontSize: 13, color: "#007bff", textDecoration: "none" }}>Quên mật khẩu?</a>
      </div>
      <Button type="submit" variant="primary" className="w-100" style={{ fontWeight: 600, boxShadow: "0 2px 8px rgba(0,123,255,0.08)", transition: "0.2s" }}
        onMouseOver={e => e.currentTarget.style.background = '#0056b3'}
        onMouseOut={e => e.currentTarget.style.background = ''}
      >
        Đăng nhập
      </Button>
      <div className="text-center mt-3">
        <span style={{ fontSize: 14 }}>Chưa có tài khoản? <a href="#" style={{ color: "#007bff", textDecoration: "none" }} onClick={e => {e.preventDefault(); onSubmit('switchToRegister')}}>Đăng ký</a></span>
      </div>
    </Form>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

const RegisterForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  function validateEmail(email) {
    return /.+@.+\..+/.test(email);
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !email || !password || !confirm) {
      setError("Vui lòng nhập đầy đủ thông tin.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Email không hợp lệ.");
      return;
    }
    if (password.length < 6) {
      setError("Mật khẩu phải có ít nhất 6 ký tự.");
      return;
    }
    if (password !== confirm) {
      setError("Mật khẩu xác nhận không khớp.");
      return;
    }
    setError("");
    onSubmit({ name, email, password });
  };

  return (
    <Form onSubmit={handleSubmit} className="p-4 border rounded bg-white shadow-sm">
      {error && <Alert variant="danger" className="text-center mb-2"><FaExclamationCircle style={{ marginRight: 6, marginBottom: 2 }} />{error}</Alert>}
      <Form.Group controlId="name" className="mb-3">
        <Form.Label>Họ tên</Form.Label>
        <div style={{ position: "relative" }}>
          <span style={{ position: "absolute", left: 10, top: 10, color: "#888" }}><FaUser size={16} /></span>
          <Form.Control
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            style={{ paddingLeft: 36 }}
            placeholder="Nhập họ tên của bạn"
          />
        </div>
      </Form.Group>
      <Form.Group controlId="email" className="mb-3">
        <Form.Label>Email</Form.Label>
        <div style={{ position: "relative" }}>
          <span style={{ position: "absolute", left: 10, top: 10, color: "#888" }}><FaEnvelope size={16} /></span>
          <Form.Control
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={{ paddingLeft: 36 }}
            placeholder="Nhập email của bạn"
          />
        </div>
      </Form.Group>
      <Form.Group controlId="password" className="mb-3">
        <Form.Label>Mật khẩu</Form.Label>
        <div style={{ position: "relative" }}>
          <span style={{ position: "absolute", left: 10, top: 10, color: "#888" }}><FaLock size={16} /></span>
          <Form.Control
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            minLength={6}
            style={{ paddingLeft: 36 }}
            placeholder="Tạo mật khẩu"
          />
        </div>
      </Form.Group>
      <Form.Group controlId="confirm" className="mb-2">
        <Form.Label>Xác nhận mật khẩu</Form.Label>
        <div style={{ position: "relative" }}>
          <span style={{ position: "absolute", left: 10, top: 10, color: "#888" }}><FaLock size={16} /></span>
          <Form.Control
            type="password"
            value={confirm}
            onChange={e => setConfirm(e.target.value)}
            required
            minLength={6}
            style={{ paddingLeft: 36 }}
            placeholder="Nhập lại mật khẩu"
          />
        </div>
      </Form.Group>
      {error && <Alert variant="danger" className="text-center mb-2"><FaExclamationCircle style={{ marginRight: 6, marginBottom: 2 }} />{error}</Alert>}
      <Button type="submit" variant="success" className="w-100" style={{ fontWeight: 600, boxShadow: "0 2px 8px rgba(40,167,69,0.08)", transition: "0.2s" }}
        onMouseOver={e => e.currentTarget.style.background = '#218838'}
        onMouseOut={e => e.currentTarget.style.background = ''}
      >
        Đăng ký
      </Button>
      <div className="text-center mt-3">
        <span style={{ fontSize: 14 }}>Đã có tài khoản? <a href="#" style={{ color: "#007bff", textDecoration: "none" }} onClick={e => {e.preventDefault(); onSubmit('switchToLogin')}}>Đăng nhập</a></span>
      </div>
    </Form>
  );
};

export default function LoginPage() {
  const dispatch = useDispatch();
  const { status, error, user } = useSelector(state => state.auth);
  const [showRegister, setShowRegister] = useState(false);

  // Hàm chuyển lỗi backend sang tiếng Việt
  const getVietnameseError = (err) => {
    if (!err) return "";
    if (err === "Invalid credentials") return "Email hoặc mật khẩu không đúng.";
    // Có thể bổ sung các lỗi khác ở đây
    return err;
  };

  if (user) {
    if (user.role === "admin") return <Navigate to="/admin" replace />;
    return <Navigate to="/" replace />;
  }

  const handleLogin = creds => {
    if (creds === 'switchToRegister') setShowRegister(true);
    else dispatch(login(creds));
  };
  const handleRegister = creds => {
    if (creds === 'switchToLogin') setShowRegister(false);
    else {
      // TODO: Xử lý đăng ký thực tế ở đây (gọi API hoặc lưu local)
      alert('Đăng ký thành công! Bạn có thể đăng nhập.');
      setShowRegister(false);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #232526 0%, #414345 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <div style={{
        background: "#2c2f34",
        borderRadius: 20,
        boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
        padding: 48,
        minWidth: 520,
        maxWidth: 600,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <img src="/images/logo.jpg" alt="CarRental Logo" style={{ width: 90, height: 90, borderRadius: 18, boxShadow: "0 4px 16px rgba(0,0,0,0.2)" }} />
        <h2 className="mt-3 mb-1" style={{ color: "#fff", fontWeight: 700 }}>{showRegister ? 'Đăng ký' : 'Đăng nhập'}</h2>
        <div style={{ color: "#bbb", fontSize: 16, marginBottom: 24, textAlign: "center" }}>{showRegister ? 'Tạo tài khoản mới để sử dụng CarRental!' : 'Chào mừng bạn đến với CarRental! Vui lòng đăng nhập để tiếp tục.'}</div>
        <div style={{ width: "100%", background: "#232526", borderRadius: 14, boxShadow: "0 2px 12px rgba(0,0,0,0.10)", padding: 32, margin: "0 auto" }}>
          {showRegister ? (
            <RegisterForm onSubmit={handleRegister} />
          ) : (
            <>
              {error && <Alert variant="danger" className="text-center mb-3"><FaExclamationCircle style={{ marginRight: 6, marginBottom: 2 }} />{getVietnameseError(error)}</Alert>}
              <LoginForm onSubmit={creds => creds === 'switchToRegister' ? setShowRegister(true) : handleLogin(creds)} />
              {status === "loading" && <div className="text-center mt-3"><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Đang xử lý…</div>}
            </>
          )}
        </div>
      </div>
    </div>
  );
}