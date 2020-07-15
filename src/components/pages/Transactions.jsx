import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment";
import "../../scss/style.scss";
import BalanceCard from "../elements/BalanceCard";
import ActionForms from "../elements/Form";
import { WalletContext } from "../../providers/wallet";
import * as icons from "../../assets/images/icons";

const TokenIcon = styled.img`
  width: ${props => props.size || "24px"};
  height: ${props => props.size || "24px"};
`;

const Address = styled.a`
  color: white !important;
  background: rgba(0,0,0,.25);
  padding: 10px 15px;
  border: 0px;
  font-size: 12px;
  border-radius: 50px;
  text-decoration: none;
`;

const Type = styled.span`
  cursor: default;
  height: 20px;
  display: inline-flex;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  flex-grow: 0;
  font-size: 0.75rem;
  min-width: 20px;
  align-items: center;
  flex-shrink: 0;
  font-weight: 500;
  white-space: nowrap;
  border-radius: 2px;
  justify-content: center;
`;

const MintType = styled(Type)`
  color: rgb(46, 174, 52);
  background-color: rgba(46, 174, 52, 0.08);
`;

const RedeemType = styled(Type)`
  color: rgb(255, 152, 0);
  background-color: rgba(249, 103, 45, 0.08);
`;

const Transactions = () => {
  const { wallet, dalpManager, networkId, account } = useContext(WalletContext);
  const { fromWei } = wallet.utils;
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    if (dalpManager) {
      dalpManager.getPastEvents('LiquidityEvent', {
        fromBlock: "earliest",
        toBlock: "latest"
      }).then(results => {
        Promise.all(results.map(result => {
          return wallet.eth.getTransaction(result["transactionHash"]);
        })).then(rawTransactions => {
          const transactions = rawTransactions.map((rawTx, i) => ({ ...rawTx, ...results[i] }));
          const transactionsByAddress = transactions.filter(tx => tx["from"] === account);
          setTransactions(transactionsByAddress);
        });
      });
    }
  }, [dalpManager]); // eslint-disable-line react-hooks/exhaustive-deps

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
              <h5 className="card-title">Recent APY.Finance Transactions</h5>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Time</th>
                    <th scope="col">Type</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Account</th>
                    <th scope="col">View</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    transactions.map(transaction => {
                      const address = transaction["from"];
                      return (
                        <tr key={transaction["transactionHash"]}>
                          <td>
                            {
                              moment(
                                parseInt(transaction["returnValues"]["timestamp"]) * 1000
                              ).format(
                                "M/D/YY h:mma"
                              )
                            }
                          </td>
                          <td>
                            {
                              transaction["value"] > 0
                                ? (<MintType>Mint</MintType>)
                                : (<RedeemType>Redeem</RedeemType>)
                            }
                          </td>
                          <td>
                            {
                              transaction["value"] > 0 && (
                                <><TokenIcon src={icons["ETHAlt"]} /> {Number(fromWei(transaction["value"])).toLocaleString()}</>
                              )
                            }
                          </td>
                          <td>
                            <Address>
                              {
                                address.slice(0, 6)
                                  + "..."
                                  + address.slice(address.length - 4, address.length)
                              }
                            </Address>
                          </td>
                          <td>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href={`https://kovan.etherscan.io/tx/${transaction["transactionHash"]}`}
                            >
                              &#8599;
                            </a>
                          </td>
                        </tr>
                      );
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Transactions;
