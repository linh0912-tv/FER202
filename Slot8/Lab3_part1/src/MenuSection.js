import React from 'react';
import { Card, Badge, Button, Container, Row, Col } from 'react-bootstrap';

const MenuCard = ({ title, price, originalPrice, image, badge }) => {
  return (
    <Card className="card">
      {badge && (
        <Badge className={`custom-badge override-badge ${badge === 'SALE' ? 'badge-sale' : 'badge-new'}`}>
          {badge}
        </Badge>
      )}
      <Card.Img variant="top" src={`/${image}`} alt={title} className="card-img-top" />
      <Card.Body>
        <Card.Title className="card-title">{title}</Card.Title>
        <Card.Text>
          {originalPrice && <span className="original-price">{originalPrice}</span>}
          {price}
        </Card.Text>
        <Button variant="dark" className="w-100">Buy</Button>
      </Card.Body>
    </Card>
  );
};

const MenuSection = () => {
  const menuItems = [
    { title: 'Margherita Pizza', price: '$40.00', originalPrice: '$60.00', image: 'menu1.jpg', badge: 'SALE' },
    { title: 'Mushroom Pizza', price: '$25.00', image: 'menu2.jpg', badge: 'NEW' },
    { title: 'Hawaiian Pizza', price: '$30.00', image: 'menu3.jpg', badge: null },
    { title: 'Pesto Pizza', price: '$40.00', originalPrice: '$60.00', image: 'menu4.jpg', badge: 'SALE' },
  ];

  return (
    <Container className="menu-section">
      <h2>OUR MENU</h2> 
      <Row xs={1} md={4} className="g-4">
        {menuItems.map((item, index) => (
          <Col key={index}>
            <MenuCard
              title={item.title}
              price={item.price}
              originalPrice={item.originalPrice}
              image={item.image}
              badge={item.badge}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MenuSection;