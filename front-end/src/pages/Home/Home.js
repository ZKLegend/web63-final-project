import { Col, Row, Button } from "antd";
import { useNavigate } from "react-router-dom";

import "./home.css";
import homeBanner from "../../assets/images/homeBanner.png";
import homeTextInBanner from "../../assets/images/homeTextInBanner.png";
import img1 from "../../assets/images/homePlace1.png";
import img2 from "../../assets/images/homePlace2.png";
import img3 from "../../assets/images/homePlace3.png";
import img4 from "../../assets/images/homePlace4.png";
import img5 from "../../assets/images/homePlace5.png";
import img6 from "../../assets/images/homePlace6.png";
import img7 from "../../assets/images/homePlace7.png";
import img8 from "../../assets/images/homePlace8.png";
import img9 from "../../assets/images/homePlace9.png";
import homeFlight from "../../assets/images/homeFlight.png";
import homeStay from "../../assets/images/homeStay.png";
import { PaperPlane } from "../../assets/icon-components/IconComponent";

import HomeSearchBar from "../../components/home-search-bar/HomeSearchBar";

const Home = () => {
  const datas = [
    {
      img: img1,
      place: "Istanbul, Turkey",
    },
    {
      img: img2,
      place: "Sydney, Australia",
    },
    {
      img: img3,
      place: "Baku, Azerbaijan",
    },
    {
      img: img4,
      place: "Malé, Maldives",
    },
    {
      img: img5,
      place: "Paris, France",
    },
    {
      img: img6,
      place: "New York, US",
    },
    {
      img: img7,
      place: "London, UK",
    },
    {
      img: img8,
      place: "Tokyo, Japan",
    },
    {
      img: img9,
      place: "Dubai, UAE",
    },
  ];
  const navigate = useNavigate();
  const handleNavigate = (link) => {
    if (link === "flight") {
      navigate("/flight/list");
    }
    if (link === "stay") {
      navigate("/flight/search");
    }
  };

  return (
    <div className="Home">
      {/* Big Poster Section */}
      <Row>
        <Col span={24}>
          <img src={homeBanner} alt="homeBanner" className="homeBanner" />
          <img
            src={homeTextInBanner}
            alt="homeTextInBanner"
            style={{
              zIndex: 1,
              position: "absolute",
              top: "25%",
              left: "25%",
            }}
          />
        </Col>
      </Row>

      {/* Search Bar and Trip list */}
      <Row>
        <Col span={24}>
          <HomeSearchBar />
          <div className="font-family">
            <div>
              <h1 className="montserrat-semibold-32px">
                Plan your perfect trip
              </h1>
              <p className="montserrat-regular-16px">
                Search Flights & Places Hire to our most popular destinations
              </p>
            </div>
            <div className="button-seeAll montserrat-medium">
              <>See more places</>
            </div>
          </div>
          <div className="homeMain1">
            {datas.map((data, index) => {
              return (
                <div className="homeMain1-item" key={index}>
                  <img src={data.img} alt="img"></img>
                  <div>
                    <div
                      style={{ color: "gray" }}
                      className="montserrat-semibold-16px"
                    >
                      {data.place}
                    </div>
                    <div className="homeMain1-item-text">
                      <span className="montserrat-medium">
                        Flights - Hotels - Resorts
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Col>
      </Row>

      {/* Flight and Hotels Navigation */}
      <Row style={{ marginTop: "70px" }}>
        <Col span={24}>
          <div className="homeMain2">
            <div className="homeMain2-item">
              <img
                src={homeFlight}
                alt="img"
                className="homeMain2-item-img"
              ></img>
              <div className="homeMain2-item-text">
                <h1
                  className="trade-gothic-lt-extended-bold-40px"
                  style={{
                    color: "white",
                    marginBottom: "0px",
                  }}
                >
                  Flights
                </h1>
                <p
                  className="montserrat-regular-16px"
                  style={{
                    color: "white",
                  }}
                >
                  Search Flights & Places Hire to our most popular destinations
                </p>

                <Button
                  className="large-button-in-home-page"
                  onClick={() => handleNavigate("flight")}
                >
                  <PaperPlane />
                  <span className="montserrat-medium">Show Flights</span>
                </Button>
              </div>
            </div>
            <div className="homeMain2-item">
              <img
                src={homeStay}
                alt="img"
                className="homeMain2-item-img"
              ></img>
              <div className="homeMain2-item-text">
                <h1
                  className="trade-gothic-lt-extended-bold-40px"
                  style={{
                    color: "white",
                    marginBottom: "0px",
                  }}
                >
                  Hotels
                </h1>
                <p
                  className="montserrat-regular-16px text-padding"
                  style={{
                    color: "white",
                  }}
                >
                  Search hotels & Places Hire to our most popular destinations
                </p>
                <div className="large-button-in-home-page">
                  <Button
                    className="large-button"
                    onClick={() => handleNavigate("stay")}
                  >
                    <PaperPlane />
                    <span className="montserrat-medium">Show Hotels</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Home;
