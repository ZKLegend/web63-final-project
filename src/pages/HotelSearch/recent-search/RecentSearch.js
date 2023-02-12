import { Typography } from "antd";
import React from "react";

import RecentSearchCard from "./RecentSearchCard";

const { Title } = Typography;

const RecentSearch = () => {
  return (
    <>
      <Title style={{ margin: "0" }} level={3}>
        Your Recent Searchs
      </Title>
      <RecentSearchCard />
    </>
  );
};

export default RecentSearch;
