import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#f5a623', padding: '1rem 0', textAlign: 'center', color: '#fff' }}>
      <Container>
        <p>&copy; 2023 Website. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;