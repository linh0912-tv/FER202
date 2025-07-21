import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="footer-dark mt-auto py-5">
      <Container>
        <Row className="align-items-start">
          <Col md={6} className="footer-left mb-4 mb-md-0">
            <div className="footer-logo-wrap mb-3">
              <img src="/images/logo.jpg" alt="CarRental Logo" className="footer-logo" />
              <div className="footer-brand">CarRental</div>
            </div>
            <div className="footer-desc">
              CarRental là nền tảng thuê xe chuyên nghiệp, đa dạng dòng xe, thủ tục nhanh chóng, giá cả minh bạch. Chúng tôi cam kết mang đến trải nghiệm thuê xe an toàn, tiện lợi và chất lượng cho mọi khách hàng.
            </div>
          </Col>
          <Col md={6} className="footer-right">
            <div className="footer-contact-title">LIÊN HỆ</div>
            <div className="footer-contact-list">
              <div><b>Địa chỉ:</b> 123 Đường Lớn, Quận 1, TP. Hồ Chí Minh</div>
              <div><b>Điện thoại:</b> 0901 234 567</div>
              <div><b>Email:</b> support@carrental.vn</div>
              <div><b>Website:</b> https://carrental.vn</div>
            </div>
          </Col>
        </Row>
        <div className="footer-copyright mt-4 text-center">
          © {new Date().getFullYear()} CarRental – All rights reserved.
        </div>
      </Container>
    </footer>
  );
}