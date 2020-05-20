import React, { useEffect, useState } from "react";
import { useWeb3Context } from "web3-react";
import { MetaMaskButton, EthAddress } from "rimble-ui";
import Web3 from "web3";
import Web3Modal from "web3modal";
import * as align from "../../Constants/alignments";
import cn from "classnames";

import Loader from "../Loader";

const providerOptions = {};

const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  cacheProvider: false, // optional
  providerOptions, // required
});

export default function Web3ModalNew() {
  //  from web3
  async function connect() {
    console.log("connect");
    try {
      const provider = await web3Modal.connect();
      const web3 = new Web3(provider);
    } catch (err) {
      console.error(err);
    }
  }

  const context = useWeb3Context();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!context.active) {
      context.setFirstValidConnector(["MetaMask", "Infura"]);
    }
  }, [context]);

  useEffect(() => {
    if (context.active) {
      setLoading(false);
    }
  }, [context.active]);

  if (!context.active && !context.error) {
    return (
      <div className={cn(align.full, align.topRight, align.noMarginPad)}>
        <Loader loading={loading}>
          <MetaMaskButton.Outline onClick={connect} size="medium">
            Connect to DALP
          </MetaMaskButton.Outline>
        </Loader>
      </div>
    );
  } else if (context.error) {
    return (
      <div className={cn(align.full, align.topRight, align.noMarginPad)}>
        <MetaMaskButton.Outline onClick={connect} disabled size="medium">
          Connect to DALP
        </MetaMaskButton.Outline>
        <p>Error</p>
      </div>
    );
    // NETWORK ID CHECK
  } else if (context.networkId !== 4) {
    return (
      <div className={cn(align.full, align.topRight, align.noMarginPad)}>
        <MetaMaskButton.Outline onClick={connect} size="medium">
          Connect to DALP
        </MetaMaskButton.Outline>
        <p>Please switch MetaMask networks to Rinkeby</p>
      </div>
    );
  } else {
    return (
      <div className={cn(align.full, align.topRight, align.noMarginPad)}>
        <EthAddress textLabels />
        <p>We in boys! Rinkeby Test Network</p>
      </div>
    );
  }
}
