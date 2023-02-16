import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import "./nav.module.css";

const Nav = ({ onSearch }) => {
  return (
    <div
      style={{ textAlign: "right" }}
      className="navbar navbar-brand navbar-start"
    >
      <Link to="about" className="navbar-item">
        About
      </Link>
      <Link to="home" className="navbar-item">
        Home
      </Link>
      <Link to="/" className="navbar-item">
        Logout
      </Link>
      <SearchBar onSearch={onSearch} />
      <Link to="/favorites" className="navbar-item">
        favorites
      </Link>
    </div>
  );
};

export default Nav;
