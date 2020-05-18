import React from "react";
import uniswap from "../../assets/images/uniswap.png";
import balancer from "../../assets/images/balancer.png";
import compound from "../../assets/images/compound.png";
import bancor from "../../assets/images/bancor.png";
import hero from "../../assets/images/hero-img.jpg";

const Home = ({}) => (
  <div id="page">
    <div className="container">
      <section id="hero" className="row">
        <div className="col-md-5 mt-4">
          <h1>Automatically jump into the best liquidity pools.</h1>
          <h4>
            DALP will automatically move your funds to liquidity pools that earn
            you the highest fees. Simply swap your ETH for DALP tokens, and
            start earning interest.
          </h4>
        </div>
        <div className="col-md-6 offset-md-1">
          <img src={hero} className="w-100" />
        </div>
      </section>
      <section className="row">
        <div className="col-md-12 text-center">
          <h3 className="section-header">
            We integrate with leading liquidity pools.
          </h3>
        </div>
        <div className="row d-flex align-items-center mt-4 text-center">
          <div className="col-md-3">
            <img src={uniswap} className="logo-img" />
          </div>
          <div className="col-md-3">
            <img src={compound} className="logo-img" />
          </div>
          <div className="col-md-3">
            <img src={bancor} className="logo-img" />
          </div>
          <div className="col-md-3">
            <img src={balancer} className="logo-img" />
          </div>
        </div>
      </section>
    </div>
    <section className="row bg-gray">
    <div className="container"></div>
    </section>
    <div className="container"></div>
    <section className="row bg-blue">
    <div className="container"></div>
    </section>
    
  </div>
);

export default Home;
