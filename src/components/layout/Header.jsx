import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import iconWhite from "../../assets/images/icon-white.png";
import iconBlue from "../../assets/images/icon-blue.png";
import ConnectButton from "../elements/ConnectButton";
import DemoSwitch from "../elements/DemoSwitch";

const Header = ({ location, history }) => {
  const isDashboard = location.pathname === "/dashboard";

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        isDashboard ? `navbar-blue` : `navbar-light`
      }`}
    >
      <div className="container">
        <Link to="/" className="navbar-brand" href="#">
          <img alt="DALP Logo" src={isDashboard ? iconWhite : iconBlue} />
          DALP
        </Link>
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
          {isDashboard ? (
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink to="/dashboard" className="nav-link">
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/transactions" className="nav-link">
                  Transactions
                </NavLink>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink exact to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <AnchorLink href="#pools" className="nav-link">
                  Pools
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink href="#features" className="nav-link">
                  Features
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink href="#team" className="nav-link">
                  Team
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink href="#contact" className="nav-link">
                  Contact
                </AnchorLink>
              </li>
            </ul>
          )}
          {isDashboard && <DemoSwitch />}
          <ConnectButton />
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Header);
