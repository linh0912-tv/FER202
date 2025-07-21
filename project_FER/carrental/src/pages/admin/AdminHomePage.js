import React from "react";
import { FaCarSide, FaClipboardList, FaUsers } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function AdminHomePage() {
  const cars = useSelector(state => state.cars.items);
  const bookings = useSelector(state => state.bookings);
  // Giả lập số user (có thể lấy từ redux nếu có)
  const users = 2;

  return (
    <div className="admin-home">
      <h1 className="admin-home-title mb-4">Chào mừng bạn đến trang quản trị CarRental!</h1>
      <div className="admin-home-desc mb-5">
        Quản lý xe, đơn thuê và người dùng một cách dễ dàng, nhanh chóng và chuyên nghiệp.
      </div>
      <div className="admin-home-stats">
        <div className="admin-home-card">
          <FaCarSide className="admin-home-icon car" />
          <div className="admin-home-card-title">Tổng số xe</div>
          <div className="admin-home-card-value">{cars.length}</div>
        </div>
        <div className="admin-home-card">
          <FaClipboardList className="admin-home-icon booking" />
          <div className="admin-home-card-title">Tổng đơn thuê</div>
          <div className="admin-home-card-value">{bookings.length}</div>
        </div>
        <div className="admin-home-card">
          <FaUsers className="admin-home-icon user" />
          <div className="admin-home-card-title">Tài khoản</div>
          <div className="admin-home-card-value">{users}</div>
        </div>
      </div>
    </div>
  );
} 