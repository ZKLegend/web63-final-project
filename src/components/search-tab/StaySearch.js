import "../../style.css";
import React from "react";
import { useState } from "react";

import { Button, Row, Col, Form, DatePicker, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import RoomGuestDropDown from "./RoomGuestDropDown";

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
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_428_3123" fill="white">
                    <path d="M12.5 5.5H9V2C9 1.60218 8.84196 1.22064 8.56066 0.93934C8.27936 0.658035 7.89782 0.5 7.5 0.5H1.5C1.10218 0.5 0.720644 0.658035 0.43934 0.93934C0.158035 1.22064 0 1.60218 0 2V15C0 15.1326 0.0526784 15.2598 0.146447 15.3536C0.240215 15.4473 0.367392 15.5 0.5 15.5H3.75C3.8163 15.5 3.87989 15.4737 3.92678 15.4268C3.97366 15.3799 4 15.3163 4 15.25V13.0141C4 12.745 4.20687 12.5141 4.47594 12.5006C4.54354 12.4974 4.6111 12.5079 4.67453 12.5315C4.73796 12.5551 4.79593 12.5914 4.84492 12.6381C4.89392 12.6848 4.93293 12.7409 4.95959 12.8031C4.98625 12.8653 4.99999 12.9323 5 13V15.25C5 15.3163 5.02634 15.3799 5.07322 15.4268C5.12011 15.4737 5.1837 15.5 5.25 15.5H13.5C13.6326 15.5 13.7598 15.4473 13.8536 15.3536C13.9473 15.2598 14 15.1326 14 15V7C14 6.60218 13.842 6.22064 13.5607 5.93934C13.2794 5.65804 12.8978 5.5 12.5 5.5V5.5ZM2.065 13.4959C1.96145 13.5095 1.85625 13.4903 1.76418 13.441C1.67211 13.3917 1.59778 13.3148 1.55163 13.2211C1.50548 13.1274 1.48982 13.0216 1.50686 12.9186C1.52389 12.8156 1.57276 12.7205 1.64661 12.6466C1.72045 12.5728 1.81557 12.5239 1.91861 12.5069C2.02164 12.4898 2.12743 12.5055 2.22111 12.5516C2.3148 12.5978 2.39168 12.6721 2.44097 12.7642C2.49026 12.8563 2.50948 12.9614 2.49594 13.065C2.48165 13.1743 2.43165 13.2758 2.35371 13.3537C2.27578 13.4316 2.17428 13.4816 2.065 13.4959V13.4959ZM2.065 10.9959C1.96145 11.0095 1.85625 10.9903 1.76418 10.941C1.67211 10.8917 1.59778 10.8148 1.55163 10.7211C1.50548 10.6274 1.48982 10.5216 1.50686 10.4186C1.52389 10.3156 1.57276 10.2205 1.64661 10.1466C1.72045 10.0728 1.81557 10.0239 1.91861 10.0069C2.02164 9.98982 2.12743 10.0055 2.22111 10.0516C2.3148 10.0978 2.39168 10.1721 2.44097 10.2642C2.49026 10.3563 2.50948 10.4614 2.49594 10.565C2.48165 10.6743 2.43165 10.7758 2.35371 10.8537C2.27578 10.9316 2.17428 10.9816 2.065 10.9959V10.9959ZM2.065 8.49594C1.96145 8.50948 1.85625 8.49026 1.76418 8.44097C1.67211 8.39168 1.59778 8.3148 1.55163 8.22111C1.50548 8.12743 1.48982 8.02164 1.50686 7.91861C1.52389 7.81557 1.57276 7.72045 1.64661 7.64661C1.72045 7.57276 1.81557 7.52389 1.91861 7.50686C2.02164 7.48982 2.12743 7.50548 2.22111 7.55163C2.3148 7.59778 2.39168 7.67211 2.44097 7.76418C2.49026 7.85625 2.50948 7.96145 2.49594 8.065C2.48165 8.17428 2.43165 8.27578 2.35371 8.35371C2.27578 8.43165 2.17428 8.48164 2.065 8.49594V8.49594ZM2.065 5.99594C1.96145 6.00948 1.85625 5.99026 1.76418 5.94097C1.67211 5.89168 1.59778 5.8148 1.55163 5.72111C1.50548 5.62743 1.48982 5.52164 1.50686 5.41861C1.52389 5.31557 1.57276 5.22045 1.64661 5.14661C1.72045 5.07276 1.81557 5.02389 1.91861 5.00686C2.02164 4.98982 2.12743 5.00548 2.22111 5.05163C2.3148 5.09778 2.39168 5.17211 2.44097 5.26418C2.49026 5.35625 2.50948 5.46145 2.49594 5.565C2.48165 5.67428 2.43165 5.77578 2.35371 5.85371C2.27578 5.93165 2.17428 5.98164 2.065 5.99594V5.99594ZM2.065 3.49594C1.96145 3.50948 1.85625 3.49026 1.76418 3.44097C1.67211 3.39168 1.59778 3.3148 1.55163 3.22111C1.50548 3.12743 1.48982 3.02164 1.50686 2.91861C1.52389 2.81557 1.57276 2.72045 1.64661 2.64661C1.72045 2.57276 1.81557 2.52389 1.91861 2.50686C2.02164 2.48982 2.12743 2.50548 2.22111 2.55163C2.3148 2.59778 2.39168 2.67211 2.44097 2.76418C2.49026 2.85625 2.50948 2.96145 2.49594 3.065C2.48165 3.17428 2.43165 3.27578 2.35371 3.35371C2.27578 3.43165 2.17428 3.48165 2.065 3.49594V3.49594ZM4.565 10.9959C4.46145 11.0095 4.35625 10.9903 4.26418 10.941C4.17211 10.8917 4.09778 10.8148 4.05163 10.7211C4.00548 10.6274 3.98982 10.5216 4.00686 10.4186C4.02389 10.3156 4.07276 10.2205 4.14661 10.1466C4.22045 10.0728 4.31557 10.0239 4.41861 10.0069C4.52164 9.98982 4.62743 10.0055 4.72111 10.0516C4.8148 10.0978 4.89168 10.1721 4.94097 10.2642C4.99026 10.3563 5.00948 10.4614 4.99594 10.565C4.98164 10.6743 4.93165 10.7758 4.85371 10.8537C4.77578 10.9316 4.67428 10.9816 4.565 10.9959V10.9959ZM4.565 8.49594C4.46145 8.50948 4.35625 8.49026 4.26418 8.44097C4.17211 8.39168 4.09778 8.3148 4.05163 8.22111C4.00548 8.12743 3.98982 8.02164 4.00686 7.91861C4.02389 7.81557 4.07276 7.72045 4.14661 7.64661C4.22045 7.57276 4.31557 7.52389 4.41861 7.50686C4.52164 7.48982 4.62743 7.50548 4.72111 7.55163C4.8148 7.59778 4.89168 7.67211 4.94097 7.76418C4.99026 7.85625 5.00948 7.96145 4.99594 8.065C4.98164 8.17428 4.93165 8.27578 4.85371 8.35371C4.77578 8.43165 4.67428 8.48164 4.565 8.49594V8.49594ZM4.565 5.99594C4.46145 6.00948 4.35625 5.99026 4.26418 5.94097C4.17211 5.89168 4.09778 5.8148 4.05163 5.72111C4.00548 5.62743 3.98982 5.52164 4.00686 5.41861C4.02389 5.31557 4.07276 5.22045 4.14661 5.14661C4.22045 5.07276 4.31557 5.02389 4.41861 5.00686C4.52164 4.98982 4.62743 5.00548 4.72111 5.05163C4.8148 5.09778 4.89168 5.17211 4.94097 5.26418C4.99026 5.35625 5.00948 5.46145 4.99594 5.565C4.98164 5.67428 4.93165 5.77578 4.85371 5.85371C4.77578 5.93165 4.67428 5.98164 4.565 5.99594V5.99594ZM4.565 3.49594C4.46145 3.50948 4.35625 3.49026 4.26418 3.44097C4.17211 3.39168 4.09778 3.3148 4.05163 3.22111C4.00548 3.12743 3.98982 3.02164 4.00686 2.91861C4.02389 2.81557 4.07276 2.72045 4.14661 2.64661C4.22045 2.57276 4.31557 2.52389 4.41861 2.50686C4.52164 2.48982 4.62743 2.50548 4.72111 2.55163C4.8148 2.59778 4.89168 2.67211 4.94097 2.76418C4.99026 2.85625 5.00948 2.96145 4.99594 3.065C4.98164 3.17428 4.93165 3.27578 4.85371 3.35371C4.77578 3.43165 4.67428 3.48165 4.565 3.49594V3.49594ZM7.065 13.4959C6.96145 13.5095 6.85625 13.4903 6.76418 13.441C6.67211 13.3917 6.59778 13.3148 6.55163 13.2211C6.50548 13.1274 6.48982 13.0216 6.50686 12.9186C6.52389 12.8156 6.57276 12.7205 6.64661 12.6466C6.72045 12.5728 6.81557 12.5239 6.91861 12.5069C7.02164 12.4898 7.12743 12.5055 7.22111 12.5516C7.3148 12.5978 7.39168 12.6721 7.44097 12.7642C7.49026 12.8563 7.50948 12.9614 7.49594 13.065C7.48164 13.1743 7.43165 13.2758 7.35371 13.3537C7.27578 13.4316 7.17428 13.4816 7.065 13.4959V13.4959ZM7.065 10.9959C6.96145 11.0095 6.85625 10.9903 6.76418 10.941C6.67211 10.8917 6.59778 10.8148 6.55163 10.7211C6.50548 10.6274 6.48982 10.5216 6.50686 10.4186C6.52389 10.3156 6.57276 10.2205 6.64661 10.1466C6.72045 10.0728 6.81557 10.0239 6.91861 10.0069C7.02164 9.98982 7.12743 10.0055 7.22111 10.0516C7.3148 10.0978 7.39168 10.1721 7.44097 10.2642C7.49026 10.3563 7.50948 10.4614 7.49594 10.565C7.48164 10.6743 7.43165 10.7758 7.35371 10.8537C7.27578 10.9316 7.17428 10.9816 7.065 10.9959V10.9959ZM7.065 8.49594C6.96145 8.50948 6.85625 8.49026 6.76418 8.44097C6.67211 8.39168 6.59778 8.3148 6.55163 8.22111C6.50548 8.12743 6.48982 8.02164 6.50686 7.91861C6.52389 7.81557 6.57276 7.72045 6.64661 7.64661C6.72045 7.57276 6.81557 7.52389 6.91861 7.50686C7.02164 7.48982 7.12743 7.50548 7.22111 7.55163C7.3148 7.59778 7.39168 7.67211 7.44097 7.76418C7.49026 7.85625 7.50948 7.96145 7.49594 8.065C7.48164 8.17428 7.43165 8.27578 7.35371 8.35371C7.27578 8.43165 7.17428 8.48164 7.065 8.49594V8.49594ZM7.065 5.99594C6.96145 6.00948 6.85625 5.99026 6.76418 5.94097C6.67211 5.89168 6.59778 5.8148 6.55163 5.72111C6.50548 5.62743 6.48982 5.52164 6.50686 5.41861C6.52389 5.31557 6.57276 5.22045 6.64661 5.14661C6.72045 5.07276 6.81557 5.02389 6.91861 5.00686C7.02164 4.98982 7.12743 5.00548 7.22111 5.05163C7.3148 5.09778 7.39168 5.17211 7.44097 5.26418C7.49026 5.35625 7.50948 5.46145 7.49594 5.565C7.48164 5.67428 7.43165 5.77578 7.35371 5.85371C7.27578 5.93165 7.17428 5.98164 7.065 5.99594V5.99594ZM7.065 3.49594C6.96145 3.50948 6.85625 3.49026 6.76418 3.44097C6.67211 3.39168 6.59778 3.3148 6.55163 3.22111C6.50548 3.12743 6.48982 3.02164 6.50686 2.91861C6.52389 2.81557 6.57276 2.72045 6.64661 2.64661C6.72045 2.57276 6.81557 2.52389 6.91861 2.50686C7.02164 2.48982 7.12743 2.50548 7.22111 2.55163C7.3148 2.59778 7.39168 2.67211 7.44097 2.76418C7.49026 2.85625 7.50948 2.96145 7.49594 3.065C7.48164 3.17428 7.43165 3.27578 7.35371 3.35371C7.27578 3.43165 7.17428 3.48165 7.065 3.49594V3.49594ZM12.875 14.5H9V6.5H12.5C12.6326 6.5 12.7598 6.55268 12.8536 6.64645C12.9473 6.74021 13 6.86739 13 7V14.375C13 14.4082 12.9868 14.4399 12.9634 14.4634C12.9399 14.4868 12.9082 14.5 12.875 14.5Z" />
                  </mask>
                  <path
                    d="M12.5 5.5H9V2C9 1.60218 8.84196 1.22064 8.56066 0.93934C8.27936 0.658035 7.89782 0.5 7.5 0.5H1.5C1.10218 0.5 0.720644 0.658035 0.43934 0.93934C0.158035 1.22064 0 1.60218 0 2V15C0 15.1326 0.0526784 15.2598 0.146447 15.3536C0.240215 15.4473 0.367392 15.5 0.5 15.5H3.75C3.8163 15.5 3.87989 15.4737 3.92678 15.4268C3.97366 15.3799 4 15.3163 4 15.25V13.0141C4 12.745 4.20687 12.5141 4.47594 12.5006C4.54354 12.4974 4.6111 12.5079 4.67453 12.5315C4.73796 12.5551 4.79593 12.5914 4.84492 12.6381C4.89392 12.6848 4.93293 12.7409 4.95959 12.8031C4.98625 12.8653 4.99999 12.9323 5 13V15.25C5 15.3163 5.02634 15.3799 5.07322 15.4268C5.12011 15.4737 5.1837 15.5 5.25 15.5H13.5C13.6326 15.5 13.7598 15.4473 13.8536 15.3536C13.9473 15.2598 14 15.1326 14 15V7C14 6.60218 13.842 6.22064 13.5607 5.93934C13.2794 5.65804 12.8978 5.5 12.5 5.5V5.5ZM2.065 13.4959C1.96145 13.5095 1.85625 13.4903 1.76418 13.441C1.67211 13.3917 1.59778 13.3148 1.55163 13.2211C1.50548 13.1274 1.48982 13.0216 1.50686 12.9186C1.52389 12.8156 1.57276 12.7205 1.64661 12.6466C1.72045 12.5728 1.81557 12.5239 1.91861 12.5069C2.02164 12.4898 2.12743 12.5055 2.22111 12.5516C2.3148 12.5978 2.39168 12.6721 2.44097 12.7642C2.49026 12.8563 2.50948 12.9614 2.49594 13.065C2.48165 13.1743 2.43165 13.2758 2.35371 13.3537C2.27578 13.4316 2.17428 13.4816 2.065 13.4959V13.4959ZM2.065 10.9959C1.96145 11.0095 1.85625 10.9903 1.76418 10.941C1.67211 10.8917 1.59778 10.8148 1.55163 10.7211C1.50548 10.6274 1.48982 10.5216 1.50686 10.4186C1.52389 10.3156 1.57276 10.2205 1.64661 10.1466C1.72045 10.0728 1.81557 10.0239 1.91861 10.0069C2.02164 9.98982 2.12743 10.0055 2.22111 10.0516C2.3148 10.0978 2.39168 10.1721 2.44097 10.2642C2.49026 10.3563 2.50948 10.4614 2.49594 10.565C2.48165 10.6743 2.43165 10.7758 2.35371 10.8537C2.27578 10.9316 2.17428 10.9816 2.065 10.9959V10.9959ZM2.065 8.49594C1.96145 8.50948 1.85625 8.49026 1.76418 8.44097C1.67211 8.39168 1.59778 8.3148 1.55163 8.22111C1.50548 8.12743 1.48982 8.02164 1.50686 7.91861C1.52389 7.81557 1.57276 7.72045 1.64661 7.64661C1.72045 7.57276 1.81557 7.52389 1.91861 7.50686C2.02164 7.48982 2.12743 7.50548 2.22111 7.55163C2.3148 7.59778 2.39168 7.67211 2.44097 7.76418C2.49026 7.85625 2.50948 7.96145 2.49594 8.065C2.48165 8.17428 2.43165 8.27578 2.35371 8.35371C2.27578 8.43165 2.17428 8.48164 2.065 8.49594V8.49594ZM2.065 5.99594C1.96145 6.00948 1.85625 5.99026 1.76418 5.94097C1.67211 5.89168 1.59778 5.8148 1.55163 5.72111C1.50548 5.62743 1.48982 5.52164 1.50686 5.41861C1.52389 5.31557 1.57276 5.22045 1.64661 5.14661C1.72045 5.07276 1.81557 5.02389 1.91861 5.00686C2.02164 4.98982 2.12743 5.00548 2.22111 5.05163C2.3148 5.09778 2.39168 5.17211 2.44097 5.26418C2.49026 5.35625 2.50948 5.46145 2.49594 5.565C2.48165 5.67428 2.43165 5.77578 2.35371 5.85371C2.27578 5.93165 2.17428 5.98164 2.065 5.99594V5.99594ZM2.065 3.49594C1.96145 3.50948 1.85625 3.49026 1.76418 3.44097C1.67211 3.39168 1.59778 3.3148 1.55163 3.22111C1.50548 3.12743 1.48982 3.02164 1.50686 2.91861C1.52389 2.81557 1.57276 2.72045 1.64661 2.64661C1.72045 2.57276 1.81557 2.52389 1.91861 2.50686C2.02164 2.48982 2.12743 2.50548 2.22111 2.55163C2.3148 2.59778 2.39168 2.67211 2.44097 2.76418C2.49026 2.85625 2.50948 2.96145 2.49594 3.065C2.48165 3.17428 2.43165 3.27578 2.35371 3.35371C2.27578 3.43165 2.17428 3.48165 2.065 3.49594V3.49594ZM4.565 10.9959C4.46145 11.0095 4.35625 10.9903 4.26418 10.941C4.17211 10.8917 4.09778 10.8148 4.05163 10.7211C4.00548 10.6274 3.98982 10.5216 4.00686 10.4186C4.02389 10.3156 4.07276 10.2205 4.14661 10.1466C4.22045 10.0728 4.31557 10.0239 4.41861 10.0069C4.52164 9.98982 4.62743 10.0055 4.72111 10.0516C4.8148 10.0978 4.89168 10.1721 4.94097 10.2642C4.99026 10.3563 5.00948 10.4614 4.99594 10.565C4.98164 10.6743 4.93165 10.7758 4.85371 10.8537C4.77578 10.9316 4.67428 10.9816 4.565 10.9959V10.9959ZM4.565 8.49594C4.46145 8.50948 4.35625 8.49026 4.26418 8.44097C4.17211 8.39168 4.09778 8.3148 4.05163 8.22111C4.00548 8.12743 3.98982 8.02164 4.00686 7.91861C4.02389 7.81557 4.07276 7.72045 4.14661 7.64661C4.22045 7.57276 4.31557 7.52389 4.41861 7.50686C4.52164 7.48982 4.62743 7.50548 4.72111 7.55163C4.8148 7.59778 4.89168 7.67211 4.94097 7.76418C4.99026 7.85625 5.00948 7.96145 4.99594 8.065C4.98164 8.17428 4.93165 8.27578 4.85371 8.35371C4.77578 8.43165 4.67428 8.48164 4.565 8.49594V8.49594ZM4.565 5.99594C4.46145 6.00948 4.35625 5.99026 4.26418 5.94097C4.17211 5.89168 4.09778 5.8148 4.05163 5.72111C4.00548 5.62743 3.98982 5.52164 4.00686 5.41861C4.02389 5.31557 4.07276 5.22045 4.14661 5.14661C4.22045 5.07276 4.31557 5.02389 4.41861 5.00686C4.52164 4.98982 4.62743 5.00548 4.72111 5.05163C4.8148 5.09778 4.89168 5.17211 4.94097 5.26418C4.99026 5.35625 5.00948 5.46145 4.99594 5.565C4.98164 5.67428 4.93165 5.77578 4.85371 5.85371C4.77578 5.93165 4.67428 5.98164 4.565 5.99594V5.99594ZM4.565 3.49594C4.46145 3.50948 4.35625 3.49026 4.26418 3.44097C4.17211 3.39168 4.09778 3.3148 4.05163 3.22111C4.00548 3.12743 3.98982 3.02164 4.00686 2.91861C4.02389 2.81557 4.07276 2.72045 4.14661 2.64661C4.22045 2.57276 4.31557 2.52389 4.41861 2.50686C4.52164 2.48982 4.62743 2.50548 4.72111 2.55163C4.8148 2.59778 4.89168 2.67211 4.94097 2.76418C4.99026 2.85625 5.00948 2.96145 4.99594 3.065C4.98164 3.17428 4.93165 3.27578 4.85371 3.35371C4.77578 3.43165 4.67428 3.48165 4.565 3.49594V3.49594ZM7.065 13.4959C6.96145 13.5095 6.85625 13.4903 6.76418 13.441C6.67211 13.3917 6.59778 13.3148 6.55163 13.2211C6.50548 13.1274 6.48982 13.0216 6.50686 12.9186C6.52389 12.8156 6.57276 12.7205 6.64661 12.6466C6.72045 12.5728 6.81557 12.5239 6.91861 12.5069C7.02164 12.4898 7.12743 12.5055 7.22111 12.5516C7.3148 12.5978 7.39168 12.6721 7.44097 12.7642C7.49026 12.8563 7.50948 12.9614 7.49594 13.065C7.48164 13.1743 7.43165 13.2758 7.35371 13.3537C7.27578 13.4316 7.17428 13.4816 7.065 13.4959V13.4959ZM7.065 10.9959C6.96145 11.0095 6.85625 10.9903 6.76418 10.941C6.67211 10.8917 6.59778 10.8148 6.55163 10.7211C6.50548 10.6274 6.48982 10.5216 6.50686 10.4186C6.52389 10.3156 6.57276 10.2205 6.64661 10.1466C6.72045 10.0728 6.81557 10.0239 6.91861 10.0069C7.02164 9.98982 7.12743 10.0055 7.22111 10.0516C7.3148 10.0978 7.39168 10.1721 7.44097 10.2642C7.49026 10.3563 7.50948 10.4614 7.49594 10.565C7.48164 10.6743 7.43165 10.7758 7.35371 10.8537C7.27578 10.9316 7.17428 10.9816 7.065 10.9959V10.9959ZM7.065 8.49594C6.96145 8.50948 6.85625 8.49026 6.76418 8.44097C6.67211 8.39168 6.59778 8.3148 6.55163 8.22111C6.50548 8.12743 6.48982 8.02164 6.50686 7.91861C6.52389 7.81557 6.57276 7.72045 6.64661 7.64661C6.72045 7.57276 6.81557 7.52389 6.91861 7.50686C7.02164 7.48982 7.12743 7.50548 7.22111 7.55163C7.3148 7.59778 7.39168 7.67211 7.44097 7.76418C7.49026 7.85625 7.50948 7.96145 7.49594 8.065C7.48164 8.17428 7.43165 8.27578 7.35371 8.35371C7.27578 8.43165 7.17428 8.48164 7.065 8.49594V8.49594ZM7.065 5.99594C6.96145 6.00948 6.85625 5.99026 6.76418 5.94097C6.67211 5.89168 6.59778 5.8148 6.55163 5.72111C6.50548 5.62743 6.48982 5.52164 6.50686 5.41861C6.52389 5.31557 6.57276 5.22045 6.64661 5.14661C6.72045 5.07276 6.81557 5.02389 6.91861 5.00686C7.02164 4.98982 7.12743 5.00548 7.22111 5.05163C7.3148 5.09778 7.39168 5.17211 7.44097 5.26418C7.49026 5.35625 7.50948 5.46145 7.49594 5.565C7.48164 5.67428 7.43165 5.77578 7.35371 5.85371C7.27578 5.93165 7.17428 5.98164 7.065 5.99594V5.99594ZM7.065 3.49594C6.96145 3.50948 6.85625 3.49026 6.76418 3.44097C6.67211 3.39168 6.59778 3.3148 6.55163 3.22111C6.50548 3.12743 6.48982 3.02164 6.50686 2.91861C6.52389 2.81557 6.57276 2.72045 6.64661 2.64661C6.72045 2.57276 6.81557 2.52389 6.91861 2.50686C7.02164 2.48982 7.12743 2.50548 7.22111 2.55163C7.3148 2.59778 7.39168 2.67211 7.44097 2.76418C7.49026 2.85625 7.50948 2.96145 7.49594 3.065C7.48164 3.17428 7.43165 3.27578 7.35371 3.35371C7.27578 3.43165 7.17428 3.48165 7.065 3.49594V3.49594ZM12.875 14.5H9V6.5H12.5C12.6326 6.5 12.7598 6.55268 12.8536 6.64645C12.9473 6.74021 13 6.86739 13 7V14.375C13 14.4082 12.9868 14.4399 12.9634 14.4634C12.9399 14.4868 12.9082 14.5 12.875 14.5Z"
                    fill="black"
                    stroke="#112211"
                    strokeWidth="0.09375"
                    mask="url(#path-1-inside-1_428_3123)"
                  />
                </svg>
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
