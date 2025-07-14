import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/Login';
import LaptopList from './components/LaptopList';
import LaptopDetail from './components/LaptopDetail';
import NotFound from './components/NotFound';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [user, setUser] = useState(() => {
    // Khôi phục user từ localStorage khi app khởi động
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Lưu user vào localStorage mỗi khi state thay đổi
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route 
            path="/laptops" 
            element={
              <ProtectedRoute user={user}>
                <LaptopList />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/laptops/:id" 
            element={<LaptopDetail user={user} />} 
          />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
