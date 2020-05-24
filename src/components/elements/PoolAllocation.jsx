import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Card } from "../styled";
import { WalletContext } from "../../providers/wallet";
import ERC20 from "dalp-core/artifacts/ERC20.json";
import { zeroAddress } from "../../Constants/ethereum";

const mkrAbi = [ { "inputs": [], "name": "name", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "view", "type": "function" }, ];

const StyledRow = styled.div`
  border-bottom: 1px solid rgba(0,0,0,.1);
  margin-bottom: 20px;

  padding-bottom: 10px;
  :last-child {
    border-bottom: none;
    margin-bottom: 0px;
  }
`;

const PoolAllocation = () => {

  const { wallet, dalpManager } = useContext(WalletContext);

  const [token0, setToken0] = useState(zeroAddress);
  const [token1, setToken1] = useState(zeroAddress);

  const defaultTokenData = {
    "balance": 0,
    "symbol": "ETH",
    "name": "Ether"
  };

  const [token0Data, setToken0Data] = useState(defaultTokenData);
  const [token1Data, setToken1Data] = useState(defaultTokenData);

  useEffect(() => {
    if (dalpManager) {
      dalpManager.methods.getActiveUniswapV2Tokens().call().then(tokens => {
        setToken0(tokens[0]);
        setToken1(tokens[1]);
      });
    }
  }, [dalpManager]);

  useEffect(() => {
    if (token0 !== zeroAddress && token1 !== zeroAddress) {
      // MKR's Kovan deployment has a wack ABI
      const mkrAddress = "0xAaF64BFCC32d0F15873a02163e7E500671a4ffcD";
      const token0Abi = token0 === mkrAddress ? mkrAbi : ERC20.abi;
      const token1Abi = token1 === mkrAddress ? mkrAbi : ERC20.abi;

      dalpManager.methods.getDalpProportionalReserves().call()
        .then(reserves => {
          const token0Contract = new wallet.eth.Contract(token0Abi, token0);
          Promise.all([
            token0Contract.methods.symbol().call(),
            token0Contract.methods.name().call()
          ]).then(([symbol0, name0]) => {
            setToken0Data({
              "balance": reserves[0],
              // Handle case where symbol is a bytes32, such as the MKR token
              "symbol": wallet.utils.isHex(symbol0) ? wallet.utils.hexToUtf8(symbol0) : symbol0,
              "name": name0
            });
          });

          const token1Contract = new wallet.eth.Contract(token1Abi, token1);
          Promise.all([
            token1Contract.methods.symbol().call(),
            token1Contract.methods.name().call()
          ]).then(([symbol1, name1]) => {
            setToken1Data({
              "balance": reserves[1],
              // Handle case where symbol is a bytes32, such as the MKR token
              "symbol": wallet.utils.isHex(symbol1) ? wallet.utils.hexToUtf8(symbol1) : symbol1,
              "name": name1
            });
          });
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token0, token1]);

  return (
    <React.Fragment>
      <h5 className="card-title">Pool Allocation</h5>
      <Card>
        <div className="card-body">
          {
            token0 === zeroAddress && token1 === zeroAddress
              ? (
                <StyledRow className="row">
                  <div className="col-md-12 d-flex align-items-center justify-content-between">
                    <h2>DALP is not invested in a pool</h2>
                  </div>
                </StyledRow>
              )
              : (
                  <>
                    <StyledRow key="token0" className="row">
                      <div className="col-md-12 d-flex align-items-center justify-content-between">
                        <h2>{token0Data.symbol}</h2>
                        <h3>{wallet.utils.fromWei(token0Data.balance.toString())}</h3>
                      </div>
                    </StyledRow>
                    <StyledRow key="token1" className="row">
                      <div className="col-md-12 d-flex align-items-center justify-content-between">
                        <h2>{token1Data.symbol}</h2>
                        <h3>{wallet.utils.fromWei(token1Data.balance.toString())}</h3>
                      </div>
                    </StyledRow>
                  </>
              )
          }
        </div>
      </Card>
    </React.Fragment>
  )

};

export default PoolAllocation;
