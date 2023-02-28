import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
  Divider,
  Avatar,
  Pagination,
  Typography,
} from "antd";

import { EnvironmentFilled, WifiOutlined, FlagFilled } from "@ant-design/icons";
import {
  CoffeIcon,
  FitnessIcon,
  PoolIcon,
  StarFilled,
  WineIcon,
  SpaIcon,
  RestaurantIcon,
  RoomServiceIcon,
} from "../../../assets/icon-components/IconComponent";

import hotelIstanbul2 from "../../../assets/images/hotel-istanbul-2.png";
import hotelIstanbul3 from "../../../assets/images/hotel-istanbul-3.png";
import hotelIstanbul4 from "../../../assets/images/hotel-istanbul-4.png";
import hotelIstanbul5 from "../../../assets/images/hotel-istanbul-5.png";
import hotelLocationMap from "../../../assets/images/hotel-location-map.png";

import userAvatar1 from "../../../assets/images/user-avatar-1.png";
import userAvatar2 from "../../../assets/images/user-avatar-2.png";
import userAvatar3 from "../../../assets/images/user-avatar-3.png";
import userAvatar4 from "../../../assets/images/user-avatar-4.png";
import userAvatar5 from "../../../assets/images/user-avatar-5.png";

const hotelReviews = [
  {
    username: "Omar Siphron",
    reviewPoint: "5.0 Amazing",
    reviewDetail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    userAvatar: userAvatar1,
  },
  {
    username: "Cristofer Ekstrom Bothman",
    reviewPoint: "4.0 Very good",
    reviewDetail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    userAvatar: userAvatar2,
  },
  {
    username: "Kaiya Lubin",
    reviewPoint: "3.0 Normal",
    reviewDetail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    userAvatar: userAvatar3,
  },
  {
    username: "Erin Septimus",
    reviewPoint: "2.0 Bad",
    reviewDetail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    userAvatar: userAvatar4,
  },
  {
    username: "Terry George",
    reviewPoint: "1.0 Very bad",
    reviewDetail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    userAvatar: userAvatar5,
  },
  {
    username: "Terry George",
    reviewPoint: "1.0 Very bad",
    reviewDetail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    userAvatar: userAvatar5,
  },
  {
    username: "Erin Septimus",
    reviewPoint: "2.0 Bad",
    reviewDetail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    userAvatar: userAvatar4,
  },

  {
    username: "Kaiya Lubin",
    reviewPoint: "3.0 Normal",
    reviewDetail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    userAvatar: userAvatar3,
  },
  {
    username: "Cristofer Ekstrom Bothman",
    reviewPoint: "4.0 Very good",
    reviewDetail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    userAvatar: userAvatar2,
  },
  {
    username: "Omar Siphron",
    reviewPoint: "5.0 Amazing",
    reviewDetail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    userAvatar: userAvatar1,
  },
];

const amenities = [
  {
    amenityName: "Outdoor pool",
    amenityIcon: <PoolIcon />,
  },
  {
    amenityName: "Fitness center",
    amenityIcon: <FitnessIcon />,
  },
  {
    amenityName: "Indoor pool",
    amenityIcon: <PoolIcon />,
  },
  {
    amenityName: "Bar/Lounge",
    amenityIcon: <WineIcon />,
  },
  {
    amenityName: "Spa and wellness center",
    amenityIcon: <SpaIcon />,
  },
  {
    amenityName: "Free Wi-Fi",
    amenityIcon: <WifiOutlined style={{ fontSize: "20px" }} />,
  },
  {
    amenityName: "Restaurant",
    amenityIcon: <RestaurantIcon />,
  },
  {
    amenityName: "Tea/coffe machine",
    amenityIcon: <CoffeIcon />,
  },
  {
    amenityName: "Room service",
    amenityIcon: <RoomServiceIcon />,
  },
];

const hotelRooms = [
  {
    roomName: "Superior room - 1 double bed or 2 twin beds",
    images: hotelIstanbul2,
    price: 240,
  },
  {
    roomName: "Superior room - City view  - 1 double bed or 2 twin beds",
    images: hotelIstanbul3,
    price: 280,
  },
  {
    roomName: "Superior room - City view  - 1 double bed or 2 twin beds",
    images: hotelIstanbul4,
    price: 320,
  },
  {
    roomName: "Superior room - City view  - 1 double bed or 2 twin beds",
    images: hotelIstanbul5,
    price: 350,
  },
];

const hotelFeatures = [
  "Near park",
  "Near nightlife",
  "Near theater",
  "Clean hotel",
];

const { Text, Paragraph } = Typography;

const DetailedInformation = () => {
  const [amenityLength, setAmenityLength] = useState(4);
  const [currentData, setCurrentData] = useState(hotelReviews.slice(0, 5));
  const showMoreAmenities = () => {
    setAmenityLength(amenities.length);
  };
  const showLessAmenities = () => {
    setAmenityLength(4);
  };

  const handlePageChange = (page, pageSize) => {
    setCurrentData(
      hotelReviews.slice(
        (page - 1) * pageSize,
        (page - 1) * pageSize + pageSize
      )
    );
  };
  return (
    <>
      <Row gutter={[0, 64]}>
        {/* Hotel Overview Part */}
        <Col
          className="flex-column"
          style={{
            gap: "32px",
          }}
          span={24}
        >
          <div className="flex-column" style={{ gap: "16px" }}>
            <Text className="trade-gothic-bold" style={{ fontSize: "20px" }}>
              Overview
            </Text>
            <Paragraph
              className="montserrat-regular"
              style={{ fontSize: "16px" }}
            >
              Located in Taksim Gmsuyu, the heart of Istanbul, the CVK Park
              Bosphorus Hotel Istanbul has risen from the ashes of the historic
              Park Hotel, which also served as Foreign Affairs Palace 120 years
              ago and is hosting its guests by assuming this hospitality
              mission. With its 452 luxurious rooms and suites, 8500 m2 SPA and
              fitness area, 18 meeting rooms including 4 dividable ones and 3
              terraces with Bosphorus view, Istanbuls largest terrace with
              Bosphorus view (4500 m2) and latest technology infrastructure, CVK
              Park Bosphorus Hotel Istanbul is destined to be the popular
              attraction point of the city. Room and suite categories at various
              sizes with city and Bosphorus view, as well as 68 separate luxury
              suites, are offered to its special guests as a wide variety of
              selection.
            </Paragraph>
          </div>
          <div style={{ display: "flex", gap: "16px" }}>
            <div
              className="feature-container"
              style={{
                backgroundColor: "#8DD3BB",
                justifyContent: "flex-end",
              }}
            >
              <Text
                style={{
                  marginBottom: "auto",
                  fontSize: "32px",
                  lineHeight: "40px",
                }}
                className="trade-gothic-bold"
              >
                4.2
              </Text>
              <Text className="montserrat-bold-16px">Very good</Text>
              <Text className="montserrat-regular">371 reviews</Text>
            </div>
            {hotelFeatures.map((element) => {
              return (
                <>
                  {" "}
                  <div
                    className="feature-container"
                    style={{ justifyContent: "space-between" }}
                  >
                    <StarFilled />
                    <Text>{element}</Text>
                  </div>
                </>
              );
            })}
          </div>
        </Col>

        <Divider style={{ margin: "0" }} />

        {/* Available Rooms Part */}
        <Col
          className="flex-column"
          style={{
            gap: "32px",
          }}
          span={24}
        >
          <Text className="trade-gothic-bold" style={{ fontSize: "20px" }}>
            Available Rooms
          </Text>
          <Row gutter={[0, 8]}>
            {hotelRooms.map((element, index) => {
              return (
                <>
                  <Col span={24} className="flex-space-between">
                    {/* Room Name */}
                    <div
                      className="flex-align-center"
                      style={{
                        gap: "16px",
                      }}
                    >
                      <img
                        alt={element.roomName}
                        src={element.images}
                        style={{
                          width: "48px",
                          height: "48px",
                          display: "block",
                          borderRadius: "4px",
                        }}
                      />
                      <Text className="montserrat-medium-16px">
                        {element.roomName}
                      </Text>
                    </div>

                    {/* Price and Button */}
                    <div
                      className="flex-align-center"
                      style={{
                        gap: "64px",
                      }}
                    >
                      <Text className="montserrat-semibold-24px">
                        ${element.price}
                        <Text className="montserrat-semibold">/night</Text>
                      </Text>
                      <Button
                        className="button-background-filled"
                        style={{ width: "150px" }}
                      >
                        <Text className="montserrat-semibold">Book now</Text>
                      </Button>
                    </div>
                  </Col>
                  {index !== hotelRooms.length - 1 ? (
                    <Divider style={{ margin: "0" }} />
                  ) : null}
                </>
              );
            })}
          </Row>
        </Col>

        <Divider style={{ margin: "0" }} />

        {/* Location/Maps Part */}
        <Col
          className="flex-column"
          style={{
            gap: "32px",
          }}
          span={24}
        >
          <div className="flex-space-between-align-center">
            <Text className="trade-gothic-bold-20px">Location/Map</Text>
            <Button className="button-background-filled">
              <Text className="montserrat-semibold">View on google maps</Text>
            </Button>
          </div>

          <div>
            {" "}
            <img alt="error" src={hotelLocationMap} />{" "}
            <Text
              className="montserrat-regular-12px"
              style={{ opacity: "0.75" }}
            >
              <EnvironmentFilled />
              &nbsp; Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
            </Text>
          </div>
        </Col>

        <Divider style={{ margin: "0" }} />

        {/* Amenities Part */}
        <Col
          className="flex-column"
          style={{
            gap: "32px",
          }}
          span={24}
        >
          <Text className="trade-gothic-bold-20px">Amenities</Text>
          <div
            className="flex-align-center"
            style={{
              width: "720px",

              flexWrap: "wrap",
              columnGap: "300px",
              rowGap: "24px",
            }}
          >
            {amenities.slice(0, amenityLength).map((element) => {
              return (
                <>
                  {" "}
                  <div
                    className="flex-align-center"
                    style={{
                      width: "210px",

                      gap: "8px",
                    }}
                  >
                    {element.amenityIcon}

                    <Text className="montserrat-medium-16px">
                      {element.amenityName}
                    </Text>
                  </div>
                </>
              );
            })}
            {amenityLength < amenities.length - 1 ? (
              <Text
                onClick={showMoreAmenities}
                className="montserrat-semibold-16px-slamon"
                style={{ cursor: "pointer" }}
              >
                Show more
              </Text>
            ) : (
              <Text
                onClick={showLessAmenities}
                className="montserrat-semibold-16px-slamon"
                style={{ cursor: "pointer" }}
              >
                Show less
              </Text>
            )}
          </div>
        </Col>

        <Divider style={{ margin: "0" }} />

        {/* Reviews Part */}
        <Col
          className="flex-column"
          style={{
            gap: "24px",
          }}
          span={24}
        >
          <div className="flex-space-between-align-center">
            <Text className="trade-gothic-bold-20px">Reviews</Text>
            <Button className="button-background-filled">
              <Text className="montserrat-semibold">Give your review</Text>
            </Button>
          </div>

          <div
            className="flex-align-center"
            style={{
              gap: "16px",
            }}
          >
            <Text className="trade-gothic-lt-extended-bold-50px">4.2</Text>
            <div className="flex-column">
              <Text className="montserrat-semibold-20px">Very good</Text>
              <Text className="montserrat-regular">371 verified reviews</Text>
            </div>
          </div>

          <Divider style={{ margin: "0" }} />

          {/* Review List */}
          {currentData.map((element) => {
            return (
              <>
                <Row gutter={16} justify="space-between" wrap={false}>
                  <Col>
                    <div>
                      {" "}
                      <Avatar
                        size={45}
                        src={<img alt="avatar" src={element.userAvatar} />}
                      />
                    </div>
                  </Col>
                  <Col>
                    <div>
                      <div>
                        <Text className="montserrat-semibold">
                          {element.reviewPoint}
                        </Text>

                        <Divider type="vertical" />
                        <Text className="montserrat-regular">
                          {element.username}
                        </Text>
                      </div>
                      <div>
                        <Paragraph className="montserrat-regular">
                          {element.reviewDetail}
                        </Paragraph>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div>
                      {" "}
                      <FlagFilled style={{ fontSize: "20px" }} />
                    </div>
                  </Col>
                </Row>
                <Divider style={{ margin: "0" }} />
              </>
            );
          })}
          <Pagination
            style={{ textAlign: "center" }}
            total={10}
            pageSize={5}
            defaultCurrent={1}
            onChange={handlePageChange}
          />
        </Col>
      </Row>
    </>
  );
};

export default DetailedInformation;
