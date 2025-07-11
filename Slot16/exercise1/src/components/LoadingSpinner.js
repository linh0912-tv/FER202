import React from "react";
import { Container, Spinner } from "react-bootstrap";

const LoadingSpinner = ({ message = "Đang tải..." }) => {
  return (
    <Container className="mt-5 text-center">
      <Spinner animation="border" role="status" variant="primary">
        <span className="visually-hidden">{message}</span>
      </Spinner>
      <p className="mt-3">{message}</p>
    </Container>
  );
};

export default LoadingSpinner;
