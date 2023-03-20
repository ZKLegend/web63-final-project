import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setIsLogin } from "../../redux/loginSlice";
import { Row, Col } from "antd";
import pic1 from "../../assets/images/pic1.png";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    console.log(event);
    try {
      const response = await axios.post(
        `http://localhost:3001/api/user/login`,
        event
      );
      console.log("Response from Login API:", response);
      if (response.status === 200 && response.data) {
        localStorage.setItem("token", response.data.token);
        dispatch(setIsLogin(true));
        navigate("/");
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="Loginframe">
      <Row gutter={48}>
        <Col span={12}>
          <h3 className="trade-gothic-lt-extended-bold-40px">Login</h3>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={handleLogin}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                size="large"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                size="large"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Link className="login-form-forgot" to="/forgotpass">
                Forgot password
              </Link>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button "
              >
                Log in
              </Button>{" "}
              <div className="sign-up-navigate">
                Don't have an account?{" "}
                <Link className="login-register-link" to="/register">
                  Sign up
                </Link>{" "}
              </div>{" "}
            </Form.Item>
          </Form>
        </Col>

        <img src={pic1} alt="err" />
      </Row>
    </div>
  );
};

export default Login;
