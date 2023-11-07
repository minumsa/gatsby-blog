import "./Nav.css";
import DarkMode from "./Nav/DarkMode";
import Hamburger from "./Nav/Hamburger";
import React from "react";

interface NavProps {
  page: React.ReactNode;
  info: React.ReactNode;
  dark: React.ReactNode;
}

const Nav = ({ page, info, dark }: NavProps) => {
  return (
    <div className="nav-container">
      <div className="middle">
        <Hamburger />
        <div className="info-container">{info}</div>
        <DarkMode dark={dark} />
      </div>
      <div className="blank-space" />
      <div className="page-number">{page}</div>
    </div>
  );
};

export default Nav;
