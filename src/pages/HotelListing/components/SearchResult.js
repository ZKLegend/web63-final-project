import { Row, Col } from "antd";
import React from "react";

const SearchResult = () => {
  return (
    <div className="search-result">
      <Row gutter={[0, 32]}>
        <Col span={24}>
          <div style={{ backgroundColor: "red" }}> Test 1</div>
        </Col>
        <Col span={24}>
          <div style={{ backgroundColor: "blue" }}> Test 2</div>
        </Col>
        <Col span={24}>
          <div style={{ backgroundColor: "green" }}> Test 3</div>
        </Col>
      </Row>
    </div>
  );
};

export default SearchResult;
