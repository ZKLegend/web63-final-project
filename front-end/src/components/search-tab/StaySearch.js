import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  setCountRoom,
  setCountGuest,
  setDate,
  setDestination,
} from "../../redux/paramsSlice";
import { useState, useEffect } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { Button, Row, Col, DatePicker, Select, InputNumber } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { BuildingIcon } from "../../assets/icon-components/IconComponent";

const { RangePicker } = DatePicker;

const StaySearch = () => {
  const params = useSelector((state) => state.params);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Listing Destination Options in Search Bar
  const [destinationOptions, setDestinationOptions] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/stay/destination")
      .then((result) => {
        setDestinationOptions(
          result.data.map((element) => {
            return { value: element.name, label: element.name };
          })
        );
      })
      .catch((err) => console.error(err));
  }, []);

  const getRoomNumber = (value) => {
    dispatch(setCountRoom(value));
  };

  const getGuestNumber = (value) => {
    dispatch(setCountGuest(value));
  };

  const selectDate = (date, dateString) => {
    dispatch(setDate({ checkIn: dateString[0], checkOut: dateString[1] }));
  };
  const selectDestination = (value) => {
    dispatch(setDestination(value));
  };

  const handleSearch = () => {
    navigate({
      pathname: "/hotel-listing",
      search: `?${createSearchParams(params)}`,
    });
  };

  return (
    <div className="stay-search tab-items">
      <Row gutter={[16, 24]}>
        <Col span={10}>
          <div
            style={{
              position: "relative",
            }}
          >
            <span className="label-text">Enter Destination</span>
            <Select
              onSelect={selectDestination}
              value={params.destination ? params.destination : null}
              size="large"
              style={{ width: "100%" }}
              showSearch
              placeholder="Hanoi"
              options={destinationOptions}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
            />
          </div>
        </Col>
        <Col span={8}>
          {" "}
          <div style={{ position: "relative" }}>
            <span className="label-text">Check in - Check out</span>
            <RangePicker
              style={{ width: "100%" }}
              size="large"
              onChange={selectDate}
            />
          </div>
        </Col>
        <Col span={3}>
          <div style={{ position: "relative" }}>
            <span className="label-text">Rooms</span>
            <InputNumber
              value={params.countRoom ? params.countRoom : null}
              min={0}
              defaultValue={0}
              size="large"
              style={{ width: "100%" }}
              onChange={getRoomNumber}
              onStep={getRoomNumber}
            />
          </div>
        </Col>
        <Col span={3}>
          <div style={{ position: "relative" }}>
            <span className="label-text">Guest</span>
            <InputNumber
              value={params.countGuest ? params.countGuest : null}
              min={params.countRoom ? params.countRoom : 0}
              defaultValue={0}
              size="large"
              style={{ width: "100%" }}
              onChange={getGuestNumber}
              onStep={getGuestNumber}
            />
          </div>
        </Col>
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
            <Button onClick={handleSearch} className="large-button">
              <BuildingIcon />
              &nbsp; Show Places
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default StaySearch;
