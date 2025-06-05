import React from 'react';
import Header from './Bai5/Header';
import About from './Bai5/About';
import Footer from './Bai5/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;