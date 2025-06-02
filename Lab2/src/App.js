import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import MenuSection from './MenuSection';
import BookingForm from './BookingForm';
import './styles.css';

const App = () => {
  return (
    <div className="bg-dark">
      <Navbar />
      <HeroSection />
      <MenuSection />
      <BookingForm />
    </div>
  );
};

export default App;
