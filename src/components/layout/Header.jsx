import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import iconWhite from "../../assets/images/icon-white.png";
import iconBlue from "../../assets/images/icon-blue.png";

import Web3Modal from "../Web3Modal";

const Header = ({ match, location }) => {
  const isDashboard = location.pathname === "/dashboard";

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        isDashboard ? `navbar-blue` : `navbar-light`
      }`}
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <img alt="" src={isDashboard ? iconWhite : iconBlue} />
          DALP
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Docs
              </a>
            </li>
            <li className="nav-item">
              <NavLink to="/dashboard" className="nav-link">
                Dashboard
              </NavLink>
            </li>
          </ul>
          <Web3Modal />
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Header);
