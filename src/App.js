import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from './components/layout/Header';
import { Home, Dashboard } from "./components/pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
