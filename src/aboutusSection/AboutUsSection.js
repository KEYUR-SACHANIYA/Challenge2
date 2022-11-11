import React from "react";
import { Col, Image, Row } from "antd";
import { PrimaryTitle } from "../components/PrimaryTitle";
import { SecondaryTitle } from "../components/SecondaryTitle";
import { PrimaryButton } from "../components/PrimaryButton";
import aboutUsImage from "../assets/images/young-worker.jpg";

export const AboutUsSection = () => {
  return (
    <div>
      <Row>
        <Col
          xs={24}
          lg={12}
          style={{
            display: "grid",
            placeItems: "center",
            padding: "50px",
            background: "#C00000",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <PrimaryTitle style={{ color: "#FFFFFF" }}>ABOUT US</PrimaryTitle>
            <SecondaryTitle style={{ color: "#FFFFFF" }}>
              We are highly concerned about supplying goods of highest quality
              to our customers so that they reward us with repeat orders. Our
              expertise and experience help us to provide you only the best
              quality products. We have set up a web based interface to
              facilitate better communication with clients and the company.
            </SecondaryTitle>
            <PrimaryButton
              style={{
                background: "#FFFFFF",
                color: "#373334",
                width: "fit-content",
                marginTop: "1.5rem",
              }}
            >
              LEARN MORE
            </PrimaryButton>
          </div>
        </Col>
        <Col xs={24} lg={12}>
          <Image
            src={aboutUsImage}
            alt="Quality"
            width="100%"
            height="100%"
            preview={false}
          />
        </Col>
      </Row>
    </div>
  );
};
