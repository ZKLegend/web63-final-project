import { Col, Row } from "antd";

import "./FlightSearch.css";
import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner2.png";

import FlightSearchMain1 from "../../components/flight-search-main1/FlightSearchMain1";
import FlightSearchMain2 from "../../components/flight-search-main2/FlightSearchMain2";
import FlightSearchBar from "../../components/flight-search-bar/FlightSearchBar";
import FallIntoTravel from "../HotelSearch/fall-into-travel/FallIntoTravel";
import FlightIntoTravel from "../HotelSearch/fall-into-travel/FlightIntoTravel";

const FlightSearch = () => {
  return (
    <div className="FlightSearch">
      {/* Search Bar Section */}
      <Row>
        <Col span={24}>
          <img src={banner1} alt="banner1" className="banner"></img>
          <FlightSearchBar className="font-family" />
        </Col>
      </Row>

      {/* Flight Search Page Content */}
      <Row gutter={[0, 80]}>
        <Col span={24}>
          <div className="font-family">
            <div>
              <h1 className="montserrat-semibold-32px">
                Let's go places together
              </h1>
              <p className="montserrat-regular-16px">
                Discover the latest offers and news and start planning your next
                trip with us.
              </p>
            </div>
            <div className="button-seeAll1">
              <div className="montserrat-medium">See All</div>
            </div>
          </div>
          <img src={banner2} alt="banner2" className="banner"></img>
        </Col>
        <Col span={24} style={{ padding: "0 104px" }}>
          <FallIntoTravel />
        </Col>
        <Col span={24} style={{ padding: "0 104px" }}>
          <FlightIntoTravel />
        </Col>
      </Row>
    </div>
  );
};
export default FlightSearch;
