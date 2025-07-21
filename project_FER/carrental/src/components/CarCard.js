import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CarCard = ({ car }) => (
  <Card className="car-card-modern h-100">
    <div className="car-card-img-wrapper">
      <Card.Img variant="top" src={car.image} className="car-card-img" />
    </div>
    <Card.Body className="d-flex flex-column align-items-start justify-content-between p-4">
      <Card.Title className="car-card-title mb-2">{car.name}</Card.Title>
      <div className="car-card-info-row mb-1 w-100">
        <span>Loại: <b>{car.type}</b></span>
        <span className="car-card-dot">|</span>
        <span>Chỗ: <b>{car.seats}</b></span>
      </div>
      <div className="car-card-info mb-3 w-100">
        Xăng: <b>{car.fuel}</b>
      </div>
      <div className="car-card-price-below mb-3">{car.pricePerDay.toLocaleString("vi-VN")} <span>đ / ngày</span></div>
      <Button as={Link} to={`/cars/${car.id}`} variant="modern-primary" className="car-card-btn w-100 mt-auto">
        Xem chi tiết
      </Button>
    </Card.Body>
  </Card>
);

CarCard.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    seats: PropTypes.number.isRequired,
    fuel: PropTypes.string.isRequired,
    pricePerDay: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired
};
export default CarCard;