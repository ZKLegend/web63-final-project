import { Row, Col, Divider } from "antd";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import { setIsLoading } from "../../redux/isLoadingSlice";
import { setHotelData } from "../../redux/hotelDataSlice";
import { useDispatch, useSelector } from "react-redux";

import StaySearch from "../../components/search-tab/StaySearch";
import ResultFilter from "./components/ResultFilter";
import SearchResult from "./components/SearchResult";

import "./index.css";

const HotelListing = () => {
  const dispatch = useDispatch();
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

  // Call API Get Hotel Data
  useEffect(() => {
    const getHotelData = () => {
      if (Object.keys(queryParams).length !== 0) {
        dispatch(setIsLoading());
        axios({
          method: "get",
          url: `http://localhost:3001/api/stay/room`,
          params: queryParams,
        })
          .then((result) => {
            dispatch(setHotelData(result.data));
          })
          .catch((err) => console.error(err));
        dispatch(setIsLoading());
      }
    };
    getHotelData();
  }, [queryParams]);

  return (
    <div className="hotel-listing">
      {/* Search Bar Section */}
      <div className="search-box-container">
        <StaySearch />
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
          <SearchResult queryParams={queryParams} />
        </Col>
      </Row>
    </div>
  );
};

export default HotelListing;
