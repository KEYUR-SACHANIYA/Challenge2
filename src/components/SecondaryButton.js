import { Button } from "antd";
import React from "react";

export const SecondaryButton = ({children, ...props}) => {
  return (
    <Button type="text" className="secondary-button" {...props}>
      {children}
    </Button>
  );
};
