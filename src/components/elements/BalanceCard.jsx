import React from "react";
import styled from "styled-components";
import { Card } from "../styled";

const StyledH2 = styled.h2`
    font-weight: bold;
`;

const BalanceCard = ({ amount, supply }) => {
    return (
        <Card title="Your Balance">
            <div className="card-body text-center">
                <StyledH2 data-testid="DALP Balance">{amount.toFixed(2)}</StyledH2>
                <h5>DALP Balance</h5>
                <hr />
                <h3 data-testid="Total Supply">{supply.toFixed(2)}</h3>
                <h5>Total Supply</h5>
            </div>
        </Card>
    )
};

BalanceCard.defaultProps = {
    amount: 0,
    supply: 0
};

export default BalanceCard;