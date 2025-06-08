import React from 'react';
import Navbar from './NavbarComponent';
import HeroSection from './HeroSection';
import MenuSection from './MenuSection';
import BookingForm from './BookingForm';
import './styles.css';

const App = () => {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <HeroSection />
      <MenuSection />
      <BookingForm />
    </div>
  );
};

export default App;