import React from "react";
import { Typography } from "antd";
const Title = Typography.Title;

export const SecondaryTitle = ({ children, ...props }) => {
  return (
    <Title level={5} className="secondary-title" {...props}>
      {children}
    </Title>
  );
};
