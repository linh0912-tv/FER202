import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import DetailPage from "./pages/DetailPage";
import CartPage from "./pages/CartPage";
import {
  AdminLayout,
  AdminHomePage, // thêm dòng này
  CarListAdmin,
  AddCarPage,
  BookingListAdmin
} from "./pages/admin";
import { useDispatch } from "react-redux";
import { bootstrap } from "./redux/slices/authSlice";
import './App.css';

export default function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(bootstrap());
  }, [dispatch]);

  // Nếu là trang /login thì chỉ render LoginPage
  if (location.pathname === "/login") {
    return <LoginPage />;
  }

  // Nếu là trang admin thì không render NavigationBar và Footer
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="d-flex flex-column min-vh-100">
      {!isAdminRoute && <NavigationBar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars/:id" element={<DetailPage />} />
        <Route path="/my-trips" element={<CartPage />} />
        <Route path="/admin/*" element={<AdminLayout />}>
          <Route index element={<AdminHomePage />} />
          <Route path="cars" element={<CarListAdmin />} />
          <Route path="add-car" element={<AddCarPage />} />
          <Route path="bookings" element={<BookingListAdmin />} />
        </Route>
      </Routes>
      {!isAdminRoute && <Footer />}
    </div>
  );
}