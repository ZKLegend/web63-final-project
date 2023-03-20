import "./AccountInfo.css";
import axios from "axios";
import { EditFilled } from "@ant-design/icons";
import { useEffect, useState } from "react";

const AccountInfo = () => {
  const token = localStorage.getItem("token");
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/user/getInfo`,
          { headers: { authToken: token } }
        );
        if (response.status === 200 && response.data) {
          setUserInfo(response.data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    getUserInfo();
  }, []);

  return (
    <div className="AccountInfo">
      <h1 className="trade-gothic-lt-extended-bold-32px">Account</h1>
      <div className="account-detail">
        <div className="account-detail-item">
          <div>
            <div className="montserrat-regular-16px" style={{ color: "gray" }}>
              Name
            </div>
            <h3 className="montserrat-medium-20px" style={{ margin: "4px 0" }}>
              {userInfo.username}
            </h3>
          </div>
          <div className="account-detail-buttonChange">
            <EditFilled />
            &nbsp;
            <span className="montserrat-medium">Change</span>
          </div>
        </div>
        <div className="account-detail-item">
          <div>
            <div className="montserrat-regular-16px" style={{ color: "gray" }}>
              Email
            </div>
            <h3 className="montserrat-medium-20px" style={{ margin: "4px 0" }}>
              {userInfo.email}
            </h3>
          </div>
          <div className="account-detail-buttonChange">
            <EditFilled />
            &nbsp;
            <span className="montserrat-medium">Change</span>
          </div>
        </div>
        <div className="account-detail-item">
          <div>
            <div className="montserrat-regular-16px" style={{ color: "gray" }}>
              Password
            </div>
            <h3 className="montserrat-medium-20px" style={{ margin: "4px 0" }}>
              **********
            </h3>
          </div>
          <div className="account-detail-buttonChange">
            <EditFilled />
            &nbsp;
            <span className="montserrat-medium">Change</span>
          </div>
        </div>
        <div className="account-detail-item">
          <div>
            <div className="montserrat-regular-16px" style={{ color: "gray" }}>
              Phone number
            </div>
            <h3 className="montserrat-medium-20px" style={{ margin: "4px 0" }}>
              {userInfo.phoneNumber}
            </h3>
          </div>
          <div className="account-detail-buttonChange">
            <EditFilled />
            &nbsp;
            <span className="montserrat-medium">Change</span>
          </div>
        </div>
        <div className="account-detail-item">
          <div>
            <div className="montserrat-regular-16px" style={{ color: "gray" }}>
              Address
            </div>
            <h3 className="montserrat-medium-20px" style={{ margin: "4px 0" }}>
              {userInfo.address}
            </h3>
          </div>
          <div className="account-detail-buttonChange">
            <EditFilled />
            &nbsp;
            <span className="montserrat-medium">Change</span>
          </div>
        </div>
        <div className="account-detail-item">
          <div>
            <div className="montserrat-regular-16px" style={{ color: "gray" }}>
              Date of birth
            </div>
            <h3 className="montserrat-medium-20px" style={{ margin: "4px 0" }}>
              {userInfo.birthday}
            </h3>
          </div>
          <div className="account-detail-buttonChange">
            <EditFilled />
            &nbsp;
            <span className="montserrat-medium">Change</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AccountInfo;
