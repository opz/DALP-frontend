import React, { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { MetaMaskButton } from "rimble-ui";
import cn from "classnames";

import * as align from "../../Constants/alignments";
import { useEagerConnect, useInactiveListener } from "../../hooks";
import { injected } from "../../connectors";
import { Spinner } from "../elements/Spinner";

const connectorsByName = { "Injected": injected }

export default function Web3Modal() {
  const context = useWeb3React();
  const { connector, activate, deactivate, active, error } = context;

  const [activatingConnector, setActivatingConnector] = React.useState()

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);

  const name = "Injected";
  const currentConnector = connectorsByName[name];
  const activating = currentConnector === activatingConnector;
  const connected = currentConnector === connector;
  const disabled = !triedEager || !!activatingConnector || connected || !!error;

  const connect = () => {
    setActivatingConnector(currentConnector);
    activate(connectorsByName[name]);
  };

  if (active || error) {
    return (
      <div className={cn(align.full, align.topRight, align.noMarginPad)}>
        <MetaMaskButton.Outline onClick={() => deactivate()} size="medium">
          Disconnect&nbsp;
          {activating && <Spinner color={'black'} style={{ height: '25%', marginLeft: '-1rem' }} />}
          {connected && (
            <span role="img" aria-label="check">
              ✅
            </span>
          )}
        </MetaMaskButton.Outline>
      </div>
    );
  } else {
    return (
      <div className={cn(align.full, align.topRight, align.noMarginPad)}>
        <MetaMaskButton.Outline onClick={() => connect()} disabled={disabled} size="medium">
          Connect to DALP&nbsp;
          {activating && <Spinner color={'black'} style={{ height: '25%', marginLeft: '-1rem' }} />}
          {connected && (
            <span role="img" aria-label="check">
              ✅
            </span>
          )}
        </MetaMaskButton.Outline>
      </div>
    );
  }
}
