import React from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Quiz from './components/Quiz';

const App = () => {
  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">React Quiz App</h1>
      <Quiz />
    </Container>
  );
};

export default App;