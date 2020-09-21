import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import iconWhite from "../../assets/images/logo-white.svg";
import iconBlue from "../../assets/images/logo.svg";
import ConnectButton from "../elements/ConnectButton";
import DemoSwitch from "../elements/DemoSwitch";

const Header = ({ location, history }) => {
  const isDashboard = ["/dashboard", "/transactions"].includes(location.pathname);

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        isDashboard ? `navbar-blue` : `navbar-light`
      }`}
    >
      { !isDashboard && (
        <div className="warning">
          <span>The APY token has not been launched. Do not trust any claims from unofficial sources. Follow us on <a href="https://t.me/apyfinancechat">Telegram</a> for updates.</span>
        </div>
      )}
      <div className="container">
        <Link to="/" className="navbar-brand" href="#">
          <img alt="APY.Finance" src={isDashboard ? iconWhite : iconBlue} />
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
