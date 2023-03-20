import { Routes, Route, Link } from "react-router-dom";
import React from "react";

import HotelSearch from "./pages/HotelSearch/HotelSearch";
import HotelListing from "./pages/HotelListing/HotelListing";
import HotelDetail from "./pages/HotelDetail/HotelDetail";
import BookingDetail from "./pages/BookingDetail/BookingDetail";
import BookingComplete from "./pages/BookingDetail/components/BookingComplete";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="app">
      {/* Header Section */}
      <div className="header">
        <Header />
      </div>

      {/* Content Section */}

      <div className="content">
        <Routes>
          <Route path="/" element={<HotelSearch />} />
          <Route path="/hotel-listing" element={<HotelListing />} />

          <Route path="/hotel-detail/:hotelId" element={<HotelDetail />} />
          {/* <Route path="/hotel-detail" element={<HotelDetail />} /> */}
          <Route path="/booking-detail/" element={<BookingDetail />} />
          <Route path="/booking-complete" element={<BookingComplete />} />
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
