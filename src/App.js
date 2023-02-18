import { Routes, Route, Link } from "react-router-dom";

import React from "react";

import HotelSearch from "./pages/HotelSearch/HotelSearch";
import HotelListing from "./pages/HotelListing/HotelListing";

const App = () => {
  return (
    <div className="app">
      {/* Header Section */}
      <div className="header" style={{ height: "87px" }}>
        Header
        <Link to="/hotel-listing">Hotel Listing</Link>
      </div>

      {/* Content Section */}

      <div className="content">
        <Routes>
          <Route path="/" element={<HotelSearch />} />
          <Route path="/hotel-listing" element={<HotelListing />} />
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
