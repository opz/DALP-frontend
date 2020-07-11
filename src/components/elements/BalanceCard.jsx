import React, { useContext } from "react";
import styled from "styled-components";
import { Card } from "../styled";
import { WalletContext } from "../../providers/wallet";
import { DataContext } from "../../providers/data";
import { Doughnut } from "react-chartjs-2";

const StyledH2 = styled.h2`
  font-weight: bold;
`;

const BalanceCard = () => {
  const { demo, data } = useContext(DataContext);

  const { balance, supply } = useContext(WalletContext);

  const balanceInt = demo ? data.balance : balance.toFixed(2);
  const supplyInt = demo ? data.supply : supply.toFixed(2);

  const pieData = {
    labels: ["Total Supply", "Your Balance"],
    datasets: [
      {
        data: [supplyInt - balanceInt, balanceInt],
        backgroundColor: ["rgba(0, 74, 215, .8)", "rgba(0, 74, 215, 1)"]
      }
    ]
  };

  return (
    <React.Fragment>
      <h5 className="card-title">Your Balance</h5>
      <Card>
        <div className="card-body text-center">
          <StyledH2 data-testid="APT Balance">
            {balanceInt}
          </StyledH2>
          <h5>APT Balance</h5>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <h3 data-testid="Total Supply">
              {supplyInt}
            </h3>
            <h5>Total Supply</h5>
            </div>
            <div className="col-md-6">
            <Doughnut
              data={pieData}
              options={{
                legend: {
                  display: false
                }
              }}
            />
            </div>
          </div>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default BalanceCard;
