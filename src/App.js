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

// 2020.05.17 changes with React Router, Toastify minus routes

// import React from "react";
// import { Provider } from "react-redux";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// // import Views from "Views";
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer } from "react-toastify";

// // import { library } from "@fortawesome/fontawesome-svg-core";
// // import { fas } from "@fortawesome/free-solid-svg-icons";
// // import { fab } from "@fortawesome/free-brands-svg-icons";
// import configureStore from "Store/configureStore";

// import Header from "./components/layout/Header";

// // library.add(fas, fab);

// let store = configureStore();

// function App() {
//   return (
//     <Provider store={store}>
//       <ToastContainer />
//       <Router>
//         <Switch>
//           {/* <Route path="/" component={Views} /> */}
//           <Header />
//           <div className="App">
//             <div className="container">
//               <h1>Welcome to DALP.</h1>
//             </div>
//           </div>
//         </Switch>
//       </Router>
//     </Provider>