import React from 'react';
import { Container } from 'react-bootstrap';

function About() {
  return (
    <Container className="my-5 text-center" style={{ minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h2 style={{ fontWeight: 'bold' }}>About</h2>
      <p>This is the about section of the website.</p>
      <h2 style={{ fontWeight: 'bold' }}>Contact</h2>
      <p>For any inquiries, please contact us at example@example.com.</p>
    </Container>
  );
}

export default About;