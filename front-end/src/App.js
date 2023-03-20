import { Routes, Route, Link } from "react-router-dom";
import React, { useEffect } from "react";
import { setIsLogin } from "./redux/loginSlice";
import { useDispatch } from "react-redux";

import HotelSearch from "./pages/HotelSearch/HotelSearch";
import HotelListing from "./pages/HotelListing/HotelListing";
import HotelDetail from "./pages/HotelDetail/HotelDetail";
import BookingDetail from "./pages/BookingDetail/BookingDetail";
import BookingComplete from "./pages/BookingDetail/components/BookingComplete";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Account from "./pages/Account/Account";
import Home from "./pages/Home/Home";
import FlightSearch from "./pages/FlightSearch/FlightSearch";
import FlightList from "./pages/FlightList/FlightList";

const App = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  if (token) {
    dispatch(setIsLogin(true));
  }

  return (
    <div className="app">
      {/* Header Section */}
      <div className="header">
        <Header />
      </div>

      {/* Content Section */}

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flight/search" element={<FlightSearch />} />
          <Route path="/flight/list" element={<FlightList />} />
          <Route path="/hotel-search" element={<HotelSearch />} />
          <Route path="/hotel-listing" element={<HotelListing />} />

          <Route path="/hotel-detail/:hotelId" element={<HotelDetail />} />

          <Route path="/booking-detail/" element={<BookingDetail />} />
          <Route path="/booking-complete" element={<BookingComplete />} />

          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>

      {/* Footer Section */}
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
