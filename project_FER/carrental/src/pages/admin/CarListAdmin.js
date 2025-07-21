import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Button, Modal, Form } from "react-bootstrap";
import { FaCarSide, FaTag, FaCogs, FaUserFriends, FaMoneyBillWave, FaEdit, FaTrash } from "react-icons/fa";
import { removeCar, updateCar } from "../../redux/slices/carSlice";

const CARS_PER_PAGE = 8;

export default function CarListAdmin() {
  const cars = useSelector(state => state.cars.items);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(cars.length / CARS_PER_PAGE);
  const startIdx = (page - 1) * CARS_PER_PAGE;
  const carsToShow = cars.slice(startIdx, startIdx + CARS_PER_PAGE);

  // Modal state for edit
  const [showEdit, setShowEdit] = useState(false);
  const [editCar, setEditCar] = useState(null);

  // Modal state for delete
  const [showDelete, setShowDelete] = useState(false);
  const [deleteCarId, setDeleteCarId] = useState(null);

  const handleDelete = id => {
    setDeleteCarId(id);
    setShowDelete(true);
  };
  const confirmDelete = () => {
    dispatch(removeCar(deleteCarId));
    setShowDelete(false);
  };

  const handleEdit = car => {
    setEditCar(car);
    setShowEdit(true);
  };
  const handleEditChange = e => {
    setEditCar({ ...editCar, [e.target.name]: e.target.value });
  };
  const saveEdit = () => {
    dispatch(updateCar(editCar));
    setShowEdit(false);
  };

  return (
    <div className="admin-carlist">
      <h2 className="admin-title mb-4">Danh sách xe</h2>
      <div className="admin-table-wrapper">
        <Table className="admin-table" responsive>
          <thead>
            <tr>
              <th><FaTag className="admin-th-icon" /> ID</th>
              <th><FaCarSide className="admin-th-icon" /> Tên xe</th>
              <th><FaCogs className="admin-th-icon" /> Loại</th>
              <th><FaUserFriends className="admin-th-icon" /> Chỗ</th>
              <th><FaMoneyBillWave className="admin-th-icon" /> Giá / ngày</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {carsToShow.map(c => (
              <tr key={c.id} className="admin-row">
                <td>{c.id}</td>
                <td>{c.name}</td>
                <td>{c.type}</td>
                <td>{c.seats}</td>
                <td className="admin-carlist-cost">{c.pricePerDay?.toLocaleString("vi-VN")} đ</td>
                <td>
                  <Button variant="outline-info" size="sm" className="me-2" onClick={() => handleEdit(c)}>
                    <FaEdit />
                  </Button>
                  <Button variant="outline-danger" size="sm" onClick={() => handleDelete(c.id)}>
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      {totalPages > 1 && (
        <div className="d-flex justify-content-center align-items-center mt-4 gap-3">
          <Button
            variant="outline-light"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            Previous
          </Button>
          <span style={{ color: '#fff', fontWeight: 500 }}>
            Page {page} / {totalPages}
          </span>
          <Button
            variant="outline-light"
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
          >
            Next
          </Button>
        </div>
      )}
      {/* Modal xác nhận xóa */}
      <Modal show={showDelete} onHide={() => setShowDelete(false)} centered>
        <Modal.Header closeButton><Modal.Title>Xác nhận xóa xe</Modal.Title></Modal.Header>
        <Modal.Body>Bạn có chắc chắn muốn xóa xe này không?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDelete(false)}>Hủy</Button>
          <Button variant="danger" onClick={confirmDelete}>Xóa</Button>
        </Modal.Footer>
      </Modal>
      {/* Modal chỉnh sửa xe */}
      <Modal show={showEdit} onHide={() => setShowEdit(false)} centered>
        <Modal.Header closeButton><Modal.Title>Chỉnh sửa xe</Modal.Title></Modal.Header>
        <Modal.Body>
          {editCar && (
            <Form>
              <Form.Group className="mb-2">
                <Form.Label>Tên xe</Form.Label>
                <Form.Control name="name" value={editCar.name} onChange={handleEditChange} />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Loại</Form.Label>
                <Form.Select name="type" value={editCar.type} onChange={handleEditChange}>
                  <option>Automatic</option>
                  <option>Manual</option>
                  <option>EV</option>
                  <option>Diesel</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Chỗ ngồi</Form.Label>
                <Form.Control type="number" name="seats" value={editCar.seats} onChange={handleEditChange} />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Giá / ngày</Form.Label>
                <Form.Control type="number" name="pricePerDay" value={editCar.pricePerDay} onChange={handleEditChange} />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEdit(false)}>Hủy</Button>
          <Button variant="primary" onClick={saveEdit}>Lưu</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
