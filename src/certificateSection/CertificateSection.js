import React from "react";
import { Col, Image, Row } from "antd";
import { PrimaryTitle } from "../components/PrimaryTitle";
import { SecondaryTitle } from "../components/SecondaryTitle";
import certificate1 from "../assets/images/certificate1.jpg";
import certificate2 from "../assets/images/certificate2.jpg";
import certificate3 from "../assets/images/certificate3.jpg";
import certificate4 from "../assets/images/certificate4.jpg";

export const CertificateSection = () => {
  return (
    <div className="primary-container">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign:"center"
        }}
      >
        <SecondaryTitle>PRODUCTS FOR YOUR INDUSTRIAL NEEDS</SecondaryTitle>
        <PrimaryTitle>Certified Business</PrimaryTitle>
      </div>
      <Row
        justify="space-evenly"
        alignItems="center"
        style={{ marginTop: "3rem" }}
        gutter={[10,10]}
      >
        <Col xs={10} sm={6} lg={4}>
          <Image src={certificate1} alt="certificate" />
        </Col>
        <Col xs={10} sm={6} lg={4}>
          <Image src={certificate2} alt="certificate" />
        </Col>
        <Col xs={10} sm={6} lg={4}>
          <Image src={certificate3} alt="certificate" />
        </Col>
        <Col xs={10} sm={6} lg={4}>
          <Image src={certificate4} alt="certificate" />
        </Col>
      </Row>
    </div>
  );
};
