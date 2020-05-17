// from https://github.com/Web3Modal/web3modal/tree/master/example/src
// from https://github.com/Web3Modal/web3modal-vanilla-js-example/blob/master/example.js

import React from "react";
import Web3 from "web3";
import Web3Modal from "web3modal";

import WalletConnectProvider from "@walletconnect/web3-provider";

// Web3modal instance
let web3Modal;

// Chosen wallet provider given by the dialog window
let provider;

// Address of the selected account
let selectedAccount;

function init() {
  console.log("Initializing example");
  console.log("WalletConnectProvider is", WalletConnectProvider);

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: "INFURA_ID", // required
      },
    },
    //   provider.wc
  };

  const web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions, // required
  });
}

const fetchAccountData = (props) => {
  // Get a Web3 instance for the wallet
  const web3 = new Web3(provider);

  console.log("Web3 instance is", web3);

  const Web3Providers = ({}) => {
    async function connect() {
      try {
        const provider = await web3Modal.connect();
        const web3 = new Web3(provider);
      } catch (err) {
        console.error(err);
      }
    }

    return (
      <form className="form-inline my-2 my-lg-0">
        <button
          className="btn btn-primary my-2 my-sm-0"
          type="button"
          onClick={connect}
        >
          Connect
        </button>
      </form>
    );
  };
};

export default fetchAccountData;
