import React, { useEffect, useState } from "react";
import styled from "styled-components";
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

const WalletButton = styled.button`
  color: white;
  background: rgba(0,0,0,.25);
  padding: 10px 15px;
  border: 0px;
  font-size: 12px;
  border-radius: 50px;
`;

const Header = ({ match, location }) => {
  const [account, setAccount] = useState(null);

  async function connect() {
    try {
      const provider = await web3Modal.connect();
      const web3 = new Web3(provider);
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    if (window.web3) {
      connect();
    }
  }, []);

  const isDashboard = location.pathname === "/dashboard";

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        isDashboard ? `navbar-blue` : `navbar-light`
      }`}
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={isDashboard ? iconWhite : iconBlue} />
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
          {account ? (
            <WalletButton>{account.slice(0, 6)+"..."+account.slice(account.length - 4, account.length)}</WalletButton>
          ) : (
            <button
              className="btn btn-primary my-2 my-sm-0"
              type="button"
              onClick={connect}
            >
              Connect
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Header);
