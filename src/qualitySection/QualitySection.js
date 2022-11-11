import React from "react";
import { Col, Image, Row } from "antd";
import { PrimaryTitle } from "../components/PrimaryTitle";
import { SecondaryTitle } from "../components/SecondaryTitle";
import qualityImage from "../assets/images/male-worker.jpg";

export const QualitySection = () => {
  return (
    <div>
      <Row>
        <Col xs={24} lg={10}>
          <Image
            src={qualityImage}
            alt="Quality"
            width="100%"
            height="100%"
            preview={false}
          />
        </Col>
        <Col
          xs={24}
          lg={14}
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
            <PrimaryTitle style={{ color: "#FFFFFF" }}>
              WHY CHOOSE US?
            </PrimaryTitle>
            <SecondaryTitle style={{ color: "#FFFFFF", fontSize: "30px" }}>
              QUALITY THAT MATTERS
            </SecondaryTitle>
            <SecondaryTitle style={{ color: "#FFFFFF" }}>
              We are highly concerned about supplying goods of highest quality
              to our customers so that they reward us with repeat orders. Our
              expertise and experience help us to provide you only the best
              quality products. A group of product analysts is with us to define
              the high standard of our products while our dedicated workers
              assure timely delivery. We have also set up a web based interface
              to facilitate better communication with clients and the company.
            </SecondaryTitle>
          </div>
        </Col>
      </Row>
    </div>
  );
};
