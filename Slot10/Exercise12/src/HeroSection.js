import React from 'react';
import { Carousel } from 'react-bootstrap';

const HeroSection = () => {
  const slides = [
    { image: '/pizza1.jpg', alt: 'Neapolitan Pizza 1', title: 'Neapolitan Pizza', text: 'If you are looking for a traditional Italian pizza, the Neapolitan is the best option!' },
    { image: '/pizza2.jpg', alt: 'Neapolitan Pizza 2', title: 'Neapolitan Pizza', text: 'Authentic Italian flavors in every bite!' },
    { image: '/pizza3.jpg', alt: 'Neapolitan Pizza 3', title: 'Neapolitan Pizza', text: 'Fresh ingredients, handmade with love!' },
    { image: '/pizza4.jpg', alt: 'Neapolitan Pizza 4', title: 'Neapolitan Pizza', text: 'Perfect crust, perfect taste!' },
    { image: '/pizza5.jpg', alt: 'Neapolitan Pizza 5', title: 'Neapolitan Pizza', text: 'A slice of Italy in every bite!' },
  ];

  return (
    <Carousel className="carousel">
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={slide.image}
            alt={slide.alt}
          />
          <Carousel.Caption className="carousel-caption">
            <h1>{slide.title}</h1>
            <p>{slide.text}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HeroSection;