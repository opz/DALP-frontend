import React, { useState, useEffect } from "react";
import DALPManager from "dalp-core/artifacts/DALPManager.json";
import { DALPManagerAddress } from "dalp-core/artifacts/kovan.json";

const WalletContext = React.createContext();
const WalletConsumer = WalletContext.Consumer;

const WalletProvider = props => {
  const [wallet, setWallet] = useState(null);
  const [account, setAccount] = useState('');
  const [dalpManager, setDalpManager] = useState(null);

  async function loadAccount() {
    try {
      const accounts = await wallet.eth.getAccounts();
      setAccount(accounts[0]);
    } catch(err) {
      console.error(err);
    }
  }

  useEffect(() => {
    if (wallet) {
      setDalpManager(new wallet.eth.Contract(DALPManager.abi, DALPManagerAddress));
      loadAccount();
    }
}, [wallet]);

  return (
    <WalletContext.Provider value={{ wallet, setWallet, dalpManager, account }}>
      {props.children}
    </WalletContext.Provider>
  );
};

export { WalletContext, WalletConsumer, WalletProvider };
