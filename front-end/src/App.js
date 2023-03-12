import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import React from "react";

import HotelSearch from "./pages/HotelSearch/HotelSearch";
import HotelListing from "./pages/HotelListing/HotelListing";
import HotelDetail from "./pages/HotelDetail/HotelDetail";
import BookingDetail from "./pages/BookingDetail/BookingDetail";
import BookingComplete from "./pages/BookingDetail/components/BookingComplete";
import Home from "./pages/Home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

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
