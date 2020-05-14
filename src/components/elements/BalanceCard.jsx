import React from "react";
import { Card } from "../styled";

const BalanceCard = ({ amount }) => {
    return (
        <Card title="Your Balance">
            <div className="card-body text-center">
                <h2>{amount.toFixed(2)}</h2>
                <h5>DALP Balance</h5>
            </div>
        </Card>
    )
};

BalanceCard.defaultProps = {
    amount: 0
};

export default BalanceCard;