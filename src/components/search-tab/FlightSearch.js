import React from "react";
import { useState } from "react";

import { Button, Row, Col, Form, DatePicker, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import PassengerClassDropDown from "./PassengerClassDropDown";

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
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.9925 0.0715328L12.9925 0.0715461L0.491562 4.80311L0.483266 4.80625V4.80537C0.346169 4.85948 0.228717 4.95403 0.14657 5.07652C0.0632432 5.20077 0.0203037 5.34771 0.0236156 5.49728C0.0269276 5.64685 0.0763296 5.79175 0.165074 5.91219C0.25378 6.03258 0.377472 6.12266 0.519268 6.17015C0.519329 6.17017 0.519391 6.17019 0.519453 6.17021L0.531912 6.17416L0.534076 6.17485L0.534033 6.17495L4.82347 8.00663C4.90288 8.03051 4.98716 8.03325 5.06797 8.01458C5.14919 7.99582 5.22406 7.95608 5.28512 7.89933L12.1708 1.48337C12.1709 1.48327 12.171 1.48317 12.1711 1.48307C12.1937 1.46051 12.2205 1.44261 12.25 1.43038C12.2797 1.4181 12.3115 1.41178 12.3436 1.41178C12.3757 1.41178 12.4075 1.4181 12.4371 1.43038C12.4668 1.44267 12.4937 1.46067 12.5164 1.48337C12.5391 1.50606 12.5571 1.533 12.5694 1.56266C12.5817 1.59231 12.588 1.62409 12.588 1.65619C12.588 1.68828 12.5817 1.72007 12.5694 1.74972C12.5572 1.77924 12.5393 1.80608 12.5167 1.82872C12.5166 1.82881 12.5165 1.82891 12.5164 1.82901L6.10012 8.71152L12.9925 0.0715328ZM12.9925 0.0715328C13.1235 0.0217435 13.266 0.0108564 13.4029 0.0401821C13.5399 0.0695044 13.6654 0.13778 13.7645 0.236791M12.9925 0.0715328L13.7645 0.236791M13.7645 0.236791C13.8636 0.33626 13.9317 0.462305 13.9607 0.599682C13.9896 0.737059 13.9781 0.879884 13.9276 1.01088L13.9276 1.01102L9.19683 13.5081L13.7645 0.236791ZM8.46858 13.9999H8.49983C8.65427 14.0008 8.80542 13.9552 8.9336 13.8691C9.06178 13.7829 9.16108 13.6602 9.21858 13.5168L9.19666 13.5085L9.19674 13.5083C9.14097 13.6472 9.04474 13.7661 8.92052 13.8496C8.79624 13.9331 8.64971 13.9774 8.49996 13.9765H8.49983H8.4691M8.46858 13.9999L8.46963 13.9765C8.46945 13.9765 8.46928 13.9765 8.4691 13.9765M8.46858 13.9999V13.9765H8.4691M8.46858 13.9999C8.16264 13.9862 7.90952 13.7818 7.80952 13.4921C7.80733 13.4862 7.80545 13.4806 7.80358 13.4743L5.97077 9.18119M8.4691 13.9765C8.17379 13.963 7.92874 13.7657 7.83168 13.4845L7.83151 13.484C7.82949 13.4786 7.82777 13.4734 7.82603 13.4676L7.82617 13.4675L7.82513 13.4651L5.99283 9.17318M5.99283 9.17318C5.99295 9.17358 5.99307 9.17398 5.99319 9.17438L5.97077 9.18119M5.99283 9.17318C5.96895 9.09376 5.9662 9.00949 5.98487 8.92868C6.00363 8.84747 6.04336 8.7726 6.1001 8.71155L5.96204 8.9234C5.94235 9.00861 5.94536 9.0975 5.97077 9.18119M5.99283 9.17318L5.99232 9.17199L5.97077 9.18119"
                    fill="black"
                    stroke="#112211"
                    strokeWidth="0.046875"
                  />
                </svg>
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