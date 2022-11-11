import React from "react";
import { Image } from "antd";
import { PrimaryButton } from "../components/PrimaryButton";
import { PrimaryTitle } from "../components/PrimaryTitle";
import MainImage from "../assets/images/Industries.jpg";

export const MainSection = () => {
  return (
    <div style={{ display: "flex", placeItems: "center" }}>
      <div
        style={{ position: "absolute", zIndex: 100 }}
        className="primary-container"
      >
        <PrimaryTitle>Save Time!</PrimaryTitle>
        <PrimaryTitle>Get the best deal.</PrimaryTitle>
        <PrimaryButton style={{ marginTop: "1rem" }}>Enquiry now</PrimaryButton>
      </div>
      <Image src={MainImage} alt="MainImage" height="584px" preview={false} />
    </div>
  );
};
