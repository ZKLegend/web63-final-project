import React from "react";

import { Row, Col, Button, Typography, Rate, Breadcrumb } from "antd";

import {
  HeartOutlined,
  EnvironmentFilled,
  ShareAltOutlined,
} from "@ant-design/icons";

import hotelIstanbul6 from "../../../assets/images/hotel-istanbul-6.png";
import hotelIstanbul2 from "../../../assets/images/hotel-istanbul-2.png";
import hotelIstanbul3 from "../../../assets/images/hotel-istanbul-3.png";
import hotelIstanbul4 from "../../../assets/images/hotel-istanbul-4.png";
import hotelIstanbul5 from "../../../assets/images/hotel-istanbul-5.png";

const { Text } = Typography;

const GeneralInformation = () => {
  return (
    <>
      {" "}
      <Row gutter={[0, 32]}>
        {/* Breadcrumb Part */}
        <Col span={24}>
          <Breadcrumb separator=">">
            <Breadcrumb.Item className="montserrat-regular-slamon">
              Turkey
            </Breadcrumb.Item>
            <Breadcrumb.Item className="montserrat-regular-slamon">
              Istanbul
            </Breadcrumb.Item>
            <Breadcrumb.Item className="montserrat-regular">
              Hotel Name
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>

        {/* General Information Part */}
        <Col className="flex-space-between" span={24}>
          {/* Hotel Name and Address */}
          <Row
            gutter={[0, 16]}
            justify="space-between"
            style={{
              flexDirection: "column",
            }}
          >
            <Col
              className="flex-space-between"
              style={{
                gap: "16px",
              }}
            >
              <Text className="trade-gothic-bold">
                CVK Park Bosphorus Hotel Istanbul
              </Text>
              <div>
                <Rate
                  style={{ fontSize: "16px", color: "#ff8682" }}
                  disabled
                  defaultValue={5}
                />
                &nbsp;
                <Text className="montserrat-regular-12px">5 Star Hotel</Text>
              </div>
            </Col>

            <Col
              className="flex-column-space-between"
              style={{
                gap: "8px",
              }}
            >
              <Text
                className="montserrat-regular-12px"
                style={{ opacity: "0.75" }}
              >
                <EnvironmentFilled />
                &nbsp; Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
              </Text>
              <div
                className="flex-align-center"
                style={{
                  gap: "4px",
                }}
              >
                {" "}
                <Button className="small-button">
                  <Text className="montserrat-regular-12px">4.2</Text>
                </Button>
                <Text className="montserrat-bold-12px">Very Good</Text>
                <Text className="montserrat-regular-12px">371 reviews</Text>
              </div>
            </Col>
          </Row>

          {/* Price and Button */}
          <Row gutter={[0, 16]} style={{ width: "276px" }}>
            <Col span={24}>
              <Text
                className="montserrat-bold-slamon"
                style={{
                  fontSize: "32px",
                  display: "block",
                  textAlign: "right",
                  lineHeight: "40px",
                }}
              >
                $240
                <Text className="montserrat-bold-slamon">/night</Text>
              </Text>
            </Col>
            <Col
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "15px",
              }}
              span={24}
            >
              <Button className="button-for-icons">
                <HeartOutlined style={{ fontSize: "20px" }} />
              </Button>
              <Button className="button-for-icons">
                <ShareAltOutlined style={{ fontSize: "20px" }} />
              </Button>
              <Button
                className="big-button-background-filled"
                style={{ width: "150px" }}
              >
                <Text className="montserrat-semibold">Book now</Text>
              </Button>
            </Col>
          </Row>
        </Col>

        {/* Image Part */}
        <Col
          style={{
            borderRadius: "16px",
            display: "flex",
            gap: "8px",
          }}
          span={24}
        >
          <img
            src={hotelIstanbul6}
            alt="istanbul6"
            style={{ display: "block" }}
          />

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              position: "relative",
            }}
          >
            <img
              alt="istanbul2"
              src={hotelIstanbul2}
              style={{ display: "block" }}
            />
            <img
              alt="istanbul3"
              src={hotelIstanbul4}
              style={{ display: "block" }}
            />
            <img
              alt="istanbul4"
              src={hotelIstanbul3}
              style={{ display: "block" }}
            />
            <img
              alt="istanbul5"
              src={hotelIstanbul5}
              style={{ display: "block" }}
            />
            <Button
              className="big-button-background-filled"
              style={{
                position: "absolute",
                right: "16px",
                bottom: "16px",
              }}
            >
              <Text className="montserrat-semibold">View all photos</Text>
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default GeneralInformation;
