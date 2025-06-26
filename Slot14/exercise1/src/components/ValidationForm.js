import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button, Container, Alert } from "react-bootstrap";

const ValidationForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    agree: false,
  });
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const validateEmail = (email) => {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    return /^\d{10,15}$/.test(phone);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name || formData.name.length < 3 || formData.name.length > 50) {
      newErrors.name = "Tên phải từ 3-50 ký tự";
    }
    if (!formData.age) {
      newErrors.age = "Tuổi không được để trống!";
    } else if (isNaN(formData.age) || formData.age < 18 || formData.age > 100) {
      newErrors.age = "Tuổi phải từ 18-100";
    }
    if (!formData.email) {
      newErrors.email = "Email không được để trống!";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Email không đúng định dạng!";
    }
    if (!formData.phone) {
      newErrors.phone = "Số điện thoại không được để trống!";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Số điện thoại phải từ 10-15 chữ số!";
    }
    if (!formData.agree) {
      newErrors.agree = "Bạn phải đồng ý với điều khoản!";
    }
    setErrors(newErrors);
    setShowAlert(Object.keys(newErrors).length > 0);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowAlert(false);
      onSubmit(formData);
    }
  };

  return (
    <Container>
      <h3>Form Validation</h3>
      {showAlert && (
        <Alert variant="danger">
          <strong>Lỗi:</strong> Vui lòng kiểm tra lại thông tin!
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Tên</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formAge">
          <Form.Label>Tuổi</Form.Label>
          <Form.Control
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            isInvalid={!!errors.age}
          />
          <Form.Control.Feedback type="invalid">
            {errors.age}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formPhone">
          <Form.Label>Số điện thoại</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            isInvalid={!!errors.phone}
          />
          <Form.Control.Feedback type="invalid">
            {errors.phone}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formAgree">
          <Form.Check
            type="checkbox"
            name="agree"
            label="Tôi đồng ý với điều khoản"
            checked={formData.agree}
            onChange={handleChange}
            isInvalid={!!errors.agree}
            feedback={errors.agree}
          />
          {errors.agree && (
            <div style={{ color: "red", fontSize: 13 }}>{errors.agree}</div>
          )}
        </Form.Group>
        <Button variant="primary" type="submit">
          Gửi
        </Button>
      </Form>
    </Container>
  );
};

ValidationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ValidationForm;
