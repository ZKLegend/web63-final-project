import { Row, Col, Typography } from "antd";
import React from "react";

import istanbulTurkey from "../../../assets/images/istanbul-turkey.png";
import sydneyAustralia from "../../../assets/images/sydney-australia.png";
import bakuAzerbaijan from "../../../assets/images/baku-azerbaijan.png";
import maleMaldives from "../../../assets/images/male-maldives.png";

const recentSearch = [
  {
    destination: "Istanbul, Turkey",
    image: istanbulTurkey,
    place: "325 places",
  },
  {
    destination: "Sydney, Australia",
    image: sydneyAustralia,
    place: "325 places",
  },
  {
    destination: "Baku, Azerbaijan",
    image: bakuAzerbaijan,
    place: "325 places",
  },
  {
    destination: "Male, Maldives",
    image: maleMaldives,
    place: "325 places",
  },
];

const { Title, Text } = Typography;

const RecentSearchCard = () => {
  return (
    <div
      className="recent-search-card"
      style={{ height: "90px", marginTop: "32px" }}
    >
      <Row gutter={80} style={{ height: "100%" }}>
        {recentSearch.map((element) => {
          return (
            <>
              {" "}
              <Col span={6}>
                <div style={{ height: "100%" }}>
                  <Row justify="space-between" align="middle">
                    <Col span={12}>
                      <img
                        src={element.image}
                        alt="Error"
                        style={{
                          display: "block",
                          width: "90px",
                          height: "90px",
                        }}
                      />
                    </Col>
                    <Col span={12} flex="none">
                      <a href="">
                        <Title level={5} style={{ margin: "0" }}>
                          {element.destination}
                        </Title>
                        <Text type="secondary">{element.place}</Text>
                      </a>
                    </Col>
                  </Row>
                </div>
              </Col>
            </>
          );
        })}
      </Row>
    </div>
  );
};

export default RecentSearchCard;
