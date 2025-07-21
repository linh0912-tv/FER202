import React from "react";
import { useSelector } from "react-redux";
import { Container, Table, Badge } from "react-bootstrap";
import { format } from "date-fns";
import { FaCarSide, FaCalendarAlt, FaMoneyBillWave, FaCheckCircle, FaClock } from "react-icons/fa";

export default function CartPage() {
  const bookings = useSelector(state => state.bookings);
  const cars = useSelector(state => state.cars.items);

  const findCar = id => cars.find(c => c.id === id) || {};

  return (
    <div className="main-content">
      <Container className="mb-5">
        <section className="cart-section">
          <h1 className="cart-title">LỊCH SỬ ĐẶT XE</h1>
          <div className="cart-divider">
            <span className="line"></span>
            <span className="dot">•</span>
            <span className="line"></span>
          </div>
          <p className="cart-desc mb-4">Tổng hợp các chuyến xe bạn đã đặt và trạng thái thuê xe của bạn.</p>
        </section>
        <div className="cart-table-wrapper">
          <Table className="cart-table" responsive>
            <thead>
              <tr>
                <th><FaCarSide className="cart-th-icon" /> Xe</th>
                <th><FaCalendarAlt className="cart-th-icon" /> Ngày nhận</th>
                <th><FaCalendarAlt className="cart-th-icon" /> Ngày trả</th>
                <th><FaMoneyBillWave className="cart-th-icon" /> Chi phí</th>
                <th><FaCheckCircle className="cart-th-icon" /> Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map(b => {
                const car = findCar(b.carId);
                return (
                  <tr key={b.id} className="cart-row">
                    <td className="cart-car"><FaCarSide className="cart-td-icon" /> {car.name}</td>
                    <td className="cart-date"><FaCalendarAlt className="cart-td-icon" /> {format(new Date(b.pickDate), "dd/MM/yyyy")}</td>
                    <td className="cart-date"><FaCalendarAlt className="cart-td-icon" /> {format(new Date(b.returnDate), "dd/MM/yyyy")}</td>
                    <td className="cart-cost"><FaMoneyBillWave className="cart-td-icon" /> {b.cost?.toLocaleString("vi-VN")} đ</td>
                    <td className="cart-status">
                      <Badge className={b.status === "renting" ? "cart-badge-warning" : "cart-badge-success"}>
                        {b.status === "renting" ? <FaClock className="cart-status-icon" /> : <FaCheckCircle className="cart-status-icon" />} {b.status === "renting" ? "Đang thuê" : "Đã thuê"}
                      </Badge>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
}