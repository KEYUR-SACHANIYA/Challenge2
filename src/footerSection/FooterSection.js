import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { Col, Row, Input } from "antd";
import React, { useState } from "react";
import { PrimaryButton } from "../components/PrimaryButton";
import { PrimaryTitle } from "../components/PrimaryTitle";
import { SecondaryTitle } from "../components/SecondaryTitle";
import { Logo } from "../primaryAppBar/Logo";

const { TextArea } = Input;

export const FooterSection = () => {
  const [value, setValue] = useState("");
  const footerPrimaryTitleStyle = {
    fontSize: "20px",
    lineHeight: "23px",
    color: "#FFFFFF",
  };
  const footerSecondaryTitleStyle = {
    color: "#FFFFFF",
    lineHeight: "17px",
  };

  return (
    <div className="primary-container" style={{ background: "#373334" }}>
      <Row gutter={[20, 30]}>
        <Col xs={24} sm={12} lg={6}>
          <Logo color="white" />
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <PrimaryTitle style={footerPrimaryTitleStyle}>
            QUICK LINKS
          </PrimaryTitle>

          <SecondaryTitle style={footerSecondaryTitleStyle}>
            HOME PAGE
          </SecondaryTitle>
          <SecondaryTitle style={footerSecondaryTitleStyle}>
            COMPANY PROFILE
          </SecondaryTitle>
          <SecondaryTitle style={footerSecondaryTitleStyle}>
            PRODUCTS
          </SecondaryTitle>
          <SecondaryTitle style={footerSecondaryTitleStyle}>
            CONTACT US
          </SecondaryTitle>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <PrimaryTitle style={footerPrimaryTitleStyle}>
            FOLLOW US ON
          </PrimaryTitle>
          <Row gutter={[15]} style={{ margin: "1rem 0" }}>
            <Col style={{ color: "#FFFFFF" }}>
              <InstagramOutlined />
            </Col>
            <Col style={{ color: "#FFFFFF" }}>
              <LinkedinOutlined />
            </Col>
            <Col style={{ color: "#FFFFFF" }}>
              <FacebookOutlined />
            </Col>
          </Row>
          <SecondaryTitle style={footerSecondaryTitleStyle}>
            +91 85609 25410
          </SecondaryTitle>
          <SecondaryTitle style={footerSecondaryTitleStyle}>
            starsales@gmail.com
          </SecondaryTitle>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <PrimaryTitle style={footerPrimaryTitleStyle}>
            TELL US WHAT YOU ARE LOOKING FOR?
          </PrimaryTitle>
          <Row gutter={[10, 10]} style={{ marginTop: ".5rem" }}>
            <Col xs={24}>
              <TextArea
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Describe your requirement in detail"
                autoSize={{ minRows: 3, maxRows: 5 }}
                style={{ width: "100%" }}
              />
            </Col>
            <Col xs={12}>
              <Input placeholder="Full Name" />
            </Col>
            <Col xs={12}>
              <Input placeholder="Number" />
            </Col>
            <Col>
              <PrimaryButton>SUBMIT</PrimaryButton>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
