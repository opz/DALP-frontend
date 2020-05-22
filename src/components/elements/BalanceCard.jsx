import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Card } from "../styled";
import { WalletContext } from "../../providers/wallet";
import Web3 from "web3";


const StyledH2 = styled.h2`
    font-weight: bold;
`;

const BalanceCard = () => {

    const [amount, setAmount] = useState(0);
    const [supply, setSupply] = useState(0);

    const { dalpManager, dalpToken, account } = useContext(WalletContext);

    async function load() {
        try {
            const response = await dalpToken.methods.balanceOf(account).call();
            console.log("balanceOf Wei:", response);
            console.log("balanceOf fromWei:", Web3.utils.fromWei(response, "ether"));
            setAmount(parseFloat(Web3.utils.fromWei(response, "ether")));
            setSupply(0);
        } catch(err) {
            console.error(err);
        }
    }

    useEffect(() => {
        if (account) {
            // console.log(dalpManager);
            load();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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

export default BalanceCard;