import React, { useState, useEffect } from "react";
import DALPManager from "dalp-core/artifacts/DALPManager.json";
import DALP from "dalp-core/artifacts/DALP.json";
import Web3 from "web3";
import { DALPManagerAddress, DALPAddress } from "dalp-core/artifacts/kovan.json";

const WalletContext = React.createContext();
const WalletConsumer = WalletContext.Consumer;

const WalletProvider = props => {
  const [wallet, setWallet] = useState(null);
  const [account, setAccount] = useState("");
  const [networkId, setNetworkId] = useState(null);
  const [dalpManager, setDalpManager] = useState(null);
  const [dalpToken, setDalpToken] = useState(null);
  const [balance, setBalance] = useState(0);
  const [supply, setSupply] = useState(0);

  async function loadAccount() {
    try {
      const accounts = await wallet.eth.getAccounts();
      setAccount(accounts[0]);
    } catch(err) {
      console.error(err);
    }
  }

  async function loadNetworkId() {
    try {
      const networkId = await wallet.eth.net.getId();
      setNetworkId(networkId);
    } catch(err) {
      console.error(err);
    }
  }

  async function loadBalance() {

    try {
      const balanceResponse = await dalpToken.methods.balanceOf(account).call();
      setBalance(parseFloat(Web3.utils.fromWei(balanceResponse)));
      const supply = await dalpToken.methods.totalSupply().call();
      setSupply(parseFloat(Web3.utils.fromWei(supply)));
    } catch (err) {
      console.error(err);
    }

  }

  useEffect(() => {
    if (dalpManager) {
      dalpManager.getPastEvents('LiquidityEvent', {
        fromBlock: "earliest",
        toBlock: "latest"
      }).then(results => {
      });
    }
  }, [dalpManager]);

  useEffect(() => {
    if (account) {
      loadBalance();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);

  useEffect(() => {
    if (wallet) {
      loadAccount();
      loadNetworkId();
      setDalpManager(new wallet.eth.Contract(DALPManager.abi, DALPManagerAddress));
      setDalpToken(new wallet.eth.Contract(DALP.abi, DALPAddress));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [wallet]);

  return (
    <WalletContext.Provider value={{ wallet, setWallet, networkId, dalpManager, dalpToken, account, balance, supply, loadBalance }}>
      {props.children}
    </WalletContext.Provider>
  );
};

export { WalletContext, WalletConsumer, WalletProvider };
