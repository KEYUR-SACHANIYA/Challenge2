import React from "react";
import { Image, Typography } from "antd";
import logo from "../assets/images/Vector.jpg";
import { SecondaryTitle } from "../components/SecondaryTitle";
import { PrimaryTitle } from "../components/PrimaryTitle";

export const Logo = ({ color }) => {
  return (
    <div style={{ display: "inline-flex" }}>
      <Image src={logo} alt="logo" />
      <div style={{ marginLeft: "10px" }}>
        <PrimaryTitle
          style={{ fontSize: "45px", lineHeight: "53px", color: color }}
        >
          STAR
        </PrimaryTitle>
        <SecondaryTitle
          style={{
            fontWeight: "700",
            fontSize: "8px",
            lineHeight: "10px",
            letterSpacing: "0.185em",
            margin: 0,
            textAlign: "justify",
            color: color,
          }}
        >
          SALES & MARKETING
        </SecondaryTitle>
      </div>
    </div>
  );
};
