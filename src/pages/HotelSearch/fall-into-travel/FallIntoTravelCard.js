import { Row, Col, Button, Typography } from "antd";
import React from "react";

import parisBigSize from "../../../assets/images/paris-big-size.png";
import londonBigSize from "../../../assets/images/london-big-size.png";
import melbourneBigSize from "../../../assets/images/melbourne-big-size.png";
import columbiaBigSize from "../../../assets/images/columbia-big-size.png";

const { Title, Text } = Typography;

const travelCardItems = [
  {
    name: "Melbourne",
    description: "An amazing journey",
    price: "$700",
    image: melbourneBigSize,
  },
  {
    name: "Paris",
    description: "A Paris adventure",
    price: "$600",
    image: parisBigSize,
  },
  {
    name: "London",
    description: "London eye adventure",
    price: "$350",
    image: londonBigSize,
  },
  {
    name: "Columbia",
    description: "Amazing streets",
    price: "$700",
    image: columbiaBigSize,
  },
];

const FallIntoTravelCard = () => {
  return (
    <>
      <Row gutter={16}>
        {travelCardItems.map((element) => {
          return (
            <>
              <Col span={6}>
                <div
                  style={{
                    height: "420px",
                    position: "relative",
                    width: "296px",
                  }}
                >
                  <Row
                    gutter={[0, 16]}
                    style={{
                      position: "absolute",
                      left: "24px",
                      top: "282px",
                      width: "248px",
                    }}
                  >
                    <Col span={24}>
                      <Row>
                        <Col span={16}>
                          <Title
                            style={{ margin: "0", color: "white" }}
                            level={4}
                          >
                            {element.name}
                          </Title>
                          <Text style={{ color: "white" }}>
                            {element.description}
                          </Text>
                        </Col>
                        <Col
                          span={8}
                          style={{
                            display: "flex",
                            flexDirection: "column-reverse",
                            alignItems: "flex-end",
                          }}
                        >
                          <Title
                            style={{ margin: "0", color: "white" }}
                            level={4}
                          >
                            {element.price}
                          </Title>
                        </Col>
                      </Row>
                    </Col>
                    <Col span={24}>
                      <Button className="large-button">Book a Hotel</Button>
                    </Col>
                  </Row>
                  <img src={element.image} alt="Error" />
                </div>
              </Col>
            </>
          );
        })}
      </Row>
    </>
  );
};

export default FallIntoTravelCard;
