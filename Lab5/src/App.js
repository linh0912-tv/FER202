import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import Home from './components/Home';
import News from './components/News';
import About from './components/About';
import Contact from './components/Contact';
import Quiz from './components/Quiz';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;
