import React from "react";
import "./Header.css";
import logo from "../../images/east_task-logo.png";
import { useHistory } from "react-router-dom";
import { EaseTaskLogo } from "../../images/EastTaskLogo";

export const Header = () => {
  const history = useHistory();
  return (
    <div className="header">
      <h2 className="header-title">EaseTask.</h2>
      <div className="header-buttons">
        <h4>
          <nav
            onClick={() => {
              history.push("/vendor-register");
            }}
          >
            Register as a Vendor
          </nav>
        </h4>
        <VerticalBar />
        <h4>
          <nav
            onClick={() => {
              history.push("/customer-register");
            }}
          >
            Sign up
          </nav>
        </h4>
        <h4>
          <nav
            onClick={() => {
              history.push("/sign-in");
            }}
          >
            Sign In
          </nav>
        </h4>
      </div>
    </div>
  );
};

const VerticalBar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      |
    </div>
  );
};
