import React, { useState, useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import Web3 from "web3";
import Web3Modal from "web3modal";
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

const ConnectButton = ({ history }) => {

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
          history.push('/dashboard');
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

    return account ? (
        <React.Fragment>
              {/* <button onClick={disconnect}>Disconnect</button> */}
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
    )

};

export default withRouter(ConnectButton);