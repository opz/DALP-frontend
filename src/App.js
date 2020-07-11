import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from './components/layout/Header';
import { Home, Dashboard, Transactions } from "./components/pages";
import { WalletContext } from "./providers/wallet";

function App() {

  const { wallet } = useContext(WalletContext);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            { wallet && (<Route exact path="/dashboard" component={Dashboard} />) }
            { wallet && (<Route exact path="/transactions" component={Transactions} />) }
            <Redirect from="/*" to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
