import React from "react";
import { Col, Image, Row } from "antd";
import { PrimaryTitle } from "../components/PrimaryTitle";
import { SecondaryTitle } from "../components/SecondaryTitle";
import { SecondaryButton } from "../components/SecondaryButton";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import client1 from "../assets/images/client1.jpg";
import client2 from "../assets/images/client2.jpg";
import client3 from "../assets/images/client3.jpg";
import client4 from "../assets/images/client4.jpg";
import client5 from "../assets/images/client5.jpg";

export const ClientSection = () => {
  return (
    <div className="primary-container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: "75%" }}>
          <SecondaryTitle>
            SERVING THE REQUIREMENTS OF DOMESTIC AND MULTINATIONAL COMPANIES
          </SecondaryTitle>
          <PrimaryTitle>Our Clients over the years</PrimaryTitle>
        </div>
        <SecondaryButton id="product-view-all">view all</SecondaryButton>
      </div>
      <Row justify="space-evenly" alignItems="center" style={{marginTop: "4rem"}}>
        <Col xs={2} style={{ display: "grid", placeItems: "center" }}>
          <LeftOutlined />
        </Col>
        <Col xs={9} sm={6} lg={4}>
          <Image src={client1} alt="client" />
        </Col>
        <Col xs={0} lg={4}>
          <Image src={client2} alt="client" />
        </Col>
        <Col xs={9} sm={6} lg={4}>
          <Image src={client3} alt="client" />
        </Col>
        <Col xs={0} sm={6} lg={4}>
          <Image src={client4} alt="client" />
        </Col>
        <Col xs={0} lg={4}>
          <Image src={client5} alt="client" />
        </Col>
        <Col xs={2} style={{ display: "grid", placeItems: "center" }}>
          <RightOutlined />
        </Col>
      </Row>
    </div>
  );
};
