import React, { useContext } from "react";
import "../../scss/style.scss";
import BalanceCard from "../elements/BalanceCard";
import ActionForms from "../elements/Form";
import { WalletContext } from "../../providers/wallet";

const Transactions = () => {
  const { networkId, account } = useContext(WalletContext);
  if (networkId !== 42) {
    return (
      <div id="page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xs-12">
              <p className="h6 text-center">
                APY.Finance is only available on the Kovan network.
              </p>
              <p className="h6 text-center">
                Please switch MetaMask to the Kovan network.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div id="page">
        <div className="container">
          <div className="row">
            {account ? (
              <div className="col-md-4">
                <BalanceCard />
                <ActionForms />
              </div>
            ) : (
              <h1>Loading...</h1>
            )}
            <div className="col-md-8">
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Transactions;
