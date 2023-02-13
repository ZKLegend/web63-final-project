import { Row, Col, Typography } from "antd";
import React from "react";

import hotelSearchPoster from "../../assets/images/hotel-search-poster.png";

import SearchTab from "../../components/search-tab/SearchTab";
import RecentSearch from "./recent-search/RecentSearch";
import FallIntoTravel from "./fall-into-travel/FallIntoTravel";
import FlightIntoTravel from "./fall-into-travel/FlightIntoTravel";

const { Title } = Typography;

const HotelSearch = () => {
  return (
    <div className="hotel-search">
      {/* Poster Section */}
      <Row
        style={{
          position: "absolute",
          width: "100%",
          padding: "0 24px",
          top: "80px",
        }}
      >
        <Col offset={2} span={6}>
          <Title style={{ color: "white", margin: "0", fontSize: "45px" }}>
            Make your travel whishlist, we’ll do the rest
          </Title>
        </Col>
        <Col offset={2} span={20}>
          <Title level={4} style={{ color: "white" }}>
            Special offers to suit your plan
          </Title>
        </Col>
      </Row>
      <img style={{ width: "100%" }} alt="error" src={hotelSearchPoster} />

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
  );
};

export default HotelSearch;
