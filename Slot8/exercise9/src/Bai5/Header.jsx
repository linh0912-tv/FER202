import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
  return (
    <Navbar style={{ backgroundColor: '#f5a623' }} expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <div style={{ display: 'inline-block', backgroundColor: '#fff', padding: '0.5rem 1rem' }}>
            <img
              src="/img/Logo_Trường_Đại_học_FPT.svg"
              alt="FPT Education Logo"
              style={{ maxHeight: '50px', verticalAlign: 'middle' }}
            />
            <span style={{ fontSize: '2rem', color: '#f5a623', marginLeft: '1rem', fontWeight: 'bold', verticalAlign: 'middle' }}>
              FPT UNIVERSITY
            </span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" style={{ color: '#fff', margin: '0 0.5rem' }}>Home</Nav.Link>
            <Nav.Link href="#about" style={{ color: '#fff', margin: '0 0.5rem' }}>About</Nav.Link>
            <Nav.Link href="#contact" style={{ color: '#fff', margin: '0 0.5rem' }}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;