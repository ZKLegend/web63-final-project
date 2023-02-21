import React from "react";
import { useState } from "react";

import { Button, Row, Col, Form, DatePicker, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import RoomGuestDropDown from "./RoomGuestDropDown";
import { BuildingIcon } from "../../assets/icon-components/IconComponent";

const flightOptions = [
  { value: "Hanoi", label: "Hanoi" },
  { value: "Ho Chi Minh City", label: "Ho Chi Minh City" },
  { value: "Singapore", label: "Singapore" },
  { value: "Thailand", label: "Thailand" },
  { value: "China", label: "China" },
];

export function StaySearchBar() {
  const [countRoom, setCountRoom] = useState(0);
  const [open, setOpen] = useState(false);
  const [countGuest, setCountGuest] = useState(0);

  const dateSelect = (date, dateString) => {
    console.log(date, dateString);
  };

  const increaseRoom = () => {
    setCountRoom(countRoom + 1);
  };
  const increaseGuest = () => {
    setCountGuest(countGuest + 1);
  };

  const decreaseRoom = () => {
    if (countRoom > 0) {
      setCountRoom(countRoom - 1);
    }
  };
  const decreaseGuest = () => {
    if (countGuest > 0) {
      setCountGuest(countGuest - 1);
    }
  };
  return (
    <>
      <Col span={10}>
        <div
          style={{
            position: "relative",
          }}
        >
          <span className="label-text">Enter Destination</span>
          <Select
            size="large"
            style={{ width: "100%" }}
            showSearch
            value="Hanoi"
            options={flightOptions}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
          />
        </div>
      </Col>

      <Col span={4}>
        <div style={{ position: "relative" }}>
          <span className="label-text">Check in</span>
          <DatePicker
            style={{ width: "100%" }}
            size="large"
            onChange={dateSelect}
          />
        </div>
      </Col>
      <Col span={4}>
        <div style={{ position: "relative" }}>
          <span className="label-text">Check out</span>
          <DatePicker
            style={{ width: "100%" }}
            size="large"
            onChange={dateSelect}
          />
        </div>
      </Col>
      <Col span={6}>
        <div style={{ position: "relative" }}>
          <span className="label-text">Rooms & Guests</span>
          <Select
            size="large"
            value={`${countRoom} Rooms, ${countGuest} Guests`}
            open={open}
            onDropdownVisibleChange={(visible) => setOpen(visible)}
            dropdownRender={() => (
              <RoomGuestDropDown
                countRoom={countRoom}
                setCountRoom={setCountRoom}
                countGuest={countGuest}
                setCountGuest={setCountGuest}
                increaseRoom={increaseRoom}
                increaseGuest={increaseGuest}
                decreaseRoom={decreaseRoom}
                decreaseGuest={decreaseGuest}
                setOpen={setOpen}
              />
            )}
            style={{ width: "100%" }}
          />
        </div>
      </Col>
    </>
  );
}

const StaySearch = () => {
  return (
    <div className="stay-search tab-items">
      <Form>
        <Row gutter={[16, 24]}>
          <StaySearchBar />
          <Col span={3} offset={18}>
            <div>
              {" "}
              <Button className="hidden-button" type="link">
                <PlusOutlined />
                Add Promo Code
              </Button>
            </div>
          </Col>
          <Col span={3}>
            <div className="show-result-button-container">
              <Button className="large-button">
                <BuildingIcon />
                &nbsp; Show Places
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default StaySearch;
