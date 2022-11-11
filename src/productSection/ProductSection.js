import React from "react";
import { Col, Image, Row } from "antd";
import { PrimaryTitle } from "../components/PrimaryTitle";
import { SecondaryTitle } from "../components/SecondaryTitle";
import { PrimaryButton } from "../components/PrimaryButton";
import { SecondaryButton } from "../components/SecondaryButton";
import product1 from "../assets/images/product1.jpg";
import product2 from "../assets/images/product2.jpg";
import product3 from "../assets/images/product3.jpg";
import product4 from "../assets/images/product4.jpg";

export const ProductSection = () => {
  const productLists = [
    {
      id: 1,
      name: "ACIDIC RAMMING MASS",
      image: product1,
    },
    {
      id: 2,
      name: "SILICA RAMMING MASS",
      image: product2,
    },
    {
      id: 3,
      name: "NEUTRAL RAMMING MASS",
      image: product3,
    },
    {
      id: 4,
      name: "WHITE PREMIX RAMMING MASS",
      image: product4,
    },
  ];

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
          <SecondaryTitle>Products for your industrial needs</SecondaryTitle>
          <PrimaryTitle>Product Range</PrimaryTitle>
        </div>
        <SecondaryButton id="product-view-all">view all</SecondaryButton>
      </div>
      <Row gutter={[16, 16]} style={{ marginTop: "2rem" }}>
        {productLists.map((product) => (
          <Col
            key={product.id}
            xs={24}
            sm={12}
            lg={6}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Image src={product.image} alt={product.name} />
            <SecondaryTitle style={{ marginTop: "1rem", textAlign: "center" }}>
              {product.name}
            </SecondaryTitle>
            <PrimaryButton style={{ marginBottom: "1rem" }}>
              Enquiry now
            </PrimaryButton>
          </Col>
        ))}
      </Row>
    </div>
  );
};
