import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import axios from "axios";

export default function AddCarPage() {
  const [car, setCar] = useState({ name: "", type: "Automatic", seats: 4, fuel: "Petrol", pricePerDay: 0, image: "", description: "" });
  const [success, setSuccess] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const handleChange = e => setCar({ ...car, [e.target.name]: e.target.value });

  const handleImageChange = e => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
      setCar({ ...car, image: `/images/${file.name}` });
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    // Upload file vào public/images nếu có
    if (imageFile) {
      // Không thể upload file trực tiếp vào public/images từ frontend, cần upload qua backend hoặc hướng dẫn copy thủ công
      // Ở đây chỉ lưu đường dẫn, bạn cần copy file vào public/images thủ công
    }
    await axios.post("http://localhost:3001/cars", car);
    setSuccess(true);
    setCar({ ...car, name: "" });
    setImageFile(null);
    setImagePreview("");
  };

  return (
    <>
      <h2 className="mb-3">Thêm xe mới</h2>
      {success && <Alert variant="success">Đã thêm xe!</Alert>}
      <Form onSubmit={handleSubmit} className="border p-3 rounded">
        <Form.Group className="mb-2">
          <Form.Label>Tên xe</Form.Label>
          <Form.Control name="name" value={car.name} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Loại</Form.Label>
          <Form.Select name="type" value={car.type} onChange={handleChange}>
            <option>Automatic</option>
            <option>Manual</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Chỗ ngồi</Form.Label>
          <Form.Control type="number" name="seats" value={car.seats} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Nhiên liệu</Form.Label>
          <Form.Control name="fuel" value={car.fuel} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Giá / ngày</Form.Label>
          <Form.Control type="number" name="pricePerDay" value={car.pricePerDay} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Chọn ảnh xe (tải lên public/images)</Form.Label>
          <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
          {imagePreview && <img src={imagePreview} alt="preview" style={{ maxWidth: 180, marginTop: 10, borderRadius: 8 }} />}
          <Form.Text className="text-muted">Sau khi chọn ảnh, hãy copy file vào thư mục public/images nếu chưa tự động.</Form.Text>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Mô tả</Form.Label>
          <Form.Control as="textarea" name="description" rows={3} value={car.description} onChange={handleChange} />
        </Form.Group>
        <Button type="submit" variant="success">
          Thêm xe
        </Button>
      </Form>
    </>
  );
}