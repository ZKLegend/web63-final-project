import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import React from "react";

import HotelSearch from "./pages/HotelSearch/HotelSearch";
import HotelListing from "./pages/HotelListing/HotelListing";
import HotelDetail from "./pages/HotelDetail/HotelDetail";
import BookingDetail from "./pages/BookingDetail/BookingDetail";
import BookingComplete from "./pages/BookingDetail/components/BookingComplete";
import Home from "./pages/Home/Home";
import FlightSearch from "./pages/FlightSearch/FlightSearch";
import FlightList from "./pages/FlightList/FlightList";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Account from "./pages/Account/Account";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ForgotPass from "./pages/ForgotPassword/ForgotPass";

const App = () => {
  const [params, setParams] = useState({
    category: "Hotels",
    pageIndex: 1,
    pageSize: 4,
    sortBy: "minPrice",
    minPriceFilter: 100,
    maxPriceFilter: 600,
  });
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
          <Route
            path="/hotel-search"
            element={<HotelSearch params={params} setParams={setParams} />}
          />
          <Route
            path="/hotel-listing"
            element={<HotelListing params={params} setParams={setParams} />}
          />

          <Route path="/hotel-detail/:hotelId" element={<HotelDetail />} />

          <Route path="/booking-detail/" element={<BookingDetail />} />
          <Route path="/booking-complete" element={<BookingComplete />} />
          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpass" element={<ForgotPass />} />
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
