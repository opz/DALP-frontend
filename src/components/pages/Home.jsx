import React from "react";
import { Row, Col } from "reactstrap";
import {
  noMarginPad,
  topCenter,
  allCenter,
  full,
} from "../../Constants/alignments";
import cn from "classnames";
import Features from "../layout/Features";
import Contact from "../elements/Contact/Contact";

import uniswap from "../../assets/images/uniswap.png";
import balancer from "../../assets/images/balancer.png";
import compound from "../../assets/images/compound.png";
import bancor from "../../assets/images/bancor.png";
// import hero from "../../assets/images/hero-img.jpg";
import hero from "../../assets/images/hero-img-2.png";

const Home = () => (
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
          <img
            alt="Dope Hero Graphic"
            src={hero}
            className={cn("w-100", "hero-graphic")}
          />
        </div>
      </section>
      <section id="pools" className="row">
        <div className="col-md-12 text-center">
          <h3 className="section-header">
            We integrate with leading liquidity pools.
          </h3>
        </div>
        <div className="row d-flex align-items-center mt-4 text-center">
          <div className="col-md-3">
            <img src={uniswap} alt="Uniswap" className="logo-img" />
          </div>
          <div className="col-md-3">
            <img src={compound} alt="Compound" className="logo-img" />
          </div>
          <div className="col-md-3">
            <img src={bancor} alt="Bancor" className="logo-img" />
          </div>
          <div className="col-md-3">
            <img src={balancer} alt="Balancer" className="logo-img" />
          </div>
        </div>
      </section>
    </div>
    <section id="features" className="row bg-gray">
      <div className="container">
        <Row className={cn(full, noMarginPad, allCenter)}>
          <Col xs="12" lg="10" className={cn(topCenter, noMarginPad)}>
            <h2>DALP Features</h2>
            <h3 className="section-header">
              See how DALP works to help earn you the highest returns.
            </h3>

            <Features />
          </Col>
        </Row>
      </div>
    </section>
    <div className="container"></div>
    <section id="contact" className="row bg-blue">
      <div className="container">
        <Row className={cn(full, noMarginPad, allCenter)}>
          <Col xs="12" className={cn(topCenter, noMarginPad)}>
            <h2>Contact</h2>
            <h3 className="section-header">
              Have a question or want to learn more?
            </h3>
          </Col>

          <Contact />
        </Row>
      </div>
    </section>
  </div>
);

export default Home;
