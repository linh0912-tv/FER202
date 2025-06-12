import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import EX1 from './components/EX1';
import EX2 from './components/EX2';
import EX3 from './components/EX3';
import EX4 from './components/EX4';
import EX5 from './components/EX5';
import EX6 from './components/EX6';
import EX7 from './components/EX7';

function App() {
  return (
    <Container className="my-4">
      <EX1 />
      <EX2 />
      <EX3 />
      <EX4 />
      <EX5 />
      <EX6 />
      <EX7 />
    </Container>
  );
}

export default App;
