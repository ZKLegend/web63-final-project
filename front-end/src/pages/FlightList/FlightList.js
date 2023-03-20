import { Col, Row } from "antd";

import "./FlightList.css";

import FlightListBar from "../../components/flight-list-bar/FlightListBar";
import FlightFilter from "../../components/flight-filter/FlightFilter";
import FlightSort from "../../components/flight-sort/FlightSort";

import FlightListTicket from "../../components/flight-list-ticket/FlightListTicket";

const FlightList = () => {
  return (
    <div className="FlightList">
      <Row>
        <Col span={24}>
          <FlightListBar />
        </Col>
      </Row>
      <Row style={{ padding: "0 104px", marginTop: "40px" }}>
        <Col span={7}>
          <FlightFilter />
        </Col>
        <Col span={1}>
          <div
            style={{
              width: "0.5px",
              background: "#112211",
              opacity: "0.25",
              height: "1600px",
              margin: "0 40px",
            }}
          ></div>
        </Col>
        <Col span={16}>
          <FlightSort />
          <FlightListTicket />
        </Col>
      </Row>
    </div>
  );
};
export default FlightList;
