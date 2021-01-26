import React from "react";
import "./Header.css";
import logo from "../../images/east_task-logo.png";
import { useHistory } from "react-router-dom";
import { EaseTaskLogo } from "../../images/EastTaskLogo";

export const Header = () => {
  const history = useHistory();
  return (
    <div className="header">
      <h2 className="header-title">
        EaseTask.
        <div
          style={{
            backgroundColor: "white",
            marginLeft: "20px",
            // height: "78px",
            width: "100px",
          }}
        >
          {/* <img width={100} height={90} src={logo} /> */}
          {/* <EaseTaskLogo /> */}
        </div>
      </h2>
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
        <h4>
          <nav
            onClick={() => {
              history.push("/customer-register");
            }}
          >
            Sign up
          </nav>
        </h4>
      </div>
    </div>
  );
};
