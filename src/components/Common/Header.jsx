import React from "react";
import "./Header.css";
// import logo from "../../images/ease_task-logo.png";

export const Header = () => {
  return (
    <div className="header">
      <h2 className="header-title">Ease Task</h2>
      {/* <img src={logo} /> */}
      <h3 className="header-signup">Sign up</h3>
    </div>
  );
};
