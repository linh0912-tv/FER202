import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchCars } from "../redux/slices/carSlice";
import CarCard from "./CarCard";

const CARS_PER_PAGE = 8;

const CarGrid = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector(state => state.cars);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (status === "idle") dispatch(fetchCars());
  }, [status, dispatch]);

  if (status === "loading") return <Spinner animation="border" className="d-block mx-auto" />;

  // Pagination logic
  const totalPages = Math.ceil(items.length / CARS_PER_PAGE);
  const startIdx = (page - 1) * CARS_PER_PAGE;
  const carsToShow = items.slice(startIdx, startIdx + CARS_PER_PAGE);

  return (
    <Container className="mb-5">
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {carsToShow.map(car => (
          <Col key={car.id}>
            <CarCard car={car} />
          </Col>
        ))}
      </Row>
      {totalPages > 1 && (
        <div className="d-flex justify-content-center align-items-center mt-4 gap-3">
          <Button
            variant="outline-light"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            Previous
          </Button>
          <span style={{ color: '#f5f6fa', fontWeight: 500 }}>
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
    </Container>
  );
};
export default CarGrid;