import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { WalletProvider } from "./providers/wallet";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import { DataProvider } from "./providers/data";
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

// eslint-disable-next-line no-restricted-globals
console.log(location.hash);
// eslint-disable-next-line no-restricted-globals
const path = (/#!(\/.*)$/.exec(location.hash) || [])[1];
if (path) {
  history.replace(path);
}

ReactDOM.render(
  <React.StrictMode>
    <WalletProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </WalletProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
