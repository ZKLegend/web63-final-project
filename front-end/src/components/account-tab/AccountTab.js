import { Tabs } from "antd";

import "./AccountTab.css";

import AccountHistory from "../account-history/AccountHistory";
import AccountInfo from "../account-info/AccountInfo";
import AccountPayment from "../account-payment/AccountPayment";

const AccountTab = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: <h2 className="montserrat-semibold-16px">Account</h2>,
      children: <AccountInfo />,
    },
    {
      key: "2",
      label: <h2 className="montserrat-semibold-16px">History</h2>,
      children: <AccountHistory />,
    },
    {
      key: "3",
      label: <h2 className="montserrat-semibold-16px">Payment methods</h2>,
      children: <AccountPayment />,
    },
  ];
  return (
    <Tabs
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
      centered={true}
      tabBarGutter="300px"
      tabBarStyle={{
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 4px 16px rgba(17, 34, 17, 0.05)",
        borderRadius: "12px",
      }}
    />
  );
};
export default AccountTab;
