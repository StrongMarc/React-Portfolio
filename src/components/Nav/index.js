import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function Nav() {

  const location = useLocation();

  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-center">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
            About Me
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/portfolio"
            className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/github"
            className={location.pathname === "/github" ? "nav-link active" : "nav-link"}>
            GitHub
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/linkedin"
            className={location.pathname === "/Linkedin" ? "nav-link active" : "nav-link"}>
            LinkedIn
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/resume"
            className={location.pathname === "/resume" ? "nav-link active" : "nav-link"}>
            Resume
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
