import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselSection = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel className="mb-4">
        {[1, 2, 3].map(n => (
          <Carousel.Item key={n}>
            <img className="d-block w-100" src={`/images/carousel${n}.jpg`} alt={`slide ${n}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
export default CarouselSection;