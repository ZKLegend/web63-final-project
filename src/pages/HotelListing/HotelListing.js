import { Row, Col, Divider, Button } from "antd";
import React from "react";

import "../../app.css";

import { SearchOutlined } from "@ant-design/icons";
import { StaySearchBar } from "../../components/search-tab/StaySearch";
import ResultFilter from "./components/ResultFilter";
import SearchResult from "./components/SearchResult";

const HotelListing = () => {
  return (
    <div className="hotel-listing">
      {/* Search Bar Section */}
      <Row justify="center">
        <Col
          span={24}
          style={{
            display: "flex",
            background: "#FFFFFF",
            boxShadow: "0px 4px 16px rgba(17, 34, 17, 0.05)",
            borderRadius: "16px",
            padding: "32px 24px",
          }}
        >
          <Row gutter={16} style={{ width: "100%" }}>
            <StaySearchBar />
          </Row>
          <Button
            style={{
              marginLeft: "16px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "40px",
              backgroundColor: "#8DD3BB",
            }}
          >
            <SearchOutlined style={{ fontSize: "20px" }} />
          </Button>
        </Col>
      </Row>
      {/* End Search Bar */}

      <Row>
        {/* Filter Component */}
        <Col span={8}>
          <ResultFilter />
        </Col>
        <Col span={1} style={{ display: "flex", justifyContent: "center" }}>
          {" "}
          <Divider style={{ height: "100%", margin: "0" }} type="vertical" />
        </Col>

        {/* Search Result Component */}
        <Col span={15} style={{ border: "1px solid black" }}>
          <SearchResult />
        </Col>
      </Row>
    </div>
  );
};

export default HotelListing;
