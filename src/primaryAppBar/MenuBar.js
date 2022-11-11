import React, { useState } from "react";
import { Tabs, Button, Dropdown, Menu } from "antd";
import { PicRightOutlined } from "@ant-design/icons";

export const MenuBar = () => {
  const [open, setOpen] = useState(false);
  const tabLists = [
    {
      label: `Home`,
      key: "1",
    },
    {
      label: `Products`,
      key: "2",
    },
    {
      label: `Clients`,
      key: "3",
    },
    {
      label: `About us`,
      key: "4",
    },
    {
      label: `Get in touch`,
      key: "5",
    },
  ];

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="rightside-navbar">
        <div className="rightside-navbar-tabs">
          <Tabs defaultActiveKey="1" direction="horizontal" items={tabLists} />
          <Button type="primary">Enquiry Now</Button>
        </div>
        <div className="rightside-navbar-menu-icon">
          <Dropdown
            overlay={
              <Menu>
                {tabLists.map(({ label, key }) => (
                  <Menu.Item key={key}>{label}</Menu.Item>
                ))}
              </Menu>
            }
            placement="bottomLeft"
            open={open}
          >
            <Button
              className="menuIcon"
              onClick={handleDrawer}
              icon={<PicRightOutlined />}
            ></Button>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};
