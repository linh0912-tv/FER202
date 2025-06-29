import React from 'react';
import { Carousel, Image, Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <Carousel id="carouselExampleCaptions" className="mt-1" variant="light" interval={2000}>
        <Carousel.Item>
          <Image src="/images/slide1.jpg" className="d-block w-100" alt="First slide" />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src="/images/slide2.jpg" className="d-block w-100" alt="Second slide" />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src="/images/slide3.jpg" className="d-block w-100" alt="Third slide" />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container className='mt-3'>
        <Row>
          <Col>
            <Image src="/images/menu-01.jpg" roundedCircle />
          </Col>
          <Col>
            <Image src="/images/menu-02.jpg" roundedCircle />
          </Col>
          <Col>
            <Image src="/images/menu-03.jpg" roundedCircle />
          </Col>
          <Col>
            <Image src="/images/menu-04.jpg" roundedCircle />
          </Col>
          <Col>
            <Image src="/images/menu-05.jpg" roundedCircle />
          </Col>
          <Col>
            <Image src="/images/menu-06.jpg" roundedCircle />
          </Col>
        </Row>
        <h2 className='text-danger mt-3'>This is home page</h2>
      </Container>
    </div>
  );
}

export default Home;
