import { Row, Col, Divider } from "antd";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";

import StaySearch from "../../components/search-tab/StaySearch";
import ResultFilter from "./components/ResultFilter";
import SearchResult from "./components/SearchResult";

import "./index.css";

const HotelListing = ({ params, setParams }) => {
  const [hotelData, setHotelData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const getHotelData = () => {
      setIsLoading(true);
      axios({
        method: "get",
        url: `http://localhost:3001/api/stay/hotel`,
        params: params,
      })
        .then((result) => {
          setHotelData([...result.data]);
        })
        .catch((err) => console.error(err));

      setIsLoading(false);
    };
    getHotelData();
  }, []);

  console.log("Params in Listing Page: ", params);
  return (
    <div className="hotel-listing">
      {/* Search Bar Section */}
      <div className="search-box-container">
        <StaySearch params={params} setParams={setParams} />
      </div>

      {/* End Search Bar */}

      <Row style={{ marginTop: "32px" }}>
        {/* Filter Component */}
        <Col style={{ width: "343px" }}>
          <ResultFilter
            params={params}
            setParams={setParams}
            setHotelData={setHotelData}
            setIsLoading={setIsLoading}
          />
        </Col>
        <Col
          style={{ display: "flex", justifyContent: "center", width: "48px" }}
        >
          {" "}
          <Divider style={{ height: "100%", margin: "0" }} type="vertical" />
        </Col>

        {/* Search Result Component */}
        <Col style={{ width: "840px" }}>
          <SearchResult
            hotelData={hotelData}
            setHotelData={setHotelData}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            params={params}
            setParams={setParams}
          />
        </Col>
      </Row>
    </div>
  );
};

export default HotelListing;
