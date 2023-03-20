import { Col, Row } from "antd";

import "./Account.css";

import AccountAvatar from "../../components/account-avatar/AccountAvatar";
import AccountTab from "../../components/account-tab/AccountTab";

const Account = () => {
  return (
    <div className="Account">
      <Row style={{ padding: "0 104px", margin: "100px 0" }}>
        <Col span={24}>
          <AccountAvatar />
        </Col>
      </Row>
      <Row style={{ padding: "0 104px", marginTop: "190px" }}>
        <Col span={24}>
          <AccountTab />
        </Col>
      </Row>
    </div>
  );
};
export default Account;
