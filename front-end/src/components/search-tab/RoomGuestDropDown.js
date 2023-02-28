import React from "react";

import { Row, Col, Button, Typography } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

const { Text } = Typography;

const RoomGuestDropDown = ({
  countRoom,
  setCountRoom,
  countGuest,
  setCountGuest,
  increaseRoom,
  increaseGuest,
  decreaseRoom,
  decreaseGuest,
  setOpen,
}) => {
  return (
    <div className="passenger-class-drop-down">
      <Row gutter={[0, 16]}>
        <Col
          span={12}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Text>Rooms</Text>
        </Col>
        <Col span={12}>
          <Button
            type="text"
            icon={<MinusOutlined />}
            onClick={decreaseRoom}
          ></Button>
          {countRoom}
          <Button
            type="text"
            icon={<PlusOutlined />}
            onClick={increaseRoom}
          ></Button>
        </Col>
        <Col
          span={12}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Text>Guests</Text>
        </Col>
        <Col span={12}>
          <Button
            type="text"
            icon={<MinusOutlined />}
            onClick={decreaseGuest}
          ></Button>
          {countGuest}
          <Button
            type="text"
            icon={<PlusOutlined />}
            onClick={increaseGuest}
          ></Button>
        </Col>

        <Col
          span={24}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={() => {
              setOpen(false);
              setCountRoom(countRoom);
              setCountGuest(countGuest);
            }}
          >
            Done
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default RoomGuestDropDown;
