import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import Title from './Title';
import Description from './Description';
import Image from './Image';

function SimpleCard({ item }) {
  return (
    <Card style={{ border: '2px solid #ffffff', backgroundColor: '#2f2f2f', marginTop: '1rem' }} className="p-3">
      <Row className="g-0">
        <Col xs={7}>
          <Image url={item.imageUrl} />
        </Col>
        <Col xs={5} className="ps-3">
          <Title text={item.title} />
          <Description text={item.description} />
        </Col>
      </Row>
    </Card>
  );
}

export default SimpleCard;