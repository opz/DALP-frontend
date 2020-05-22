import React from "react";
import BalanceCard from "../elements/BalanceCard";
import BuyForm from "../elements/BuyForm";

const Dashboard = () => (
  <div id="page">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <BalanceCard />
          <BuyForm />
        </div>
        <div className="col-md-8">
          <h1>Historical Performance?</h1>
          <h1>More Info</h1>
          <h1>Current Exchange Breakdown</h1>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;