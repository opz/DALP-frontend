import React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col } from "reactstrap";
import {
  noMarginPad,
  topCenter,
  allCenter,
  leftCenter,
  full,
} from "../../Constants/alignments";
import cn from "classnames";
import Features from "../layout/Features";
import Team from "../layout/Team";
import Contact from "../elements/Contact/Contact";
import ConnectButton from "../elements/ConnectButton";

import compound from "../../assets/images/compound.png";
import balancer from "../../assets/images/balancer.png";
import piedao from "../../assets/images/piedao.png";
import github from "../../assets/images/github-logo.svg";
import hero from "../../assets/images/hero-img-2.png";

const Home = () => (
  <div id="page">
    <div className="container">
      <section id="hero" className="row">
        <div className="col-md-5 mt-4">
          <h1>Push the boundaries of DeFi</h1>
          <h4>
            <p>
              Invest like the DeFi whales by yield farming with complex high APY strategies.
            </p>
            <p>
              <b>APY.Finance</b> will automatically route your tokens into cutting edge yield farming strategies to earn the highest APY.
            </p>
          </h4>
          <div className={cn(full, allCenter, noMarginPad)}>
            <Row className={cn(full, "mt-2", noMarginPad, leftCenter)}>
              <Col xs="6" className={cn(allCenter, noMarginPad)}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/opz/DALP-core"
                >
                  <button className={cn("hero-github-btn")}>
                    <span className={cn("fa fa-github")}>
                      <img src={github} alt="" className={cn("github-logo")} />
                    </span>{" "}
                    See Contracts
                  </button>
                </a>
              </Col>
            </Row>
          </div>
        </div>
        <div className="col-md-6 offset-md-1">
          <img
            alt="Dope Hero Graphic"
            src={hero}
            className={cn("w-100", "hero-graphic")}
          />
        </div>
      </section>
      <section id="pools" className="row mb-0">
        <div className="col-md-12 text-center">
          <h3 className="section-header">
            APY.Finance uses leading DeFi protocols for its cutting edge strategies
          </h3>
        </div>
        <div className="row d-flex align-items-center mt-4 text-center">
          <div className="col-md-4">
            <img src={compound} alt="Compound" className="logo-img" />
          </div>
          <div className="col-md-4">
            <img src={balancer} alt="Balancer" className="logo-img" />
          </div>
          <div className="col-md-4">
            <img src={piedao} alt="PieDAO" className="logo-img" />
          </div>
        </div>
      </section>
    </div>
    <section id="features" className="row bg-gray">
      <Row className={cn(full, noMarginPad, allCenter)}>
        <Col
          xs="12"
          md="10"
          lg="8"
          className={cn(allCenter, "mb-5", noMarginPad)}
        >
          <div className={cn(full, allCenter, noMarginPad)}>
            <ConnectButton homePage={true} />
          </div>
        </Col>
      </Row>
      <div className="container">
        <Row className={cn(full, "mt-3", noMarginPad, allCenter)}>
          <Col xs="12" lg="10" className={cn(topCenter, noMarginPad)}>
            <h2>APY.Finance Features</h2>
            <h3 className="section-header">
              How you can get the most out of DeFi with APY.Finance
            </h3>

            <Features />
          </Col>
        </Row>
      </div>
    </section>
    <section id="team" className="row bg-gray">
      <div className="container">
        <Row className={cn(full, "mt-3", noMarginPad, allCenter)}>
          <Col xs="12" lg="10" className={cn(topCenter, noMarginPad)}>
            <h2>Team</h2>
            <h3 className="section-header">
              The contributors to the DALP project.
            </h3>
            <Team />
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

export default withRouter(Home);
