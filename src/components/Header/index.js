import "./Header.css";
import { Link } from "react-router-dom";
import React from "react";
import images from "../../assets/logo";

function Header() {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img src={images.logo} className="header-logo" />
        </Link>
        <Link to="/movie/popular" style={{ textDecoration: "none" }}>
          <span>Popular</span>
        </Link>
        <Link to="/movie/top_rated" style={{ textDecoration: "none" }}>
          <span>Top Rate</span>
        </Link>
        <Link to="/movie/upcoming" style={{ textDecoration: "none" }}>
          <span>Upcoming</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
