import React from "react";
import Web3 from "web3";
import Web3Modal from "web3modal";
import { NavLink, withRouter } from "react-router-dom";
import iconWhite from "../../assets/images/icon-white.png";
import iconBlue from "../../assets/images/icon-blue.png";

const providerOptions = {};

const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions // required
});

// import Web3Modal fro../Web3ModalOLD/index.tsx";


const Header = ({ match, location }) => {
  async function connect() {
    try {
      const provider = await web3Modal.connect();
      const web3 = new Web3(provider);
    } catch (err) {
      console.error(err);
    }
  }

  console.log(location.pathname);

  const isDashboard = location.pathname === "/dashboard";

  return (
    <nav className={`navbar navbar-expand-lg ${ isDashboard ? `navbar-blue` : `navbar-light`}`}>
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={isDashboard ? iconWhite : iconBlue } />
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
          <form className="form-inline my-2 my-lg-0">
            <button
              className="btn btn-primary my-2 my-sm-0"
              type="button"
              onClick={connect}
            >
              Connect
            </button>
          </form>
          {/* <Web3Modal /> */}
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Header);
