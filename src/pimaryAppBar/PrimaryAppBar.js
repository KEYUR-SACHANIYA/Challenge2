import React from "react";
import { Logo } from "./Logo";
import { MenuBar } from "./MenuBar";

export const PrimaryAppBar = () => {
  return (
    <nav className="navbar">
      <Logo color="brown" />
      <MenuBar />
    </nav>
  );
};
