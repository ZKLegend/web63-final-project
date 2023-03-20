import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Row,
  Col,
  Button,
  Divider,
  Avatar,
  Pagination,
  Typography,
  Input,
  Rate,
  Form,
} from "antd";

import {
  EnvironmentFilled,
  FlagFilled,
  LoadingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { StarFilled } from "../../../assets/icon-components/IconComponent";

import hotelLocationMap from "../../../assets/images/hotel-location-map.png";

import axios from "axios";

const hotelFeatures = [
  "Near park",
  "Near nightlife",
  "Near theater",
  "Clean hotel",
];

const { Text, Paragraph } = Typography;
const { TextArea } = Input;

const DetailedInformation = ({ hotelDetail }) => {
  const isLogin = useSelector((state) => state.login.isLogin);
  console.log(isLogin);
  const params = useParams();
  const [form] = Form.useForm();
  const [reviews, setReviews] = useState([]);
  const [amenityLength, setAmenityLength] = useState(4);
  const [currentData, setCurrentData] = useState(reviews.slice(0, 5));
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/review/${params.hotelId}`
        );
        if (response.status === 200 && response.data)
          setReviews([...response.data]);
      } catch (err) {
        console.error(err);
      }
    };
    getReviews();
  }, []);
  console.log("Reviews:", reviews);
  const showMoreAmenities = () => {
    setAmenityLength(hotelDetail.amenities.length);
  };
  const showLessAmenities = () => {
    setAmenityLength(4);
  };

  const showReviewBox = () => {
    if (!isLogin) {
      alert("Please Login First");
    } else {
      setIsShow(!isShow);
    }
  };

  const submitReview = async (value) => {
    try {
      const token = localStorage.getItem("token");
      let reqBody = { ...value };
      const response = await axios.post(
        `http://localhost:3001/api/review/${params.hotelId}`,
        reqBody,
        {
          headers: { authToken: token },
        }
      );
      form.resetFields();
    } catch (err) {
      console.error(err);
    }
  };

  const handlePageChange = (page, pageSize) => {
    setCurrentData(
      reviews.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize)
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
          <Text
            id="available-rooms"
            className="trade-gothic-bold"
            style={{ fontSize: "20px" }}
          >
            Available Rooms
          </Text>
          {hotelDetail.roomInfo === undefined ? (
            <h1>
              <LoadingOutlined style={{ fontSize: "40px" }} />
            </h1>
          ) : (
            <>
              <Row gutter={[0, 8]}>
                {hotelDetail.roomInfo.map((element, index) => {
                  return (
                    <>
                      <Col span={24} style={{ display: "flex" }}>
                        <div
                          className="flex-align-center"
                          style={{
                            gap: "16px",
                          }}
                        >
                          <img
                            alt={element.roomName}
                            src={element.images[0].imageSrc}
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

                        <div
                          style={{
                            marginLeft: "auto",
                            display: "flex",
                            justifyContent: "space-between",
                            width: "25%",
                          }}
                        >
                          <Text className="montserrat-semibold-24px">
                            ${element.basePrice}
                            <Text className="montserrat-semibold">/night</Text>
                          </Text>

                          <Button
                            className="button-background-filled"
                            style={{ width: "150px" }}
                          >
                            <Text className="montserrat-semibold">
                              Book now
                            </Text>
                          </Button>
                        </div>
                      </Col>
                      {index !== hotelDetail.roomInfo.length - 1 ? (
                        <Divider style={{ margin: "0" }} />
                      ) : null}
                    </>
                  );
                })}
              </Row>
            </>
          )}
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
              &nbsp; {hotelDetail.address}
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
            {hotelDetail.amenities === undefined ? (
              <h1>
                <LoadingOutlined style={{ fontSize: "40px" }} />
              </h1>
            ) : (
              <>
                {" "}
                {hotelDetail.amenities
                  .slice(0, amenityLength)
                  .map((element) => {
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
                          <img alt="icon" src={element.icon.imageSrc} />

                          <Text className="montserrat-medium-16px">
                            {element.name}
                          </Text>
                        </div>
                      </>
                    );
                  })}
                {amenityLength < hotelDetail.amenities.length - 1 ? (
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
              </>
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
            <Button
              onClick={showReviewBox}
              className="button-background-filled"
            >
              <Text className="montserrat-semibold">Give your review</Text>
            </Button>
          </div>
          {isShow ? (
            <div className="flex-column">
              <Form form={form} onFinish={submitReview} layout="vertical">
                <Form.Item label="Rating:" name="reviewPoint">
                  <Rate />
                </Form.Item>
                <Form.Item label="Your Review:" name="reviewContent">
                  <TextArea placeholder="Please give your review" />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="montserrat-regular button-background-filled "
                    style={{ width: "20%" }}
                  >
                    Submit your Review
                  </Button>
                </Form.Item>
              </Form>
            </div>
          ) : null}

          <div
            className="flex-align-center"
            style={{
              gap: "16px",
            }}
          >
            <Text className="trade-gothic-lt-extended-bold-50px">4.2</Text>
            <div className="flex-column">
              <Text className="montserrat-semibold-20px">Very good</Text>
              <Text className="montserrat-regular">
                {reviews.length} verified reviews
              </Text>
            </div>
          </div>

          <Divider style={{ margin: "0" }} />

          {/* Review List */}
          {reviews.map((element) => {
            return (
              <>
                <Row align="middle" wrap={false}>
                  <Col>
                    {" "}
                    <Avatar size={45} icon={<UserOutlined />} />
                  </Col>
                  <Col>
                    <div>
                      <Text className="montserrat-semibold">
                        <Rate disabled defaultValue={element.reviewPoint} />
                      </Text>

                      <Divider type="vertical" />
                      <Text className="montserrat-regular">
                        {element.userInfo.username}
                      </Text>
                    </div>
                    <div>
                      <Paragraph
                        style={{ margin: "0 24px" }}
                        className="montserrat-regular"
                      >
                        {element.reviewContent}
                      </Paragraph>
                    </div>
                  </Col>
                  <Col style={{ marginLeft: "auto" }}>
                    {" "}
                    <FlagFilled style={{ fontSize: "20px" }} />
                  </Col>
                </Row>
                <Divider style={{ margin: "0" }} />
              </>
            );
          })}
          <Pagination
            style={{ textAlign: "center" }}
            total={reviews.length}
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
