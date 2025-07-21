import React from "react";
import { format } from "date-fns";
import { Table, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { FaUser, FaCarSide, FaCalendarAlt, FaMoneyBillWave, FaCheckCircle, FaClock } from "react-icons/fa";

export default function BookingListAdmin() {
  const bookings = useSelector(state => state.bookings);
  const cars = useSelector(state => state.cars.items);
  // Lấy users từ store nếu có, nếu không thì hardcode như cũ
  const users = useSelector(state => state.users?.items) || [
    { id: "1", email: "admin@carrental.com" },
    { id: "2", email: "user@carrental.com" }
  ];

  const findCar = id => cars.find(c => c.id === id) || {};
  const findUser = id => users.find(u => u.id === String(id)) || {};

  return (
    <div className="admin-bookinglist">
      <h2 className="admin-title mb-4">Đơn đã thuê</h2>
      <div className="admin-table-wrapper">
        <Table className="admin-table" responsive>
          <thead>
            <tr>
              <th><FaUser className="admin-th-icon" /> Tên</th>
              <th><FaCarSide className="admin-th-icon" /> Xe</th>
              <th><FaCalendarAlt className="admin-th-icon" /> Thời gian</th>
              <th><FaMoneyBillWave className="admin-th-icon" /> Tiền</th>
              <th><FaCheckCircle className="admin-th-icon" /> Tình trạng</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(b => (
              <tr key={b.id} className="admin-row">
                {/* Bỏ cột người thuê, chỉ giữ tên */}
                <td>{findUser(b.userId)?.name || ""}</td>
                <td>{findCar(b.carId).name}</td>
                <td>
                  <FaCalendarAlt className="admin-td-icon" />
                  {format(new Date(b.pickDate), "dd/MM")} - {format(new Date(b.returnDate), "dd/MM/yyyy")}
                </td>
                <td className="admin-carlist-cost">
                  <FaMoneyBillWave className="admin-td-icon" />
                  {b.cost?.toLocaleString("vi-VN")} đ
                </td>
                <td>
                  <Badge className={b.status === "renting" ? "cart-badge-warning" : "cart-badge-success"}>
                    {b.status === "renting" ? <FaClock className="cart-status-icon" /> : <FaCheckCircle className="cart-status-icon" />} {b.status === "renting" ? "Đang thuê" : "Đã thuê"}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
