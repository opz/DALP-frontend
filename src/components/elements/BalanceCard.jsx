import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { Card } from "../styled";
import { WalletContext } from "../../providers/wallet";

const StyledH2 = styled.h2`
    font-weight: bold;
`;

const BalanceCard = ({ amount, supply }) => {

    const { dalpManager } = useContext(WalletContext);

    async function load() {
        try {
            const response = await dalpManager.methods.dalp().call();
            console.log(response);
        } catch(err) {
            console.error(err);
        }
    }

    useEffect(() => {
        if (dalpManager) {
            // console.log(dalpManager);
            // load();
        }
    }, [dalpManager]);

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