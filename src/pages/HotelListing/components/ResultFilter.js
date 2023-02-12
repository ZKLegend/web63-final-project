import React from "react";
import {
  Typography,
  Row,
  Col,
  Checkbox,
  Slider,
  Collapse,
  Button,
  ConfigProvider,
} from "antd";

import "../style.css";

const { Title } = Typography;

const freebies = [
  "free breakfast",
  "free parking",
  "free internet",
  "free airport shuttle",
  "free cancellation",
];

const amenities = ["24hr front desks", "air-conditioned", "fitness", "pool"];

const ResultFilter = () => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className="result-filter">
      <Title style={{ margin: "0" }} level={3}>
        Filters
      </Title>
      <ConfigProvider theme={{ components: { Collapse: { padding: 0 } } }}>
        <Collapse
          expandIconPosition="right"
          style={{ backgroundColor: "white" }}
          bordered={false}
        >
          <Collapse.Panel
            header={
              <Title style={{ margin: "0" }} level={5}>
                Price
              </Title>
            }
            key="1"
          >
            <div className="collapse-panel-items">
              <Slider min={0} max={1200} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>$50</span>
                <span>$1200</span>
              </div>
            </div>
          </Collapse.Panel>
          <Collapse.Panel
            header={
              <>
                <Title style={{ margin: "0" }} level={5}>
                  Rating
                </Title>
              </>
            }
            key="2"
          >
            <div className="collapse-panel-items">
              <Row gutter={16}>
                {" "}
                {Array.from(Array(5).keys()).map((element) => {
                  return (
                    <>
                      <Col>
                        <Button
                          style={{
                            width: "40px",
                            height: "32px",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          {element} +
                        </Button>
                      </Col>
                    </>
                  );
                })}
              </Row>
            </div>
          </Collapse.Panel>
          <Collapse.Panel
            header={
              <>
                <Title style={{ margin: "0" }} level={5}>
                  Freebies
                </Title>
              </>
            }
            key="3"
          >
            <div className="collapse-panel-items">
              <Checkbox.Group>
                <Row>
                  {freebies.map((element) => {
                    return (
                      <>
                        <Col span={24}>
                          <Checkbox value={element}>
                            {capitalizeFirstLetter(element)}
                          </Checkbox>
                        </Col>
                      </>
                    );
                  })}
                </Row>
              </Checkbox.Group>
            </div>
          </Collapse.Panel>
          <Collapse.Panel
            header={
              <>
                <Title style={{ margin: "0" }} level={5}>
                  Amenities
                </Title>
              </>
            }
            key="4"
          >
            <div className="collapse-panel-items">
              <Checkbox.Group>
                <Row>
                  {amenities.map((element) => {
                    return (
                      <>
                        <Col span={24}>
                          <Checkbox value={element}>
                            {capitalizeFirstLetter(element)}
                          </Checkbox>
                        </Col>
                      </>
                    );
                  })}
                </Row>
              </Checkbox.Group>
            </div>
          </Collapse.Panel>
        </Collapse>
      </ConfigProvider>
    </div>
  );
};

export default ResultFilter;
