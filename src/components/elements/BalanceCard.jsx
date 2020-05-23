import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Card } from "../styled";
import { WalletContext } from "../../providers/wallet";
import { DataContext } from "../../providers/data";
import Web3 from "web3";
import { Doughnut } from "react-chartjs-2";

const StyledH2 = styled.h2`
  font-weight: bold;
`;

const BalanceCard = () => {
  const { demo, data } = useContext(DataContext);
  const [amount, setAmount] = useState(0);
  const [supply, setSupply] = useState(0);

  const { dalpManager, dalpToken, account } = useContext(WalletContext);

  async function load() {
    try {
      const balance = await dalpToken.methods.balanceOf(account).call();
      setAmount(parseFloat(Web3.utils.fromWei(balance)));
      const supply = await dalpToken.methods.totalSupply().call();
      setSupply(parseFloat(Web3.utils.fromWei(supply)));
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    if (account) {
      load();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dalpManager]);

  const balanceInt = demo ? data.balance : amount.toFixed(2);
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
          <StyledH2 data-testid="DALP Balance">
            {demo ? data.balance : amount.toFixed(2)}
          </StyledH2>
          <h5>DALP Balance</h5>
          <hr />
          <h3 data-testid="Total Supply">
            {demo ? data.supply : supply.toFixed(2)}
          </h3>
          <h5>Total Supply</h5>

          {balanceInt !== "0.00" && (
            <Doughnut
              data={pieData}
              options={{
                legend: {
                  display: false
                }
              }}
            />
          )}
        </div>
      </Card>
    </React.Fragment>
  );
};

export default BalanceCard;
