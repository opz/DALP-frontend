import React, { useState, useEffect, useContext } from "react";
import { Card } from "../styled";
import { WalletContext } from "../../providers/wallet";
import Web3 from "web3";
import BeatLoader from "react-spinners/BeatLoader";

const BuyForm = () => {

  const { account, dalpManager } = useContext(WalletContext);
  const [amount, setAmount] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [calculating, setCalulating] = useState(false);
  const [mintAmount, setMintAmount] = useState(0);

  const calculateMintAmount = async val => {
    if (!val || !dalpManager) {
      setMintAmount(0);
      return;
    }
    setCalulating(true);
    // try {
    //   const response = await dalpManager.methods.calculateMintAmount(Web3.utils.toWei(val, "ether")).call();
    //   // const response = await dalpManager.methods.calculateMintAmount(val).call();
    //   console.log("Calculate Mint Amount:", response);
    //   // setMintAmount(Web3.utils.fromWei(response, "ether"));
    //   setMintAmount(response);
    // } catch(err) {
    //   console.error(err);
    // }
  };

  useEffect(() => {
    //console.log("amount changed", amount);
    calculateMintAmount(amount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount]);

  const onChange = async ev => {
    setAmount(ev.target.value);
  };

  const onSubmit = async ev => {
    ev.preventDefault();
    setSubmitting(true);

    const amountToSend = Web3.utils.toWei(amount, "ether");
    console.log("Wei", amountToSend);
    console.log("From", account);

    try {
      const response = await dalpManager.methods.mint().send({
        value: amountToSend,
        from: account
      });
      console.log(response);
    } catch(err) {
      console.error(err);

      setSubmitting(false);
    }
  };

  return (
    <Card title="Buy DALP">
      <div className="card-body text-center">
        <form onSubmit={onSubmit}>
          <input
            onChange={onChange}
            value={amount}
            className="form-control form-control-lg"
            placeholder="0"
            type="text"
          />
          {submitting ? (
            <button
              type="button"
              className="btn btn-primary btn-block mt-2"
              disabled
            >
              Investing...
            </button>
          ) : (
            <button type="submit" className="btn btn-primary btn-block mt-2">
              Invest {amount} ETH
            </button>
          )}
        </form>
        {
          calculating && (<BeatLoader />)
        }
        {
            amount && (
                <ul className="list-group mt-2">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        
                    <span className="">
                        </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                       
                        <span className="">
                        </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        DALP Tokens
                        <span className="">
                        {mintAmount}
                        </span>
                    </li>
                </ul>
            )
        }
      </div>
    </Card>
  );
};

BuyForm.defaultProps = {
  amount: 0
};

export default BuyForm;
