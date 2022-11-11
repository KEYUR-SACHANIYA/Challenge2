import React from "react";
import { Typography } from "antd";
const Title = Typography.Title;

export const PrimaryTitle = ({ children, ...props }) => {
  return (
    <Title className="primary-title" {...props}>
      {children}
    </Title>
  );
};
