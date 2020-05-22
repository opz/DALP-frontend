import React, { useContext } from "react";
import BalanceCard from "../elements/BalanceCard";
import BuyForm from "../elements/BuyForm";
import { WalletContext } from "../../providers/wallet";
import PoolAllocation from "../elements/PoolAllocation";



const Dashboard = () => {
  const { account } = useContext(WalletContext);

  

  return (
      <div id="page">
      <div className="container">
        <div className="row">
          {account ? (
            <div className="col-md-4">
              <BalanceCard />
              <BuyForm />
            </div>
          ) : (
            <h1>Loading...</h1>
          )}
          <div className="col-md-8">
            <h5 className="card-title">30-Day Performance</h5>
           <PoolAllocation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
