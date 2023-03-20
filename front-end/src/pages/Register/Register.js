import { useState } from "react";
import axios from "axios";
import { Row, Col, DatePicker } from "antd";
import { CustomLogo } from "../../assets/icon-components/IconComponent";
import pic1 from "../../assets/images/pic1.png";
import { Link, useNavigate } from "react-router-dom";

import { Button, Checkbox, Form, Input, Select } from "antd";
import "./register.css";
const Register = () => {
  const navigate = useNavigate();
  const { Option } = Select;
  const [birthday, setBirthday] = useState("");
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  const handleBirthday = (date, dateString) => {
    setBirthday(dateString);
  };

  const handleRegister = async (event) => {
    try {
      const data = {
        ...event,
        birthday: birthday,
        phoneNumber: `${event.prefix}${event.phoneNumber}`,
      };
      const response = await axios.post(
        `http://localhost:3001/api/user/register`,
        data
      );
      console.log(response);
      if (response.status === 200 && response.data) {
        navigate("/login");
      }
    } catch (err) {
      console.error(err);
    }
  };
  const [form] = Form.useForm();

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="84">+84</Option>
      </Select>
    </Form.Item>
  );
  return (
    <div className="register-container">
      <Row gutter={48}>
        <Col span={12}>
          <img src={pic1} alt="err" style={{ display: "block" }} />
        </Col>
        <Col span={12}>
          <h3 className="trade-gothic-lt-extended-bold-40px">Register</h3>
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={handleRegister}
            style={{ maxWidth: 600 }}
            scrollToFirstError
          >
            <Form.Item
              name="username"
              label="Username"
              tooltip="What do you want others to call you?"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="phoneNumber"
              label="Phone Number"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item
              name="birthday"
              label="Date of birth"
              rules={[
                { required: true, message: "Please input your date of birth" },
              ]}
            >
              <DatePicker onChange={handleBirthday} style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
              name="address"
              label="Address"
              rules={[{ required: true, message: "Please input Intro" }]}
            >
              <Input.TextArea />
            </Form.Item>

            <Form.Item
              name="gender"
              label="Gender"
              rules={[{ required: true, message: "Please select gender!" }]}
            >
              <Select placeholder="Select your gender">
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(new Error("Should accept agreement")),
                },
              ]}
              {...tailFormItemLayout}
            >
              <Checkbox>
                I agree to all the <a href="">Terms</a> and{" "}
                <a href="">Privacy Policies</a>
              </Checkbox>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button
                className="register-form-button"
                type="primary"
                htmlType="submit"
              >
                Register
              </Button>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <div className="login-navigate">
                Already have account? &nbsp;
                <Link className="login-register-link" to="/login">
                  Login
                </Link>
              </div>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
