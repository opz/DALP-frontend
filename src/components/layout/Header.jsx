import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import Web3 from "web3";
import Web3Modal from "web3modal";
import { Link, NavLink, withRouter } from "react-router-dom";
import iconWhite from "../../assets/images/icon-white.png";
import iconBlue from "../../assets/images/icon-blue.png";
import { WalletContext } from "../../providers/wallet";

const providerOptions = {};

const web3Modal = new Web3Modal({
  network: "kovan", // optional
  cacheProvider: true, // optional
  providerOptions // required
});

const WalletButton = styled(Link)`
  color: white !important;
  background: rgba(0,0,0,.25);
  padding: 10px 15px;
  border: 0px;
  font-size: 12px;
  border-radius: 50px;
  text-decoration: none;
`;

const Header = ({ match, location }) => {

  const { wallet, setWallet } = useContext(WalletContext);
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);

  async function connect() {
    try {
      const providerResponse = await web3Modal.connect();
      const web3 = new Web3(providerResponse);
      const accounts = await web3.eth.getAccounts();
      setProvider(providerResponse);
      setWallet(web3);
      setAccount(accounts[0]);
    } catch (err) {
      console.error(err);
    }
  }

  async function disconnect() {
    try {

      console.log(wallet);
      console.log(wallet.currentProvider);
      console.log(provider);
      console.log(provider.close);
      console.log(provider.disconnect);
      console.log(wallet.currentProvider.close);
      console.log(wallet.currentProvider.disconnect);
      if (wallet && wallet.currentProvider && wallet.currentProvider.close) {
        console.log("HELLOW");
      }

      const response = await web3Modal.clearCachedProvider();
      console.log(response);

      // console.log(provider);
      // if (provider.close) {
      //   provider.disconnect();
      //   provider.close();
      // }
      // 
    } catch(err) {
      console.error(err);
    }
  }

  useEffect(() => {
    if (window.web3) {
      connect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          {
            isDashboard ? (
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
                  <a href="#pools" className="nav-link">
                    Pools
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#features" className="nav-link">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#performance" className="nav-link">
                    Performance
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#contact" className="nav-link">
                    Contact
                  </a>
                </li>
              </ul>
            )
          }
          {account ? (
            <React.Fragment>
              <button onClick={disconnect}>Disconnect</button>
              <WalletButton to="/dashboard">{account.slice(0, 6)+"..."+account.slice(account.length - 4, account.length)}</WalletButton>
            </React.Fragment>
            
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
