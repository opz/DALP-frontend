# DALP-frontend

## To run locally
`yarn install`

`yarn start`

### Project Structure

### Web3

All web3 related items are available in the `wallet.js` provider using the React Context API.

#### Importing to Components

You can import the following variables from the wallet context:
- *dalpManager* - DALPManager contract
- *dalpToken* - DALP contract
- *wallet* - web3 provider
- *account* - current metamask account

```
import React, { useContext } from "react";
import { WalletContext } from "../../providers/wallet";

const { dalpManager, dalpToken, account } = useContext(WalletContext);
```

#### Calling Contract Methods

Contract methods can then be called
````
await dalpToken.methods.balanceOf(account).call();
````