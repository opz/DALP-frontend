import React, { useState, useEffect } from "react";
import DALPManager from "dalp-core/artifacts/DALPManager.json";
import DALP from "dalp-core/artifacts/DALP.json";
import { DALPManagerAddress, DALPAddress } from "dalp-core/artifacts/kovan.json";

const WalletContext = React.createContext();
const WalletConsumer = WalletContext.Consumer;

const WalletProvider = props => {
  const [wallet, setWallet] = useState(null);
  const [account, setAccount] = useState('');
  const [dalpManager, setDalpManager] = useState(null);
  const [dalpToken, setDalpToken] = useState(null);

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
      loadAccount();
      setDalpManager(new wallet.eth.Contract(DALPManager.abi, DALPManagerAddress));
      setDalpToken(new wallet.eth.Contract(DALP.abi, DALPAddress));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [wallet]);

  return (
    <WalletContext.Provider value={{ wallet, setWallet, dalpManager, dalpToken, account }}>
      {props.children}
    </WalletContext.Provider>
  );
};

export { WalletContext, WalletConsumer, WalletProvider };
