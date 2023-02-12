import { Row, Col, Button, Typography } from "antd";
import React from "react";

const { Title, Paragraph } = Typography;

const FallIntoTravelDes = () => {
  return (
    <>
      <Row align="middle">
        <Col span={12}>
          <Title style={{ margin: "0" }} level={3}>
            Fall into travel
          </Title>
          <Paragraph style={{ margin: "0" }}>
            Going somewhere to celebrate this season? Whether you’re going home
            or somewhere to roam, we’ve got the travel tools to get you to your
            destination.
          </Paragraph>
        </Col>
        <Col span={12}>
          <Button style={{ display: "block", marginLeft: "auto" }}>
            See All
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default FallIntoTravelDes;
