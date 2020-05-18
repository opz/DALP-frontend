import React, { useState, useEffect } from "react";
import { Card } from "../styled";

const BuyForm = () => {
  const FAKE_INT = 1.3;
  const [amount, setAmount] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    console.log("amount changed", amount);
  }, [amount]);

  const onChange = ev => {
    console.log(ev.target.value);
    setAmount(ev.target.value);
  };

  const onSubmit = ev => {
    ev.preventDefault();
    setSubmitting(true);
    console.log("submit", amount);
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
            type="number"
            min="0"
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
                        {amount * FAKE_INT}
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
