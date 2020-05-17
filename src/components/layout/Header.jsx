import React from "react";
import Web3 from "web3";
import Web3Modal from "web3modal";

const providerOptions = {};

const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions, // required
});

// import Web3Modal fro../Web3ModalOLD/index.tsxtsx";

const Header = ({}) => {
  async function connect() {
    try {
      const provider = await web3Modal.connect();
      const web3 = new Web3(provider);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          DALP
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <button
              className="btn btn-primary my-2 my-sm-0"
              type="button"
              onClick={connect}
            >
              Connect
            </button>
          </form>
          {/* <Web3Modal /> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
