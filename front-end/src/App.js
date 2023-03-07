import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import React from "react";

import HotelSearch from "./pages/HotelSearch/HotelSearch";
import HotelListing from "./pages/HotelListing/HotelListing";
import HotelDetail from "./pages/HotelDetail/HotelDetail";
import BookingDetail from "./pages/BookingDetail/BookingDetail";
import BookingComplete from "./pages/BookingDetail/components/BookingComplete";

const App = () => {
  const [params, setParams] = useState({
    category: "Hotels",
    pageIndex: 1,
    pageSize: 4,
    sortBy: "minPrice",
    priceFilter: [100, 600],
  });
  return (
    <div className="app">
      {/* Header Section */}
      <div className="header" style={{ height: "87px" }}>
        Header
        <Link to="/hotel-listing">Hotel Listing</Link>
        {/* <Link to="/hotel-detail/">Hotel Detail</Link> */}
        <Link to="/booking-detail">Booking Detail</Link>
      </div>

      {/* Content Section */}

      <div className="content">
        <Routes>
          <Route
            path="/"
            element={<HotelSearch params={params} setParams={setParams} />}
          />
          <Route
            path="/hotel-listing"
            element={<HotelListing params={params} setParams={setParams} />}
          />

          <Route path="/hotel-detail/:hotelId" element={<HotelDetail />} />
          {/* <Route path="/hotel-detail" element={<HotelDetail />} /> */}
          <Route path="/booking-detail/" element={<BookingDetail />} />
          <Route path="/booking-complete" element={<BookingComplete />} />
        </Routes>
      </div>

      {/* Footer Section */}
      <div className="footer" style={{ height: "573px" }}>
        Footer
      </div>
    </div>
  );
};

export default App;
