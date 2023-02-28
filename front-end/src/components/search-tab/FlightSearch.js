import React from "react";
import { useState } from "react";

import { Button, Row, Col, Form, DatePicker, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import PassengerClassDropDown from "./PassengerClassDropDown";
import { PaperPlane } from "../../assets/icon-components/IconComponent";

const { RangePicker } = DatePicker;

const flightOptions = [
  { value: "Hanoi", label: "Hanoi" },
  { value: "Ho Chi Minh City", label: "Ho Chi Minh City" },
  { value: "Singapore", label: "Singapore" },
  { value: "Thailand", label: "Thailand" },
  { value: "China", label: "China" },
];

// Export Flight Search Bar Component
export function FlightSearchBar() {
  const [countPassenger, setCountPassenger] = useState(0);
  const [open, setOpen] = useState(false);
  const [classTicket, setClassTicket] = useState("Economy");

  const increasePassenger = () => {
    console.log(countPassenger);
    setCountPassenger(countPassenger + 1);
  };
  const decreasePassenger = () => {
    if (countPassenger > 0) {
      setCountPassenger(countPassenger - 1);
    }
  };

  const selectClass = (value) => {
    setClassTicket(value);
    console.log(value);
  };
  return (
    <>
      <Col span={4}>
        <div
          style={{
            position: "relative",
          }}
        >
          <span className="label-text">From</span>
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
          <span className="label-text">To</span>
          <Select
            size="large"
            style={{ width: "100%" }}
            showSearch
            value="Ho Chi Minh City"
            options={flightOptions}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
          />
        </div>
      </Col>
      <Col span={4}>
        <div style={{ position: "relative" }}>
          <span className="label-text">Trip</span>
          <Select
            size="large"
            style={{ width: "100%" }}
            value="One-way"
            options={[
              { value: "Round-trip", label: "Round-trip" },
              { value: "One-way", label: "One-way" },
            ]}
          />
        </div>
      </Col>
      <Col span={6}>
        <div style={{ position: "relative" }}>
          <span className="label-text">Depart - Return</span>
          <RangePicker size="large" />
        </div>
      </Col>
      <Col span={6}>
        <div style={{ position: "relative" }}>
          <span className="label-text">Passenger - Class</span>
          <Select
            size="large"
            value={`${countPassenger} Passenger, ${classTicket}`}
            open={open}
            onDropdownVisibleChange={(visible) => setOpen(visible)}
            dropdownRender={() => (
              <PassengerClassDropDown
                setCountPassenger={setCountPassenger}
                countPassenger={countPassenger}
                increasePassenger={increasePassenger}
                decreasePassenger={decreasePassenger}
                selectClass={selectClass}
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

const FlightSearch = () => {
  return (
    <div className="flight-search tab-items">
      <Form>
        <Row gutter={[16, 24]}>
          <FlightSearchBar />

          {/*  Button add promo code and show bubmit Form */}
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
                <PaperPlane />
                &nbsp; Show Flights
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default FlightSearch;
