import React, { useContext } from "react";
import BalanceCard from "../elements/BalanceCard";
import ActionForms from "../elements/Form";
import { WalletContext } from "../../providers/wallet";
import PoolAllocation from "../elements/PoolAllocation";
import PerformanceLine from "../elements/PerformanceLine";

const Dashboard = () => {
  const { account } = useContext(WalletContext);

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
            <PerformanceLine />
            <hr />
            <PoolAllocation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
