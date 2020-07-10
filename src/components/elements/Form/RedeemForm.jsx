import React, { useState, useEffect, useContext } from "react";
// import { Card } from "../../styled";
import { WalletContext } from "../../../providers/wallet";
import Web3 from "web3";

const RedeemForm = () => {
  const { account, dalpManager, loadBalance } = useContext(WalletContext);
  const [amount, setAmount] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [calculating, setCalulating] = useState(false); // eslint-disable-line no-unused-vars
  const [redeemAmount, setRedeemAmount] = useState(0); // eslint-disable-line no-unused-vars

  const calculateRedeemAmount = async (val) => {
    if (!val || !dalpManager || isNaN(val)) {
      return setRedeemAmount(0);
    }
    setCalulating(true);
    try {
      const response = await dalpManager.methods
        .getDALPValue(Web3.utils.toWei(val, "ether"))
        .call();
      setRedeemAmount(response);
      setCalulating(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    calculateRedeemAmount(amount);
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
      await dalpManager.methods.redeem(amountToSend).send({
        from: account
      });
      setSubmitting(false);
      setAmount("");
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
        Redeem ETH by selling DALP. We'll calculate how much you can
        expect to make.
      </p>

      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={amount}
          className="form-control form-control-lg"
          placeholder="DALP Amount"
          type="text"
          disabled={submitting}
        />
        {submitting ? (
          <button
            type="button"
            className="btn btn-primary btn-block mt-2"
            disabled
          >
            Redeeming...
          </button>
        ) : (
          <button
            type="submit"
            className="btn btn-primary btn-block btn-lg mt-2"
          >
            Redeem {amount} DALP
          </button>
        )}
      </form>
    </React.Fragment>

    // {/* </div> </Card> */}
  );
};

RedeemForm.defaultProps = {
  amount: 0,
};

export default RedeemForm;
