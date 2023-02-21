import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
  Typography,
  Select,
  Divider,
  Rate,
  Image,
  Tabs,
} from "antd";

import {
  HeartOutlined,
  HeartFilled,
  EnvironmentFilled,
} from "@ant-design/icons";

import hotelIstanbul1 from "../../../assets/images/hotel-istanbul-1.png";
import motelImage1 from "../../../assets/images/motel-image-1.png";
import resortImage1 from "../../../assets/images/resort-image-1.png";

const { Text, Title } = Typography;

// Hard Data for testing
const dropdownItems = [
  { label: "Lowest Recommend", value: "lowest recommend" },
  { label: "Highest Reccomend", value: "highest reccomend" },
  { label: "Lowest Rating", value: "lowest rating" },
  { label: "Highest Rating", value: "highest rating" },
  { label: "Lowest Price", value: "lowest price" },
  { label: "Highest Price", value: "highest price" },
];

const hotelSearchResults = [
  {
    title: "CVK Park Bosphorus Hotel Istanbul",
    address: "Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437",
    price: "240",
    starPoint: 5,
    images: hotelIstanbul1,
    aminities: [
      "Outdoor pool",
      "Indoor pool",
      "Spa and wellness center",
      "Restaurant",
      "Room service",
    ],
    reviews: ["good", "excellent", "very well", "ok"],
  },
  {
    title: "CVK Park Bosphorus Hotel Istanbul",
    address: "Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437",
    price: "240",
    starPoint: 5,
    images: hotelIstanbul1,
    aminities: [
      "Outdoor pool",
      "Indoor pool",
      "Spa and wellness center",
      "Restaurant",
      "Room service",
    ],
    reviews: ["good", "excellent", "very well", "ok"],
  },
  {
    title: "CVK Park Bosphorus Hotel Istanbul",
    address: "Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437",
    price: "240",
    starPoint: 5,
    images: hotelIstanbul1,
    aminities: [
      "Outdoor pool",
      "Indoor pool",
      "Spa and wellness center",
      "Restaurant",
      "Room service",
    ],
    reviews: ["good", "excellent", "very well", "ok"],
  },
  {
    title: "CVK Park Bosphorus Hotel Istanbul",
    address: "Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437",
    price: "240",
    starPoint: 5,
    images: hotelIstanbul1,
    aminities: [
      "Outdoor pool",
      "Indoor pool",
      "Spa and wellness center",
      "Restaurant",
      "Room service",
    ],
    reviews: ["good", "excellent", "very well", "ok"],
  },
  {
    title: "CVK Park Bosphorus Hotel Istanbul",
    address: "Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437",
    price: "240",
    starPoint: 5,
    images: hotelIstanbul1,
    aminities: [
      "Outdoor pool",
      "Indoor pool",
      "Spa and wellness center",
      "Restaurant",
      "Room service",
    ],
    reviews: ["good", "excellent", "very well", "ok"],
  },
  {
    title: "CVK Park Bosphorus Hotel Istanbul",
    address: "Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437",
    price: "240",
    starPoint: 5,
    images: hotelIstanbul1,
    aminities: [
      "Outdoor pool",
      "Indoor pool",
      "Spa and wellness center",
      "Restaurant",
      "Room service",
    ],
    reviews: ["good", "excellent", "very well", "ok"],
  },
];

const motelSearchResults = [
  {
    title: "Hostal Cama del Mar",
    address: "Valencia, Valencia Province",
    price: "64",
    starPoint: 3,
    images: motelImage1,
    aminities: [
      "Outdoor pool",
      "Indoor pool",
      "Spa and wellness center",
      "Restaurant",
      "Room service",
    ],
    reviews: ["good", "excellent", "very well", "ok"],
  },
  {
    title: "Hostal Cama del Mar",
    address: "Valencia, Valencia Province",
    price: "64",
    starPoint: 3,
    images: motelImage1,
    aminities: [
      "Outdoor pool",
      "Indoor pool",
      "Spa and wellness center",
      "Restaurant",
      "Room service",
    ],
    reviews: ["good", "excellent", "very well", "ok"],
  },
  {
    title: "Hostal Cama del Mar",
    address: "Valencia, Valencia Province",
    price: "64",
    starPoint: 3,
    images: motelImage1,
    aminities: [
      "Outdoor pool",
      "Indoor pool",
      "Spa and wellness center",
      "Restaurant",
      "Room service",
    ],
    reviews: ["good", "excellent", "very well", "ok"],
  },
  {
    title: "Hostal Cama del Mar",
    address: "Valencia, Valencia Province",
    price: "64",
    starPoint: 3,
    images: motelImage1,
    aminities: [
      "Outdoor pool",
      "Indoor pool",
      "Spa and wellness center",
      "Restaurant",
      "Room service",
    ],
    reviews: ["good", "excellent", "very well", "ok"],
  },
  {
    title: "Hostal Cama del Mar",
    address: "Valencia, Valencia Province",
    price: "64",
    starPoint: 3,
    images: motelImage1,
    aminities: [
      "Outdoor pool",
      "Indoor pool",
      "Spa and wellness center",
      "Restaurant",
      "Room service",
    ],
    reviews: ["good", "excellent", "very well", "ok"],
  },
  {
    title: "Hostal Cama del Mar",
    address: "Valencia, Valencia Province",
    price: "64",
    starPoint: 3,
    images: motelImage1,
    aminities: [
      "Outdoor pool",
      "Indoor pool",
      "Spa and wellness center",
      "Restaurant",
      "Room service",
    ],
    reviews: ["good", "excellent", "very well", "ok"],
  },
];

const resortSearchResult = [
  {
    title: "Tokyo Bay Maihama Hotel First Resort",
    address: "Tokyo Disney Resort, Tokyo",
    price: "349",
    starPoint: 4,
    images: resortImage1,
    aminities: ["Restaurant", "Elevator", "Porter", "Tours"],
    reviews: ["good", "excellent", "very well", "ok"],
  },
  {
    title: "Tokyo Bay Maihama Hotel First Resort",
    address: "Tokyo Disney Resort, Tokyo",
    price: "349",
    starPoint: 4,
    images: resortImage1,
    aminities: ["Restaurant", "Elevator", "Porter", "Tours"],
    reviews: ["good", "excellent", "very well", "ok"],
  },
  {
    title: "Tokyo Bay Maihama Hotel First Resort",
    address: "Tokyo Disney Resort, Tokyo",
    price: "349",
    starPoint: 4,
    images: resortImage1,
    aminities: ["Restaurant", "Elevator", "Porter", "Tours"],
    reviews: ["good", "excellent", "very well", "ok"],
  },
  {
    title: "Tokyo Bay Maihama Hotel First Resort",
    address: "Tokyo Disney Resort, Tokyo",
    price: "349",
    starPoint: 4,
    images: resortImage1,
    aminities: ["Restaurant", "Elevator", "Porter", "Tours"],
    reviews: ["good", "excellent", "very well", "ok"],
  },
  {
    title: "Tokyo Bay Maihama Hotel First Resort",
    address: "Tokyo Disney Resort, Tokyo",
    price: "349",
    starPoint: 4,
    images: resortImage1,
    aminities: ["Restaurant", "Elevator", "Porter", "Tours"],
    reviews: ["good", "excellent", "very well", "ok"],
  },
  {
    title: "Tokyo Bay Maihama Hotel First Resort",
    address: "Tokyo Disney Resort, Tokyo",
    price: "349",
    starPoint: 4,
    images: resortImage1,
    aminities: ["Restaurant", "Elevator", "Porter", "Tours"],
    reviews: ["good", "excellent", "very well", "ok"],
  },
];

// Main Search Result Component
const SearchResult = () => {
  const [resultLength, setResultLength] = useState(4);

  const handleTabChange = () => {
    setResultLength(4);
  };

  return (
    <div>
      <Row>
        <Col span={24}>
          <Tabs
            tabBarStyle={{
              background: "white",
              boxShadow: " 0px 4px 16px rgba(17, 34, 17, 0.05)",
              borderRadius: "12px",
              padding: "0 24px",
              marginBottom: "32px",
            }}
            items={[
              {
                key: "hotels",
                label: (
                  <div className="tab-label-style">
                    <Text className="montserrat-semibold-16px">Hotels</Text>
                    <Text
                      className="montserrat-regular"
                      style={{ opacity: "0.4" }}
                    >
                      {hotelSearchResults.length} places
                    </Text>
                  </div>
                ),
                children: (
                  <SearchResultItem
                    searchResult={hotelSearchResults}
                    resultLength={resultLength}
                    setResultLength={setResultLength}
                  />
                ),
              },
              {
                key: "motels",
                label: (
                  <div className="tab-label-style">
                    <Text className="montserrat-semibold-16px">Motels</Text>
                    <Text
                      className="montserrat-regular"
                      style={{ opacity: "0.4" }}
                    >
                      {motelSearchResults.length} places
                    </Text>
                  </div>
                ),
                children: (
                  <SearchResultItem
                    searchResult={motelSearchResults}
                    resultLength={resultLength}
                    setResultLength={setResultLength}
                  />
                ),
              },
              {
                key: "resorts",
                label: (
                  <div className="tab-label-style">
                    <Text className="montserrat-semibold-16px">Resorts</Text>
                    <Text
                      className="montserrat-regular"
                      style={{ opacity: "0.4" }}
                    >
                      {resortSearchResult.length} places
                    </Text>
                  </div>
                ),
                children: (
                  <SearchResultItem
                    searchResult={resortSearchResult}
                    resultLength={resultLength}
                    setResultLength={setResultLength}
                  />
                ),
              },
            ]}
            onChange={handleTabChange}
          />
        </Col>
      </Row>
    </div>
  );
};

// Search Result Item mini component for Search Result
function SearchResultItem({ searchResult, resultLength, setResultLength }) {
  const showMoreResult = () => {
    setResultLength(searchResult.length);
  };

  return (
    <>
      <Row gutter={[0, 32]}>
        {/* Sorting Section */}
        <Col
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          span={24}
        >
          <Text className="montserrat-semibold">
            Showing {resultLength} of{" "}
            <Text className="montserrat-semibold" style={{ color: "#ff8682" }}>
              {searchResult.length} places
            </Text>
          </Text>
          <div>
            <Text className="montserrat-semibold">Sort by</Text>
            <Select
              options={dropdownItems}
              bordered={false}
              defaultValue={dropdownItems[0].label}
            />
          </div>
        </Col>

        {/* Search Result Items */}
        {searchResult.slice(0, resultLength).map((element, index) => {
          return (
            <>
              <Col span={24} style={{ display: "flex" }}>
                <Image
                  preview={false}
                  src={element.images}
                  style={{ width: "300px", height: "100%" }}
                />

                <Row className="search-result-info-container" gutter={[0, 24]}>
                  <Col span={24}>
                    <Row gutter={24}>
                      <Col span={18}>
                        <div>
                          <Row gutter={[0, 16]}>
                            <Col span={24}>
                              <Title
                                level={3}
                                style={{ height: "50px", margin: "0" }}
                              >
                                {element.title}
                              </Title>
                            </Col>
                            <Col
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "12px",
                              }}
                              span={24}
                            >
                              <Text
                                className="montserrat-regular-12px"
                                style={{ opacity: "0.75" }}
                              >
                                <EnvironmentFilled />
                                &nbsp; {element.address}
                              </Text>
                              <div>
                                <Rate
                                  style={{ fontSize: "15px" }}
                                  disabled
                                  defaultValue={element.starPoint}
                                />
                                &nbsp;
                                <Text className="montserrat-regular-12px">
                                  {element.starPoint} Star Hotel
                                </Text>
                                <Text
                                  className="montserrat-regular-12px"
                                  style={{ marginLeft: "32px" }}
                                >
                                  {element.aminities.length} Aminities
                                </Text>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "4px",
                                }}
                              >
                                {" "}
                                <Button className="small-button-for-text">
                                  <Text className="montserrat-regular-12px">
                                    4.2
                                  </Text>
                                </Button>
                                <Text className="montserrat-bold-12px">
                                  Very Good
                                </Text>
                                <Text className="montserrat-regular-12px">
                                  {element.reviews.length} reviews
                                </Text>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                      <Col span={6}>
                        <div>
                          <Text
                            className="montserrat-regular-12px"
                            style={{ opacity: "0.75" }}
                          >
                            starting from
                          </Text>
                          <br />
                          <span
                            className="montserrat-bold-24px"
                            style={{
                              color: "#ff8682",
                              display: "block",
                              textAlign: "right",
                            }}
                          >
                            ${element.price}
                            <span
                              style={{ color: "#ff8682", fontSize: "14px" }}
                            >
                              /night
                            </span>
                          </span>
                          <Text
                            className="montserrat-regular-12px"
                            style={{
                              textAlign: "right",
                              display: "block",
                              opacity: "0.75",
                            }}
                          >
                            excl.tax
                          </Text>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Divider style={{ margin: "0" }} />

                  <Col span={24} style={{ display: "flex", gap: "16px" }}>
                    <LikeButton />
                    <Button className="large-button-background-filled">
                      <Text className="montserrat-semibold">View Place</Text>
                    </Button>
                  </Col>
                </Row>
              </Col>
            </>
          );
        })}

        {/* Button Show More  */}
        <Col span={24}>
          <Button
            onClick={showMoreResult}
            className="large-button-background-filled"
            style={{ backgroundColor: "#112211" }}
          >
            <Text style={{ color: "white" }}>Show more results</Text>
          </Button>
        </Col>
      </Row>
    </>
  );
}

// Like Button mini component for Search Result Item component
function LikeButton() {
  const [likedItem, setLikedItem] = useState(false);
  const handleLikeItems = () => {
    setLikedItem(!likedItem);
  };
  return (
    <>
      {" "}
      <Button className="button-for-icons" onClick={handleLikeItems}>
        {likedItem ? (
          <HeartFilled style={{ fontSize: "20px" }} />
        ) : (
          <HeartOutlined style={{ fontSize: "20px" }} />
        )}
      </Button>
    </>
  );
}

export default SearchResult;
