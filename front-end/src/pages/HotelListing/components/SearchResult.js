import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import {
  Row,
  Col,
  Button,
  Typography,
  Select,
  Divider,
  Rate,
  Tabs,
  Pagination,
} from "antd";

import {
  HeartOutlined,
  HeartFilled,
  EnvironmentFilled,
  LoadingOutlined,
} from "@ant-design/icons";

const { Text, Title } = Typography;

// Sort Items Dropdown
const dropdownItems = [
  {
    label: <Text className="montserrat-semibold">Lowest Price</Text>,
    value: "minPrice",
  },
  {
    label: <Text className="montserrat-semibold">Lowest Rating</Text>,
    value: "minRate",
  },
  {
    label: <Text className="montserrat-semibold">Highest Rating</Text>,
    value: "maxRate",
  },
  {
    label: <Text className="montserrat-semibold">Highest Price</Text>,
    value: "maxPrice",
  },
];

// Main Search Result Component
const SearchResult = ({
  hotelData,
  setHotelData,
  isLoading,
  setIsLoading,
  params,
  setParams,
}) => {
  useEffect(() => {
    setIsLoading(true);
    axios({
      method: "get",
      url: `http://localhost:3001/api/stay/hotel`,
      params: params,
    })
      .then((result) => {
        setHotelData([...result.data]);
      })
      .catch((err) => console.error(err));
    setIsLoading(false);
  }, [params]);

  const handleTabChange = async (key) => {
    setParams({ ...params, category: key });
  };

  return (
    <div>
      {" "}
      {isLoading ? (
        <h1>
          <LoadingOutlined style={{ fontSize: "40px" }} />
        </h1>
      ) : (
        <>
          <Row>
            <Col span={24}>
              <Tabs
                onChange={handleTabChange}
                tabBarStyle={{
                  background: "white",
                  boxShadow: " 0px 4px 16px rgba(17, 34, 17, 0.05)",
                  borderRadius: "12px",
                  padding: "0 24px",
                  marginBottom: "32px",
                }}
                items={[
                  {
                    key: "Hotels",
                    label: (
                      <div className="tab-label-style">
                        <Text className="montserrat-semibold-16px">Hotels</Text>
                        <Text
                          className="montserrat-regular"
                          style={{ opacity: "0.4" }}
                        >
                          {hotelData.length} places
                        </Text>
                      </div>
                    ),
                    children: (
                      <SearchResultItem
                        params={params}
                        setParams={setParams}
                        hotelData={hotelData}
                        isLoading={isLoading}
                      />
                    ),
                  },
                  {
                    key: "Motels",
                    label: (
                      <div className="tab-label-style">
                        <Text className="montserrat-semibold-16px">Motels</Text>
                        <Text
                          className="montserrat-regular"
                          style={{ opacity: "0.4" }}
                        >
                          {hotelData.length} places
                        </Text>
                      </div>
                    ),
                    children: (
                      <SearchResultItem
                        params={params}
                        setParams={setParams}
                        hotelData={hotelData}
                        isLoading={isLoading}
                      />
                    ),
                  },
                  {
                    key: "Resorts",
                    label: (
                      <div className="tab-label-style">
                        <Text className="montserrat-semibold-16px">
                          Resorts
                        </Text>
                        <Text
                          className="montserrat-regular"
                          style={{ opacity: "0.4" }}
                        >
                          {hotelData.length} places
                        </Text>
                      </div>
                    ),
                    children: (
                      <SearchResultItem
                        params={params}
                        setParams={setParams}
                        hotelData={hotelData}
                        isLoading={isLoading}
                      />
                    ),
                  },
                ]}
              />
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};

// Search Result Item mini component for Search Result
function SearchResultItem({ hotelData, isLoading, params, setParams }) {
  const handlePageChange = async (pageIndex, pageSize) => {
    await setParams({ ...params, pageIndex, pageSize });
  };

  const handleDropDownChange = async (value) => {
    await setParams({ ...params, sortBy: value });
  };

  return (
    <>
      <Row gutter={[0, 32]}>
        {/* Sorting Section */}
        <Col
          className="flex-align-center"
          style={{
            justifyContent: "flex-end",
          }}
          span={24}
        >
          <div>
            <Text className="montserrat-semibold">Sort by</Text>
            <Select
              onChange={handleDropDownChange}
              options={dropdownItems}
              bordered={false}
              defaultValue={dropdownItems[0].value}
            />
          </div>
        </Col>
        {/* Search Result Items */}{" "}
        {isLoading ? (
          <h1>
            <LoadingOutlined style={{ color: "white", fontSize: "40px" }} />
          </h1>
        ) : (
          <>
            {" "}
            {hotelData.map((element, index) => {
              return (
                <div key={index}>
                  <Col span={24} style={{ display: "flex" }}>
                    <img
                      alt="hotel"
                      src={element.images[0].imageSrc}
                      style={{
                        width: "300px",
                        minHeight: "100%",
                        borderRadius: "12px 0 0 12px",
                      }}
                    />

                    <Row
                      className="search-result-info-container"
                      gutter={[0, 24]}
                    >
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
                                    {element.hotelName}
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
                                      defaultValue={element.star}
                                    />
                                    &nbsp;
                                    <Text className="montserrat-regular-12px">
                                      {element.star} Star Hotel
                                    </Text>
                                    <Text
                                      className="montserrat-regular-12px"
                                      style={{ marginLeft: "32px" }}
                                    >
                                      {element.amenities.length} Aminities
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
                                      50 reviews
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
                                ${element.roomInfo[0].basePrice}
                                <span
                                  style={{
                                    color: "#ff8682",
                                    fontSize: "14px",
                                  }}
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
                          <Link
                            to={`/hotel-detail/${element._id}`}
                            className="montserrat-semibold"
                          >
                            View Place
                          </Link>
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </div>
              );
            })}
          </>
        )}
        {/* Pagination  */}
        <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
          {" "}
          <Pagination
            onChange={handlePageChange}
            pageSize={4}
            defaultCurrent={1}
            total={20}
            style={{
              display: "flex",
            }}
          />
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
