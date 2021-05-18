import React from "react";
import logo from "../logo.png";

const Header = () => {
  return (
    <nav className="container-fluid navbar navbar-light justify-content-center mt-5">
      <div className="navbar-brand" style={{ fontSize: "5vh" }}>
        <img
          src={logo}
          width="50px"
          height="50px"
          className="d-inline-block align-top"
          alt="logo"
          style={{ marginRight: "5px" }}
        />
        URL Shortener
      </div>
    </nav>
  );
};

export default Header;
