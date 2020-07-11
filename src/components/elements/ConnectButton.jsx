import React, { useState, useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import Web3 from "web3";
import Web3Modal from "web3modal";
import { WalletContext } from "../../providers/wallet";
import cn from "classnames";

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

const ConnectButton = ({ history, homePage }) => {

    const { account, setWallet } = useContext(WalletContext);
    const [provider, setProvider] = useState(null); // eslint-disable-line no-unused-vars

    async function connect() {
        try {
          const providerResponse = await web3Modal.connect();
          const web3 = new Web3(providerResponse);
          setProvider(providerResponse);
          setWallet(web3);
          history.push('/dashboard');
        } catch (err) {
          console.error(err);
        }
      }

    const className = homePage ? cn("get-started-btn") : "btn btn-primary my-2 my-sm-0";
    const buttonText = homePage ? "Get Started" : "Connect";

    return account ? (
      <React.Fragment>
        <WalletButton to="/dashboard">{account.slice(0, 6)+"..."+account.slice(account.length - 4, account.length)}</WalletButton>
      </React.Fragment>
    ) : (
      <button
        className={className}
        type="button"
        onClick={connect}
      >
        {buttonText}
      </button>
    )

};

export default withRouter(ConnectButton);
