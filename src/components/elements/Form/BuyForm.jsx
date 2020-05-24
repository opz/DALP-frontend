import React, { useState, useEffect, useContext } from "react";
import { WalletContext } from "../../../providers/wallet";
import Web3 from "web3";
import BeatLoader from "react-spinners/BeatLoader";

const BuyForm = () => {
  const { account, dalpManager, loadBalance } = useContext(WalletContext);
  const [amount, setAmount] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [calculating, setCalulating] = useState(false);
  const [mintAmount, setMintAmount] = useState(0);
  const [success, setSuccess] = useState("");

  const calculateMintAmount = async (val) => {
    if (!val || !dalpManager || isNaN(val)) {
      return setMintAmount(0);
    }
    setCalulating(true);
    setSuccess("");
    try {
      const response = await dalpManager.methods
        .calculateMintAmount(Web3.utils.toWei(val, "ether"))
        .call();
      setMintAmount(response);
      setCalulating(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    calculateMintAmount(amount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount]);

  const onChange = async (ev) => {
    setAmount(ev.target.value);
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    setSubmitting(true);

    const amountToSend = Web3.utils.toWei(amount, "ether");

    try {
      await dalpManager.methods.mint().send({
        value: amountToSend,
        from: account,
      });
      setSubmitting(false);
      setAmount("");
      setSuccess("Your transaction was successful!");
      loadBalance();
    } catch (err) {
      console.error(err);

      setSubmitting(false);
    }
  };

  return (
    // <Card title="Buy DALP">
    //   <div className="card-body">
    <React.Fragment>
      <p>
        Mint DALP tokens by staking your ETH. We'll calculate how many DALP
        tokens you can expect to mint.
      </p>

      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={amount}
          className="form-control form-control-lg"
          placeholder="ETH Amount"
          type="text"
          disabled={submitting}
        />
        {submitting ? (
          <button
            type="button"
            className="btn btn-primary btn-block btn-lg mt-2"
            disabled
          >
            Investing...
          </button>
        ) : (
          <button
            type="submit"
            className="btn btn-primary btn-block btn-lg mt-2"
          >
            Invest {amount} ETH
          </button>
        )}
      </form>
      <ul className="list-group mt-2">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          DALP Tokens
          {
            calculating
              ? <BeatLoader size={12} />
              : <span>
                {
                  Number(
                    Web3.utils.fromWei(
                      mintAmount.toString()
                    )
                  ).toLocaleString()
                }
                </span>
          }
        </li>
      </ul>
      {success && (
          <div className="alert alert-success mt-2 text-center mb-0" role="alert">
            {success}
          </div>
        )}
    </React.Fragment>
  );
};

BuyForm.defaultProps = {
  amount: 0,
};

export default BuyForm;
