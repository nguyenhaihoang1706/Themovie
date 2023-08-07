import React from "react";
import { Progress, Space } from "antd";

import "./style.scss";

const Rating = ({ rating }) => {
  return (
    <Space wrap>
      <Progress
        className="ant-progress-text ant-progress-circle-gradient"
        showInfo
        type="circle"
        percent={rating}
        strokeColor={{
          "0%": "#108ee9",
          "10%": "#87d068",
        }}
        size="small"
      />
    </Space>
  );
};

export default Rating;
