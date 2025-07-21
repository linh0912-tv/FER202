import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Container, Row, Col, Image, Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addBooking } from "../redux/slices/bookingSlice";
import { FaCogs, FaUserFriends, FaGasPump, FaTachometerAlt, FaShieldAlt, FaInfoCircle } from "react-icons/fa";

export default function DetailPage() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [pickDate, setPickDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [delivery, setDelivery] = useState("pickup");
  const [extraInsurance, setExtraInsurance] = useState(false);
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`http://localhost:3001/cars/${id}`).then(res => setCar(res.data));
  }, [id]);

  if (!car) return null;
  if (!user) return <Navigate to="/login" replace />;

  const days = pickDate && returnDate ? (new Date(returnDate) - new Date(pickDate)) / 86400000 : 0;
  const cost = days * car.pricePerDay + (extraInsurance ? 40000 * days : 0);

  return (
    <div className="main-content">
      <Container className="mb-5">
        <Row className="justify-content-center align-items-stretch g-4">
          <Col md={7} className="d-flex flex-column align-items-start">
            <div className="detail-img-wrap mb-4 detail-img-large">
              <Image src={car.image} alt={car.name} fluid className="detail-car-img" />
            </div>
            <h2 className="detail-car-title mb-3">{car.name}</h2>
            <div className="detail-attributes mb-3">
              <div className="detail-attr-item">
                <FaCogs className="detail-attr-icon" />
                <span>Loại: <b>{car.type}</b></span>
              </div>
              <div className="detail-attr-item">
                <FaUserFriends className="detail-attr-icon" />
                <span>Số ghế: <b>{car.seats}</b></span>
              </div>
              <div className="detail-attr-item">
                <FaGasPump className="detail-attr-icon" />
                <span>Nhiên liệu: <b>{car.fuel}</b></span>
              </div>
              <div className="detail-attr-item">
                <FaTachometerAlt className="detail-attr-icon" />
                <span>Tiêu hao: <b>6L/100km</b></span>
              </div>
            </div>
            <div className="detail-car-price-standalone mb-3">{car.pricePerDay.toLocaleString("vi-VN")} <span>đ / ngày</span></div>
            <div className="detail-car-desc-list mb-3">
              <div className="detail-desc-title">Mô tả</div>
              <ul className="detail-desc-list">
                {car.description.split('\n').map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>
            </div>
          </Col>
          <Col md={5} className="gap-4">
            <Card className="detail-booking-card p-4 detail-booking-dark">
              {/* Bảo hiểm thuê xe */}
              <div className="insurance-box mb-3">
                <div className="d-flex align-items-center mb-2">
                  <FaShieldAlt className="insurance-icon" />
                  <span className="insurance-title">Bảo hiểm thuê xe</span>
                </div>
                <div className="insurance-desc mb-1">
                  Chuyến đi có mua bảo hiểm. Khách thuê bồi thường tối đa 2.000.000 VNĐ trong trường hợp có sự cố ngoài ý muốn.
                </div>
                <a href="#" className="insurance-link">Xem thêm &gt;</a>
              </div>
              {/* Bảo hiểm bổ sung */}
              <div className="insurance-box mb-4">
                <div className="d-flex align-items-center mb-2">
                  <Form.Check
                    type="checkbox"
                    id="extraInsurance"
                    checked={extraInsurance}
                    onChange={e => setExtraInsurance(e.target.checked)}
                    className="me-2"
                  />
                  <span className="insurance-title">Bảo hiểm bổ sung</span>
                  <span className="insurance-badge ms-2">Mới</span>
                  <span className="insurance-extra-price ms-auto">40.000đ /ngày</span>
                </div>
                <div className="insurance-desc mb-1">
                  Trường hợp xảy ra sự cố ngoài ý muốn, tài xế & người ngồi trên xe được bảo hiểm với giá trị tối đa 300.000.000 VNĐ/người.
                </div>
                <a href="#" className="insurance-link">Xem thêm &gt;</a>
              </div>
              {/* Form đặt xe */}
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Ngày nhận xe</Form.Label>
                  <Form.Control type="date" value={pickDate} onChange={e => setPickDate(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Ngày trả xe</Form.Label>
                  <Form.Control type="date" value={returnDate} onChange={e => setReturnDate(e.target.value)} />
                </Form.Group>
                <Form.Label>Địa điểm giao xe</Form.Label>
                <div className="d-flex gap-3 mb-3">
                  <Form.Check
                    type="radio"
                    id="pickup"
                    label="Tôi tự đến lấy xe"
                    name="delivery"
                    checked={delivery === "pickup"}
                    onChange={() => setDelivery("pickup")}
                  />
                  <Form.Check
                    type="radio"
                    id="delivery"
                    label="Giao xe tận nơi"
                    name="delivery"
                    checked={delivery === "delivery"}
                    onChange={() => setDelivery("delivery")}
                  />
                </div>
                <div className="detail-quote-box mb-3">
                  <span>Báo giá:</span>
                  <span className="detail-quote-price">{days > 0 ? `${cost.toLocaleString("vi-VN")} đ` : "—"}</span>
                </div>
                <Button variant="success" disabled={days <= 0} onClick={() => {
                  dispatch(
                    addBooking({
                      carId: car.id,
                      userId: user.id,
                      pickDate,
                      returnDate,
                      delivery,
                      cost,
                      createdAt: new Date().toISOString()
                    })
                  );
                  alert("Đặt xe thành công!");
                }} className="w-100 detail-book-btn">
                  Thuê xe
                </Button>
              </Form>
            </Card>
            {/* Phụ phí có thể phát sinh */}
            <div className="extra-fee-box p-4 mt-2">
              <div className="extra-fee-title mb-3"><FaInfoCircle className="me-2" />Phụ phí có thể phát sinh</div>
              <div className="extra-fee-item mb-2">
                <FaInfoCircle className="extra-fee-icon" />
                <span className="extra-fee-name">Phí vượt giới hạn</span>
                <span className="extra-fee-value ms-auto">3.000đ /km</span>
                <div className="extra-fee-desc">Phụ phí phát sinh nếu lộ trình di chuyển vượt quá <b>400km</b> khi thuê xe 1 ngày</div>
              </div>
              <div className="extra-fee-item mb-2">
                <FaInfoCircle className="extra-fee-icon" />
                <span className="extra-fee-name">Phí quá giờ</span>
                <span className="extra-fee-value ms-auto">50.000đ /giờ</span>
                <div className="extra-fee-desc">Phụ phí phát sinh nếu hoàn trả xe trễ giờ. Trường hợp trễ quá <b>5 giờ</b>, phụ phí thêm <b>1 ngày thuê</b></div>
              </div>
              <div className="extra-fee-item mb-2">
                <FaInfoCircle className="extra-fee-icon" />
                <span className="extra-fee-name">Phí vệ sinh</span>
                <span className="extra-fee-value ms-auto">90.000đ</span>
                <div className="extra-fee-desc">Phụ phí phát sinh khi xe hoàn trả không đảm bảo vệ sinh (nhiều vết bẩn, bùn cát, sinh lầy...)</div>
              </div>
              <div className="extra-fee-item">
                <FaInfoCircle className="extra-fee-icon" />
                <span className="extra-fee-name">Phí khử mùi</span>
                <span className="extra-fee-value ms-auto">350.000đ</span>
                <div className="extra-fee-desc">Phụ phí phát sinh khi xe hoàn trả bị ám mùi khó chịu (mùi thuốc lá, thực phẩm nặng mùi...)</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}