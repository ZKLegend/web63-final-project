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
  const [queryParams, setQueryParams] = useState({});

  // Get Query Params from URL
  useEffect(() => {
    const resOption2 = searchParams.getAll("amenities");

    if (resOption2 !== undefined && resOption2.length > 0) {
      setQueryParams({
        ...Object.fromEntries([...searchParams]),
        amenities: resOption2,
      });
    } else {
      setQueryParams(Object.fromEntries([...searchParams]));
    }
  }, [searchParams]);

  // Call API Get Hotel Data in first render
  useEffect(() => {
    const getHotelData = () => {
      if (Object.keys(queryParams).length !== 0) {
        setIsLoading(true);
        axios({
          method: "get",
          url: `http://localhost:3001/api/stay/room`,
          params: queryParams,
        })
          .then((result) => {
            console.log(result);
            setHotelData([...result.data]);
          })
          .catch((err) => console.error(err));

        setIsLoading(false);
      }
    };
    getHotelData();
  }, [queryParams]);
  console.log("Hotel Data:", hotelData);
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
          <ResultFilter queryParams={queryParams} />
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
            queryParams={queryParams}
            hotelData={hotelData}
            isLoading={isLoading}
          />
        </Col>
      </Row>
    </div>
  );
};

export default HotelListing;
