import { Routes, Route, Link } from "react-router-dom";

import React from "react";

import HotelSearch from "./pages/HotelSearch/HotelSearch";
import HotelListing from "./pages/HotelListing/HotelListing";

const App = () => {
  return (
    <div className="app">
      <div className="header" style={{ height: "87px" }}>
        Header
        <Link to="/hotel-listing">Hotel Listing</Link>
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<HotelSearch />} />
          <Route path="/hotel-listing" element={<HotelListing />} />
        </Routes>
      </div>
      <div className="footer" style={{ height: "573px" }}>
        Footer
      </div>
    </div>
  );
};

export default App;
