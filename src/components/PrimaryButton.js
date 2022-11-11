import { Button } from "antd";
import React from "react";

export const PrimaryButton = ({children, ...props}) => {
  return (
    <Button type="primary" danger className="primary-button" {...props}>
      {children}
    </Button>
  );
};
