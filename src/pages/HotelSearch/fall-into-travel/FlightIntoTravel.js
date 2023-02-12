import { Row, Col, Button, Typography } from "antd";
import React from "react";

import FallIntoTravelDes from "./FallIntoTravelDes";

import sriLankaImage1 from "../../../assets/images/sri-lanka-image1.png";
import sriLankaImage2 from "../../../assets/images/sri-lanka-image2.png";
import sriLankaImage3 from "../../../assets/images/sri-lanka-image3.png";
import sriLankaImage4 from "../../../assets/images/sri-lanka-image4.png";

const sriLankaImage = [
  { imageSource: sriLankaImage1 },
  { imageSource: sriLankaImage2 },
  { imageSource: sriLankaImage3 },
  { imageSource: sriLankaImage4 },
];

const { Title, Text } = Typography;

const FlightIntoTravel = () => {
  return (
    <>
      <Row justify="center">
        <Col span={24}>
          <FallIntoTravelDes />
        </Col>
        <Col span={24} style={{ marginTop: "20px" }}>
          <Row style={{ height: "424px" }}>
            <Col span={10}>
              <div
                style={{
                  display: "grid",
                  backgroundColor: "#8DD3BB",
                  padding: "24px",
                  borderRadius: "20px",
                  height: "100%",
                }}
              >
                <Row justify="space-between">
                  <Col span={12}>
                    <Title level={1} style={{ margin: "0" }}>
                      Backpacking Sri Lanka
                    </Title>
                  </Col>
                  <Col
                    style={{
                      backgroundColor: "white",
                      width: "68px",
                      height: "62px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "space-around",
                      padding: "8px",
                      borderRadius: "8px",
                    }}
                  >
                    <Text>From</Text>
                    <Title level={4} style={{ margin: "0" }}>
                      $700
                    </Title>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Typography>
                      Traveling is a unique experience as it's the best way to
                      unplug from the pushes and pulls of daily life. It helps
                      us to forget about our problems, frustrations, and fears
                      at home. During our journey, we experience life in
                      different ways. We explore new places, cultures, cuisines,
                      traditions, and ways of living.
                    </Typography>
                  </Col>
                </Row>
                <Row style={{ alignSelf: "flex-end" }}>
                  <Col style={{ width: "100%" }}>
                    <Button style={{ width: "100%", height: "48px" }}>
                      Book Flight
                    </Button>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col span={14}>
              <div>
                <Row gutter={[0, 40]}>
                  {sriLankaImage.map((element) => {
                    return (
                      <>
                        <Col
                          span={12}
                          style={{ display: "flex", justifyContent: "end" }}
                        >
                          <img src={element.imageSource} alt="error" />
                        </Col>
                      </>
                    );
                  })}
                </Row>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default FlightIntoTravel;
