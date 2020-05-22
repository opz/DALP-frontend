import React, { useContext } from "react";
import BalanceCard from "../elements/BalanceCard";
import BuyForm from "../elements/BuyForm";
import { WalletContext } from "../../providers/wallet";


const Dashboard = () => {

  const { account } = useContext(WalletContext);    

return (
  <div id="page">
    <div className="container">
      <div className="row">
        {
          account ? (
            <div className="col-md-4">
          <BalanceCard />
          <BuyForm />
        </div>
          ) : (<h1>Loading...</h1>)
        }
        <div className="col-md-8">
          <h1>Historical Performance?</h1>
          <h1>More Info</h1>
          <h1>Current Exchange Breakdown</h1>
        </div>
      </div>
    </div>
  </div>
);

}




export default Dashboard;
