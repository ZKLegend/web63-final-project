import React from "react";
import { Row, Col, Divider } from "antd";

import GeneralInformation from "./components/GeneralInformation";
import DetailedInformation from "./components/DetailedInformation";

import "./index.css";

const HotelDetail = () => {
  return (
    <div className="hotel-detail">
      {/* Hotel General Information Section */}
      <Row>
        <Col span={24}>
          {" "}
          <GeneralInformation />
        </Col>
      </Row>

      {/* Divider */}
      <Row>
        <Col span={24}>
          <Divider style={{ margin: " 64px 0" }} />
        </Col>
      </Row>

      {/* Hotel Detail Infomartion Section */}
      <DetailedInformation />
    </div>
  );
};

export default HotelDetail;
