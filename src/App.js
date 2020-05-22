import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from './components/layout/Header';
import { Home, Dashboard } from "./components/pages";
import { WalletContext } from "./providers/wallet";

function App() {

  const { wallet } = useContext(WalletContext);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            {
              wallet && (<Route exact path="/dashboard" component={Dashboard} />)
            }
            <Redirect from="/*" to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
