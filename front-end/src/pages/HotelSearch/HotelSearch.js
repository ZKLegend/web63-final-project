import { Row, Col, Typography } from "antd";
import React from "react";

import hotelSearchPoster from "../../assets/images/hotel-search-poster.png";

import SearchTab from "../../components/search-tab/SearchTab";
import RecentSearch from "./recent-search/RecentSearch";
import FallIntoTravel from "./fall-into-travel/FallIntoTravel";
import FlightIntoTravel from "./fall-into-travel/FlightIntoTravel";

import "./index.css";

const { Text } = Typography;

const HotelSearch = () => {
  return (
    <div>
      {/* Poster Section */}
      <div style={{ position: "relative" }}>
        <img alt="error" src={hotelSearchPoster} />
        <Row
          style={{
            position: "absolute",
            padding: "0 104px",
            top: "80px",
            flexDirection: "column",
            zIndex: "1",
          }}
        >
          <Col span={10}>
            <Text
              className="trade-gothic-lt-extended-bold-40px"
              style={{ color: "white" }}
            >
              Make your travel whishlist, we’ll do the rest
            </Text>
          </Col>
          <Col span={24}>
            <Text className="montserrat-medium-20px" style={{ color: "white" }}>
              Special offers to suit your plan
            </Text>
          </Col>
        </Row>
      </div>
      <div className="hotel-search" style={{ position: "relative" }}>
        {/* Content Section */}
        <div className="hotel-search-content">
          <SearchTab />
          <Row gutter={[0, 80]}>
            <Col span={24} style={{ width: "100%" }}>
              <RecentSearch />
            </Col>
            <Col span={24}>
              <FallIntoTravel />
            </Col>
            <Col span={24} style={{ width: "100%" }}>
              <FlightIntoTravel />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default HotelSearch;
